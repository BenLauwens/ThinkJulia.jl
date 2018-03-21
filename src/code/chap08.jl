function inboth(word1, word2)
  for letter in word1
    if letter in word2
      println(letter)
    end
  end
end