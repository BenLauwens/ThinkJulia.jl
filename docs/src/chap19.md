# The Goodies

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

One of my goals for this book has been to teach you as little Julia as possible. When there were two ways to do something, I picked one and avoided mentioning the other. Or sometimes I put the second one into an exercise.

Now I want to go back for some of the good bits that got left behind. Julia provides a number of features that are not really necessary—you can write good code without them—but with them you can sometimes write code that’s more concise, readable or efficient, and sometimes all three.

Credit: this chapter is a synthesis of the corresponding parts in the offical Julia documentation: <https://docs.julialang.org/en/stable/>

## Regex

## Named Tuples

The components of tuples can optionally be named, in which case a named tuple is constructed:

```jldoctest
julia> x = (a=1, b=1+1)
(a = 1, b = 2)
julia> x.a
1
```

Named tuples are very similar to tuples, except that fields can additionally be accessed by name using dot syntax.

## Keyword Arguments

Some functions need a large number of arguments. Remembering how to call such functions can be difficult. **Keyword arguments** can make these complex interfaces easier to use and extend by allowing arguments to be identified by name instead of only by position.

Functions with keyword arguments are defined using a semicolon in the signature:

```julia
function plot(x, y; style="solid", width=1, color="black")
    ###
end
```

When the function is called, the semicolon is optional: one can either call `plot(x, y, width=2)` or `plot(x, y; width=2)`.

## Short-circuit Evaluation

The operators `&&` and `||` do a **short-circuit evaluation**: in a series of boolean expressions connected by these operators, only the minimum number of expressions are evaluated as are necessary to determine the final boolean value of the entire chain.

For example, a recursive factorial routine could be defined like this:

```julia
function fact(n::Int)
    n >= 0 || error("n must be non-negative")
    n == 0 && return 1
    n * fact(n-1)
end
```

## Ternary Operator

The so-called "ternary operator", `?:`, is closely related to the `if-elseif-else` syntax, but is used where a conditional choice between single expression values is required, as opposed to conditional execution of longer blocks of code. It gets its name from being the only operator in most languages taking three operands:

```julia
a ? b : c
```

The expression `a`, before the `?`, is a condition expression, and the ternary operation evaluates the expression `b`, before the `:`, if the condition `a` is true or the expression `c`, after the `:`, if it is false.

A recursive factorial routine could also be defined like this:

```julia
fact(n::Int) = n < 0 ? error("n must be non-negative") : n == 0 ? 1 : n * fact(n-1)
```

## Anonymous Functions

Functions in Julia are first-class objects: they can be assigned to variables, and called using the standard function call syntax from the variable they have been assigned to. They can be used as arguments, and they can be returned as values. They can also be created anonymously, without being given a name, using either of these syntaxes:

```jldoctest
julia> x -> x^2 + 2x - 1
#1 (generic function with 1 method)

julia> function (x)
           x^2 + 2x - 1
       end
#3 (generic function with 1 method)
```

This creates a function taking one argument `x` and returning the value of the polynomial ``x^2 + 2x - 1`` at that value. Notice that the result is a generic function, but with a compiler-generated name based on consecutive numbering.

The primary use for **anonymous functions** is passing them to functions which take other functions as arguments. See next sections.

## Array Comprehensions

For example, this function takes an array of strings, maps the string function capitalize to the elements, and returns a new array of strings:

```julia
function capitalizeall(t)
    res = []
    for s in t
        push!(res, uppercase(s))
    end
    res
end
```

We can write this more concisely using an **array comprehension**:

```julia
function capitalizeall(t)
    [uppercase(s) for s in t]
end
```

The bracket operators indicate that we are constructing a new array. The expression inside the brackets specifies the elements of the array, and the for clause indicates what sequence we are traversing.

The syntax of an array comprehension is a little awkward because the loop variable, `s` in this example, appears in the expression before we get to the definition.

Array comprehensions are concise and easy to read, at least for simple expressions. And they are usually faster than the equivalent `for` loops, sometimes much faster. So if you are mad at me for not mentioning them earlier, I understand.

But, in my defense, array comprehensions are harder to debug because you can’t put a print statement inside the loop. I suggest that you use them only if the computation is simple enough that you are likely to get it right the first time. And for beginners that means never.

## Map, Filter and Reduce

`capitalizeall` can also be written with the `map` function:

```julia
function capitalizeall(word)
    map(uppercase, word)
end
```

`map(f, c...)` transforms collection c by applying f to each element.

`reduce(op, itr)` reduces the given collection `itr` with the given binary operator `op`.

```jldoctest
julia> reduce(*, [2, 3, 4])
24
```

