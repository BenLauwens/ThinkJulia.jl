# Multiple Dispatch

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

In Julia you have the ability to write code that can operate on different types. This is called polymorphism. Julia's type system is also dynamic, meaning that only at run-time it can be checked that a function supports an object as argument. But Julia gains some of the advantages of static type systems for which every type has to been known at compile time, by making it possible to indicate that certain values are of specific types. This can be of great assistance in generating efficient code, but even more significantly, it allows method dispatch on the types of function arguments to be deeply integrated with the language.

In this chapter I will discuss the use of type declarations in Julia and I will introduce methods, ways to implement different behavior for a function depending on its arguments and the associate multiple dispatch mechanism.

Credit: The first two sections are slightly adapted and shortened version of the following introductory sections in the Julia documentation: <https://docs.julialang.org/en/latest/manual/types/#man-types-1> and <https://docs.julialang.org/en/latest/manual/methods/#Methods-1>.

## Type Declarations

The `::` operator can be used to attach **type annotations** to expressions and variables in programs. There are two primary reasons to do this:

1. As an assertion to help confirm that your program works the way you expect,

2. To provide extra type information to the compiler, which can then improve performance in some cases.

When appended to an expression computing a value, the `::` operator is read as "is an instance of". It can be used anywhere to assert that the value of the expression on the left is an instance of the type on the right.

```jldoctest
julia> (1 + 2) :: Float64
ERROR: TypeError: in typeassert, expected Float64, got Int64
julia> (1 + 2) :: Int64
3
```

This allows a type assertion to be attached to any expression in-place.

When appended to a variable on the left-hand side of an assignment, or as part of a declaration, the `::` operator means something a bit different: it declares the variable to always have the specified type. If needed and possible a conversion will take place.

```jldoctest
julia> function returnfloat()
           x::Float64 = 100
           x
       end
returnfloat (generic function with 1 method)
julia> x = returnfloat()
100.0
julia> typeof(x)
Float64
```

Declarations can also be attached to function definitions:

```julia
function sinc(x)::Float64
    if x == 0
        return 1
    end
    sin(x)/(x)
end
```

Returning from this function behaves just like an assignment to a variable with a declared type: the value is always converted to `Float64`.

The default behavior in Julia when types are omitted is to allow values to be of any type.

## Methods

Recall from Functions that a function is an object that maps a tuple of arguments to a return value, or throws an exception if no appropriate value can be returned. It is common for the same conceptual function or operation to be implemented quite differently for different types of arguments: adding two integers is very different from adding two floating-point numbers, both of which are distinct from adding an integer to a floating-point number. Despite their implementation differences, these operations all fall under the general concept of "addition". Accordingly, in Julia, these behaviors all belong to a single object: the `+` function.

To facilitate using many different implementations of the same concept smoothly, functions need not be defined all at once, but can rather be defined piecewise by providing specific behaviors for certain combinations of argument types and counts. A definition of one possible behavior for a function is called a **method**. Thus far, we have presented only examples of functions defined with a single method, applicable to all types of arguments. However, the **signatures** of method definitions can be annotated to indicate the types of arguments in addition to their number, and more than a single method definition may be provided. When a function is applied to a particular tuple of arguments, the most specific method applicable to those arguments is applied. Thus, the overall behavior of a function is a patchwork of the behaviors of its various method definitions. If the patchwork is well designed, even though the implementations of the methods may be quite different, the outward behavior of the function will appear seamless and consistent.

## Printing Objects

In Chapter 16, we defined a struct named `MyTime` and in Section 16.1, you wrote a function named `printtime`:

```julia
"""
Represents the time of day.

fields: hour, minute, second
"""
mutable struct MyTime
    hour :: Int64
    minute :: Int64
    second :: Int64
end

function printtime(time)
    @printf("%02d:%02d:%02d", time.hour, time.minute, time.second)
end
```

As you can see, type declaration can also be added to the fields in a struct definition.

To call this function, you have to pass a mytime object as an argument:

```jldoctest chap17a
julia> start = MyTime(9, 45, 0)
ThinkJulia.MyTime(9, 45, 0)
julia> printtime(start)
09:45:00
```

