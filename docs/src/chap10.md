# Arrays

This chapter presents one of Julia’s most useful built-in types, arrays. You will also learn about objects and what can happen when you have more than one name for the same object.

## An array is a sequence

Like a string, an **array** is a sequence of values. In a string, the values are characters; in an array, they can be any type. The values in an array are called **elements** or sometimes **items**.

There are several ways to create a new array; the simplest is to enclose the elements in square brackets (`[ ]`):

```julia
[10, 20, 30, 40]
["crunchy frog", "ram bladder", "lark vomit"]
```

The first example is an array of four integers. The second is an array of three strings. The elements of an array don’t have to be the same type. The following array contains a string, a float, an integer, and another array:

```julia
["spam", 2.0, 5, [10, 20]]
```

As you might expect, you can assign array values to variables:

```jldoctest chap10
julia> cheeses = ["Cheddar", "Edam", "Gouda"];

julia> numbers = [42, 123];

julia> empty = [];

julia> print(cheeses, " ", numbers, " ", empty)
String["Cheddar", "Edam", "Gouda"] [42, 123] Any[]
```

The function `typeof` can be used to find out the kind of the array:

```jldoctest chap10
julia> typeof(cheeses)
Array{String,1}

julia> typeof(numbers)
Array{Int64,1}

julia> typeof(empty)
Array{Any,1}
```

The kind of the array is specified between curly braces and is composed of a type and a number. The number indicate the dimensions. The array `empty` contains values of type `Any`. This a predefined type that can represent any type.

## Arrays are mutable

The syntax for accessing the elements of an array is the same as for accessing the characters of a string—the bracket operator. The expression inside the brackets specifies the index. Remember that the indices start at 1:

```jldoctest chap10
julia> cheeses[1]
"Cheddar"
```

Unlike strings, arrays are **mutable**. When the bracket operator appears on the left side of an assignment, it identifies the element of the array that will be assigned:

```jldoctest chap10
julia> numbers[2] = 5;

julia> print(numbers)
[42, 5]
```

The second element of `numbers`, which used to be 123, is now 5.

Figure 10.1 shows the state diagrams for `cheeses`, `numbers` and `empty`.

```@eval
using ThinkJulia
fig10_1()
```

```@raw html
<figure>
  <img src="fig101.svg" alt="State diagrams.">
  <figcaption>Figure 10.1. State diagrams.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig101}
\caption{State diagrams.}
\label{fig101}
\end{figure}
```

Arrays are represented by boxes and the elements of the array inside. `cheeses` refers to an array with three elements indexed `1`, `2` and `3`. `numbers` contains two elements; the diagram shows that the value of the second element has been reassigned from `123` to `5`. `empty` refers to an array with no elements.

Array indices work the same way as string indices:

- Any integer expression can be used as an index.

- If you try to read or write an element that does not exist, you get a `BoundsError`.

- The keyword `end` points to the last index of the array.

The `∈` operator also works on arrays:

```jldoctest chap10
julia> "Edam" ∈ cheeses
true

julia> "Brie" in cheeses
false
```

## Traversing an array

The most common way to traverse the elements of an array is with a `for` loop. The syntax is the same as for strings:

```julia
for cheese in cheeses
    println(cheese)
end
```

This works well if you only need to read the elements of the array. But if you want to write or update the elements, you need the indices. A common way to do that is to use the built-in function `length`:

```julia
for i in 1:length(numbers)
    numbers[i] = numbers[i] * 2
end
```

This loop traverses the array and updates each element. `length` returns the number of elements in the array. Each time through the loop `i` gets the index of the next element. The assignment statement in the body uses `i` to read the old value of the element and to assign the new value.

A `for` loop over an empty array never runs the body:

```julia
for x in []
    println("This can never happens.")
end
```

Although an array can contain another array, the nested array still counts as a single element. The length of this array is four:

```julia
["spam", 1, ["Brie", "Roquefort", "Camembert"], [1, 2, 3]]
```

## Array slices

The slice operator also works on arrays:

```jldoctest chap10
julia> t = ['a', 'b', 'c', 'd', 'e', 'f'];

julia> print(t[1:3])
['a', 'b', 'c']
julia> print(t[3:end])
['c', 'd', 'e', 'f']
```

The slice operator `[:]`, makes a copy of the whole array:

```jldoctest chap10
julia> print(t[:])
['a', 'b', 'c', 'd', 'e', 'f']
```

Since arrays are mutable, it is often useful to make a copy before performing operations that modify arrays.

A slice operator on the left side of an assignment can update multiple elements:

```jldoctest chap10
julia> t[2:3] = ['x', 'y'];

julia> print(t)
['a', 'x', 'y', 'd', 'e', 'f']
```

## Array library functions

Julia provides functions that operate on arrays. For example, `push!` adds a new element to the end of an array:

