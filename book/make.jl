using Documenter
using ThinkJulia: makeasciidoc

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

#makedocs(
#  source = joinpath(root, "..", "docs", "src"),
#  sitename = title,
#  authors = "Ben Lauwens",
#  pages = ["copyright.md", "preface.md", chaps...]
#)
rm(joinpath(root, "build", "assets"); force=true, recursive=true)
makeasciidoc(root; title=title, subtitle=subtitle, authors=authors, chaps=chaps)
for file in ["copyright.md", "preface.md", chaps...]
  #rm(joinpath(root, "build", file))
end
run(`asciidoctor -d book -b html5 -a linkcss! -a sectanchors -a stem=latexmath -a sectnums -a sectnumlevels=2 -a source-highlighter=highlightjs -a toc -a toc2 -a toc=left -a toclevels=2 -a docinfo -a idprefix! -a idseparator=- build/book.adoc`)