function area(radius)
  a = π * radius^2
  return a
end

function absvalue(x)
  if x < 0
      return -x
  end
  if x > 0
      return x
  end
end

function distance(x₁, y₁, x₂, y₂)
  dx = x₂ - x₁
  dy = y₂ - y₁
  d² = dx^2 + dy^2
  sqrt(d²)
end

function circlearea(xc, yc, xp, yp)
  area(distance(xc, yc, xp, yp))
end

function isdivisible(x, y)
  if x % y == 0
      return true
  else
      return false
  end
end

function fact(n)
  if n == 0
      return 1
  else
      return n * fact(n-1)
  end
end

function fib(n)
  if n == 0
      return 0
  elseif n == 1
      return 1
  else
      return fib(n-1) + fib(n-2)
  end
end