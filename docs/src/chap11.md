# Dictionaries

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

This chapter presents another built-in type called a dictionary. Dictionaries are one of Julia’s best features; they are the building blocks of many efficient and elegant algorithms.

## A dictionary is a mapping

A **dictionary** is like an array, but more general. In an array, the indices have to be integers; in a dictionary they can be (almost) any type.

A dictionary contains a collection of indices, which are called **keys**, and a collection of values. Each key is associated with a single value. The association of a key and a value is called a **key-value pair** or sometimes an item.

In mathematical language, a dictionary represents a **mapping** from keys to values, so you can also say that each key “maps to” a value. As an example, we’ll build a dictionary that maps from English to Spanish words, so the keys and the values are all strings.

The function `Dict` creates a new dictionary with no items. Because `Dict` is the name of a built-in function, you should avoid using it as a variable name.

```jldoctest chap11
julia> eng2sp = Dict()
Dict{Any,Any} with 0 entries
```

The kind of dictionary is surrounded by curly brackets: the keys are of type `Any` and also the values are of type `Any`.

The dictionary is empty. To add items to the dictionary, you can use square brackets:

```jldoctest chap11
julia> eng2sp["one"] = "uno";

```

This line creates an item that maps from the key "one" to the value "uno". If we print the dictionary again, we see a key-value pair with an arrow "=>" between the key and value:

```jldoctest chap11
julia> eng2sp
Dict{Any,Any} with 1 entry:
  "one" => "uno"
```

This output format is also an input format. For example, you can create a new dictionary with three items:

```jldoctest chap11
julia> eng2sp = Dict("one" => "uno", "two" => "dos", "three" => "tres")
Dict{String,String} with 3 entries:
  "two"   => "dos"
  "one"   => "uno"
  "three" => "tres"
```

The order of the key-value pairs might not be the same. If you type the same example on your computer, you might get a different result. In general, the order of items in a dictionary is unpredictable.

But that’s not a problem because the elements of a dictionary are never indexed with integer indices. Instead, you use the keys to look up the corresponding values:

```jldoctest chap11
julia> eng2sp["two"]
"dos"
```

The key "two" always maps to the value "dos" so the order of the items doesn’t matter.

If the key isn’t in the dictionary, you get an exception:

```jldoctest chap11
julia> eng2sp["four"]
ERROR: KeyError: key "four" not found
```

The `length` function works on dictionaries; it returns the number of key-value pairs:

```jldoctest chap11
julia> length(eng2sp)
3
```

The function `keys` returns an array with the keys of the dictionary:

```jldoctest chap11
julia> ks = keys(eng2sp);

julia> print(ks)
String["two", "one", "three"]
```

Now you can use the `∈` operator to see whether something appears as a *key* in the dictionary:

```jldoctest chap11
julia> "one" ∈ ks
true

julia> "uno" ∈ ks
false
```

To see whether something appears as a value in a dictionary, you can use the function `values`, which returns a collection of values, and then use the `∈` operator:

```jldoctest chap11
julia> vs = values(eng2sp);

julia> "uno" ∈ vs
true
```

The `∈` operator uses different algorithms for arrays and dictionaries. For arrays, it searches the elements of the array in order, as in Section 8.6. As the array gets longer, the search time gets longer in direct proportion.

For dictionaries, Julia uses an algorithm called a **hashtable** that has a remarkable property: the `∈` operator takes about the same amount of time no matter how many items are in the dictionary.

## Dictionary as a collection of counters

Suppose you are given a string and you want to count how many times each letter appears. There are several ways you could do it:

- You could create 26 variables, one for each letter of the alphabet. Then you could traverse the string and, for each character, increment the corresponding counter, probably using a chained conditional.

- You could create an array with 26 elements. Then you could convert each character to a number (using the built-in function `Int`), use the number as an index into the array, and increment the appropriate counter.

- You could create a dictionary with characters as keys and counters as the corresponding values. The first time you see a character, you would add an item to the dictionary. After that you would increment the value of an existing item.

Each of these options performs the same computation, but each of them implements that computation in a different way.

An **implementation** is a way of performing a computation; some implementations are better than others. For example, an advantage of the dictionary implementation is that we don’t have to know ahead of time which letters appear in the string and we only have to make room for the letters that do appear.

Here is what the code might look like:

```julia
function histogram(s)
    d = Dict()
    for c in s
        if c ∉ keys(d)
            d[c] = 1
        else
            d[c] += 1
        end
    end
    d
end
```

The name of the function is `histogram`, which is a statistical term for a collection of counters (or frequencies).

The first line of the function creates an empty dictionary. The `for` loop traverses the string. Each time through the loop, if the character `c` is not in the dictionary, we create a new item with key `c` and the initial value `1` (since we have seen this letter once). If `c` is already in the dictionary we increment `d[c]`.

Here’s how it works:

```jldoctest chap11
julia> h = histogram("brontosaurus");

julia> print(h)
Dict{Any,Any}(Pair{Any,Any}('n', 1),Pair{Any,Any}('b', 1),Pair{Any,Any}('o', 2),Pair{Any,Any}('t', 1),Pair{Any,Any}('a', 1),Pair{Any,Any}('u', 2),Pair{Any,Any}('s', 2),Pair{Any,Any}('r', 2))
```

