using TikzPictures
using Luxor

function fig05_1()
  p = TikzPicture(L"""
  \node[anchor=east] at(-2,0){\tt \_\_main\_\_};
  \node[draw, fill=lightgray, minimum width=3cm, minimum height=0.5cm]{};
  \node[anchor=east] at(-2,-0.75){\tt countdown};
  \node[draw, fill=lightgray, minimum width=3cm, minimum height=0.5cm] at(0,-0.75){};
  \node[anchor=east] (n1) at(-1, -0.75) {\tt n};
  \node[anchor=west] (n1v) at (0, -0.75) {\tt 3};
  \draw[-latex] (n1) -- (n1v);
  \node[anchor=east] at(-2,-1.5){\tt countdown};
  \node[draw, fill=lightgray, minimum width=3cm, minimum height=0.5cm] at(0,-1.5){};
  \node[anchor=east] (n2) at(-1, -1.5) {\tt n};
  \node[anchor=west] (n2v) at (0, -1.5) {\tt 2};
  \draw[-latex] (n2) -- (n2v);
  \node[anchor=east] at(-2,-2.25){\tt countdown};
  \node[draw, fill=lightgray, minimum width=3cm, minimum height=0.5cm] at(0,-2.25){};
  \node[anchor=east] (n3) at(-1, -2.25) {\tt n};
  \node[anchor=west] (n3v) at (0, -2.25) {\tt 1};
  \draw[-latex] (n3) -- (n3v);
  \node[anchor=east] at(-2,-3){\tt countdown};
  \node[draw, fill=lightgray, minimum width=3cm, minimum height=0.5cm] at(0,-3){};
  \node[anchor=east] (n4) at(-1, -3) {\tt n};
  \node[anchor=west] (n4v) at (0, -3) {\tt 0};
  \draw[-latex] (n4) -- (n4v);
  """; options="", preamble=preamble)
  save(SVG("fig51"), p)
  save(PDF("fig51"), p)
  nothing
end

function draw_05_2(ext)
  Drawing(200, 70, "fig52.$ext")  
  origin()
  background("white")  
  bob = Turtle()
  Pencolor(bob, "black")
  Penwidth(bob, 1)
  Reposition(bob, -100, 30)
  koch(bob, 200)
  finish() 
  nothing
end

function fig05_2()
  draw_05_2("svg")
  draw_05_2("pdf")
end