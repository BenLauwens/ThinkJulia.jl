function firstindex(str::String)
  nextind(str, 0)
end

function lastindex(str::String)
  prevind(str, sizeof(str)+1)
end

function inboth(word1, word2)
  for letter in word1
    if letter in word2
      println(letter)
    end
  end
end