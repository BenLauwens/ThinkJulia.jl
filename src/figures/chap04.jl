function fig04_1()
  draw04_1("svg")
  draw04_1("pdf")
end

function draw04_1(ext)
  Drawing(102, 10, "fig41.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Reposition(🐢, -50, 0)
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  forward(🐢, 100)
  finish() 
  nothing
end

function fig04_2()
  draw04_2("svg")
  draw04_2("pdf")
end

function draw04_2(ext)
  Drawing(310, 110, "fig42.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  Reposition(🐢, -100, 0)
  flower(🐢, 7, 55.0, 60.0)
  Reposition(🐢, 0, 0)
  flower(🐢, 10, 40.0, 80.0)
  Reposition(🐢, 100, 0)
  flower(🐢, 20, 140.0, 20.0)
  finish() 
  nothing
end

function fig04_3()
  draw04_3("svg")
  draw04_3("pdf")
end

function draw04_3(ext)
  Drawing(360, 80, "fig43.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  Reposition(🐢, -140, 0)
  size = 40
  drawpie(🐢, 5, size)
  drawpie(🐢, 6, size)
  drawpie(🐢, 7, size)
  drawpie(🐢, 8, size)
  finish() 
  nothing
end

function fig04_4()
  draw04_4("svg")
  draw04_4("pdf")
end

function draw04_4(ext)
  Drawing(110, 110, "fig44.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  Reposition(🐢, 0, 15)
  spiral(🐢, 230, 3, 0.1, 0.0002)
  finish() 
  nothing
end