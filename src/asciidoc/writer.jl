using Markdown

function makeasciidoc(root::String; title="", subtitle="", 
  authors=(("Ben", "Lauwens", "<https://github.com/benlauwens[@benlauwens]>"), ("Allen", "Downey")), chaps=String[])
  makedocinfo(joinpath(root, "build", "book-docinfo.xml"), authors)
  makebook(joinpath(root, "build", "book.adoc"), joinpath(root, "build", "copyright.md"), title, subtitle, authors, chaps)
  makepreface(joinpath(root, "build", "preface.adoc"), joinpath(root, "build", "preface.md"))
  for chap in chaps
    makechap(joinpath(root, "build", chap[1:end-2]*"adoc"), joinpath(root, "build", chap))
  end
  makeindex(joinpath(root, "build", "index.adoc"))
end

order = 0

function render(io::IO, block::Markdown.BlockQuote, parent=nothing)
  println(io, "[quote,  ]")
  println(io, "____")
  render(io, block.content, block)
  println(io, "____")
end
function render(io::IO, b::Markdown.Bold, parent=nothing)
  print(io, "*") 
  render(io, b.text, b)
  print(io, "*")
end
function render(io::IO, c::Markdown.Code, parent=nothing)
  if c.language == ""
    print(io, "+", c.code, "+")
  else
    println(io, "[source,", c.language, "]")
    println(io, "----")
    println(io, replace(c.code, "&gt" => ">"))
    println(io, "----\n")
  end
end
function render(io::IO, h::Markdown.Header{n}, parent=nothing) where{n}
  print(io, "="^(n+1), " ")
  render(io, h.text, h)
  println(io, "\n")
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
  if p.content[1] isa String && occursin(r"<figure>.*</figure>", p.content[1])
    println(io, "[[", match(r"\".*svg", p.content[1]).match[2:end-4],"]]")
    println(io, ".", match(r"on>.*[.]<", p.content[1]).match[4:end-1])
    println(io, "image::", match(r"\".*svg", p.content[1]).match[2:end], "[\"", match(r"alt=\".*\"", p.content[1]).match[6:end-1],"\"]\n")
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
    println(io, "== index")
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
include::preface.adoc[]

$(["include::$(chap[1:end-2])adoc[]\n\n" for chap in chaps]...)include::index.adoc[]    
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