function rightjustify(s)
  n = 70 - length(s)
  println(" "^n * s)
end

function dotwice(f)
  f()
  f()
end

function dotwice(f, v)
  f(v)
  f(v)
end

function dofour(f)
  dotwice(f)
  dotwice(f)
end

function dofour(f, v)
  dotwice(f, v)
  dotwice(f, v)
end

function printbeam()
  print("+ - - - - ")
end

function printpost()
  print("|         ")
end

function printbeams()
  dotwice(printbeam)
  println("+")
end

function printposts()
  dotwice(printpost)
  println("|")
end

function printrow()
  printbeams()
  dofour(printposts)
end

function printgrid()
  dotwice(printrow)
  printbeams()
end

function onefourone(f, g, h)
  f()
  dofour(g)
  h()
end

function printplus()
  print("+ ")
end

function printdash()
  print("- ")
end

function printbar()
  print("| ")
end

function printspace()
  print("  ")
end

function printend()
  println()
end

function printnothing() end

function print1beam()
  onefourone(printnothing, printdash, printplus)
end

function print1post()
  onefourone(printnothing, printspace, printbar)
end

function print4beams()
  onefourone(printplus, print1beam, printend)
end

function print4posts()
  onefourone(printbar, print1post, printend)
end

function printrow4()
  onefourone(printnothing, print4posts, print4beams)
end

function printgrid4()
  onefourone(print4beams, printrow4, printnothing)
end
