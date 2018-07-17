# Fruitful Functions

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

Many of the Julia functions we have used, such as the math functions, produce return values. But the functions we’ve written are all void: they have an effect, like printing a value or moving a turtle, but they return `nothing`. In this chapter you will learn to write fruitful functions.

## Return Values

Calling the function generates a return value, which we usually assign to a variable or use as part of an expression.

```julia
e = exp(1.0)
height = radius * sin(radians)
```

The functions we have written so far are void. Speaking casually, they have no return value; more precisely, their return value is `nothing`.
In this chapter, we are (finally) going to write fruitful functions. The first example is `area`, which returns the area of a circle with the given radius:

```julia
function area(radius)
    a = π * radius^2
    return a
end
```

We have seen the `return` statement before, but in a fruitful function the `return` statement includes an expression. This statement means: “Return immediately from this function and use the following expression as a return value.” The expression can be arbitrarily complicated, so we could have written this function more concisely:

```julia
function area(radius)
    π * radius^2
end
```

The value returned by a function is the value of the last expression evaluated, which, by default, is the last expression in the body of the function definition.

On the other hand, **temporary variables** like `a` and explicit `return` statements can make debugging easier.

Sometimes it is useful to have multiple `return` statements, one in each branch of a conditional:

```julia
function absvalue(x)
    if x < 0
        return -x
    else
        return x
    end
end
```

Since these return statements are in an alternative conditional, only one runs.

As soon as a `return` statement runs, the function terminates without executing any subsequent statements. Code that appears after a `return` statement, or any other place the flow of execution can never reach, is called **dead code**.

In a fruitful function, it is a good idea to ensure that every possible path through the program hits a return statement. For example:

```julia
function absvalue(x)
    if x < 0
        return -x
    end
    if x > 0
        return x
    end
end
```

This function is incorrect because if `x` happens to be 0, neither condition is true, and the function ends without hitting a `return` statement. If the flow of execution gets to the end of a function, the return value is `nothing`, which is not the absolute value of 0.

```jldoctest
julia> show(absvalue(0))
nothing
```

By the way, Julia provides a built-in function called `abs` that computes absolute values.

As an exercise, write a `compare` function takes two values, `x` and `y`, and returns `1` if `x > y`, `0` if `x == y`, and `-1` if `x < y`.

## Incremental Development

As you write larger functions, you might find yourself spending more time debugging.

To deal with increasingly complex programs, you might want to try a process called **incremental development**. The goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time.

As an example, suppose you want to find the distance between two points, given by the coordinates ``(x_1, y_1)`` and ``(x_2, y_2)``. By the Pythagorean theorem, the distance is:

```math
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
```

The first step is to consider what a distance function should look like in Julia. In other words, what are the inputs (parameters) and what is the output (return value)?

In this case, the inputs are two points, which you can represent using four numbers. The return value is the distance represented by a floating-point value.

Immediately you can write an outline of the function:

```julia
function distance(x₁, y₁, x₂, y₂)
    0.0
end
```

Obviously, this version doesn’t compute distances; it always returns zero. But it is syntactically correct, and it runs, which means that you can test it before you make it more complicated. The subscript numbers are available in the Unicode character encoding (`\_1 TAB`, `\_2 TAB`, etc.).

To test the new function, call it with sample arguments:

```julia
distance(1, 2, 4, 6)
```

I chose these values so that the horizontal distance is 3 and the vertical distance is 4; that way, the result is 5, the hypotenuse of a 3-4-5 triangle. When testing a function, it is useful to know the right answer.

At this point we have confirmed that the function is syntactically correct, and we can start adding code to the body. A reasonable next step is to find the differences ``x_2 - x_1`` and ``y_2 - y_1``. The next version stores those values in temporary variables and prints them.

```julia
function distance(x₁, y₁, x₂, y₂)
    dx = x₂ - x₁
    dy = y₂ - y₁
    println("dx is ", dx)
    println("dy is ", dy)
    0.0
end
```

