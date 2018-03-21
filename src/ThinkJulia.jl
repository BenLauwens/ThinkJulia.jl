module ThinkJulia
  export printlyrics, repeatlyrics, printtwice, cattwice
  export rightjustify
  export forward, turn, penup, pendown, polyline, polygon, square, arc, cercle
  export countdown, printn, recurse
  export area, absvalue, distance, circlearea, isdivisible, fact, fib, factdebug
  export mysqrt, testsquareroot
  export inboth


  export fig02_1
  export fig03_1
  export fig04_1, fig04_2, fig04_3, fig04_4
  export fig05_1, fig05_2
  export fig06_1
  export fig07_1

  include("code/chap03.jl")
  include("code/chap04.jl")
  include("code/chap05.jl")
  include("code/chap06.jl")
  include("code/chap08.jl")
  include("solutions/chap03.jl")
  include("solutions/chap04.jl")
  include("solutions/chap05.jl")
  include("solutions/chap07.jl")
  include("figures/common.jl")
  include("figures/chap02.jl")
  include("figures/chap03.jl")
  include("figures/chap04.jl")
  include("figures/chap05.jl")
  include("figures/chap06.jl")
  include("figures/chap07.jl")
end