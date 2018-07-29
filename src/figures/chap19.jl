using Plots

function fig19_1(output::Symbol, font::String, scale::Float64)
  f = x -> x^2 + 2x - 1
  p = plot(0.0:0.1:10.0, f, xaxis="x", yaxis="f")
  savefig(p, "fig191.svg")
end