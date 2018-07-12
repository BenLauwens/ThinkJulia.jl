using Markdown

function makeasciidoc(root::String; title="", subtitle="", 
  authors=(("Ben", "Lauwens", "<https://github.com/benlauwens[@benlauwens]>"), ("Allen", "Downey")), chaps=String[])
  makedocinfo(joinpath(root, "build", "book-docinfo.xml"), authors)
  makebook(joinpath(root, "build", "book.adoc"), title, subtitle, authors, chaps)
  makepreface(joinpath(root, "build", "preface.adoc"), joinpath(root, "build", "preface.md"))
  for chap in chaps
    makechap(joinpath(root, "build", chap[1:end-2]*"adoc"), joinpath(root, "build", chap))
  end
  makeindex(joinpath(root, "build", "index.adoc"))
end

order = 0

function render(io::IO, block::Markdown.BlockQuote)
  println(io, "[quote,  ]")
  println(io, "____")
  render(io, block.content)
  println(io, "____")
end
function render(io::IO, b::Markdown.Bold)
  print(io, "*") 
  render(io, b.text)
  print(io, "*")
end
function render(io::IO, c::Markdown.Code)
  if c.language == ""
    print(io, "+", c.code, "+")
  else
    println(io, "[source,", c.language, "]")
    println(io, "----")
    println(io, c.code)
    println(io, "----\n")
  end
end
function render(io::IO, h::Markdown.Header{n}) where{n}
  print(io, "="^(n+1), " ")
  render(io, h.text)
  println(io, "\n")
end
function render(io::IO, i::Markdown.Italic)
  print(io, "_") 
  render(io, i.text)
  print(io, "_")
end
render(io::IO, l::Markdown.LaTeX) = print(io, "latexmath:[", l.formula,"]")
render(io::IO, l::Markdown.Link) = print(io, l.url)
function render(io::IO, l::Markdown.List)
  global order += 1
  tag = l.ordered == -1 ? "*"^order : "."^order
  for item in l.items
    print(io, tag, " ")
    for (i, elem) in enumerate(item)
      i == 1 || elem isa Markdown.List || println(io, "+")
      render(io, elem)
    end
  end
  order -= 1
end
render(io::IO, md::Markdown.MD) = map(elem -> render(io, elem), md.content)
function render(io::IO, p::Markdown.Paragraph)
  p.content[1] isa String && occursin(r"<a id.*</a>", p.content[1]) && return#length(p.content[1]) > 5 && all(isascii, p.content[1][1:5]) && p.content[1][1:5] == "<a id" && return
  if p.content[1] isa String && occursin(r"<figure>.*</figure>", p.content[1])
    println(io, "[[", match(r"\".*svg", p.content[1]).match[2:end-4],"]]")
    println(io, ".", match(r"alt=\".*\"", p.content[1]).match[6:end-1])
    println(io, "image::", match(r"\".*svg", p.content[1]).match[2:end], "[\"", match(r"alt=\".*\"", p.content[1]).match[6:end-1],"\"]\n")
    return
  end
  if p.content[end] == :$
    println(io, "[latexmath]")
    println(io, "++++")
    #println(io, "\\begin{equation}")
    println(io, p.content[1])
    #println(io, "\\end{equation}")
    println(io, "++++")
    return
  end
  for elem in p.content
    render(io, elem)
  end
  println(io, "\n")
end
render(io::IO, str::String) = print(io, str)
render(io::IO, sym::Symbol) = nothing
render(io::IO, vec::Vector) = map(elem->render(io, elem), vec)

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

function makebook(file::String, title::String, subtitle::String, authors, chaps::Vector{String})
  open(file, "w") do io
    print(io, """
:bookseries: animal

= $title: $subtitle
    """)
    for (i, author) in enumerate(authors)
      if length(author) == 2
        print(io, author[1], " ", author[2])
      else
        print(io, author[1], " ", author[2], " ", author[3])
      end
      i == length(authors) ? println(io) : print(io, "; ")
    end
    println(io, """

Copyright © 2018 Allen Downey, Ben Lauwens. All rights reserved.

_Think Julia_ is available under the Creative Commons Attribution-NonCommercial 3.0 Unported License. The author maintains an online version at https://github.com/BenLauwens/ThinkJulia.jl.

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