```jldoctest chap10
julia> t = ['a', 'b', 'c'];

julia> push!(t, 'd');

julia> print(t)
['a', 'b', 'c', 'd']
```

`append!` add the elements of the second array to the end of the first:

```jldoctest chap10
julia> t1 = ['a', 'b', 'c'];

julia> t2 = ['d', 'e'];

julia> append!(t1, t2);

julia> print(t1)
['a', 'b', 'c', 'd', 'e']
```

This example leaves `t2` unmodified.

`sort!` arranges the elements of the array from low to high:

```jldoctest chap10
julia> t = ['d', 'c', 'e', 'b', 'a'];

julia> sort!(t);

julia> print(t)
['a', 'b', 'c', 'd', 'e']
```

`sort` returns a copy of the elements of the array in order:

```jldoctest chap10
julia> t1 = ['d', 'c', 'e', 'b', 'a'];

julia> t2 = sort(t1);

julia> print(t1)
['d', 'c', 'e', 'b', 'a']
julia> print(t2)
['a', 'b', 'c', 'd', 'e']
```

As a style convention in Julia, `!` is appended to names of functions that modify their arguments.

## Dot syntax

For every binary operator like `^`, there is a corresponding **dot operator** `.^` that is automatically defined to perform `^` element-by-element on arrays. For example, `[1, 2, 3] ^ 3` is not defined, but `[1, 2, 3] .^ 3` is defined as computing the elementwise result `[1^3, 2^3, 3^3]`:

```jldoctest
julia> print([1, 2, 3] .^ 3)
[1, 8, 27]
```

Any Julia function `f` can be applied elementwise to any array with the **dot syntax**. For example to capitalize an array of strings, we don't need a loop:

```jldoctest
julia> t = uppercase.(["abc", "def", "ghi"]);

julia> print(t)
String["ABC", "DEF", "GHI"]
```

## Map, filter and reduce

To add up all the numbers in an array, you can use a loop like this:

```julia
function addall(t)
    total = 0
    for x in t
        total += x
    end
    total
end
```

`total` is initialized to 0. Each time through the loop, `x` gets one element from the array. The `+=` operator provides a short way to update a variable. This **augmented assignment statement**,

```julia
total += x
```

is equivalent to

```julia
total = total + x
```

As the loop runs, `total` accumulates the sum of the elements; a variable used this way is sometimes called an **accumulator**.

Adding up the elements of an array is such a common operation that Julia provides it as a built-in function, `sum`:

```jldoctest
julia> t = [1, 2, 3, 4];

julia> sum(t)
10
```

An operation like this that combines a sequence of elements into a single value is sometimes called **reduce**.

Sometimes you want to traverse one array while building another. For example, the following function takes an array of strings and returns a new array that contains capitalized strings:

```julia
function capitalizeall(t)
    res = []
    for s in t
        push!(res, uppercase(s))
    end
    res
end
```

`res` is initialized with an empty array; each time through the loop, we append the next element. So `res` is another kind of accumulator.

An operation like `capitalizeall` is sometimes called a **map** because it “maps” a function (in this case `uppercase`) onto each of the elements in a sequence.

Another common operation is to select some of the elements from an array and return a subarray. For example, the following function takes an array of strings and returns a array that contains only the uppercase strings:

```julia
function onlyupper(t)
    res = []
    for s in t
        if all(isupper, s)
            push!(res, s)
        end
    end
    res
end
```

The function `all(f, itr)` determines whether the function `f` returns `true` for all elements of `itr`, returning `false` as soon as the first item in `itr` for which `f` returns `false` is encountered.

An operation like `onlyupper` is called a **filter** because it selects some of the elements and filters out the others.

Most common array operations can be expressed as a combination of map, filter and reduce.

## Deleting (inserting) elements

There are several ways to delete elements from an array. If you know the index of the element you want, you can use `splice!`:

```jldoctest
julia> t = ['a', 'b', 'c'];

julia> splice!(t, 2)
'b': ASCII/Unicode U+0062 (category Ll: Letter, lowercase)

julia> print(t)
['a', 'c']
```

`splice!` modifies the array and returns the element that was removed.

`pop!` deletes and returns the last element:

```jldoctest
julia> t = ['a', 'b', 'c'];

julia> pop!(t)
'c': ASCII/Unicode U+0063 (category Ll: Letter, lowercase)

julia> print(t)
['a', 'b']
```

`shift!` deletes and returns the first element:

```jldoctest
julia> t = ['a', 'b', 'c'];

julia> shift!(t)
'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)

julia> print(t)
['b', 'c']
```

The functions `unshift!` and `push!` insert an element at the beginning, respectively at the end of the array. 

If you don’t need the removed value, you can use the function `deleteat!`:

```jldoctest
julia> t = ['a', 'b', 'c'];

julia> print(deleteat!(t, 2))
['a', 'c']
```

The function `insert!` inserts an element at a given index:

