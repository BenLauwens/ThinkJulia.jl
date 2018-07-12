const ε = 1e-19  

function mysqrt(a)
  x = 1.0
  while true
    y = (x + a / x) / 2.0
    if abs(x-y) < ε
      break
    end
    x = y
  end
  x
end

function pad(str, n)
  str = string(str)
  len = length(str)
  str = str * " " ^ (n-len)
end

function testsquareroot(io::IO)
  print(io, pad("a", 4))
  print(io, pad("mysqrt", 19))
  print(io, pad("sqrt", 19))
  println(io, "diff")
  print(io, pad("-", 4))
  print(io, pad("------", 19))
  print(io, pad("----", 19))
  println(io, "----")
  for a in 1.0:9.0
    mysq = mysqrt(a)
    sq = sqrt(a)
    print(io, pad(a, 4))
    print(io, pad(mysq, 19))
    print(io, pad(sq, 19))
    println(io, abs(mysq - sq))
  end
end