The histogram indicates that the letters `'a'` and `'b'` appear once; `'o'` appears twice, and so on.

Dictionaries have a function called `get` that takes a key and a default value. If the key appears in the dictionary, `get` returns the corresponding value; otherwise it returns the default value. For example:

```jldoctest chap11
julia> h = histogram("a");

julia> print(h)
Dict{Any,Any}(Pair{Any,Any}('a', 1))
julia> get(h, 'a', 0)
1

julia> get(h, 'b', 0)
0
```

As an exercise, use `get!` to write `histogram` more concisely. `get!` returns the same value as `get` but if the key does not exist in the dictionary, it is added with the default value. You should be able to eliminate the `if` statement.

## Looping and dictionaries

You can traverse the keys of the dictionary in a `for` statement. For example, `printhist` prints each key and the corresponding value:

```julia
function printhist(h)
    for c in keys(h)
        println(c, " ", h[c])
    end
end
```

Here’s what the output looks like:

```jldoctest chap11
julia> h = histogram("parrot");

julia> printhist(h)
o 1
a 1
p 1
t 1
r 2
```

Again, the keys are in no particular order. To traverse the keys in sorted order, you can combine `sort!` and `collect`:

```jldoctest chap11
julia> for c in sort!(collect(keys(h)))
           println(c, " ", h[c])
       end
a 1
o 1
p 1
r 2
t 1
```

## Reverse lookup

Given a dictionary `d` and a key `k`, it is easy to find the corresponding value `v = d[k]`. This operation is called a **lookup**.

But what if you have `v` and you want to find `k`? You have two problems: first, there might be more than one key that maps to the value `v`. Depending on the application, you might be able to pick one, or you might have to make an array that contains all of them. Second, there is no simple syntax to do a **reverse lookup**; you have to search.

Here is a function that takes a value and returns the first key that maps to that value:

```julia
function reverselookup(d, v)
    for k in keys(d)
        if d[k] == v
            return k
        end
    end
    error("LookupError")
end
```

This function is yet another example of the search pattern, but it uses a function we haven’t seen before, `error`. The `error` function is used to produce an `ErrorException` that interrupts the normal flow of control. In this case it has the message `"LookupError"`, indicating that a key does not exist.

If we get to the end of the loop, that means `v` doesn’t appear in the dictionary as a value, so we throw an exception.

Here is an example of a successful reverse lookup:

```jldoctest chap11
julia> h = histogram("parrot");

julia> key = reverselookup(h, 2)
'r': ASCII/Unicode U+0072 (category Ll: Letter, lowercase)
```

And an unsuccessful one:

```jldoctest chap11
julia> key = reverselookup(h, 3)
ERROR: LookupError
Stacktrace:
 [1] reverselookup(::Dict{Any,Any}, ::Int64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap11.jl:21
```

The effect when you generate an exception is the same as when Julia throws one: it prints a traceback and an error message.

A reverse lookup is much slower than a forward lookup; if you have to do it often, or if the dictionary gets big, the performance of your program will suffer.

## Dictionaries and arrays

Arrays can appear as values in a dictionary. For example, if you are given a dictionary that maps from letters to frequencies, you might want to invert it; that is, create a dictionary that maps from frequencies to letters. Since there might be several letters with the same frequency, each value in the inverted dictionary should be an array of letters.

Here is a function that inverts a dictionary:

```julia
function invertdict(d)
    inverse = Dict()
    for key in keys(d)
        val = d[key]
        if val ∉ keys(inverse)
            inverse[val] = [key]
        else
            push!(inverse[val], key)
        end
    end
    inverse
end
```

Each time through the loop, `key` gets a key from `d` and `val` gets the corresponding value. If `val` is not in `inverse`, that means we haven’t seen it before, so we create a new item and initialize it with a **singleton** (an array that contains a single element). Otherwise we have seen this value before, so we append the corresponding key to the array.

Here is an example:

```jldoctest chap11
julia> hist = histogram("parrot");

julia> inverse = invertdict(hist);

julia> print(inverse)
Dict{Any,Any}(Pair{Any,Any}(2, ['r']),Pair{Any,Any}(1, ['o', 'a', 'p', 't']))
```

```@eval
using ThinkJulia
fig11_1()
```

```@raw html
<figure>
  <img src="fig111.svg" alt="State diagram.">
  <figcaption>Figure 11.1. State diagram.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig111}
\caption{State diagram.}
\label{fig111}
\end{figure}
```

Figure 11.1 is a state diagram showing `hist` and `inverse`. A dictionary is represented as a box with the key-value pairs inside. If the values are integers, floats or strings, I draw them inside the box, but I usually draw arrays outside the box, just to keep the diagram simple.

I mentioned earlier that a dictionary is implemented using a hashtable and that means that the keys have to be **hashable**.

A **hash** is a function that takes a value (of any kind) and returns an integer. Dictionaries use these integers, called hash values, to store and look up key-value pairs.