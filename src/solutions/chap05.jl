function koch(t, x)
  if x < 3
    Forward(t, x)
  else
    koch(t, x/3)
    Turn(t, -60)
    koch(t, x/3)
    Turn(t, 120)
    koch(t, x/3)
    Turn(t, -60)
    koch(t, x/3)
  end
end