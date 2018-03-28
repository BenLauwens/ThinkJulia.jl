function deletehead!(t)
  shift!(t)
end

function baddeletehead(t)
  t[2:end]                # WRONG!
end

function tail(t)
  t[2:end]
end