If the function is working, it should display `dx` is 3 and `dy` is 4. If so, we know that the function is getting the right arguments and performing the first computation correctly. If not, there are only a few lines to check.

Next we compute the sum of squares of `dx` and `dy`:

```julia
function distance(x₁, y₁, x₂, y₂)
    dx = x₂ - x₁
    dy = y₂ - y₁
    d² = dx^2 + dy^2
    println("d² is ", d²)
    0.0
end
```

Again, you would run the program at this stage and check the output (which should be 25). Superscript numbers are also available (`\^2 TAB`). Finally, you can use `sqrt` to compute and return the result:

```julia
function distance(x₁, y₁, x₂, y₂)
    dx = x₂ - x₁
    dy = y₂ - y₁
    d² = dx^2 + dy^2
    sqrt(d²)
end
```

If that works correctly, you are done. Otherwise, you might want to print the value of `sqrt(d²)` before the `return` statement.

The final version of the function doesn’t display anything when it runs; it only returns a value. The print statements we wrote are useful for debugging, but once you get the function working, you should remove them. Code like that is called **scaffolding** because it is helpful for building the program but is not part of the final product.

When you start out, you should add only a line or two of code at a time. As you gain more experience, you might find yourself writing and debugging bigger chunks. Either way, incremental development can save you a lot of debugging time.

The key aspects of the process are:

1. Start with a working program and make small incremental changes. At any point, if there is an error, you should have a good idea where it is.

2. Use variables to hold intermediate values so you can display and check them.

3. Once the program is working, you might want to remove some of the scaffolding or consolidate multiple statements into compound expressions, but only if it does not make the program difficult to read.

As an exercise, use incremental development to write a function called `hypotenuse` that returns the length of the hypotenuse of a right triangle given the lengths of the other two legs as arguments. Record each stage of the development process as you go.

## Composition

As you should expect by now, you can call one function from within another. As an example, we’ll write a function that takes two points, the center of the circle and a point on the perimeter, and computes the area of the circle.

Assume that the center point is stored in the variables `xc` and `yc`, and the perimeter point is in `xp` and `yp`. The first step is to find the radius of the circle, which is the distance between the two points. We just wrote a function, distance, that does that:

```julia
radius = distance(xc, yc, xp, yp)
```

The next step is to find the area of a circle with that radius; we just wrote that, too:

```julia
result = area(radius)
```

Encapsulating these steps in a function, we get:

```julia
function circlearea(xc, yc, xp, yp)
    radius = distance(xc, yc, xp, yp)
    result = area(radius)
    return result
end
```

The temporary variables `radius` and `result` are useful for development and debugging, but once the program is working, we can make it more concise by composing the function calls:

```julia
function circlearea(xc, yc, xp, yp)
    area(distance(xc, yc, xp, yp))
end
```

## Boolean Functions

Functions can return booleans, which is often convenient for hiding complicated tests inside functions. For example:

```julia
function isdivisible(x, y)
    if x % y == 0
        return true
    else
        return false
    end
end
```

It is common to give boolean functions names that sound like yes/no questions; `isdivisible` returns either `true` or `false` to indicate whether `x` is divisible by `y`.

Here is an example:

```jldoctest
julia> isdivisible(6, 4)
false
julia> isdivisible(6, 3)
true
```

The result of the `==` operator is a boolean, so we can write the function more concisely by returning it directly:

```julia
function isdivisible(x, y)
    x % y == 0
end
```

Boolean functions are often used in conditional statements:

```julia
if isdivisible(x, y)
    println("x is divisible by y")
end
```

It might be tempting to write something like:

```julia
if isdivisible(x, y) == true
    println("x is divisible by y")
end
```

But the extra comparison is unnecessary.

As an exercise, write a function `isbetween(x, y, z)` that returns `true` if `x ≤ y ≤ z` or `false` otherwise.

## More Recursion

We have only covered a small subset of Julia, but you might be interested to know that this subset is a *complete* programming language, which means that anything that can be computed can be expressed in this language. Any program ever written could be rewritten using only the language features you have learned so far (actually, you would need a few commands to control devices like the mouse, disks, etc., but that’s all).

