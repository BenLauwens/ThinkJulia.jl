using Base: link_pipe!, invokelatest, ip_matches_func
using REPL: ends_with_semicolon

const MODULES = Dict{Symbol, Module}()
const TERM_COLOR_REGEX = r"\e\[[0-9;]*m"

remove_term_colors(s) = replace(s, TERM_COLOR_REGEX => "")

function parseblock(code::String; keywords = true)
  offset = occursin("\n\r", code) ? 2 : 1
  endofstr = lastindex(code)
  results = []
  cursor = 1
  while cursor <= endofstr
    line = match(r"^(.+)$"m, SubString(code, cursor)).captures[1]
      keyword = Symbol(strip(line))
      (ex, ncursor) =
        if keywords && haskey(Docs.keywords, keyword)
          (QuoteNode(keyword), cursor + lastindex(line) + offset)
        else
          try
            Meta.parse(code, cursor)
          catch err
            println(code)
            error("Failed to parse expression.", err)
          end
        end
      push!(results, (ex, SubString(code, cursor, prevind(code, ncursor))))
      cursor = ncursor
  end
  results
end

function withoutput(f)
  default_stdout = stdout
  default_stderr = stderr
  pipe = Pipe()
  link_pipe!(pipe; reader_supports_async = true, writer_supports_async = true)
  redirect_stdout(pipe.in)
  redirect_stderr(pipe.in)
  output = UInt8[]
  result, success, backtrace = try
    f(), true, Vector{Ptr{Cvoid}}()
  catch err
    isa(err, InterruptException) && rethrow(err)
    err, false, catch_backtrace()
  finally
    println()
    redirect_stdout(default_stdout)
    redirect_stderr(default_stderr)
    append!(output, readavailable(pipe))
    close(pipe)
  end
  result, success, backtrace, chomp(String(output))
end

function disable_color(func)
  orig = setcolor!(false)
  try
    func()
  finally
    setcolor!(orig)
  end
end

function sanitise(buffer)
  out = IOBuffer()
  for line in eachline(seekstart(buffer))
    println(out, rstrip(line))
  end
  remove_term_colors(rstrip(String(take!(out)), '\n'))
end

function result_to_string(buf, value)
  dis = TextDisplay(IOContext(buf, :limit => true))
  value === nothing || disable_color() do
    Core.eval(Main, Expr(:call, display, dis, QuoteNode(value)))
  end
  sanitise(buf)
end

function error_to_string(buf, er, bt)
  fs = funcsym()
  index = findlast(ptr -> ip_matches_func(ptr, fs), bt)
  disable_color() do
    print(buf, "ERROR: ")
    Base.invokelatest(showerror, buf, er, index === nothing ? bt : bt[1:(index - 1)])
  end
  sanitise(buf)
end 

function droplines(code; skip = 0)
  buffer = IOBuffer()
  for line in split(code, '\n')[(skip + 1):end]
    println(buffer, rstrip(line))
  end
  strip(String(take!(buffer)), '\n')
end

function prepend_prompt(input)
  prompt  = "julia> "
  padding = " "^length(prompt)
  out = IOBuffer()
  for (n, line) in enumerate(split(input, '\n'))
    line = rstrip(line)
    println(out, n == 1 ? prompt : padding, line)
  end
  rstrip(String(take!(out)))
end

function scriptrun(code::String, name::String, dir::String)
  sym = isempty(name) ? gensym() : Symbol(name)
  mod = get!(MODULES, sym, Module(sym))::Module
  result, buffer = nothing, IOBuffer()
  for (ex, str) in parseblock(code)
    (result, success, backtrace, text) = withoutput() do
      cd(dir) do
        Core.eval(mod, Expr(:(=), :ans, ex))
      end
    end
    if !success 
      println(code)
      error("failed to run code block.\n\n$(result)")
    end
    print(buffer, text)
  end
  result_to_string(buffer, result)
end

function replrun(code::String, name::String, dir::String)
  sym = isempty(name) ? gensym() : Symbol(name)
  mod = get!(MODULES, sym, Module(sym))::Module
  result, out = nothing, IOBuffer()
  for (ex, str) in parseblock(code)
    buffer = IOBuffer()
    input  = droplines(str)
    (result, success, backtrace, text) = withoutput() do
      cd(dir) do
        Core.eval(mod, Expr(:(=), :ans, ex))
      end
    end
    output = if success
      hide = ends_with_semicolon(input)
      result_to_string(buffer, hide ? nothing : result)
    else
      error_to_string(buffer, result, [])
    end
    isempty(input) || println(out, prepend_prompt(input))
    print(out, text)
    if isempty(input) || isempty(output)
      println(out)
    else
      println(out, output, "\n")
    end
  end
  String(take!(out))
