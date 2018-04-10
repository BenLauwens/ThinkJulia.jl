# Abstract types

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

In the previous chapter we have introduced polymorphic functions. Not specifying the type of the arguments results in a method that can be called with arguments of any type. Specifying a subset of types for which a function is dispatched is a logical next step.

In this chapter I demonstrate hierarchic polymorphism using types that represent playing cards, decks of cards, and poker hands.
If you don’t play poker, you can read about it at <http://en.wikipedia.org/wiki/Poker>, but you don’t have to; I’ll tell you what you need to know for the exercises.

## Cards

There are fifty-two cards in a deck, each of which belongs to one of four suits and one of thirteen ranks. The suits are Spades, Hearts, Diamonds, and Clubs. The ranks are Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King. Depending on the game that you are playing, an Ace may be higher than King or lower than 2.

If we want to define a new object to represent a playing card, it is obvious what the attributes should be: rank and suit. It is not as obvious what type the attributes should be. One possibility is to use strings containing words like `"Spade"` for suits and `"Queen"` for ranks. One problem with this implementation is that it would not be easy to compare cards to see which had a higher rank or suit.

An alternative is to use integers to encode the ranks and suits. In this context, “encode” means that we are going to define a mapping between numbers and suits, or between numbers and ranks. This kind of encoding is not meant to be a secret (that would be “encryption”).

For example, this table shows the suits and the corresponding integer codes:

- Spades  ↦  4
- Hearts  ↦  3
- Diamonds  ↦  2
- Clubs  ↦  1

This code makes it easy to compare cards; because higher suits map to higher numbers, we can compare suits by comparing their codes.

I am using the ↦ symbol to make it clear that these mappings are not part of the Julia program. They are part of the program design, but they don’t appear explicitly in the code.

The struct definition for `Card` looks like this:

```julia
struct Card
    suit :: Int64
    rank :: Int64
    function Card(suit::Int64, rank::Int64)
        @assert(1 ≤ suit ≤ 4, "suit is between 1 and 4")
        @assert(1 ≤ rank ≤ 13, "rank is between 1 and 13")
        new(suit, rank)
    end
end
```

To create a `Card`, you call `Card` with the suit and rank of the card you want:

```@raw latex
\begin{minted}{jlcon}
julia> queen_of_diamonds = Card(2, 12)
ThinkJulia.Card(2, 12)
\end{minted}
```

```@raw html
<pre><code class="language-julia-repl">julia&gt; julia> queen_of_diamonds = Card(2, 12)
ThinkJulia.Card(2, 12)</code></pre>
```

## Constants

In order to print `Card` objects in a way that people can easily read, we need a mapping from the integer codes to the corresponding ranks and suits. A natural way to do that is with arrays of strings:

```julia
const suit_names = ["Clubs", "Diamonds", "Hearts", "Spades"]
const rank_names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
```

Variables like `suit_names` and `rank_names`, which are defined outside of a type definition or of any method, are called `global` variables. The `const` declaration means that the variable can only be assigned once. This solves the performance problem of global variables.

Now we can implement an appropriate `show` method:

```julia
function Base.show(io::IO, card::Card)
    print(io, rank_names[card.rank], " of ", suit_names[card.suit])
end
```

The expression `rank_names[car.rank]` means “use the field `rank` from the object `card` as an index into the array `rank_names`, and select the appropriate string.”

With the methods we have so far, we can create and print cards:

```jldoctest
julia> Card(3, 1)
Ace of Hearts
```