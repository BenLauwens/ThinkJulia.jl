function fig18_1(output::Symbol, font::String)
    p = TikzPicture(L"""
        \node(cs) [draw, fill=lightgray, minimum width=1.5cm, minimum height=1cm]{\tt CardSet};
        \node(de) [draw, fill=lightgray, minimum width=1.5cm, minimum height=1cm] at(-2, -1.5) {\tt Deck};
        \node(ha) [draw, fill=lightgray, minimum width=1.5cm, minimum height=1cm] at(2, -1.5) {\tt Hand};
        \node(ca) [draw, fill=lightgray, minimum width=1.5cm, minimum height=1cm] at(0, -3) {\tt Card};
        \draw[arrows = {-Triangle[open, length=5pt, width=5pt]}] (de)--(cs);
        \draw[arrows = {-Triangle[open, length=5pt, width=5pt]}] (ha)--(cs);
        \draw[arrows = {-Straight Barb[length=5pt, width=5pt]}] (de)--(ca);
        \draw[arrows = {-Straight Barb[length=5pt, width=5pt]}] (ha)--(ca);
        \node at(-0.6, -2.4){*};
        \node at(0.6, -2.4){*};
        """; options= output == :pdf ? "scale=1, transform shape" : "scale=1.4, transform shape", preamble="""
        \\usepackage{cancel}
        \\usepackage{fontspec}
        \\setmonofont[Scale=MatchLowercase]{$font}
        \\usetikzlibrary{arrows.meta}
        """)
        output == :pdf ? save(PDF("fig181"), p) : save(SVG("fig181"), p)
end