end

const PROMPT_REGEX = r"^julia> (.*)$"
const SOURCE_REGEX = r"^       (.*)$"
const ANON_FUNC_DECLARATION = r"#[0-9]+ \(generic function with [0-9]+ method(s)?\)"

function replsplitter(code)
  lines  = split(string(code, "\n"), '\n')
  input  = String[]
  output = String[]
  buffer = IOBuffer()
  while !isempty(lines)
    line = popfirst!(lines)
    startswith(line, '#') && !occursin(ANON_FUNC_DECLARATION, line) && continue
    prompt = match(PROMPT_REGEX, line)
    if prompt === nothing
      source = match(SOURCE_REGEX, line)
      if source === nothing
        savebuffer!(input, buffer)
        println(buffer, line)
        takeuntil!(PROMPT_REGEX, buffer, lines)
      else
        println(buffer, source[1])
      end
    else
      savebuffer!(output, buffer)
      println(buffer, prompt[1])
    end
  end
  savebuffer!(output, buffer)
  zip(input, output)
end

function savebuffer!(out, buf)
  n = bytesavailable(seekstart(buf))
  n > 0 ? push!(out, rstrip(String(take!(buf)))) : out
end

function takeuntil!(r, buf, lines)
  while !isempty(lines)
    line = lines[1]
    if !occursin(r, line)
      println(buf, popfirst!(lines))
    else
      break
    end
  end
end

function __ans__!(m::Module, value)
  isdefined(m, :__ans__!) || Core.eval(m, :(__ans__!(value) = global ans = value))
  return Core.eval(m, Expr(:call, () -> m.__ans__!(value)))
end

function report(input::String, output::String, str::String)
  println("=====[Test Error]", "="^30)
  println(input)
  println("=================", "="^30)
  println(output)
  println("-----------------", "-"^30)
  println(str)
  println("=================", "="^30)
end

function checkresult(mod::Module, input::String, output::String, result::Any, 
  success::Bool, backtrace, buffer::IOBuffer, hide::Bool=false)
  mod_name = nameof(mod)
  mod_regex = Regex("(Main\\.)?(Symbol\\(\"$(mod_name)\"\\)|$(mod_name))[,.]")
  mod_regex_nodot = Regex(("(Main\\.)?$(mod_name)"))
  if !success
    head = replace(split(output, "\n[...]"; limit = 2)[1], mod_regex  => "")
    head = replace(head, mod_regex_nodot => "Main")
    str  = replace(error_to_string(buffer, result, backtrace), mod_regex => "")
    str  = replace(str, mod_regex_nodot => "Main")
    if isempty(head) || !startswith(str, head)
      report(input, output, str)
    end
  else
    value = hide ? nothing : result
    output = replace(rstrip(sanitise(IOBuffer(output))), mod_regex => "")
    str = replace(result_to_string(buffer, value), mod_regex => "")
    str = rstrip(replace(str, mod_regex_nodot => "Main"))
    if str != output
      report(input, output, String(str))
    end
  end
end

function scripttest(code::String, name::String, dir::String)
  sym = isempty(name) ? gensym() : Symbol(name)
  mod = get!(MODULES, sym, Module(sym))::Module
  input, output = split(code, "# output\n", limit = 2)
  input  = String(rstrip(input, '\n'))
  output = String(lstrip(output, '\n'))
  result, success, backtrace, buffer, text = nothing, true, nothing, IOBuffer(), ""
  for (ex, str) in parseblock(input; keywords = false)
    (result, success, backtrace, text) = withoutput() do
      disable_color() do
        Core.eval(mod, ex)
      end
    end
    print(buffer, text)
    if success
      __ans__!(mod, result)
    else
      break
    end
  end
  checkresult(mod, input, output, result, success, backtrace, buffer)
  input, output
end

function repltest(code::String, name::String, dir::String)
  sym = isempty(name) ? gensym() : Symbol(name)
  mod = get!(MODULES, sym, Module(sym))::Module
  for (input, output) in replsplitter(code)
    result, success, backtrace, buffer, hide, text = nothing, true, nothing, IOBuffer(), false, ""
    for (ex, str) in parseblock(input; keywords = false)
      hide = ends_with_semicolon(str)
      (result, success, backtrace, text) = withoutput() do
        disable_color() do
          res = Core.eval(mod, ex)
        end
      end
      print(buffer, text)
      if success
        __ans__!(mod, result)
      end
    end
    checkresult(mod, input, output, result, success, backtrace, buffer, hide)
  end
  code
end

const CAN_INLINE = Ref(true)
funcsym() = CAN_INLINE[] ? :disable_color : :eval
