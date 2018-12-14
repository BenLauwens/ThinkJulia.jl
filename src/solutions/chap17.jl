function timetoint(time::MyTime)
  minutes = time.hour * 60 + time.minute
  seconds = minutes * 60 + time.second
end

function inttotime(seconds::Int64)
  (minutes, second) = divrem(seconds, 60)
  hour, minute = divrem(minutes, 60)
  MyTime(hour, minute, second)
end