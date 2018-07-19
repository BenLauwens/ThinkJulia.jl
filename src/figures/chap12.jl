function fig12_1(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[draw, fill=mycolor, minimum width=3.5cm, minimum height=1cm] at(0,0){};
  \node[anchor=east] (a) at(-1.25, 0.25) {\tt 1};
  \node[anchor=west] (av) at (-0.25, 0.25) {\tt "Cleese"};
  \node[anchor=east] (b) at(-1.25, -0.25) {\tt 2};
  \node[anchor=west] (bv) at (-0.25, -0.25) {\tt "John"};
  \draw[-latex] (a) -- (av);
  \draw[-latex] (b) -- (bv);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig121"), p) : save(SVG("fig121"), p)
end

function fig12_2(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node(hist) [draw, fill=mycolor, minimum width=7.5cm, minimum height=3cm]{};
  \node[anchor=east](nc) at(-0.25,1.25) {\tt ("Cleese","John")};
  \node[anchor=west](c) at(0.75,1.25) {\tt "08700 100 222"};
  \draw[-latex](nc)--(c);
  \node[anchor=east](ng) at(-0.25,0.75) {\tt ("Chapman","Graham")};
  \node[anchor=west](g) at(0.75,0.75) {\tt "08700 100 222"};
  \draw[-latex](ng)--(g);
  \node[anchor=east](ni) at(-0.25,0.25) {\tt ("Idle","Eric")};
  \node[anchor=west](i) at(0.75,0.25) {\tt "08700 100 222"};
  \draw[-latex](ni)--(i);
  \node[anchor=east](nt) at(-0.25,-0.25) {\tt ("Gilliam","Terry")};
  \node[anchor=west](t) at(0.75,-0.25) {\tt "08700 100 222"};
  \draw[-latex](nt)--(t);
  \node[anchor=east](nj) at(-0.25,-0.75) {\tt ("Jones","Terry")};
  \node[anchor=west](j) at(0.75,-0.75) {\tt "08700 100 222"};
  \draw[-latex](nj)--(j);
  \node[anchor=east](np) at(-0.25,-1.25) {\tt ("Palin","Michael")};
  \node[anchor=west](p) at(0.75,-1.25) {\tt "08700 100 222"};
  \draw[-latex](np)--(p);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig122"), p) : save(SVG("fig122"), p)
end