To add a method to the function `printtime` that only accepts as argument a mytime object, all we have to do is append `::` followed by `MyTime` to the argument `time` in the function definition:

```julia
function printtime(time::MyTime)
    @printf("%02d:%02d:%02d", time.hour, time.minute, time.second)
end
```

Calling the function `printtime` with a mytime object yields the same result:

```jldoctest chap17a
julia> printtime(start)
09:45:00
```

We can now redefine the first method without the `::` type annotation allowing an argument of any type:

```julia
function printtime(time)
    println("I don't know how to print the argument time.")
end
```

If you call the function `printtime` with an object different from mytime, you get now:

```jldoctest chap17
julia> printtime(150)
I don't know how to print the argument time.
```

As an exercise, rewrite `timetoint` and `inttotime` (from Section 16.4) to specify their argument.

## More Examples

Here’s a version of `increment!` (from Section 16.3) rewritten to specify its arguments:

```julia
function increment!(time::MyTime, seconds::Int64)
    seconds += timetoint(time)
    inttotime(seconds)
end
```

Note that this time, it is a pure function, not a modifier.

Here's how you would invoke increment:

```jldoctest chap17a
julia> start = MyTime(9, 45, 0)
ThinkJulia.MyTime(9, 45, 0)
julia> increment!(start, 1337)
ThinkJulia.MyTime(10, 7, 17)
```

If you put the arguments in the wrong order, you get an error:

```jldoctest chap17a
julia> increment!(1337, start)
ERROR: MethodError: no method matching increment!(::Int64, ::ThinkJulia.MyTime)
```

The signature of the method is `printtime(time::ThinkJulia.MyTime, seconds::Int64)` and not `printtime(seconds::Int64, time::ThinkJulia.MyTime)`.

Rewriting `isafter`to act only on mytime objects ia as easy:

```julia
function isafter(t1::MyTime, t2::MyTime)
    (t1.hour, t1.minute, t1.second) > (t2.hour, t2.minute, t2.second)
end
```

By the way, optional arguments are implemented as syntax for multiple method definitions. For example, this definition:

```julia
function f(a=1, b=2)
    a + 2b
end
```

translates to the following three methods:

```julia
f(a, b) = a + 2b
f(a) = f(a, 2)
f() = f(1, 2)
```

These expressions are valid Julia method definitions. This is a shorthand notation for defining functions/methods.

## Constructors

A **constructor** is a special function that is called to create an object. The default constructor method has in case of a composite type as signature a tuple containing the fields. If type declaration are added to the fields, a second constructor method having as signature a tuple of the fields and the corresponding type declarations is available. The constructor methods of `MyTime` have the following signatures:

```julia
MyTime(hour, minute, second)
MyTime(hour::Int64, minute::Int64, second::Int64)
```

The former is a convenience method to allow implicit conversions.

We can also add our own **outer constructor** methods:

```julia
function MyTime(time::MyTime)
    MyTime(time.hour, time.minute, time.second)
end
```

This method is called a **copy constructor** because the new mytime object is a copy of argument.

While outer constructor methods succeed in addressing the problem of providing additional convenience methods for constructing objects, they fail to address the enforcing of invariants, and the construction of self-referential objects. For these problems, we need **inner constructor** methods:

```julia
mutable struct MyTime
    hour :: Int64
    minute :: Int64
    second :: Int64
    function MyTime(hour::Int64=0, minute::Int64=0, second::Int64=0)
        @assert(0 ≤ minute < 60, "Minute is between 0 and 60.")
        @assert(0 ≤ second < 60, "Second is between 0 and 60.")
        new(hour, minute, second)
    end
end
```

The struct `MyTime` has now 5 constructor methods:

```julia
MyTime()
MyTime(hour::Int64)
MyTime(hour::Int64, minute::Int64)
MyTime(hour::Int64, minute::Int64, second::Int64)
MyTime(hour::Int64, minute::Int64, second::Int64)
MyTime(time::MyTime)
```

An inner constructor method is much like an outer constructor method, with two differences:

- It is declared inside the block of a type declaration.

- It has access to a special locally existent function called `new` that creates objects of the newly declared type.

If any inner constructor method is defined, no default constructor method is provided: it is presumed that you have supplied yourself with all the inner constructors you need.

