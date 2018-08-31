function expandcodeblocks(root, src, dst)
  println("Expand: ", src)
  lines = open(src, "r") do in
    readlines(in)
  end
  open(dst, "w") do out
    n = 1
    while n <= length(lines)
      if startswith(lines[n], "[source,@julia-repl-test")
        n = expandjuliarepltestblock(root, out, lines, n)
      elseif startswith(lines[n], "[source,@julia-test")
        n = expandjuliatestblock(root, out, lines, n)
      elseif startswith(lines[n], "[source,@julia-setup")
        n = expandjuliasetupblock(root, out, lines, n)
      elseif startswith(lines[n], "[source,@julia-eval")
        n = expandjuliaevalblock(root, out, lines, n)
      elseif startswith(lines[n], "[source,@julia-repl")
        n = expandjuliareplblock(root, out, lines, n)
      elseif startswith(lines[n], "[source,@julia")
        n = expandjuliablock(root, out, lines, n)
      else
        println(out, lines[n])
        n += 1
      end
    end
  end
end

function expandjuliarepltestblock(root::String, out::IOStream, lines::Vector{String}, n::Int)
  name = findname(lines[n])
  m = findcodeblock(lines, n)
  code = join(lines[n+2:m-1], "\n")
  repl = repltest(code, name, root)
  println(out, "[source,jlcon]")
  println(out, "----")
  println(out, repl)
  println(out, "----")
  m + 1   
end

function expandjuliatestblock(root::String, out::IOStream, lines::Vector{String}, n::Int)
  name = findname(lines[n])
  m = findcodeblock(lines, n)
  code = join(lines[n+2:m-1], "\n")
  input, output = scripttest(code, name, root)
  println(out, "[source,julia]")
  println(out, "----")
  println(out, input)
  println(out, "----")
  println(out, "Output:")
  println(out, "----")
  println(out, output)
  println(out, "----")
  m + 1
end

function expandjuliaevalblock(root::String, out::IOStream, lines::Vector{String}, n::Int)
  name = findname(lines[n])
  m = findcodeblock(lines, n)
  code = join(lines[n+2:m-1], "\n")
  output = scriptrun(code, name, root)
  if !isempty(output)
    println(out, "----")
    println(out, output)
    println(out, "----")
  end
  m + 1   
end

function expandjuliasetupblock(root::String, out::IOStream, lines::Vector{String}, n::Int)
  name = findname(lines[n])
  m = findcodeblock(lines, n)
  code = join(lines[n+2:m-1], "\n")
  output = scriptrun(code, name, root)
  println(out, "[source,julia]")
  println(out, "----")
  println(out, code)
  println(out, "----")
  m + 1   
end

function expandjuliareplblock(root::String, out::IOStream, lines::Vector{String}, n::Int)
  name = findname(lines[n])
  m = findcodeblock(lines, n)
  code = join(lines[n+2:m-1], "\n")
  repl = replrun(code, name, root)
  println(out, "[source,jlcon]")
  println(out, "----")
  print(out, replace(repl, "\n\n"=>"\n"))
  println(out, "----")
  m + 1   
end

function expandjuliablock(root::String, out::IOStream, lines::Vector{String}, n::Int)
  name = findname(lines[n])
  m = findcodeblock(lines, n)
  code = join(lines[n+2:m-1], "\n")
  output = scriptrun(code, name, root)
  println(out, "[source,julia]")
  println(out, "----")
  println(out, code)
  println(out, "----")
  println(out, "Output:")
  println(out, "----")
  println(out, output)
  println(out, "----")
  m + 1   
end

function findname(line::String)
  elems = split(line, " ")
  length(elems) == 2 ? String(elems[2][1:end-1]) : ""
end

function findcodeblock(lines::Vector{String}, n::Int)
  n += 2
  while n <= length(lines)
    lines[n] == "----" && break
    n += 1
  end
  n
end