Reductions for certain commonly-used operators have special implementations which should be used instead: `maximum(itr)`, `minimum(itr)`, `sum(itr)`, `prod(itr)`, `any(itr)`, `all(itr)`.

We could use `any` to rewrite some of the search functions we wrote in Section 9.3. For example, we could write `avoids` like this:

```julia
function avoids(word, forbidden)
    !any(letter ∈ forbidden for letter in word)
end
```

The function almost reads like English, “word avoids forbidden if there are not any forbidden letters in word.”

`filter` can be used to filter a collection. For example, this function selects only the elements of `word` that are upper case, and returns a new string:

```julia
function onlyupper(word)
    filter(letter->isuppercase(letter), word)
end
```

`filter(function, collection)` returns a copy of collection, removing elements for which function returns `false`. For associative collections, the function is passed two arguments (`key` and `value`).

## Closures

## `do` Syntax

Passing functions as arguments to other functions is a powerful technique, but the syntax for it is not always convenient. Such calls are especially awkward to write when the function argument requires multiple lines. As an example, consider calling `map` on a function with several cases:

```julia
map(character->begin
           if isletter(character)
               return uppercase(character)
           elseif isnumeric(character)
               return character
           else
               return '_'
           end
       end,
    word)
```

A block delimited by `begin` and `end` is used to implement the anonymous function.

Julia provides a reserved word `do` for rewriting this code more clearly:

```julia
map(word) do character
    if isletter(character)
        return uppercase(character)
   elseif isnumeric(character)
        return character
    else
        return '_'
    end
end
```

The `do character` syntax creates an anonymous function with argument `character` and passes it as the first argument to `map`.

How these arguments are initialized depends on the "outer" function; here, `map` will sequentially set `character` to the characters in `word`, calling the anonymous function on each.

This syntax makes it easier to use functions to effectively extend the language, since calls look like normal code blocks.

## Set

In Section 13.6 I use dictionaries to find the words that appear in a document but not in a word array. The function I wrote takes `d1`, which contains the words from the document as keys, and `d2`, which contains the array of words. It returns a dictionary that contains the keys from `d1` that are not in `d2`.

```julia
function subtract(d1, d2)
    res = Dict()
    for key in keys(d1)
        if key ∉ keys(d2)
            res[key] = nothing
        end
    end
    res
end
```

In all of these dictionaries, the values are `nothing` because we never use them. As a result, we waste some storage space.

Julia provides another built-in type, called a set, that behaves like a collection of dictionary keys with no values. Adding elements to a set is fast; so is checking membership. And sets provide functions and operators to compute common set operations.

For example, set subtraction is available as a function called `setdiff`. So we can rewrite `subtract` like this:

```julia
function subtract(d1, d2)
    setdiff(d1, d2)
end
```

The result is a set instead of a dictionary.

Some of the exercises in this book can be done concisely and efficiently with sets. For example, here is a solution to `hasduplicates`, from Exercise 10-7, that uses a dictionary:

```julia
function hasduplicates(t)
    d = Dict()
    for x in t
        if x ∈ d
            return true
        end
        d[x] = nothing
    end
    false
end
```

When an element appears for the first time, it is added to the dictionary. If the same element appears again, the function returns `true`.

Using sets, we can write the same function like this:

```julia
function hasduplicates(t)
    length(Set(t)) < length(t)
end
```

An element can only appear in a set once, so if an element in `t` appears more than once, the set will be smaller than `t`. If there are no duplicates, the set will be the same size as `t`.

We can also use sets to do some of the exercises in Chapter 9. For example, here’s a version of `usesonly` with a loop:

```julia
function usesonly(word, available)
    for letter in word
        if letter ∉ available
            return false
        end
    end
    true
end
```

`usesonly` checks whether all letters in `word` are in `available`. We can rewrite it like this:

```julia
function usesonly(word, available)
    Set(word) ⊆ Set(available)
end
```

The `⊆` operator checks whether one set is a subset or another, including the possibility that they are equal, which is true if all the letters in `word` appear in `available`.

As an exercise, rewrite `avoids` using sets.

## Parametric Types and Functions

An important and powerful feature of Julia's type system is that it is parametric: types can take parameters, so that type declarations actually introduce a whole family of new types – one for each possible combination of parameter values.

Type parameters are introduced immediately after the type name, surrounded by curly braces:

```julia
struct MyPoint{T}
    x::T
    y::T
end
```

This declaration defines a new **parametric type**, `MyPoint{T}`, holding two "coordinates" of type `T`. What, one may ask, is `T`? Well, that's precisely the point of parametric types: it can be any type at all. `MyPoint{Float64}` is a concrete type equivalent to the type defined by replacing `T` in the definition of `MyPoint` with `Float64`.

