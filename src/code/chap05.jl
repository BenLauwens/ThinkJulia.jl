function countdown(n)
  if n <= 0
      println("Blastoff!")
  else
      print(n, " ")
      countdown(n-1)
  end
end

function printn(s, n)
  if n <= 0
      return
  end
  println(s)
  printn(s, n-1)
end

function recurse()
  recurse()
end