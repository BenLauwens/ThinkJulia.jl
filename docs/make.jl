using Documenter

makedocs(
  format = :html,
  sitename = "Think Julia",
  authors = "Ben Lauwens with Allen B. Downey",
  pages = [
    "chap00.md",
    "chap01.md",
    "chap02.md",
    "chap03.md",
    "chap04.md",
    "chap05.md",
    "chap06.md",
    "chap07.md",
    "chap08.md",
    "chap09.md",
    "chap10.md"
  ]
)

deploydocs(
  repo   = "github.com/BenLauwens/ThinkJulia.jl",
  target = "build",
  deps   = nothing,
  make   = nothing,
  julia  = "0.6",
  osname = "linux"
)