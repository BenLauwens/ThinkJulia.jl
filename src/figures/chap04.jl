using Luxor

function fig04_1()
  draw_04_1("svg")
  draw_04_1("pdf")
end

function draw_04_1(ext)
  Drawing(102, 10, "fig41.$ext")  
  origin()
  background("white")  
  bob = Turtle()
  Reposition(bob, -50, 0)
  Pencolor(bob, "black")
  Penwidth(bob, 1)
  Forward(bob, 100)
  finish() 
  nothing
end

function fig04_2()
  draw_04_2("svg")
  draw_04_2("pdf")
end

function draw_04_2(ext)
  Drawing(310, 110, "fig42.$ext")  
  origin()
  background("white")  
  bob = Turtle()
  Pencolor(bob, "black")
  Penwidth(bob, 1)
  Reposition(bob, -100, 0)
  flower(bob, 7, 55.0, 60.0)
  Reposition(bob, 0, 0)
  flower(bob, 10, 40.0, 80.0)
  Reposition(bob, 100, 0)
  flower(bob, 20, 140.0, 20.0)
  finish() 
  nothing
end

function fig04_3()
  draw_04_3("svg")
  draw_04_3("pdf")
end

function draw_04_3(ext)
  Drawing(360, 80, "fig43.$ext")  
  origin()
  background("white")  
  bob = Turtle()
  Pencolor(bob, "black")
  Penwidth(bob, 1)
  Reposition(bob, -140, 0)
  size = 40
  draw_pie(bob, 5, size)
  draw_pie(bob, 6, size)
  draw_pie(bob, 7, size)
  draw_pie(bob, 8, size)
  finish() 
  nothing
end