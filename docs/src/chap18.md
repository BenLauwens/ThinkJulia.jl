# Subtyping

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

In the previous chapter we introduced the multiple dispatch mechanism and polymorphic methods. Not specifying the type of the arguments results in a method that can be called with arguments of any type. Specifying a subset of allowed types in the signature of a method is a logical next step.

In this chapter I demonstrate subtyping using types that represent playing cards, decks of cards, and poker hands.

If you don’t play poker, you can read about it at <http://en.wikipedia.org/wiki/Poker>, but you don’t have to; I’ll tell you what you need to know for the exercises.

## Cards

There are fifty-two cards in a deck, each of which belongs to one of four suits and one of thirteen ranks. The suits are Spades (♠), Hearts (♥), Diamonds (♦), and Clubs (♣). The ranks are Ace (A), 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), and King (K). Depending on the game that you are playing, an Ace may be higher than King or lower than 2.

If we want to define a new object to represent a playing card, it is obvious what the attributes should be: rank and suit. It is not as obvious what type the attributes should be. One possibility is to use strings containing words like `"Spade"` for suits and `"Queen"` for ranks. One problem with this implementation is that it would not be easy to compare cards to see which had a higher rank or suit.

An alternative is to use integers to encode the ranks and suits. In this context, “encode” means that we are going to define a mapping between numbers and suits, or between numbers and ranks. This kind of encoding is not meant to be a secret (that would be “encryption”).

For example, this table shows the suits and the corresponding integer codes:

- ♠  ↦  4

- ♥  ↦  3

- ♦  ↦  2

- ♣  ↦  1

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
const suit_names = ["♣", "♦", "♥", "♠"]
const rank_names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
```

Variables like `suit_names` and `rank_names`, which are defined outside of a type definition or of any method, are called `global` variables. The `const` declaration means that the variable can only be assigned once. This solves the performance problem of global variables.

Now we can implement an appropriate `show` method:

```julia
function Base.show(io::IO, card::Card)
    print(io, rank_names[card.rank], suit_names[card.suit])
end
```

The expression `rank_names[car.rank]` means “use the field `rank` from the object `card` as an index into the array `rank_names`, and select the appropriate string.”

With the methods we have so far, we can create and print cards:

```jldoctest
julia> Card(3, 11)
J♥
```

## Comparing cards

For built-in types, there are relational operators (`<`, `>`, `==`, etc.) that compare values and determine when one is greater than, less than, or equal to another. For programmer-defined types, we can override the behavior of the built-in operators by providing a method named: `Base.isless`.

The correct ordering for cards is not obvious. For example, which is better, the 3 of Clubs or the 2 of Diamonds? One has a higher rank, but the other has a higher suit. In order to compare cards, you have to decide whether rank or suit is more important.

The answer might depend on what game you are playing, but to keep things simple, we’ll make the arbitrary choice that suit is more important, so all of the Spades outrank all of the Diamonds, and so on.

With that decided, we can write `Base.isless`:

```julia
function Base.isless(c1::Card, c2::Card)
    isless((c1.suit, c1.rank), (c2.suit, c2.rank))
end
```

As an exercise, write a `Base.isless` method for mytime objects. You can use tuple comparison, but you also might consider comparing integers.

## Unit testing

*Unit testing* is a way to see if your code is correct by checking that the results are what you expect. It can be helpful to ensure your code still works after you make changes, and can be used when developing as a way of specifying the behaviors your code should have when complete.

Simple unit testing can be performed with the `@test` macros:

```jldoctest
julia> using Base.Test

julia> @test isless(Card(1, 4), Card(2, 4))
Test Passed
julia> @test isless(Card(1, 3), Card(1, 4))
Test Passed
```

`@test` returns a `Test Passed` if the expression following it is `true`, a `Test Failed` if it is false, and an `Error Result` if it could not be evaluated.

## Decks

Now that we have Cards, the next step is to define Decks. Since a deck is made up of cards, it is natural for each Deck to contain an array of cards as an attribute.

The following is a struct definition for `Deck`. The constructor creates the fields cards and generates the standard set of fifty-two cards:

```julia
struct Deck
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
```

The easiest way to populate the deck is with a nested loop. The outer loop enumerates the suits from 1 to 4. The inner loop enumerates the ranks from 1 to 13. Each iteration creates a new `Card` with the current suit and rank, and pushes it to `deck.cards`.

Here is a `Base.show` method for `Deck`:

```julia
function Base.show(io::IO, deck::Deck)
    for card in deck.cards
        print(io, card, " ")
    end
    println()
end
```

Here’s what the result looks like:

```jldoctest
julia> Deck()
A♣ 2♣ 3♣ 4♣ 5♣ 6♣ 7♣ 8♣ 9♣ 10♣ J♣ Q♣ K♣ A♦ 2♦ 3♦ 4♦ 5♦ 6♦ 7♦ 8♦ 9♦ 10♦ J♦ Q♦ K♦ A♥ 2♥ 3♥ 4♥ 5♥ 6♥ 7♥ 8♥ 9♥ 10♥ J♥ Q♥ K♥ A♠ 2♠ 3♠ 4♠ 5♠ 6♠ 7♠ 8♠ 9♠ 10♠ J♠ Q♠ K♠
```

## Add, remove, shuffle and sort

To deal cards, we would like a function that removes a card from the deck and returns it. The function `pop!` provides a convenient way to do that:

```julia
function popcard!(deck::Deck)
    pop!(deck.cards)
