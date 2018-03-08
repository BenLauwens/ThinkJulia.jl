using Documenter

makedocs(
  format = :html,
  sitename = "Think Julia",
  authors = "Ben Lauwens",
  pages = [
    "Preface" => "copyright.md",
    "Mainmatter" => [
      "chap01.md"
    ]
  ]
)

deploydocs(
  repo   = "github.com/BenLauwens/ThinkJulia.jl",
  target = "build",
  deps   = nothing,
  make   = nothing
)