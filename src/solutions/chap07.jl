const ϵ = 1e-19  

function mysqrt(a)
  x = 1.0
  while true
    y = (x + a / x) / 2.0
    if abs(x-y) < ϵ
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

function testsquareroot()
  print(pad("a", 4))
  print(pad("mysqrt", 19))
  print(pad("sqrt", 19))
  println("diff")
  print(pad("-", 4))
  print(pad("------", 19))
  print(pad("----", 19))
  println("----")
  for a in 1.0:9.0
    mysq = mysqrt(a)
    sq = sqrt(a)
    print(pad(a, 4))
    print(pad(mysq, 19))
    print(pad(sq, 19))
    println(abs(mysq - sq))
  end
end