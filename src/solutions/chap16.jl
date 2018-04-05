function printtime(t)
  @printf("%02d:%02d:%02d", t.hour, t.minute, t.second)
end

function isafter(t1, t2)
  (t1.hour, t1.minute, t1.second) > (t2.hour, t2.minute, t2.second)
end