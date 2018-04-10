abstract type CardSet end

struct Card
  suit :: Int64
  rank :: Int64
  function Card(suit::Int64, rank::Int64)
      @assert(1 ≤ suit ≤ 4, "suit is between 1 and 4")
      @assert(1 ≤ rank ≤ 13, "rank is between 1 and 13")
      new(suit, rank)
  end
end

const suit_names = ["Clubs", "Diamonds", "Hearts", "Spades"]
const rank_names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

function Base.show(io::IO, card::Card)
  print(io, rank_names[card.rank], " of ", suit_names[card.suit])
end