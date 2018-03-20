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