Proving that claim is a nontrivial exercise first accomplished by Alan Turing, one of the first computer scientists (some would argue that he was a mathematician, but a lot of early computer scientists started as mathematicians). Accordingly, it is known as the Turing Thesis. For a more complete (and accurate) discussion of the Turing Thesis, I recommend Michael Sipser’s book *Introduction to the Theory of Computation*.

To give you an idea of what you can do with the tools you have learned so far, we’ll evaluate a few recursively defined mathematical functions. A recursive definition is similar to a circular definition, in the sense that the definition contains a reference to the thing being defined. A truly circular definition is not very useful:

**vorpal**:
An adjective used to describe something that is vorpal.

If you saw that definition in the dictionary, you might be annoyed. On the other hand, if you looked up the definition of the factorial function, denoted with the symbol ``!``, you might get something like this:

```math
n! = 
\begin{cases}
  1& \textrm{if }  n = 0 \\
  n (n-1)!& \textrm{if }  n > 0
\end{cases}
```

This definition says that the factorial of ``0`` is ``1``, and the factorial of any other value, ``n``, is ``n`` multiplied by the factorial of ``n-1``.

So ``3!`` is ``3`` times ``2!``, which is ``2`` times ``1!``, which is ``1`` times ``0!``. Putting it all together, ``3!`` equals ``3`` times ``2`` times ``1`` times ``1``, which is ``6``.

If you can write a recursive definition of something, you can write a Julia program to evaluate it. The first step is to decide what the parameters should be. In this case it should be clear that factorial takes an integer:

```julia
function fact(n) end
```

If the argument happens to be `0`, all we have to do is return `1`:

```julia
function fact(n)
    if n == 0
        return 1
    end
end
```

Otherwise, and this is the interesting part, we have to make a recursive call to find the factorial of `n-1` and then multiply it by `n`:

```julia
function fact(n)
    if n == 0
        return 1
    else
        recurse = fact(n-1)
        result = n * recurse
        return result
    end
end
```

The flow of execution for this program is similar to the flow of `countdown` in Section 5.8. If we call `fact` with the value `3`:

* Since `3` is not `0`, we take the second branch and calculate the factorial of `n-1`...

  * Since `2` is not `0`, we take the second branch and calculate the factorial of `n-1`...

    * Since `1` is not `0`, we take the second branch and calculate the factorial of `n-1`...

      * Since `0` equals `0`, we take the first branch and return `1` without making any more recursive calls.

    * The return value, `1`, is multiplied by `n`, which is `1`, and the `result` is returned.

  * The return value, `1`, is multiplied by `n`, which is `2`, and the `result` is returned.

* The return value `2` is multiplied by `n`, which is `3`, and the result, `6`, becomes the return value of the function call that started the whole process.

![Stack diagram.](images/fig61.svg)

Figure 6-1 shows what the stack diagram looks like for this sequence of function calls.

The return values are shown being passed back up the stack. In each frame, the return value is the value of `result`, which is the product of `n` and `recurse`.

In the last frame, the local variables `recurse` and `result` do not exist, because the branch that creates them does not run.

## Leap of Faith

Following the flow of execution is one way to read programs, but it can quickly become overwhelming. An alternative is what I call the “leap of faith”. When you come to a function call, instead of following the flow of execution, you *assume* that the function works correctly and returns the right result.

In fact, you are already practicing this leap of faith when you use built-in functions. When you call `cos` or `exp`, you don’t examine the bodies of those functions. You just assume that they work because the people who wrote the built-in functions were good programmers.

The same is true when you call one of your own functions. For example, in Section 6.4, we wrote a function called `isdivisible` that determines whether one number is divisible by another. Once we have convinced ourselves that this function is correct—by examining the code and testing—we can use the function without looking at the body again.

The same is true of recursive programs. When you get to the recursive call, instead of following the flow of execution, you should assume that the recursive call works (returns the correct result) and then ask yourself, “Assuming that I can find the factorial of ``n-1``, can I compute the factorial of ``n``?” It is clear that you can, by multiplying by ``n``.