A second method without arguments of the local function `new` exists:

```julia
mutable struct MyTime
    hour :: Int
    minute :: Int
    second :: Int
    function MyTime(hour::Int64=0, minute::Int64=0, second::Int64=0)
        @assert(0 ≤ minute < 60, "Minute is between 0 and 60.")
        @assert(0 ≤ second < 60, "Second is between 0 and 60.")
        time = new()
        time.hour = hour
        time.minute = minute
        time.second = second
        time
    end
end
```

This allows to construct incompletely initialized objects and self-referential objects, or more generally, recursive data structures.

## `Base.show`

`Base.show` is a special function that is supposed to return a string representation of an object. For example, here is a `Base.show` method for Time objects:

```julia
using Printf

function Base.show(io::IO, time::MyTime)
    @printf(io, "%02d:%02d:%02d", time.hour, time.minute, time.second)
end
```

When you print an object, Julia invokes the `Base.show` function:

```@meta
DocTestSetup = quote
    using ThinkJulia
    using Printf
    function Base.show(io::IO, time::MyTime)
        @printf(io, "%02d:%02d:%02d", time.hour, time.minute, time.second)
    end
end
```

```jldoctest chap17b
julia> time = MyTime(9, 45)
09:45:00
```

When I write a new composite type, I almost always start by writing an inner constructor, which makes it easier to instantiate objects, and `Base.show`, which is useful for debugging.

As an exercise, write an inner constructor method for the `Point` class that takes `x` and `y` as optional parameters and assigns them to the corresponding fields.

## Operator Overloading

By defining operator methods, you can specify the behavior of operators on programmer-defined types. For example, if you define a method named `+` with two `MyTime` arguments, you can use the `+` operator on `MyTime` objects.

Here is what the definition might look like:

```julia
import Base.+

function +(t1::MyTime, t2::MyTime)
    seconds = timetoint(t1) + timetoint(t2)
    inttotime(seconds)
end
```

The import statement adds the `Base.+` function to the local scope so that methods can be added.

And here is how you could use it:

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

```jldoctest chap17b
julia> start = MyTime(9, 45)
09:45:00
julia> duration = MyTime(1, 35, 0)
01:35:00
julia> start + duration
11:20:00
```

When you apply the `+` operator to `MyTime` objects, Julia invokes the newly added method. When the REPL shows the result, Julia invokes `Base.show`. So there is a lot happening behind the scenes!

Changing the behavior of an operator so that it works with programmer-defined types is called **operator overloading**.

## Multiple Dispatch

In the previous section we added two `MyTime` objects, but you also might want to add an integer to a `MyTime` object:

```julia
function +(time::MyTime, seconds::Int64)
    increment!(time, seconds)
end
```

Here is an example that use the `+` operator with a mytime object and an integer:

```jldoctest chap17b
julia> start = MyTime(9, 45)
09:45:00
julia> start + 1337
10:07:17
```

Addition is a commutative operator so we have to add another method.

```julia
function +(seconds::Int64, time::MyTime)
  increment!(time, seconds)
end
```

And we get the same result:

```jldoctest chap17b
julia> 1337 + start
10:07:17
```

The choice of which method to execute when a function is applied is called **dispatch**. Julia allows the dispatch process to choose which of a function's methods to call based on the number of arguments given, and on the types of all of the function's arguments.  Using all of a function's arguments to choose which method should be invoked is known as **multiple dispatch**.

As an exercise, write `+` methods for point objects:

- If both operands are point objects, the method should return a new point object whose `x` coordinate is the sum of the `x` coordinates of the operands, and likewise for the `y` coordinates.

- If the first or the second operand is a tuple, the method should add the first element of the tuple to the `x` coordinate and the second element to the `y` coordinate, and return a new point object with the result.

## Polymorphism

Multiple dispatch is useful when it is necessary, but (fortunately) it is not always necessary. Often you can avoid it by writing functions that work correctly for arguments with different types.

Many of the functions we wrote for strings also work for other sequence types. For example, in Section 11.2 we used `histogram` to count the number of times each letter appears in a word.

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

This function also works for lists, tuples, and even dictionaries, as long as the elements of `s` are hashable, so they can be used as keys in `d`.

