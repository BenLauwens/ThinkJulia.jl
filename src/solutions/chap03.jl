function right_justify(s)
  n = 70 - length(s)
  println(" "^70 * s)
end

function do_twice(f)
  f()
  f()
end

function do_twice(f, v)
  f(v)
  f(v)
end

function do_four(f)
  do_twice(f)
  do_twice(f)
end

function do_four(f, v)
  do_twice(f, v)
  do_twice(f, v)
end

function print_beam()
  print("+ - - - - ")
end

function print_post()
  print("|         ")
end

function print_beams()
  do_twice(print_beam)
  println("+")
end

function print_posts()
  do_twice(print_post)
  println("|")
end

function print_row()
  print_beams()
  do_four(print_posts)
end

function print_grid()
  do_twice(print_row)
  print_beams()
end

function one_four_one(f, g, h)
  f()
  do_four(g)
  h()
end

function print_plus()
  print("+ ")
end

function print_dash()
  print("- ")
end

function print_bar()
  print("| ")
end

function print_space()
  print("  ")
end

function print_end()
  println()
end

function print_nothing() end

function print1beam()
  one_four_one(print_nothing, print_dash, print_plus)
end

function print1post()
  one_four_one(print_nothing, print_space, print_bar)
end

function print4beams()
  one_four_one(print_plus, print1beam, print_end)
end

function print4posts()
  one_four_one(print_bar, print1post, print_end)
end

function print_row4()
  one_four_one(print_nothing, print4posts, print4beams)
end

function print_grid4()
  one_four_one(print4beams, print_row4, print_nothing)
end