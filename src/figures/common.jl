const preamble_svg = """
\\usepackage{cancel}
\\usepackage{fontspec}
\\setmonofont[Scale=MatchLowercase]{DejaVu Sans Mono}
\\usetikzlibrary{arrows.meta}
"""

const preamble_pdf = """
\\usepackage{cancel}
\\usepackage{fontspec}
\\setmonofont[Scale=MatchLowercase]{Ubuntu Mono}
\\usetikzlibrary{arrows.meta}
"""

const options_svg = "thick, scale=1.25, transform shape"

const options_pdf = "scale=1.0, transform shape"

function makefigs()
  fig00_1()
  fig02_1()
  fig03_1()
  fig04_1()
  fig04_2()
  fig04_3()
  fig04_4()
  fig05_1()
  fig05_2()
  fig06_1()
  fig07_1()
  fig10_1()
  fig10_2()
  fig10_3()
  fig10_4()
  fig10_5()
  fig11_1()
  fig11_2()
  fig12_1()
  fig12_2()
  fig15_1()
  fig15_2()
  fig16_1()
  fig18_1()
end