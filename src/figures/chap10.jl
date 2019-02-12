function fig10_1(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[anchor=east](ch) at(-2.75, 0) {\tt cheeses};
  \node[draw, fill=mycolor, minimum width=3.5cm, minimum height=1.5cm](chv){};
  \node[anchor=east] (ch1) at(-1.25, 0.5) {\tt 1};
  \node[anchor=west] (chv1) at (-0.25, 0.5) {\tt "Cheddar"};
  \node[anchor=east] (ch2) at(-1.25, 0) {\tt 2};
  \node[anchor=west] (chv2) at (-0.25, 0) {\tt "Edam"};
  \node[anchor=east] (ch3) at(-1.25, -0.5) {\tt 3};
  \node[anchor=west] (chv3) at (-0.25, -0.5) {\tt "Gouda"};
  \draw[-latex] (ch) -- (chv);
  \draw[-latex] (ch1) -- (chv1);
  \draw[-latex] (ch2) -- (chv2);
  \draw[-latex] (ch3) -- (chv3);
  \node[anchor=east](nu) at(-2.75, -1.75) {\tt numbers};
  \node[draw, fill=mycolor, minimum width=2.5cm, minimum height=1.5cm](nuv) at(-0.5, -1.75){};
  \node[anchor=east] (nu1) at(-1.25, -1.25) {\tt 1};
  \node[anchor=west] (nuv1) at (-0.25, -1.25) {\tt 42};
  \node[anchor=east] (nu2) at(-1.25, -2) {\tt 2};
  \node[anchor=west] (nuv2) at (-0.25, -1.75) {\tt \cancel{123}};
  \node[anchor=west] (nuv3) at (-0.25, -2.25) {\tt 5};
  \draw[-latex] (nu) -- (nuv);
  \draw[-latex] (nu1) -- (nuv1);
  \draw[-latex,dashed] (nu2) -- (nuv2);
  \draw[-latex] (nu2) -- (nuv3);
  \node[anchor=east](em) at(-2.75, -3) {\tt empty};
  \node[draw, fill=mycolor, minimum width=0.5cm, minimum height=0.5cm](emv) at(-1.5, -3){};
  \draw[-latex] (em) -- (emv);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig101"), p) : save(SVG("fig101"), p)
end

function fig10_2(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[draw, fill=mycolor, minimum width=3.5cm, minimum height=1cm] at(-2,0){};
  \node[anchor=east] (a) at(-3, 0.25) {\tt a};
  \node[anchor=west] (av) at (-2, 0.25) {\tt "banana"};
  \node[anchor=east] (b) at(-3, -0.25) {\tt b};
  \node[anchor=west] (bv) at (-2, -0.25) {\tt "banana"};
  \draw[-latex] (a) -- (av);
  \draw[-latex] (b) -- (bv);
  \node[draw, fill=mycolor, minimum width=3.5cm, minimum height=1cm] at(2,0){};
  \node[anchor=east] (aa) at(1, 0.25) {\tt a};
  \node[anchor=west] (v) at (2, 0) {\tt "banana"};
  \node[anchor=east] (bb) at(1, -0.25) {\tt b};
  \draw[-latex] (aa) -- (v);
  \draw[-latex] (bb) -- (v);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig102"), p) : save(SVG("fig102"), p)
end

function fig10_3(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[draw, fill=mycolor, minimum width=3.5cm, minimum height=1cm] at(0,0){};
  \node[anchor=east] (a) at(-1.25, 0.25) {\tt a};
  \node[anchor=west] (av) at (-0.25, 0.25) {\tt [1, 2, 3]};
  \node[anchor=east] (b) at(-1.25, -0.25) {\tt b};
  \node[anchor=west] (bv) at (-0.25, -0.25) {\tt [1, 2, 3]};
  \draw[-latex] (a) -- (av);
  \draw[-latex] (b) -- (bv);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig103"), p) : save(SVG("fig103"), p)
end

function fig10_4(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[draw, fill=mycolor, minimum width=3.5cm, minimum height=1cm] at(0,0){};
  \node[anchor=east] (a) at(-1.25, 0.25) {\tt a};
  \node[anchor=west] (v) at (-0.25, 0) {\tt [1, 2, 3]};
  \node[anchor=east] (b) at(-1.25, -0.25) {\tt b};
  \draw[-latex] (a) -- (v);
  \draw[-latex] (b) -- (v);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig104"), p) : save(SVG("fig104"), p)
end

function fig10_5(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[anchor=east] at(-1.2,0){\tt Main};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm] at(0,0){};
  \node[anchor=west] (l) at(-0.75, 0) {\tt letters};
  \node[anchor=east] at(-1.2,-1){\tt deletehead!};
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=0.5cm] at(0,-1){};
  \node[anchor=west] (t) at(-0.75, -1) {\tt t};
  \node[draw, fill=mycolor, minimum width=2.5cm, minimum height=1.5cm] (a) at(3.25,-0.5){};
  \node[anchor=east] (i1) at(2.5, 0) {\tt 1};
  \node[anchor=west] (v1) at(3.5, 0) {\tt `a`};
  \node[anchor=east] (i2) at(2.5, -0.5) {\tt 2};
  \node[anchor=west] (v2) at(3.5, -0.5) {\tt `b`};
  \node[anchor=east] (i3) at(2.5, -1) {\tt 3};
  \node[anchor=west] (v3) at(3.5, -1) {\tt `c`};
  \draw[-latex] (i1) -- (v1);
  \draw[-latex] (i2) -- (v2);
  \draw[-latex] (i3) -- (v3);
  \draw[-latex] (l.east) -- (a);
  \draw[-latex] (t.east) -- (a);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig105"), p) : save(SVG("fig105"), p)
end