```jldoctest
julia> t = ['a', 'b', 'c'];

julia> print(insert!(t, 2, 'x'))
['a', 'x', 'b', 'c']
```

## Arrays and strings

A string is a sequence of characters and an array is a sequence of values, but an array of characters is not the same as a string. To convert from a string to an array of characters, you can use the function `collect`:

```jldoctest
julia> t = collect("spam");

julia> print(t)
['s', 'p', 'a', 'm']
```

The `collect` function breaks a string or another sequence into individual elements. 

If you want to break a string into words, you can use the `split` function:

```jldoctest
julia> t = split("pining for the fjords");

julia> print(t)
SubString{String}["pining", "for", "the", "fjords"]
```

An optional argument called a delimiter specifies which characters to use as word boundaries. The following example uses a hyphen as a delimiter:

```jldoctest
julia> t = split("spam-spam-spam", '-');

julia> print(t)
SubString{String}["spam", "spam", "spam"]
```

`join` is the inverse of `split`. It takes an array of strings and concatenates the elements:

```jldoctest
julia> t = ["pining", "for", "the", "fjords"];

julia> s = join(t, ' ')
"pining for the fjords"
```

In this case the delimiter is a space character. To concatenate strings without spaces, you don't specify a delimiter.

## Objects and values

An **object** is something a variable can refer to. Until now, you could use “object” and “value” interchangeably.

If we run these assignment statements:

```julia
a = "banana"
b = "banana"
```

We know that `a` and `b` both refer to a string, but we don’t know whether they refer to the *same* string. There are two possible states, shown in Figure 10.2.

```@eval
using ThinkJulia
fig10_2()
```

```@raw html
<figure>
  <img src="fig102.svg" alt="State diagrams.">
  <figcaption>Figure 10.2. State diagrams.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig102}
\caption{State diagrams.}
\label{fig102}
\end{figure}
```

In one case, `a` and `b` refer to two different objects that have the same value. In the second case, they refer to the same object.

To check whether two variables refer to the same object, you can use the `≡` (`\equiv TAB`) or `===` operator.

```@meta
DocTestSetup = quote
    if VERSION < v"0.7-"
        ≡(a::String, b::String) = a == b
        ≡(a, b) = a === b
    end
end
```

```jldoctest
julia> a = "banana";

julia> b = "banana";

julia> a ≡ b        # false for Julia v0.6
true
```

In this example, Julia only created one string object, and both `a` and `b` refer to it. But when you create two arrays, you get two objects:

```jldoctest
julia> a = [1, 2, 3];

julia> b = [1, 2, 3];

julia> a ≡ b
false
```

So the state diagram looks like Figure 10.3.

```@eval
using ThinkJulia
fig10_3()
```

```@raw html
<figure>
  <img src="fig103.svg" alt="State diagram.">
  <figcaption>Figure 10.3. State diagram.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig103}
\caption{State diagram.}
\label{fig103}
\end{figure}
```

In this case we would say that the two arrays are **equivalent**, because they have the same elements, but not **identical**, because they are not the same object. If two objects are identical, they are also equivalent, but if they are equivalent, they are not necessarily identical.

To be precise an object has a value. If you evaluate `[1, 2, 3]`, you get an array object whose value is a sequence of integers. If another array has the same elements, we say it has the same value, but it is not the same object.

## Aliasing

If `a` refers to an object and you assign `b = a`, then both variables refer to the same object:

```jldoctest chap10
julia> a = [1, 2, 3];

julia> b = a;

julia> b ≡ a
true
```

The state diagram looks like Figure 10.4.

```@eval
using ThinkJulia
fig10_4()
```

```@raw html
<figure>
  <img src="fig104.svg" alt="State diagram.">
  <figcaption>Figure 10.4. State diagram.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig104}
\caption{State diagram.}
\label{fig104}
\end{figure}
```

The association of a variable with an object is called a **reference**. In this example, there are two references to the same object.

An object with more than one reference has more than one name, so we say that the object is **aliased**.

If the aliased object is mutable, changes made with one alias affect the other:

```jldoctest chap10
julia> b[1] = 42;

julia> print(a)
[42, 2, 3]
```

Although this behavior can be useful, it is error-prone. In general, it is safer to avoid aliasing when you are working with mutable objects.

For immutable objects like strings, aliasing is not as much of a problem. In this example:

```julia
a = "banana"
b = "banana"
```

It almost never makes a difference whether `a` and `b` refer to the same string or not.

## Array arguments

When you pass an array to a function, the function gets a reference to the array. If the function modifies the array, the caller sees the change. For example, `deletehead!` removes the first element from an array:

```julia
function deletehead!(t)
    shift!(t)
end
```

Here’s how it is used:

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

```jldoctest
julia> letters = ['a', 'b', 'c'];

julia> deletehead!(letters);

julia> print(letters)
['b', 'c']
```

The parameter `t` and the variable `letters` are aliases for the same object. The stack diagram looks like Figure 10.5.