Of course, it’s a bit strange to assume that the function works correctly when you haven’t finished writing it, but that’s why it’s called a leap of faith!

## One More Example

After factorial, the most common example of a recursively defined mathematical function is fibonacci, which has the following definition (see <http://en.wikipedia.org/wiki/Fibonacci_number>):

```math
\textit{fib}(n) =
\begin{cases}
    0& \textrm{if }  n = 0 \\
    1& \textrm{if }  n = 1 \\
    \textit{fib}(n-1) + \textit{fib}(n-2)& \textrm{if }  n > 1 
\end{cases}
```

Translated into Julia, it looks like this:

```julia
function fib(n)
    if n == 0
        return 0
    elseif n == 1
        return 1
    else
        return fib(n-1) + fib(n-2)
    end
end
```

If you try to follow the flow of execution here, even for fairly small values of `n`, your head explodes. But according to the leap of faith, if you assume that the two recursive calls work correctly, then it is clear that you get the right result by adding them together.

## Checking Types

What happens if we call `fact` and give it `1.5` as an argument?

```julia-repl
julia> fact(1.5)
ERROR: StackOverflowError:
Stacktrace:
 [1] fact(::Float64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap06.jl:0
 [2] fact(::Float64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap06.jl:38 (repeats 52402 times)
```

It looks like an infinite recursion. How can that be? The function has a base case—when `n == 0`. But if `n` is not an integer, we can *miss* the base case and recurse forever.

In the first recursive call, the value of `n` is `0.5`. In the next, it is `-0.5`. From there, it gets smaller (more negative), but it will never be `0`.

We have two choices. We can try to generalize the factorial function to work with floating-point numbers, or we can make `fact` check the type of its argument. The first option is called the gamma function and it’s a little beyond the scope of this book. So we’ll go for the second.

We can use the built-in operator `isa` to verify the type of the argument. While we’re at it, we can also make sure the argument is positive:

```julia
function fact(n)
    if !(n isa Int64)
        println("Factorial is only defined for integers.")
        return
    elseif n < 0
        println("Factorial is not defined for negative integers.")
        return
    elseif n == 0
        return 1
    else
        return n * fact(n-1)
    end
end
```

The first base case handles nonintegers; the second handles negative integers. In both cases, the program prints an error message and returns `nothing` to indicate that something went wrong:

```@meta
DocTestSetup = quote
    function fact(n)
        if !(n isa Int64)
            println("Factorial is only defined for integers.")
            return
        elseif n < 0
            println("Factorial is not defined for negative integers.")
            return
        elseif n == 0
            return 1
        else
            return n * fact(n-1)
        end
    end
end
```

```jldoctest
julia> fact("fred")
Factorial is only defined for integers.
julia> fact(-2)
Factorial is not defined for negative integers.
```

If we get past both checks, we know that `n` is positive or zero, so we can prove that the recursion terminates.

This program demonstrates a pattern sometimes called a **guardian**. The first two conditionals act as guardians, protecting the code that follows from values that might cause an error. The guardians make it possible to prove the correctness of the code.

In Section 11.4 we will see a more flexible alternative to printing an error message: raising an exception.

## Debugging

Breaking a large program into smaller functions creates natural checkpoints for debugging. If a function is not working, there are three possibilities to consider:

* There is something wrong with the arguments the function is getting; a precondition is violated.

* There is something wrong with the function; a postcondition is violated.

* There is something wrong with the return value or the way it is being used.

To rule out the first possibility, you can add a print statement at the beginning of the function and display the values of the parameters (and maybe their types). Or you can write code that checks the preconditions explicitly.

If the parameters look good, add a print statement before each return statement and display the return value. If possible, check the result by hand. Consider calling the function with values that make it easy to check the result (as in Section 6.2).

If the function seems to be working, look at the function call to make sure the return value is being used correctly (or used at all!).

Adding print statements at the beginning and end of a function can help make the flow of execution more visible. For example, here is a version of `fact` with print statements:

```julia
function fact(n)
    space = " " ^ (4 * n)
    println(space, "factorial ", n)
    if n == 0
        println(space, "returning 1")
        return 1
    else
        recurse = fact(n-1)
        result = n * recurse
        println(space, "returning ", result)
        return result
    end
end
```

`space` is a string of space characters that controls the indentation of the output:

```@setup chap06
function fact(n)
    space = " " ^ (4 * n)
    println(space, "factorial ", n)
    if n == 0
        println(space, "returning 1")
        return 1
    else
        recurse = fact(n-1)
        result = n * recurse
        println(space, "returning ", result)
        return result
    end
end
```

```@repl chap06
fact(4)
```

If you are confused about the flow of execution, this kind of output can be helpful. It takes some time to develop effective scaffolding, but a little bit of scaffolding can save a lot of debugging.

## Glossary

*temporary variable*:
A variable used to store an intermediate value in a complex calculation.

*dead code*:
Part of a program that can never run, often because it appears after a return statement.

*incremental development*:
A program development plan intended to avoid debugging by adding and testing only a small amount of code at a time.

*scaffolding*:
Code that is used during program development but is not part of the final version.

*guardian*:
A programming pattern that uses a conditional statement to check for and handle circumstances that might cause an error.

## Exercises

### Exercise 6-1

Draw a stack diagram for the following program. What does the program print?

```julia
function b(z)
    prod = a(z, z)
    println(z, " ", prod)
    prod
end

function a(x, y)
    x = x + 1
    x * y
end

function c(x, y, z)
    total = x + y + z
    square = b(total)^2
    square
end

x = 1
y = x + 1
println(c(x, y+3, x+y))
```

### Exercise 6-2

The Ackermann function, ``A(m, n)``, is defined:

```math
A(m, n) =
\begin{cases}
              n+1& \textrm{if }  m = 0 \\
        A(m-1, 1)& \textrm{if }  m > 0 \textrm{ and } n = 0 \\
A(m-1, A(m, n-1))& \textrm{if }  m > 0 \textrm{ and } n > 0.
\end{cases}
```

See <http://en.wikipedia.org/wiki/Ackermann_function>. Write a function named `ack` that evaluates the Ackermann function. Use your function to evaluate `ack(3, 4)`, which should be 125. What happens for larger values of `m` and `n`?

### Exercise 6-3

A palindrome is a word that is spelled the same backward and forward, like “noon” and “redivider”. Recursively, a word is a palindrome if the first and last letters are the same and the middle is a palindrome.

The following are functions that take a string argument and return the first, last, and middle letters:

```julia
function first(word)
    first = firstindex(word)
    word[first]
end

function last(word)
    last = lastindex(word)
    word[last]
end

function middle(word)
    first = firstindex(word)
    last = lastindex(word)
    word[nextind(word, first) : prevind(word, last)]
end
```

We’ll see how they work in chapter 8

1. Test these functions out. What happens if you call middle with a string with two letters? One letter? What about the empty string, which is written "" and contains no letters?

2. Write a function called `ispalindrome` that takes a string argument and returns `true` if it is a palindrome and `false` otherwise. Remember that you can use the built-in function `length` to check the length of a string.

### Exercise 6-4

A number, ``a``, is a power of ``b`` if it is divisible by ``b`` and ``\frac{a}{b}`` is a power of ``b``. Write a function called `ispower` that takes parameters `a` and `b` and returns `true` if `a` is a power of `b`. Note: you will have to think about the base case.

### Exercise 6-5

The greatest common divisor (GCD) of ``a`` and ``b`` is the largest number that divides both of them with no remainder.

One way to find the GCD of two numbers is based on the observation that if ``r`` is the remainder when ``a`` is divided by ``b``, then `gcd(a, b) = gcd(b, r)`. As a base case, we can use `gcd(a, 0) = a`.

Write a function called `gcd` that takes parameters `a` and `b` and returns their greatest common divisor.

Credit: This exercise is based on an example from Abelson and Sussman’s *Structure and Interpretation of Computer Programs*.