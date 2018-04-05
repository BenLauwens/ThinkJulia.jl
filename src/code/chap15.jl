struct Point
  x
  y
end

mutable struct MPoint
  x
  y
end

struct Rectangle
  width
  height
  corner
end

function printpoint(p)
  println("($(p.x), $(p.y))")
end

function findcenter(rect)
  Point(rect.corner.x, rect.corner.y)
end

function movepoint!(p, dx, dy)
  p.x += dx
  p.y += dy
  nothing
end

function moverectangle!(rect, dx, dy)
  movepoint!(rect.corner, dx, dy)
end