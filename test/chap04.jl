@testset "chap04" begin
io = IOBuffer()
for i in 1:4
  println(io, "Hello!")
end
@test String(take!(copy(io))) == "Hello!\nHello!\nHello!\nHello!\n"
end