end
```

Since `pop!` removes the last card in the array, we are dealing from the bottom of the deck.

To add a card, we can use the function `push!`:

```julia
function add_card!(deck::Deck, card::Card)
    push!(deck.cards, card)
    nothing
end
```

A method like this that uses another method without doing much work is sometimes called a **veneer**. The metaphor comes from woodworking, where a veneer is a thin layer of good quality wood glued to the surface of a cheaper piece of wood to improve the appearance.

In this case `addcard` is a “thin” method that expresses an array operation in terms appropriate for decks. It improves the appearance, or interface, of the implementation.

As another example, we can write a method named `shuffledeck!` using the function `shuffle!`:

```julia
function shuffledeck!(deck::Deck)
    shuffle!(deck.cards)
    nothing
end
```

Write a function named `sortdeck!` that uses the function `sort!` to sort the cards in a Deck. `sort!` uses the `Base.isless` method we defined to determine the order.

## Abstract types and subtyping

We want a type to represent a “hand”, that is, the cards held by one player. A hand is similar to a deck: both are made up of a collection of cards, and both require operations like adding and removing cards.

A hand is also different from a deck; there are operations we want for hands that don’t make sense for a deck. For example, in poker we might compare two hands to see which one wins. In bridge, we might compute a score for a hand in order to make a bid.

So we need a way to group related **concrete types**. In Julia this is done by defining an **abstract type** that serves as a parent for both `Deck` and `Hand`.

Let's call this abstract type `CardSet`:

```julia
abstract type CardSet end
```

The `abstract type` keyword introduces a new abstract type. The name can be optionally followed by `<:` and an already-existing abstract type, indicating that the newly declared abstract type is a **subtype** of this “parent” type.

When no **supertype** is given, the default supertype is `Any` – a predefined abstract type that all objects are instances of and all types are subtypes of.

We can now express that `Deck` is a descendant of `CardSet`:

```julia
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
```

The operator `isa` checks whether an object is of a given type:

```jldoctest
julia> deck = Deck();

julia> deck isa CardSet
true
```

A hand is also a kind of `CardSet`:

```julia
struct Hand <: CardSet
    cards :: Array{Card, 1}
    label :: String
    function Hand(label::String="")
        new(Card[], label)
    end
end
```

Instead of populating the hand with 52 new cards, the constructor for `Hand` initializes `cards` with an empty array. An optional argument can be passed to the constructor giving a label to the `Hand`.

```jldoctest chap18
julia> hand = Hand("new hand")

julia> hand.cards
0-element Array{ThinkJulia.Card,1}
```

## Abstract types and functions

We can now express the common operations between `Deck` and `Hand` as functions having as argument `CardSet`:

```
function Base.show(io::IO, cs::CardSet)
    for card in cs.cards
        print(io, card, " ")
    end
end

function popcard!(cs::CardSet)
    pop!(cs.cards)
end

function addcard!(cs::CardSet, card::Card)
    push!(cs.cards, card)
    nothing
end
```

We can use `pop_card` and `add_card` to deal a card:

```@setup chap18
using ThinkJulia
```

```@repl
julia> deck = Deck();
julia> shuffledeck!(deck)
julia> card = popcard!(deck);
julia> addcard!(hand, card)
julia> hand
```

A natural next step is to encapsulate this code in a function called `movecards!`:

```julia
function move_cards!(cs1::CardSet, cs2::CardSet, n::Int)
    @assert 1 ≤ n ≤ length(cs1.cards)
    for i in 1:n
        card = pop_card!(cs1)
        add_card!(cs2, card)
    end
    nothing
end
```

`movecards!` takes three arguments, two cardset objects and the number of cards to deal. It modifies both cardset objects, and returns `nothing`.

In some games, cards are moved from one hand to another, or from a hand back to the deck. You can use `movecards!` for any of these operations: `cs1` and `cs2` can be either a `Deck` or a `Hand`.

## Type diagrams

So far we have seen stack diagrams, which show the state of a program, and object diagrams, which show the attributes of an object and their values. These diagrams represent a snapshot in the execution of a program, so they change as the program runs.

They are also highly detailed; for some purposes, too detailed. A **type diagram** is a more abstract representation of the structure of a program. Instead of showing individual objects, it shows types and the relationships between them.

There are several kinds of relationship between types:

- Objects of a concrete type might contain references to objects of another type. For example, each `Rectangle` contains a reference to a `Point`, and each `Deck` contains references to an array of `Card`s. This kind of relationship is called **HAS-A**, as in, “a `Rectangle` has a `Point`.

- One type might inherit from an abstract type. This relationship is called **IS-A**, as in, “a `Hand` is a kind of a `CardSet`.”

- One type might depend on another in the sense that objects of one type take objects of the second type as parameters, or use objects of the second type as part of a computation. This kind of relationship is called a **dependency**.
