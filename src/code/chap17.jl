function increment!(time::MyTime, seconds::Int64)
  seconds += timetoint(time)
  inttotime(seconds)
end

function +(t1::MyTime, t2::MyTime)
  seconds = timetoint(t1) + timetoint(t2)
  inttotime(seconds)
end

function +(time::MyTime, seconds::Int64)
  increment!(time, seconds)
end

function +(seconds::Int64, time::MyTime)
  increment!(time, seconds)
end

function printtime(time)
  println("I don't know how to print the argument time.")
end

function printtime(time::MyTime)
  @printf("%02d:%02d:%02d", time.hour, time.minute, time.second)
end