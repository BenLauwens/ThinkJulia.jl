# function nestedsum(t)
#   sum(sum.(t))
# end

function nestedsum(t)
  total = 0
  for nested in t
    total += sum(nested)
  end
  total
end

function cumulsum(t)
  total = 0
  res = []
  for x in t
    total += x
    push!(res, total)
  end
  res
end

function interior(t)
  t[2:end-1]
end

function interior!(t)
  popfirst!(t)
  pop!(t)
  nothing
end

function issort(t)
  t == sort(t)
end