@testset "chap02" begin
  message = "And now for something completely different"
  @test message == "And now for something completely different"
  n = 17
  @test n == 17
  π = 3.141592653589793
  @test π == 3.141592653589793

  @test n + 25 == 42

  miles = 26.2
  @test miles * 1.61 == 42.182

  io = IOBuffer()
  println(io, miles * 1.61)
  @test String(take!(copy(io))) == "42.182\n"

  io = IOBuffer()
  println(io, 1)
  x = 2
  println(io, x)
  @test String(take!(copy(io))) == "1\n2\n"

  first = "throat"
  second = "warbler"
  @test first * second == "throatwarbler"

  @test "Spam"^3 == "Spam"*"Spam"*"Spam"
end