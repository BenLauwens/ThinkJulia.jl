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

function polyline(t, n, len, angle)
  for i in 1:n
    forward(t, len)
    turn(t, -angle)
  end
end

function polygon(t, n, len)
  angle = 360 / n
  polyline(t, n, len, angle)
end

function square(t, len)
  polygon(t, 4, len)
end

function arc(t, r, angle)
  arc_len = 2 * π * r * abs(angle) / 360
  n = trunc(arc_len / 4) + 3
  step_len = arc_len / n
  step_angle = angle / n
  turn(t, -step_angle/2)
  polyline(t, n, step_len, step_angle)
  turn(t, step_angle/2)
end

function circle(t, r)
  arc(t, r, 360)
end