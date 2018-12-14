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

const suit_names = ["♣", "♦", "♥", "♠"]
const rank_names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

function Base.show(io::IO, card::Card)
  print(io, rank_names[card.rank], suit_names[card.suit])
end

function Base.isless(c1::Card, c2::Card)
  isless((c1.suit, c1.rank), (c2.suit, c2.rank))
end

struct Deck <: CardSet
    cards :: Array{Card, 1}
    function Deck()
        deck = new(Card[])
        for suit in 1:4
            for rank in 1:13
                push!(deck.cards, Card(suit, rank))
            end
        end
        deck
    end
end

function Base.show(io::IO, cs::CardSet)
    for card in cs.cards
        print(io, card, " ")
    end
end

function Base.pop!(cs::CardSet)
    pop!(cs.cards)
end

function Base.push!(cs::CardSet, card::Card)
    push!(cs.cards, card)
    nothing
end

function Random.shuffle!(deck::Deck)
    shuffle!(deck.cards)
    nothing
end

struct Hand <: CardSet
    cards :: Array{Card, 1}
    label :: String
    function Hand(label::String="")
        new(Card[], label)
    end
end

function move!(cs1::CardSet, cs2::CardSet, n::Int)
    @assert 1 ≤ n ≤ length(cs1.cards)
    for i in 1:n
        card = pop!(cs1)
        push!(cs2, card)
    end
    nothing
end

function Base.sort!(hand::Hand)
    sort!(hand.cards)
end
