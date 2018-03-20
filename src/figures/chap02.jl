using TikzPictures

function fig02_1()
  p = TikzPicture(L"""
  \node[draw, fill=lightgray, minimum width=10cm, minimum height=1.5cm]{};
  \node[anchor=east] (me) at(-3.5, 0.5) {\tt message};
  \node[anchor=west] (mev) at (-2.5, 0.5) {\tt "And now for something completely different"};
  \draw[-latex] (me) -- (mev);
  \node[anchor=east] (n) at(-3.5, 0) {\tt n};
  \node[anchor=west] (nv) at (-2.5, 0) {\tt 17};
  \draw[-latex] (n) -- (nv);
  \node[anchor=east] (pi) at(-3.5, -0.5) {\tt π};
  \node[anchor=west] (piv) at (-2.5, -0.5) {\tt 3.141592653589793};
  \draw[-latex] (pi) -- (piv);
  """; options=options, preamble=preamble)
  save(SVG("fig21"), p)
  p.options=""
  save(PDF("fig21"), p)
  nothing
end