```jldoctest chap17
julia> t = ("spam", "egg", "spam", "spam", "bacon", "spam")
("spam", "egg", "spam", "spam", "bacon", "spam")
julia> histogram(t)
Dict{Any,Any} with 3 entries:
  "bacon" => 1
  "spam"  => 4
  "egg"   => 1
```

Functions that work with several types are called **polymorphic**. Polymorphism can facilitate code reuse.

For example, the built-in function `sum`, which adds the elements of a sequence, works as long as the elements of the sequence support addition.

Since a `+` method is provided for mytime objects, they work with `sum`:

```jldoctest chap17
julia> t1 = MyTime(1, 7, 2)
01:07:02
julia> t2 = MyTime(1, 5, 8)
01:05:08
julia> t3 = MyTime(1, 5, 0)
01:05:00
julia> sum((t1, t2, t3))
03:17:10
```

In general, if all of the operations inside a function work with a given type, the function works with that type.

The best kind of polymorphism is the unintentional kind, where you discover that a function you already wrote can be applied to a type you never planned for.

## Interface and Implementation

One of the goals of multiple dispatch is to make software more maintainable, which means that you can keep the program working when other parts of the system change, and modify the program to meet new requirements.

A design principle that helps achieve that goal is to keep interfaces separate from implementations. For objects, that means that the methods having an argument annotated with a type should not depend on how the fields of that type are represented.

For example, in this chapter we developed a struct that represents a time of day. Methods having an argument annotated with this type include `timetoint`, `isafter`, and `+`.

We could implement those methods in several ways. The details of the implementation depend on how we represent `MyTime`. In this chapter, the fields of a mytime object are `hour`, `minute`, and `second`.

As an alternative, we could replace these field with a single integer representing the number of seconds since midnight. This implementation would make some functions, like `isafter`, easier to write, but it makes other functions harder.

After you deploy a new type, you might discover a better implementation. If other parts of the program are using your type, it might be time-consuming and error-prone to change the interface.

But if you designed the interface carefully, you can change the implementation without changing the interface, which means that other parts of the program don’t have to change.

## Debugging

To know what methods are available, you can use the function `methods`:

```julia-repl
julia> methods(printtime)
# 2 methods for generic function "printtime":
printtime(time::ThinkJulia.MyTime) in ThinkJulia at /Users/ben/.julia/dev/ThinkJulia/src/code/chap17.jl:24
printtime(time) in ThinkJulia at /Users/ben/.julia/dev/ThinkJulia/src/code/chap17.jl:20
```

## Glossary

*type annotation*:
The operator `::` followed by a type indicating that an expression or a variable is of that type.

*method*:
A definition of a possible behavior for a function.

*dispatch*:
The choice of which method to execute when a function is executed.

*signature*:
The number and type of the arguments of a method allowing the dispatch to select the most specific method of a function during the function call.

*constructor*:
A special function that is called to create an object.

*outer constructor*:
Constructor defined outside the type definition to define convenience methods for creating an object.

*inner constructor*:
Constructor defined inside the type definition to enforce invariants or to construct self-referential objects.

*copy constructor*:
Outer constructor method of a type with as only argument an object of the type. It creates a new object that is a copy of the argument.

*operator overloading*:
Changing the behavior of an operator like `+` so it works with a programmer-defined type.

*multiple dispatch*:
Dispatch based on all of a function's arguments.

*polymorphic*:
Pertaining to a function that can work with more than one type.

## Exercises

### Exercise 17-1

Change the fields of `MyTime` to be a single integer representing seconds since midnight. Then modify the methods defined in this chapter to work with the new implementation.

### Exercise 17-2

Write a definition for a type named `Kangaroo` with a field named `pouchcontents` of type `Array` and the following methods:

- An constructor that initializes `pouchcontents` to an empty array.

- A method named `putinpouch` that takes a `Kangaroo` object and an object of any type and adds it to `pouchcontents`.

- A `show` method that returns a string representation of the `Kangaroo` object and the contents of the pouch.

Test your code by creating two `Kangaroo` objects, assigning them to variables named `kanga` and `roo`, and then adding `roo` to the contents of `kanga`’s pouch.
