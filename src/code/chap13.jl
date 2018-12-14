function processfile(filename)
  hist = Dict()
  for line in eachline(filename)
      processline(line, hist)
  end
  hist
end

function processline(line, hist)
  line = replace(line, '-' => ' ')
  for word in split(line)
      word = string(filter(isletter, [word...])...)
      word = lowercase(word)
      hist[word] = get!(hist, word, 0) + 1
  end
end

function totalwords(hist)
  sum(values(hist))
end

function differentwords(hist)
  length(hist)
end

function mostcommon(hist)
  t = []
  for (key, value) in hist
      push!(t, (value, key))
  end
  reverse!(sort!(t))
end

function printmostcommon(hist, num=10)
  t = most_common(hist)
  println("The most common words are: ")
  for (freq, word) in t[1:num]
      println(word, "\t", freq)
  end
end

function subtract(d1, d2)
  res = Dict()
  for key in keys(d1)
      if key ∉ keys(d2)
          res[key] = nothing
      end
  end
  res
end