module ThinkJulia

  __precompile__(false)

  using Printf
  using Random
  using Base64
  using REPL
  using Luxor
  using TikzPictures
  using Plots

  const depsjl_path = joinpath(dirname(@__FILE__), "..", "deps", "deps.jl")
  if !isfile(depsjl_path)
      error("ThinkJulia not installed properly, run Pkg.build(\"ThinkJulia\"), restart Julia and try again")
  end
  include(depsjl_path)

  function __init__()
    # Always check your dependencies that live in `deps.jl`
    check_deps()
    global setcolor! = Core.eval(Base, :(x -> (y = have_color; global have_color = x; y)))
    CAN_INLINE[] = Base.JLOptions().can_inline == 0 ? false : true
  end

  #import Base.+

  export printlyrics, repeatlyrics, printtwice, cattwice
  export rightjustify, printgrid
  export Turtle, forward, turn, penup, pendown, @svg
  #export countdown, printn, recurse
  #export area, absvalue, distance, circlearea, isdivisible, fact, fib
  export mysqrt, testsquareroot
  #export inboth
  #export deletehead!, baddeletehead, tail, nestedsum, cumulsum, interior, interior!, issort
  #export histogram, printhist, reverselookup, invertdict
  #export printall
  #export processfile, processline, totalwords, differentwords, mostcommon, printmostcommon, subtract
  export DBM
  #export Point, MPoint, Rectangle, printpoint, findcenter, movepoint!, moverectangle!
  #export MyTime, isafter
  #export inttotime, timetoint, increment!, printtime
  #export CardSet, Card, Deck, Hand, move!
  #export MyPoint

  export makefigs

  #export makeasciidoc
  export expandcodeblocks, deploybook

  #include("code/chap03.jl")
  include("code/chap04.jl")
  #include("code/chap05.jl")
  #include("code/chap06.jl")
  #include("code/chap08.jl")
  #include("code/chap10.jl")
  #include("code/chap11.jl")
  #include("code/chap12.jl")
  #include("code/chap13.jl")
  include("code/chap14.jl")
  #include("code/chap15.jl")
  #include("code/chap16.jl")
  #include("code/chap17.jl")
  #include("code/chap18.jl")
  #include("code/chap19.jl")
  include("solutions/chap03.jl")
  include("solutions/chap04.jl")
  include("solutions/chap05.jl")
  include("solutions/chap07.jl")
  include("solutions/chap10.jl")
  include("solutions/chap13.jl")
  include("solutions/chap16.jl")
  #include("solutions/chap17.jl")
  include("figures/common.jl")
  include("figures/chap00.jl")
  include("figures/chap02.jl")
  include("figures/chap03.jl")
  include("figures/chap04.jl")
  include("figures/chap05.jl")
  include("figures/chap06.jl")
  include("figures/chap07.jl")
  include("figures/chap10.jl")
  include("figures/chap11.jl")
  include("figures/chap12.jl")
  include("figures/chap15.jl")
  include("figures/chap16.jl")
  include("figures/chap18.jl")
  include("figures/chap19.jl")
  #include("asciidoc/md2asciidoc.jl")
  include("asciidoc/expanders.jl")
  include("asciidoc/runners.jl")
  include("asciidoc/deploy.jl")

  datapath(filename) = joinpath(@__DIR__, "..", "data", filename)
end
