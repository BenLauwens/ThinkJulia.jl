using Luxor

function petal(t, r, angle)
    for i in 1:2
        arc(t, r, angle)
        turn(t, angle-180)
    end
end 

function flower(t, n, r, angle)
    for i in 1:n
        petal(t, r, angle)
        turn(t, 360/n)
    end
end

function drawpie(t, n, r)
  polypie(t, n, r)
  penup(t)
  forward(t, r*2 + 10)
  pendown(t)
end

function polypie(t, n, r)
  angle = 360 / n
  for i in 1:n
      isosceles(t, r, angle/2)
      turn(t, -angle)
  end
end

function isosceles(t, r, angle)
  y = r * sin(angle * pi / 180)
  turn(t, angle)
  forward(t, r)
  turn(t, -90-angle)
  forward(t, 2*y)
  turn(t, -90-angle)
  forward(t, r)
  turn(t, -180+angle)
end

"""Draws an Archimedian spiral starting at the origin.

Args:
  n: how many line segments to draw
  length: how long each segment is
  a: how loose the initial spiral starts out (larger is looser)
  b: how loosly coiled the spiral is (larger is looser)

http://en.wikipedia.org/wiki/Spiral
"""
function spiral(t, n, length, a, b)
  theta = 0.0
  for i in 1:n
    forward(t,length)
    dtheta = 1 / (a + b * theta)
    turn(t, -dtheta)
    theta += dtheta
  end
end