The type `MyPoint{Float64}` is a point whose coordinates are 64-bit floating-point values.

`MyPoint` itself is also a valid type object, containing all instances as subtypes:

```jldoctest
julia> MyPoint{Float64} <: MyPoint
true
```

Method definitions can also have type parameters qualifying the signature:

```julia
julia> myappend(v::Array{T, 1}, x::T) where {T} = [v..., x]
myappend (generic function with 1 method)
julia> print(myappend([1,2,3],4))
[1, 2, 3, 4]
julia> myappend([1,2,3],2.5)
ERROR: MethodError: no method matching myappend(::Array{Int64,1}, ::Float64)
```

As you can see, the type of the appended element must match the element type of the array it is appended to, or else a `MethodError` is raised.

## Macros

Macros provide a method to include generated code in the final body of a program. A macro maps a tuple of arguments to a returned expression, and the resulting expression is compiled directly rather than requiring a runtime `Core.eval` call. Macro arguments may include expressions, literal values, and symbols.

Here is an extraordinarily simple macro:

```jldoctest chap19
julia> macro sayhello(name)
           return :( println("Hello, ", $name) )
       end
@sayhello (macro with 1 method)
```

Macros have a dedicated character in Julia's syntax: the `@` (at-sign). In this example, the compiler will replace all instances of `@sayhello("human")` with:

```julia
:((println)("Hello, ", "human"))
```

When @sayhello is entered in the REPL, the expression executes immediately, thus we only see the evaluation result:

```jldoctest chap19
julia> @sayhello "human"
Hello, human
```

We can view the quoted return expression using the macro `@macroexpand`:

```jldoctest chap19
julia> @macroexpand @sayhello "human"
:((println)("Hello, ", "human"))
```

We can see that the `"human"` literal has been interpolated into the expression.

Why do macros exist?

Macros are necessary because they execute when code is parsed, therefore, macros allow the programmer to generate and include fragments of customized code before the full program is run. To illustrate the difference, consider the following example:

```@repl chap19
macro twostep(arg)
    println("I execute at parse time. The argument is: ", arg)
    return :(println("I execute at runtime. The argument is: ", $arg))
end
ex = @macroexpand @twostep 1, 2, 3
```

The first call to `println` is executed when `macroexpand` is called. The resulting expression contains only the second `println`:

```@repl chap19
typeof(ex)
ex
Core.eval(Main, ex)
```

Macros are invoked with the following general syntax:

```julia
@name expr1 expr2 ...
@name(expr1, expr2, ...)
```

Note the distinguishing `@` before the macro name and the lack of commas between the argument expressions in the first form, and the lack of whitespace after `@name` in the second form. The two styles should not be mixed.

## Multi-dimensional Arrays

Julia, like most technical computing languages, provides a first-class array implementation. Most technical computing languages pay a lot of attention to their array implementation at the expense of other containers. Julia does not treat arrays in any special way. The array library is implemented almost completely in Julia itself, and derives its performance from the compiler, just like any other code written in Julia.

## Calling C and Fortran Code

Though most code can be written in Julia, there are many high-quality, mature libraries for numerical computing already written in C and Fortran. To allow easy use of this existing code, Julia makes it simple and efficient to call C and Fortran functions. Julia has a “no boilerplate” philosophy: functions can be called directly from Julia without any “glue” code, code generation, or compilation – even from the interactive prompt. This is accomplished just by making an appropriate call with `ccall` syntax, which looks like an ordinary function call.

In chapter 14 I introduced a Julia interface to the GDBM library of database functions. The library is written in C. To close the database a function call to `close(db)` has to be made:

```julia
Base.close(dbm::DBM) = gdbm_close(dbm.handle)

function gdbm_close(handle::Ptr{Cvoid})
  ccall((:gdbm_close, "libgdbm"), Cvoid, (Ptr{Cvoid},), handle)
end
```

A dbm object has a field `handle` of `Ptr{Cvoid}` type. This field holds a c pointer that refers to the database. To close the database the c function `gdbm_close` has to be called having as only argument the c pointer pointing to the database and no return value. Julia does this directly with the `ccall` function having as arguments:

- a tuple consisting of a symbol holding the name of the function we want to call: `:gdbm_close` and the shared library specified as a string: `"libgdm"`,
- the return type: `Cvoid`,
- a tuple of argument types: `(Ptr{Cvoid},)` and
- the argument values: `handle`.

The complete mapping of the GDBM library can be found as an example in the ThinkJulia sources.

## Glossary

*keyword arguments*:
arguments identified by name instead of only by position.

*short-circuit evaluation*:
Evalutation of boolean operator for which the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression.

*anonymous functions*:

*array comprehension*:

*parametric type*:
