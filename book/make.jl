using ThinkJulia: makefigs, expandcodeblocks, deploybook

const root = dirname(@__FILE__)
const src = joinpath(root, "src")
const dst = joinpath(root, "build")
const target = joinpath(root, "site")
const img = joinpath(dst, "images")
const chaps = [
  "book.asciidoc",
  "preface.asciidoc",
  "chap01.asciidoc",
  "chap02.asciidoc",
  "chap03.asciidoc",
  "chap04.asciidoc",
  "chap05.asciidoc",
  "chap06.asciidoc",
  "chap07.asciidoc",
  "chap08.asciidoc",
  "chap09.asciidoc",
  "chap10.asciidoc",
  "chap11.asciidoc",
  "chap12.asciidoc",
  "chap13.asciidoc",
  "chap14.asciidoc",
  "chap15.asciidoc",
  "chap16.asciidoc",
  "chap17.asciidoc",
  "chap18.asciidoc",
  "chap19.asciidoc",
  "chap20.asciidoc",
  "chap21.asciidoc",
  "chap22.asciidoc",
  "index.asciidoc"
]
mkpath(img)
if "images"  in ARGS
  if "pdf" in ARGS
    cd(()->makefigs(:svg, "Ubuntu Mono", 1.3), img)
  else
    cd(()->makefigs(:svg, "DejaVu Sans Mono", 1.0), img)
  end
end
for chap in chaps
  expandcodeblocks(root, joinpath("src", chap), joinpath("build", chap))
end
if "pdf" in ARGS
  run(`asciidoctor-pdf -a compat-mode -a media=prepress -a pdf-style=my-theme.yml -a pdf-fontsdir=fonts -d book -a stem=latexmath -a sectnums -a sectnumlevels=1 -a toc -a toclevels=2 -a source-highlighter=rouge -r asciidoctor-mathematical -a mathematical-format=svg build/book.asciidoc`)
elseif "latex" in ARGS
  run(`asciidoctor-latex -a compat-mode -d book -a stem=latexmath -a sectnums -a sectnumlevels=1 -a toc -a toclevels=2  build/book.asciidoc`)
else
  #run(`asciidoctor -d book -b html5 -a stylesheet=/Users/ben/Source/asciidoctor-stylesheet-factory/stylesheets/oreilly.css -a compat-mode -a stem=latexmath -a sectnums -a sectnumlevels=1 -a source-highlighter=rouge -a toc -a toc=left -a toclevels=2 build/book.asciidoc`)
  #run(`asciidoctor -d book -b html5 -a stylesheet=./../oreilly.css -a compat-mode -a stem=latexmath -a sectnums -a sectnumlevels=1 -a source-highlighter=rouge -a toc -a toc=left -a toclevels=2 build/book.asciidoc`)
  run(`asciidoctor -d book -b html5 -a compat-mode -a stem=latexmath -a sectnums -a sectnumlevels=1 -a source-highlighter=rouge -a toc -a toc=left -a toclevels=2 build/book.asciidoc`)
  run(`asciidoctor -d book -b docbook -a compat-mode -a toc build/book.asciidoc`)
end
if "deploy" in ARGS
  isdir(target) || mkpath(target)
  cp(joinpath(dst, "book.html"), joinpath(target, "book.html"), force=true)
  isdir(joinpath(target, "images")) || mkpath(joinpath(target, "images"))
  for (dir, dirs, files) in walkdir(img)
    for file in files
      occursin(".svg", file) && cp(joinpath(dir, file), joinpath(target, "images", file), force=true)
    end
  end
  fake_travis = "fake_travis.jl"
  if isfile(fake_travis)
    include(fake_travis)
  end
  deploybook(
    root = root,
    repo = "github.com/BenLauwens/ThinkJulia.jl",
    target = target,
    branch = "gh-pages",
    latest = "master",
    osname = "osx",
    julia  = "nightly",
  )
end