using Documenter
using ThinkJulia: makeasciidoc, makefigs
using Markdown

function Markdown.plain(io::IO, l::Markdown.LaTeX)
  println(io, "```math")
  println(io, l.formula)
  println(io, "```")
end

const title = "Think Julia"
const subtitle = "How to Think Like a Computer Scientist"
const authors = (("Ben", "Lauwens", "<https://github.com/benlauwens[@benlauwens]>"), ("Allen", "Downey"))
const root = dirname(@__FILE__)
const chaps = [
  "chap01.md",
  "chap02.md",
  "chap03.md",
  "chap04.md",
  "chap05.md",
  "chap06.md",
  "chap07.md",
  "chap08.md",
  "chap09.md",
  "chap10.md",
  "chap11.md",
  "chap12.md",
  "chap13.md",
  "chap14.md",
  "chap15.md",
  "chap16.md",
  "chap17.md",
  "chap18.md",
  "chap19.md",
  "chap20.md"
]

if "generate" in ARGS
  makedocs(
    source = joinpath(root, "..", "docs", "src"),
    sitename = title,
    authors = "Ben Lauwens",
    pages = ["copyright.md", "preface.md", chaps...]
  )
  rm(joinpath(root, "build", "assets"); force=true, recursive=true)
  const dir = joinpath("build/images")
  mkpath(dir)
  if "pdf" in ARGS
    cd(()->makefigs(:svg, "Ubuntu Mono"), dir)
  else
    cd(()->makefigs(:svg, "DejaVu Sans Mono"), dir)
  end
end
root = joinpath(root, "build")
makeasciidoc(root; title=title, subtitle=subtitle, authors=authors, chaps=chaps)
if "remove" in ARGS
  for file in ["copyright.md", "preface.md", chaps...]
    #rm(joinpath(root, "build", file))
  end
end
if "pdf" in ARGS
  run(`asciidoctor-pdf -a media=prepress -a pdf-style=my-theme.yml -a pdf-fontsdir=fonts -d book -a stem=latexmath -a sectnums -a sectnumlevels=1 -a toc -a toclevels=2 -a docinfo -a source-highlighter=pygments -r asciidoctor-mathematical -a mathematical-format=svg build/book.asciidoc`)
else
  run(`asciidoctor -d book -b html5 -a stem=latexmath -a sectnums -a sectnumlevels=1 -a source-highlighter=pygments -a toc -a toc=left -a toclevels=2 build/book.asciidoc`)
  run(`asciidoctor -d book -b docbook -a stem=latexmath -a sectnums -a sectnumlevels=1 -a toc -a toclevels=2 -a docinfo build/book.asciidoc`)
end