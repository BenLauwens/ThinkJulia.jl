function fig19_1(output::Symbol, font::String, scale::Float64)
  p = plot(x -> x^2 + 2x - 1, 0, 10, xlabel="x", ylabel="y")
  savefig(p, "fig191.svg")
end