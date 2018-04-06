mutable struct MyTime
  hour :: Int
  minute :: Int
  second :: Int
  function MyTime(hour::Int=0, minute::Int=0, second::Int=0)
    new(hour, minute, second)
  end
end