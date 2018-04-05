function fig15_1()
  p = TikzPicture(L"""
  \node[anchor=east](blank) at (-2.25, 0) {\tt p};
  \node[draw, fill=lightgray, minimum width=2.5cm, minimum height=1cm](Point) at(0,0){};
  \node[anchor=west] at (-1.25, 0.75) {\tt Point};
  \node[anchor=east] (x) at(-0.75, 0.25) {\tt x};
  \node[anchor=west] (xv) at (0.25, 0.25) {\tt 3.0};
  \node[anchor=east] (y) at(-0.75, -0.25) {\tt y};
  \node[anchor=west] (yv) at (0.25, -0.25) {\tt 4.0};
  \draw[-latex] (blank) -- (Point);
  \draw[-latex] (x) -- (xv);
  \draw[-latex] (y) -- (yv);
  """; options=options_svg, preamble=preamble_svg)
  save(SVG("fig151"), p)
  p.options=options_pdf
  p.preamble=preamble_pdf
  save(PDF("fig151"), p)
  nothing
end