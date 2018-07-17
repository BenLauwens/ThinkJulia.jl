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

const options_svg = "scale=1.45, transform shape"

const options_pdf = "scale=1.0, transform shape"

function makefigs(output::Symbol, font::String)
  fig00_1(output, font)
  fig02_1(output, font)
  fig03_1(output, font)
  fig04_1(output, font)
  fig04_2(output, font)
  fig04_3(output, font)
  fig04_4(output, font)
  fig05_1(output, font)
  fig05_2(output, font)
  fig06_1(output, font)
  fig07_1(output, font)
  fig10_1(output, font)
  fig10_2(output, font)
  fig10_3(output, font)
  fig10_4(output, font)
  fig10_5(output, font)
  fig11_1(output, font)
  fig11_2(output, font)
  fig12_1(output, font)
  fig12_2(output, font)
  fig15_1(output, font)
  fig15_2(output, font)
  fig16_1(output, font)
  fig18_1(output, font)
end