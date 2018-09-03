using ThinkJulia: makefigs, expandcodeblocks, deploybook

const root = dirname(@__FILE__)
const src = joinpath(root, "src")
const dst = joinpath(root, "build")
const target = joinpath(root, "site")
const img = joinpath(dst, "images")
const oreilly = "/Users/ben/Source/think-julia"
const chaps = [
  "book.asciidoc",
  "colophon.asciidoc",
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
  "appa.asciidoc",
  "index.asciidoc"
]
mkpath(img)
if "images"  in ARGS
  if "html" in ARGS
    cd(()->makefigs(:svg, "DejaVu Sans Mono", 1.5), img)
  else
    cd(()->makefigs(:svg, "Ubuntu Mono", 1.0), img)
  end
end
for chap in chaps
  expandcodeblocks(root, joinpath("src", chap), joinpath("build", chap))
end
if "pdf" in ARGS
  #run(`asciidoctor-pdf -a compat-mode -a media=prepress -a pdf-style=my-theme.yml -a pdf-fontsdir=fonts -d book -a stem=latexmath -a sectnums -a sectnumlevels=1 -a toc -a toclevels=2 -a source-highlighter=rouge -r asciidoctor-mathematical -a mathematical-format=svg build/book.asciidoc`)
  run(`ruby ~/Source/asciidoctor-htmlbook/scripts/convert_book.rb build`)
elseif "html" in ARGS
  run(`asciidoctor -d book -b html5 -a compat-mode -a stem=latexmath -a sectnums -a sectnumlevels=1 -a source-highlighter=pygments -a toc -a toc=left -a toclevels=2 build/book.asciidoc`)
  book = read("build/book.html", String)
  book = replace(book, "\\(\\("=> "\\(")
  book = replace(book, "\\)\\)"=> "\\)")
  book = replace(book, "\\begin{equation}\\n{"=> "")
  book = replace(book, "}\\n\\end{equation}"=> "")
  write("build/book.html", book)
elseif "oreilly" in ARGS
  run(`cp build/chap01.asciidoc $oreilly`)
  run(`cp build/chap02.asciidoc $oreilly`)
  run(`cp build/chap03.asciidoc $oreilly`)
  run(`cp build/chap04.asciidoc $oreilly`)
  run(`cp build/chap05.asciidoc $oreilly`)
  run(`cp build/chap06.asciidoc $oreilly`)
  run(`cp build/chap07.asciidoc $oreilly`)
  run(`cp build/chap08.asciidoc $oreilly`)
  run(`cp build/chap09.asciidoc $oreilly`)
  run(`cp build/chap10.asciidoc $oreilly`)
  run(`cp build/chap11.asciidoc $oreilly`)
  run(`cp build/chap12.asciidoc $oreilly`)
  run(`cp build/chap13.asciidoc $oreilly`)
  run(`cp build/chap14.asciidoc $oreilly`)
  run(`cp build/chap15.asciidoc $oreilly`)
  run(`cp build/chap16.asciidoc $oreilly`)
  run(`cp build/chap17.asciidoc $oreilly`)
  run(`cp build/chap18.asciidoc $oreilly`)
  run(`cp build/chap19.asciidoc $oreilly`)
  run(`cp build/chap20.asciidoc $oreilly`)
  run(`cp build/chap21.asciidoc $oreilly`)
  run(`cp build/appa.asciidoc $oreilly`)
  cd(oreilly) do
    run(`git commit -a -m $(ARGS[end])`)
    run(`git push`)
  end
  atlas_token = "atlas_token.jl"
  if isfile(atlas_token)
    include(atlas_token)
    run(`atlas build $ATLAS_TOKEN oreillymedia/think-julia pdf master`)
  end
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
  if "local" in ARGS
    fake_travis = "fake_travis.jl"
    if isfile(fake_travis)
      include(fake_travis)
    end
  end
  deploybook(
    root = root,
    repo = "github.com/BenLauwens/ThinkJulia.jl",
    target = target,
    branch = "gh-pages",
    latest = "master",
    osname = "osx",
    julia  = "1.0",
  )
end
