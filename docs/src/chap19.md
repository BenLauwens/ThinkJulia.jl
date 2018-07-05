# The goodies

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

One of my goals for this book has been to teach you as little Julia as possible. When there were two ways to do something, I picked one and avoided mentioning the other. Or sometimes I put the second one into an exercise.

Now I want to go back for some of the good bits that got left behind. Julia provides a number of features that are not really necessary—you can write good code without them—but with them you can sometimes write code that’s more concise, readable or efficient, and sometimes all three.

Credit: this chapter is a synthesis of the corresponding parts in the offical Julia documentation: <https://docs.julialang.org/en/stable/>

## Named tuples

The components of tuples can optionally be named, in which case a named tuple is constructed:

```jldoctest
julia> x = (a=1, b=1+1)
(a = 1, b = 2)
julia> x.a
1
```

Named tuples are very similar to tuples, except that fields can additionally be accessed by name using dot syntax.

## Keyword arguments

Some functions need a large number of arguments. Remembering how to call such functions can be difficult. **Keyword arguments** can make these complex interfaces easier to use and extend by allowing arguments to be identified by name instead of only by position.

Functions with keyword arguments are defined using a semicolon in the signature:

```julia
function plot(x, y; style="solid", width=1, color="black")
    ###
end
```

When the function is called, the semicolon is optional: one can either call `plot(x, y, width=2)` or `plot(x, y; width=2)`.

## Conditional expressions

The operators `&&` and `||` do a **short-circuit evaluation**: in a series of boolean expressions connected by these operators, only the minimum number of expressions are evaluated as are necessary to determine the final boolean value of the entire chain. Explicitly, this means that:

- In the expression `a && b`, the subexpression `b` is only evaluated if `a` evaluates to `true`.

- In the expression `a || b`, the subexpression `b` is only evaluated if `a` evaluates to `false`.

Both `&&` and `||` associate to the right, but `&&` has higher precedence than `||` does.

This behavior is frequently used in Julia to form an alternative to very short `if` statements. Instead of `if <cond> <statement> end`, one can write `<cond> && <statement>` (which could be read as: `<cond>` and then `<statement>`). Similarly, instead of `if ! <cond> <statement> end`, one can write `<cond> || <statement>` (which could be read as: `<cond>` or else `<statement>`).

For example, a recursive factorial routine could be defined like this:

```julia
function fact(n::Int)
    n >= 0 || error("n must be non-negative")
    n == 0 && return 1
    n * fact(n-1)
end
```

The so-called "ternary operator", `?:`, is closely related to the `if-elseif-else` syntax, but is used where a conditional choice between single expression values is required, as opposed to conditional execution of longer blocks of code. It gets its name from being the only operator in most languages taking three operands:

```julia
a ? b : c
```

The expression `a`, before the `?`, is a condition expression, and the ternary operation evaluates the expression `b`, before the `:`, if the condition `a` is true or the expression `c`, after the `:`, if it is false.

```jldoctest
julia> test(x, y) = println(x < y ? "x is less than y"    :
                            x > y ? "x is greater than y" : "x is equal to y")
test (generic function with 1 method)
julia> test(1, 2)
x is less than y
julia> test(2, 1)
x is greater than y
julia> test(1, 1)
x is equal to y
```

## Functions and more

In the previous example a function `test` is created with a more terse syntax. The function

```julia
function f(x,y)
    x+y
end
```

is equivalent to the following compact **assignment form**:

```julia
f(x,y) = x+y
```

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

The primary use for anonymous functions is passing them to functions which take other functions as arguments. See next sections.

## Array comprehensions

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

## Map, filter and reduce

`capitalizeall` can also be written with the `map` function:

```julia
function capitalizeall(t)
    map(uppercase, t)
end
```

`map(f, c...)` transforms collection c by applying f to each element.

`reduce(op, itr)` reduces the given collection `itr` with the given binary operator `op`.

```jldoctest
julia> reduce(*, [2; 3; 4])
24
```

Reductions for certain commonly-used operators have special implementations which should be used instead: `maximum(itr)`, `minimum(itr)`, `sum(itr)`, `prod(itr)`, `any(itr)`, `all(itr)`.

We could use `any` to rewrite some of the search functions we wrote in Section 9.3. For example, we could write `avoids` like this:

```julia
function avoids(word, forbidden)
    !any(letter in forbidden for letter in word)
end
```

The function almost reads like English, “word avoids forbidden if there are not any forbidden letters in word.”

