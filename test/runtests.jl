using Base.Test

for i in 1:4
  is = i < 10 ? "0$i" : "$i"
  include("chap$is.jl")
end