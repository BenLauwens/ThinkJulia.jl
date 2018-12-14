function printlyrics()
  println("I'm a lumberjack, and I'm okay.")
  println("I sleep all night and I work all day.")
end

function repeatlyrics()
  printlyrics()
  printlyrics()
end

function printtwice(bruce)
  println(bruce)
  println(bruce)
end

function cattwice(part1, part2)
  concat = part1 * part2
  printtwice(concat)
end