module ThinkJulia

  export printlyrics, repeatlyrics, printtwice, cattwice
  export rightjustify, printgrid
  export forward, turn, penup, pendown, polyline, polygon, square, arc, cercle
  export countdown, printn, recurse
  export area, absvalue, distance, circlearea, isdivisible, fact, fib
  export mysqrt, testsquareroot
  export inboth
  if VERSION < v"0.7-"
    export firstindex, lastindex
  end
  export deletehead!, baddeletehead, tail, nestedsum, cumulsum, interior, interior!, issort
  export histogram, printhist, reverselookup, invertdict

  export fig00_1
  export fig02_1
  export fig03_1
  export fig04_1, fig04_2, fig04_3, fig04_4
  export fig05_1, fig05_2
  export fig06_1
  export fig07_1
  export fig10_1, fig10_2, fig10_3, fig10_4, fig10_5
  export fig11_1, fig11_2

  include("code/chap03.jl")
  include("code/chap04.jl")
  include("code/chap05.jl")
  include("code/chap06.jl")
  include("code/chap08.jl")
  include("code/chap10.jl")
  include("code/chap11.jl")
  include("solutions/chap03.jl")
  include("solutions/chap04.jl")
  include("solutions/chap05.jl")
  include("solutions/chap07.jl")
  include("solutions/chap10.jl")
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
end