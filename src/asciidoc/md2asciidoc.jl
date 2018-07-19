using Markdown

function makeasciidoc(root::String; title="", subtitle="", 
  authors=(("Ben", "Lauwens", "<https://github.com/benlauwens[@benlauwens]>"), ("Allen", "Downey")), chaps=String[])
  makedocinfo(joinpath(root, "book-docinfo.xml"), authors)
  makebook(joinpath(root, "book.asciidoc"), joinpath(root, "copyright.md"), title, subtitle, authors, chaps)
  makepreface(joinpath(root, "preface.asciidoc"), joinpath(root, "preface.md"))
  for chap in chaps
    makechap(joinpath(root, chap[1:end-2]*"asciidoc"), joinpath(root, chap))
  end
  makeindex(joinpath(root, "index.asciidoc"))
end

order = 0
chapter = -1
fig = 0

function render(io::IO, block::Markdown.BlockQuote, parent=nothing)
  println(io, "[quote,  ]")
  println(io, "____")
  render(io, block.content, block)
  println(io, "____")
end
function render(io::IO, b::Markdown.Bold, parent=nothing)
  if b.text isa Vector && length(b.text) == 1 && b.text[1] isa String && length(b.text[1]) == 1
    print(io, "**") 
    render(io, b.text, b)
    print(io, "**")
  else
    print(io, "*") 
    render(io, b.text, b)
    print(io, "*")
  end
end
function render(io::IO, c::Markdown.Code, parent=nothing)
  if parent == nothing
    elems = split(c.language, " ")
    mod = length(elems) == 2 ? " " * elems[2] : ""
    language = if occursin("jldoctest", c.language)
      "@julia-repl-test" * mod
    elseif occursin("@setup", c.language) || occursin("@meta", c.language) || occursin("@eval", c.language)
      "@julia-setup" * mod
    elseif occursin("@eval", c.language)
      "@julia" * mod
    elseif occursin("@repl", c.language)
      "@julia-repl" * mod
    elseif occursin("@raw", c.language)
      return
    else
      c.language
    end
    println(io, "[source,", language, "]")
    println(io, "----")
    println(io, replace(c.code, "&gt" => ">"))
    println(io, "----\n")
  else
    code = c.code
    if length(code) == 1
      code = "+" * code * "+"
    end
    print(io, "`", code, "`")
  end
end
function render(io::IO, h::Markdown.Header{n}, parent=nothing) where{n}
  n == 2 && println(io)
  print(io, "="^(n+1), " ")
  render(io, h.text, h)
  println(io, "\n")
  if n == 1
    global chapter += 1
    global fig = 0
  end
end
function render(io::IO, i::Markdown.Image, parent=nothing)
  println(io, ".", i.alt)
  global fig += 1
  global chapter
  println(io, "image::", i.url, "[caption=\"Figure $chapter-$fig. \"]")
end
function render(io::IO, i::Markdown.Italic, parent=nothing)
  print(io, "_") 
  render(io, i.text, i)
  print(io, "_")
end
function render(io::IO, l::Markdown.LaTeX, parent=nothing)
  if parent == nothing
    println(io, "[latexmath]")
    println(io, "++++")
    println(io, l.formula)
    println(io, "++++")
  else
    print(io, "latexmath:[", l.formula,"]")
  end
end
render(io::IO, l::Markdown.Link, parent=nothing) = print(io, l.url)
function render(io::IO, l::Markdown.List, parent=nothing)
  global order += 1
  tag = l.ordered == -1 ? "*"^order : "."^order
  for item in l.items
    print(io, tag, " ")
    for (i, elem) in enumerate(item)
      i == 1 || elem isa Markdown.List || println(io, "+")
      render(io, elem, l)
    end
  end
  order -= 1
end
render(io::IO, md::Markdown.MD) = map(elem -> render(io, elem), md.content)
function render(io::IO, p::Markdown.Paragraph, parent=nothing)
  p.content[1] isa String && occursin(r"<a id.*</a>", p.content[1]) && return
  if length(p.content) > 1 && p.content[1] isa Markdown.Italic #&& p.content[2][1] == ":"
    println(io, p.content[1].text[1], ": ::")
    render(io, p.content[2][3:end], p)
    for i in 3:length(p.content)
      render(io, p.content[i], p)
    end
    println(io)
    println(io)
    return
  end
  for elem in p.content
    render(io, elem, p)
  end
  println(io, "\n")
end
render(io::IO, str::String, parent=nothing) = print(io, str)
render(io::IO, sym::Symbol, parent=nothing) = nothing
render(io::IO, vec::Vector, parent=nothing) = map(elem->render(io, elem, vec), vec)

function makeindex(file::String)
  open(file, "w") do io
    println(io, "== Index")
  end
end

function makechap(file::String, chap::String)
  md = Markdown.parse_file(chap, flavor=Markdown.julia)
  open(file, "w") do io
    println(io, "[[chap$(chap[end-4:end-3])]]")
    render(io, md)
  end
end

function makepreface(file::String, preface::String)
  md = Markdown.parse_file(preface, flavor=Markdown.julia)
  open(file, "w") do io
    println(io, "[preface]")
    render(io, md)
  end
end

function makebook(file::String, copyright::String, title::String, subtitle::String, authors, chaps::Vector{String})
  md = Markdown.parse_file(copyright, flavor=Markdown.julia)
  open(file, "w") do io
    println(io, """
:bookseries: animal

= $title: $subtitle""")
    for (i, author) in enumerate(authors)
      if length(author) == 2
        print(io, author[1], " ", author[2])
      else
        print(io, author[1], " ", author[2], " ", author[3])
      end
      i == length(authors) ? println(io) : print(io, "; ")
    end
    println(io)
    render(io, md)
    println(io, """
include::preface.asciidoc[]

$(["include::$(chap[1:end-2])asciidoc[]\n\n" for chap in chaps]...)include::index.asciidoc[]    
    """)
  end
end

function makedocinfo(file::String, authors)
  open(file, "w") do io
    for name in authors
      println(io, """
<author>
  <firstname>$(name[1])</firstname>
  <surname>$(name[2])</surname>
</author>
      """)
    end
  end
end