`filter` can be used to filter a collection. For example, this function selects only the elements of t that are upper case, and returns a new array:

```julia
function onlyupper(t)
    filter(s->all(isupper, s), t)
end
```

`filter(function, collection)` returns a copy of collection, removing elements for which function returns `false`. For associative collections, the function is passed two arguments (`key` and `value`).

## `do` syntax

Passing functions as arguments to other functions is a powerful technique, but the syntax for it is not always convenient. Such calls are especially awkward to write when the function argument requires multiple lines. As an example, consider calling `map` on a function with several cases:

```julia
map(x->begin
           if x < 0 && iseven(x)
               return 0
           elseif x == 0
               return 1
           else
               return x
           end
       end,
    [A, B, C])
```

Julia provides a reserved word `do` for rewriting this code more clearly:

```julia
map([A, B, C]) do x
    if x < 0 && iseven(x)
        return 0
    elseif x == 0
        return 1
    else
        return x
    end
end
```

The `do x` syntax creates an anonymous function with argument `x` and passes it as the first argument to `map`. Similarly, `do a,b` would create a two-argument anonymous function, and a plain `do` would declare that what follows is an anonymous function of the form `() -> ...`.

How these arguments are initialized depends on the "outer" function; here, `map` will sequentially set `x` to `A`, `B`, `C`, calling the anonymous function on each, just as would happen in the syntax `map(func, [A, B, C])`.

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

`uses_only` checks whether all letters in `word` are in `available`. We can rewrite it like this:

```julia
function usesonly(word, available)
    Set(word) ⊆ Set(available)
end
```

The `⊆` operator checks whether one set is a subset or another, including the possibility that they are equal, which is true if all the letters in `word` appear in `available`.

As an exercise, rewrite `avoids` using sets.

## Parametric types and functions

An important and powerful feature of Julia's type system is that it is parametric: types can take parameters, so that type declarations actually introduce a whole family of new types – one for each possible combination of parameter values.

Type parameters are introduced immediately after the type name, surrounded by curly braces:

```julia
struct MyPoint{T}
    x::T
    y::T
end
```

This declaration defines a new parametric type, `MyPoint{T}`, holding two "coordinates" of type `T`. What, one may ask, is `T`? Well, that's precisely the point of parametric types: it can be any type at all. `MyPoint{Float64}` is a concrete type equivalent to the type defined by replacing `T` in the definition of `MyPoint` with `Float64`.

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

Macros provide a method to include generated code in the final body of a program. A macro maps a tuple of arguments to a returned expression, and the resulting expression is compiled directly rather than requiring a runtime `eval` call. Macro arguments may include expressions, literal values, and symbols.

Here is an extraordinarily simple macro:

```jldoctest chap19
julia> macro sayhello(name)
           return :( println("Hello, ", $name) )
       end
@sayhello (macro with 1 method)
```

Macros have a dedicated character in Julia's syntax: the `@` (at-sign), followed by the unique name declared in a `macro NAME ... end` block. In this example, the compiler will replace all instances of `@sayhello("human")$` with:

```julia
:((println)("Hello, ", "human"))
```

When @sayhello is entered in the REPL, the expression executes immediately, thus we only see the evaluation result:

```repl chap19
@sayhello "human"
```

We can view the quoted return expression using the macro `@macroexpand`:

```@repl chap19
@macroexpand @sayhello "human"
```

We can see that the `"human"` literal has been interpolated into the expression.

We have already seen a function `f(::Expr...) -> Expr` in a previous section. So, why do macros exist?

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
eval(ex)
```

Macros are invoked with the following general syntax:

```julia
@name expr1 expr2 ...
@name(expr1, expr2, ...)
```

Note the distinguishing `@` before the macro name and the lack of commas between the argument expressions in the first form, and the lack of whitespace after `@name` in the second form. The two styles should not be mixed.

## Calling C and Fortran code

Though most code can be written in Julia, there are many high-quality, mature libraries for numerical computing already written in C and Fortran. To allow easy use of this existing code, Julia makes it simple and efficient to call C and Fortran functions. Julia has a “no boilerplate” philosophy: functions can be called directly from Julia without any “glue” code, code generation, or compilation – even from the interactive prompt. This is accomplished just by making an appropriate call with ccall syntax, which looks like an ordinary function call.

## Glossary

*keyword arguments*:
arguments identified by name instead of only by position.

*short-circuit evaluation*:
Evalutation of boolean operator for which the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression.