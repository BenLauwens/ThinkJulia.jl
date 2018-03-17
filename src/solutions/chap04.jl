using Luxor

function polyline(t, n, length, angle)
    for i in 1:n
        Forward(t, length)
        Turn(t, -angle)
    end
end

function arc(t, r, angle)
    arc_length = 2 * π * r * abs(angle) / 360
    n = trunc(arc_length / 4) + 3
    step_length = arc_length / n
    step_angle = angle / n
    Turn(t, step_angle/2)
    polyline(t, n, step_length, step_angle)
    Turn(t, -step_angle/2)
end

function petal(t, r, angle)
    for i in 1:2
        arc(t, r, angle)
        Turn(t, angle-180)
    end
end 

function flower(t, n, r, angle)
    for i in 1:n
        petal(t, r, angle)
        Turn(t, 360/n)
    end
end

function draw_pie(t, n, r)
  polypie(t, n, r)
  Penup(t)
  Forward(t, r*2 + 10)
  Pendown(t)
end

function polypie(t, n, r)
  angle = 360 / n
  for i in 1:n
      isosceles(t, r, angle/2)
      Turn(t, -angle)
  end
end

function isosceles(t, r, angle)
  y = r * sin(angle * pi / 180)
  Turn(t, angle)
  Forward(t, r)
  Turn(t, -90-angle)
  Forward(t, 2*y)
  Turn(t, -90-angle)
  Forward(t, r)
  Turn(t, -180+angle)
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
    Forward(t,length)
    dtheta = 1 / (a + b * theta)
    Turn(t, -dtheta)
    theta += dtheta
  end
end