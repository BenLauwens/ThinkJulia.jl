function fig05_1(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[anchor=east] at(-1.5,0){\tt Main};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm]{};
  \node[anchor=east] at(-1.5,-0.75){\tt countdown};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm] at(0,-0.75){};
  \node[anchor=east] (n1) at(-0.5, -0.75) {\tt n};
  \node[anchor=west] (n1v) at (0.5, -0.75) {\tt 3};
  \draw[-latex] (n1) -- (n1v);
  \node[anchor=east] at(-1.5,-1.5){\tt countdown};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm] at(0,-1.5){};
  \node[anchor=east] (n2) at(-0.5, -1.5) {\tt n};
  \node[anchor=west] (n2v) at (0.5, -1.5) {\tt 2};
  \draw[-latex] (n2) -- (n2v);
  \node[anchor=east] at(-1.5,-2.25){\tt countdown};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm] at(0,-2.25){};
  \node[anchor=east] (n3) at(-0.5, -2.25) {\tt n};
  \node[anchor=west] (n3v) at (0.5, -2.25) {\tt 1};
  \draw[-latex] (n3) -- (n3v);
  \node[anchor=east] at(-1.5,-3){\tt countdown};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm] at(0,-3){};
  \node[anchor=east] (n4) at(-0.5, -3) {\tt n};
  \node[anchor=west] (n4v) at (0.5, -3) {\tt 0};
  \draw[-latex] (n4) -- (n4v);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig51"), p) : save(SVG("fig51"), p)
end

function fig05_2(output::Symbol, font::String, scale::Float64)
  ext = output == :pdf ? "pdf" : "svg"
  Drawing(200, 70, "fig52.$ext")  
  origin()
  background("white")  
  🐢 = Turtle()
  Pencolor(🐢, "black")
  Penwidth(🐢, 1)
  Reposition(🐢, -100, 30)
  koch(🐢, 200)
  finish() 
end