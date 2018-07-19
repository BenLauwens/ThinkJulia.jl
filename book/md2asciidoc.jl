using ThinkJulia: makeasciidoc

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

const source = joinpath(root, "src")
rm(source, recursive=true, force=true)
mkpath(source)
for (mdroot, dirs, files) in walkdir(joinpath("..", "docs", "src"))
  for file in files
    endswith(file, ".md") && cp(joinpath(mdroot, file), joinpath(source, file))
  end
end
makeasciidoc(source; title=title, subtitle=subtitle, authors=authors, chaps=chaps)
for file in ["copyright.md", "preface.md", chaps...]
  #rm(joinpath(source, file))
end