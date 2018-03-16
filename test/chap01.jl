@testset "chap01" begin
  Base.banner()

  @test 1 + 1 == 2

  io = IOBuffer()
  println(io, "Hello, World!")
  @test String(take!(copy(io))) == "Hello, World!\n"

  @test 40 + 2 == 42
  @test 43 - 1 == 42
  @test 6 * 7 == 42
  @test 84 / 2 == 42.0
  @test 6^2 + 6 == 42

  @test typeof(2) == Int64
  @test typeof(42.0) == Float64
  @test typeof("Hello, World!") == String
  @test typeof("2") == String
  @test typeof("42.0") == String

  @test (1,000,000) == (1, 0, 0)
end