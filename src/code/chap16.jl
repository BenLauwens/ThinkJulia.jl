mutable struct MyTime
  hour 
  minute
  second
  function MyTime(hour=0, minute=0, second=0)
    new(hour, minute, second)
  end
end