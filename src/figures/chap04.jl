function fig04_1(output::Symbol, font::String, scale::Float64)
  ext = output == :pdf ? "pdf" : "svg"
  Drawing(102, 10, "fig41.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Reposition(🐢, -50, 0)
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  forward(🐢, 100)
  finish() 
end

function fig04_2(output::Symbol, font::String, scale::Float64)
  ext = output == :pdf ? "pdf" : "svg"
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
end

function fig04_3(output::Symbol, font::String, scale::Float64)
  ext = output == :pdf ? "pdf" : "svg"
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
end

function fig04_4(output::Symbol, font::String, scale::Float64)
  ext = output == :pdf ? "pdf" : "svg"
  Drawing(110, 110, "fig44.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  Reposition(🐢, 0, 15)
  spiral(🐢, 230, 3, 0.1, 0.0002)
  finish() 
end