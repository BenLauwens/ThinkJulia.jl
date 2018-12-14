function fig07_1(output::Symbol, font::String, scale::Float64)
  p = TikzPicture(L"""
  \node[draw, fill=mycolor, minimum width=2cm, minimum height=1cm]{};
  \node[anchor=east] (x) at(-0.5, 0) {\tt x};
  \node[anchor=west] (xv1) at (0.5, 0.25) {\tt \cancel{5}};
  \node[anchor=west] (xv2) at (0.5, -0.25) {\tt 7};
  \draw[-latex,dashed] (x) -- (xv1);
  \draw[-latex] (x) -- (xv2);
  """; options= "scale=$scale, transform shape", preamble="""
  \\usepackage{cancel}
  \\usepackage{fontspec}
  \\setmonofont[Scale=MatchLowercase]{$font}
  \\usetikzlibrary{arrows.meta}
  \\definecolor{mycolor}{RGB}{247,247,248}""")
  output == :pdf ? save(PDF("fig71"), p) : save(SVG("fig71"), p)
end