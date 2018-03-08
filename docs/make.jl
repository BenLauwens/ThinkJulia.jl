using Documenter

makedocs(
  format = :html,
  sitename = "Think Julia",
  authors = "Ben Lauwens",
  pages = [
    "Home" => "index.md",
    "The way of the program" => "chap01.md"
  ]
)

deploydocs(
  repo   = "github.com/BenLauwens/ThinkJulia.jl",
  target = "build",
  deps   = nothing,
  make   = nothing
)