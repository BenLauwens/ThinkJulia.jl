using TikzPictures

function fig07_1()
  p = TikzPicture(L"""
  \node[draw, fill=lightgray, minimum width=2cm, minimum height=1cm]{};
  \node[anchor=east] (x) at(-0.5, 0) {\tt x};
  \node[anchor=west] (xv1) at (0.5, 0.25) {\tt \cancel{5}};
  \node[anchor=west] (xv2) at (0.5, -0.25) {\tt 7};
  \draw[-latex,dashed] (x) -- (xv1);
  \draw[-latex] (x) -- (xv2);
  """; options=options_svg, preamble=preamble_svg)
  save(SVG("fig71"), p)
  p.options=options_pdf
  p.preamble=preamble_pdf
  save(PDF("fig71"), p)
  nothing
end