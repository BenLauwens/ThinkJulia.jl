using Base.Test

for i in 1:3
  is = i < 10 ? "0$i" : "$i"
  include("chap$is.jl")
end