@testset "chap03" begin
  @test typeof(42) == Int64

  @test parse(Int64, "32") == 32
  @test_throws ArgumentError parse(Int64, "Hello")

  @test trunc(3.99999) == 3
  @test trunc(-2.3) == -2

  @test float(32) == 32.0
  @test float("3.14159") == 3.14159

  @test string(32) == "32"
  @test string(3.14159) == "3.14159"

  signal_power = 9
  noise_power = 10
  ratio = signal_power / noise_power
  @test decibels = 10 * log10(ratio) == -0.4575749056067512

  radians = 0.7
  @test sin(radians) == 0.644217687237691

  degrees = 45
  radians = degrees / 180.0 * π
  @test sin(radians) == 0.7071067811865475

  @test sqrt(2) / 2 == 0.7071067811865476

  x = sin(degrees / 360.0 * 2 * π)
  @test x == 0.7071067811865475
  x = exp(log(x+1))
  @test x == 1.7071067811865475

  function print_lyrics(io)
    println(io, "I'm a lumberjack, and I'm okay.")
    println(io, "I sleep all night and I work all day.")
  end

  @test print_lyrics isa Function
  io = IOBuffer()
  print_lyrics(io)
  @test String(take!(copy(io))) == "I'm a lumberjack, and I'm okay.\nI sleep all night and I work all day.\n"

  function repeat_lyrics(io)
    print_lyrics(io)
    print_lyrics(io)
  end
  io = IOBuffer()
  repeat_lyrics(io)
  @test String(take!(copy(io))) == "I'm a lumberjack, and I'm okay.\nI sleep all night and I work all day.\n" ^ 2

  function print_twice(io, bruce)
    println(io, bruce)
    println(io, bruce)
  end
  io = IOBuffer()
  print_twice(io, "Spam")
  print_twice(io, 42)
  print_twice(io, π)
  @test String(take!(copy(io))) == "Spam\n" ^ 2 * "42\n" ^ 2 * "$π\n" ^2

  io = IOBuffer()
  print_twice(io, "Spam "^4)
  print_twice(io, cos(π))
  @test String(take!(copy(io))) == ("Spam " ^ 4 * "\n") ^ 2 * "$(cos(π))\n" ^2

  io = IOBuffer()
  michael = "Eric, the half a bee."
  print_twice(io, michael)
  @test String(take!(copy(io))) == "Eric, the half a bee.\n" ^ 2

  function cat_twice(io, part1, part2)
    concat = part1 * part2
    print_twice(io, concat)
  end
  line1 = "Bing tiddle "
  line2 = "tiddle bang."
  io = IOBuffer()
  cat_twice(io, line1, line2)
  @test String(take!(copy(io))) == "Bing tiddle tiddle bang.\n" ^ 2

  @test_throws UndefVarError println(concat)

  io = IOBuffer()
  result = print_twice(io, "Bing")
  println(io, result)
  @test String(take!(copy(io))) == "Bing\n" ^ 2 * "nothing\n"

  @test typeof(nothing) == Void
end