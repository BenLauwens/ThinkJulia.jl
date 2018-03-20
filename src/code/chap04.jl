using Luxor

function forward(t::Turtle, d)
  Forward(t, d)
end

function turn(t::Turtle, angle)
  Turn(t, angle)
end

function penup(t::Turtle)
  Penup(t)
end

function pendown(t::Turtle)
  Pendown(t)
end

function polyline(t, n, length, angle)
  for i in 1:n
      forward(t, length)
      turn(t, -angle)
  end
end

function polygon(t, n, length)
  angle = 360 / n
  polyline(t, n, length, angle)
end

function square(t, length)
  polygon(t, 4, length)
end

function arc(t, r, angle)
  arc_length = 2 * π * r * abs(angle) / 360
  n = trunc(arc_length / 4) + 3
  step_length = arc_length / n
  step_angle = angle / n
  turn(t, step_angle/2)
  polyline(t, n, step_length, step_angle)
  turn(t, -step_angle/2)
end

function circle(t, r)
  arc(t, r, 360)
end