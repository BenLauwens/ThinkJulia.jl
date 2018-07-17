# Conditionals and Recursion

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

The main topic of this chapter is the `if` statement, which executes different code depending on the state of the program. But first I want to introduce two new operators: floor division and modulus.

## Floor Division and Modulus

The **floor division** operator, `÷` (`\div TAB`), divides two numbers and rounds down to an integer. For example, suppose the run time of a movie is 105 minutes. You might want to know how long that is in hours. Conventional division returns a floating-point number:

```jldoctest chap05
julia> minutes = 105
105
julia> minutes / 60
1.75
```

But we don’t normally write hours with decimal points. Floor division returns the integer number of hours, rounding down:

```jldoctest chap05
julia> hours = minutes ÷ 60
1
```

To get the remainder, you could subtract off one hour in minutes:

```jldoctest chap05
julia> remainder = minutes - hours * 60
45
```

An alternative is to use the **modulus operator**, `%`, which divides two numbers and returns the remainder.

```jldoctest chap05
julia> remainder = minutes % 60
45
```

The modulus operator is more useful than it seems. For example, you can check whether one number is divisible by another—if `x % y` is zero, then `x` is divisible by `y`.

Also, you can extract the right-most digit or digits from a number. For example, `x % 10` yields the right-most digit of `x` (in base 10). Similarly `x % 100` yields the last two digits.

## Boolean Expressions

A **boolean expression** is an expression that is either true or false. The following examples use the operator `==`, which compares two operands and produces `true` if they are equal and `false` otherwise:

```jldoctest
julia> 5 == 5
true
julia> 5 == 6
false
```

`true` and `false` are special values that belong to the type `Bool`; they are not strings:

```jldoctest
julia> typeof(true)
Bool
julia> typeof(false)
Bool
```

The `==` operator is one of the relational operators; the others are:

```julia
      x != y               # x is not equal to y
      x ≠ y                # (\ne TAB)
      x > y                # x is greater than y
      x < y                # x is less than y
      x >= y               # x is greater than or equal to y
      x ≥ y                # (\ge TAB)
      x <= y               # x is less than or equal to y
      x ≤ y                # (\le TAB)
```

Although these operations are probably familiar to you, the Julia symbols are different from the mathematical symbols. A common error is to use a single equal sign (`=`) instead of a double equal sign (`==`). Remember that `=` is an assignment operator and `==` is a relational operator. There is no such thing as `=<` or `=>`.

## Logical Operators

There are three **logical operators**: `&&` (and), `||` (or), and `!` (not). The semantics (meaning) of these operators is similar to their meaning in English. For example, `x > 0 && x < 10` is true only if `x` is greater than `0` *and* less than `10`.

`n % 2 == 0 || n % 3 == 0` is true if *either or both* of the conditions is true, that is, if the number is divisible by 2 *or* 3.

Both `&&` and `||` associate to the right, but `&&` has higher precedence than `||` does.

Finally, the `!` operator negates a boolean expression, so `!(x > y)` is true if `x > y` is false, that is, if `x` is less than or equal to `y`.

## Conditional Execution

In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. **Conditional statements** give us this ability. The simplest form is the `if` statement:

```julia
if x > 0
    println("x is positive")
end
```

The boolean expression after `if` is called the **condition**. If it is true, the indented statement runs. If not, nothing happens.

`if` statements have the same structure as function definitions: a header followed by body terminated with the keyword `end`. Statements like this are called **compound statements**.

There is no limit on the number of statements that can appear in the body. Occasionally, it is useful to have a body with no statements (usually as a place keeper for code you haven’t written yet).

```julia
if x < 0
    # TODO: need to handle negative values!
end
```

## Alternative Execution

A second form of the `if` statement is “alternative execution”, in which there are two possibilities and the condition determines which one runs. The syntax looks like this:

```julia
if x % 2 == 0
    println("x is even")
else
    println("x is odd")
end
```

If the remainder when `x` is divided by 2 is 0, then we know that `x` is even, and the program displays an appropriate message. If the condition is false, the second set of statements runs. Since the condition must be true or false, exactly one of the alternatives will run. The alternatives are called **branches**, because they are branches in the flow of execution.

## Chained Conditionals

Sometimes there are more than two possibilities and we need more than two branches. One way to express a computation like that is a **chained conditional**:

```julia
if x < y
    println("x is less than y")
elseif x > y
    println("x is greater than y")
else
    println("x and y are equal")
end
```

Again, exactly one branch will run. There is no limit on the number of `elseif` statements. If there is an `else` clause, it has to be at the end, but there doesn’t have to be one.

```julia
if choice == "a"
    draw_a()
elseif choice == "b"
    draw_b()
elseif choice == "c"
    draw_c()
end
```

Each condition is checked in order. If the first is false, the next is checked, and so on. If one of them is true, the corresponding branch runs and the statement ends. Even if more than one condition is true, only the first true branch runs.

## Nested Conditionals

One conditional can also be nested within another. We could have written the example in the previous section like this:

```julia
if x == y
    println("x and y are equal")
else
    if x < y
        println("x is less than y")
    else
        println("x is greater than y")
    end
end
```

The outer conditional contains two branches. The first branch contains a simple statement. The second branch contains another `if` statement, which has two branches of its own. Those two branches are both simple statements, although they could have been conditional statements as well.

Although the non-compulsory indentation of the statements makes the structure apparent, **nested conditionals** become difficult to read very quickly. It is a good idea to avoid them when you can.

Logical operators often provide a way to simplify nested conditional statements. For example, we can rewrite the following code using a single conditional:

```julia
if 0 < x
    if x < 10
        println("x is a positive single-digit number.")
    end
end
```

The `print` statement runs only if we make it past both conditionals, so we can get the same effect with the `&&` operator:

```julia
if 0 < x && x < 10
    println("x is a positive single-digit number.")
end
```

For this kind of condition, Julia provides a more concise option:

```julia
if 0 < x < 10
    println("x is a positive single-digit number.")
end
```

## Recursion

It is legal for one function to call another; it is also legal for a function to call itself. It may not be obvious why that is a good thing, but it turns out to be one of the most magical things a program can do. For example, look at the following function:

```julia
function countdown(n)
    if n <= 0
        println("Blastoff!")
    else
        print(n, " ")
        countdown(n-1)
    end
end
```

If `n` is 0 or negative, it outputs the word, `"Blastoff!"` Otherwise, it outputs `n` and then calls a function named `countdown`—itself—passing `n-1` as an argument.

What happens if we call this function like this?

```jldoctest
julia> countdown(3)
3 2 1 Blastoff!
```

* The execution of `countdown` begins with `n = 3`, and since `n` is greater than 0, it outputs the value 3, and then calls itself...

  * The execution of `countdown` begins with `n = 2`, and since `n` is greater than 0, it outputs the value 2, and then calls itself...

    * The execution of `countdown` begins with `n = 1`, and since `n` is greater than 0, it outputs the value 1, and then calls itself...

      * The execution of `countdown` begins with `n = 0`, and since `n` is not greater than 0, it outputs the word, `"Blastoff!"` and then returns.

    * The countdown that got `n = 1` returns.

  * The countdown that got `n = 2` returns.

* The countdown that got `n = 3` returns.

And then you’re back in `__main__`.

A function that calls itself is **recursive**; the process of executing it is called **recursion**.

As another example, we can write a function that prints a string ``n`` times.

```julia
function printn(s, n)
    if n <= 0
        return
    end
    println(s)
    printn(s, n-1)
end
```

If `n <= 0` the `return` statement exits the function. The flow of execution immediately returns to the caller, and the remaining lines of the function don’t run.

The rest of the function is similar to `countdown`: it displays `s` and then calls itself to display `s` ``n-1`` additional times. So the number of lines of output is ``1 + (n - 1)``, which adds up to ``n``.

For simple examples like this, it is probably easier to use a `for` loop. But we will see examples later that are hard to write with a `for` loop and easy to write with recursion, so it is good to start early.

## Stack Diagrams for Recursive Functions

In Section 3.9, we used a stack diagram to represent the state of a program during a function call. The same kind of diagram can help interpret a recursive function.

Every time a function gets called, Julia creates a frame to contain the function’s local variables and parameters. For a recursive function, there might be more than one frame on the stack at the same time.

![Stack diagram.](images/fig51.svg)

Figure 5-1 shows a stack diagram for `countdown` called with `n = 3`.

As usual, the top of the stack is the frame for `__main__`. It is empty because we did not create any variables in `__main__` or pass any arguments to it.

The four `countdown` frames have different values for the parameter `n`. The bottom of the stack, where `n = 0`, is called the **base case**. It does not make a recursive call, so there are no more frames.

As an exercise, draw a stack diagram for `printn` called with `s = "Hello"` and `n = 2`. Then write a function called `do_n` that takes a function object and a number, `n`, as arguments, and that calls the given function ``n`` times.

## Infinite Recursion

If a recursion never reaches a base case, it goes on making recursive calls forever, and the program never terminates. This is known as **infinite recursion**, and it is generally not a good idea. Here is a minimal program with an infinite recursion:

```julia
function recurse()
    recurse()
end
```

In most programming environments, a program with infinite recursion does not really run forever. Julia reports an error message when the maximum recursion depth is reached:

```julia-repl
julia> recurse()
ERROR: StackOverflowError:
Stacktrace:
 [1] recurse() at ./REPL[1]:2 (repeats 80000 times)
```

This traceback is a little bigger than the one we saw in the previous chapter. When the error occurs, there are 80000 `recurse` frames on the stack!

If you encounter an infinite recursion by accident, review your function to confirm that there is a base case that does not make a recursive call. And if there is a base case, check whether you are guaranteed to reach it.

## Keyboard Input

The programs we have written so far accept no input from the user. They just do the same thing every time.

Julia provides a built-in function called input that stops the program and waits for the user to type something. When the user presses `RETURN` or `ENTER`, the program resumes and `readline` returns what the user typed as a string.

```julia-repl
julia> text = readline()
What are you waiting for?
"What are you waiting for?"
```

Before getting input from the user, it is a good idea to print a prompt telling the user what to type:

```julia-repl
julia> print("What...is your name? "); readline()
What...is your name? Arthur, King of the Britons!
"Arthur, King of the Britons!"
```

A semi-colon `;` allows to put multiple statements on the same line. In the REPL only the last statement returns its value.

If you expect the user to type an integer, you can try to convert the return value to `Int64`:

```julia-repl
julia> println("What...is the airspeed velocity of an unladen swallow?"); speed = readline()
What...is the airspeed velocity of an unladen swallow?
42
"42"
julia> parse(Int64, speed)
42
```

But if the user types something other than a string of digits, you get an error:

```julia-repl
julia> println("What...is the airspeed velocity of an unladen swallow? "); speed = readline()
What...is the airspeed velocity of an unladen swallow?
What do you mean, an African or a European swallow?
"What do you mean, an African or a European swallow?"
julia> parse(Int64, speed)
ERROR: ArgumentError: invalid base 10 digit 'W' in "What do you mean, an African or a European swallow?"
[...]
```

We will see how to handle this kind of error later.

## Debugging

When a syntax or runtime error occurs, the error message contains a lot of information, but it can be overwhelming. The most useful parts are usually:

* What kind of error it was, and

* Where it occurred.

Syntax errors are usually easy to find, but there are a few gotchas. In general, error messages indicate where the problem was discovered, but the actual error might be earlier in the code, sometimes on a previous line.

The same is true of runtime errors. Suppose you are trying to compute a signal-to-noise ratio in decibels. The formula is

```math
\textit{SNR}_{\mathrm{db}} = 10 \log_{10} \frac{P_{\mathrm{signal}}}{P_{\mathrm{noise}}}\ .
```

In Julia, you might write something like this:

```julia
signal_power = 9
noise_power = 10
ratio = signal_power ÷ noise_power
decibels = 10 * log10(ratio)
print(decibels)
```

And you get:

```julia
-Inf
```

This is not the result you expected.

To find the error, it might be useful to print the value of ratio, which turns out to be 0. The problem is in line 3, which uses floor division instead of floating-point division.

You should take the time to read error messages carefully, but don’t assume that everything they say is correct.

## Glossary

*floor division*:
An operator, denoted `÷`, that divides two numbers and rounds down (toward negative infinity) to an integer.

*modulus operator*:
An operator, denoted with a percent sign (%), that works on integers and returns the remainder when one number is divided by another.

*boolean expression*:
An expression whose value is either `true` or `false`.

*relational operator*:
One of the operators that compares its operands: `==`, `≠` (`!=`), `>`, `<`, `≥` (`>=`), and `≤` (`<=`).

*logical operator*:
One of the operators that combines boolean expressions: `&&` (and), `||` (or), and `!` (not).

*conditional statement*:
A statement that controls the flow of execution depending on some condition.

*condition*:
The boolean expression in a conditional statement that determines which branch runs.

*compound statement*:
A statement that consists of a header and a body. The body is terminated with the keyword `end`.

*branch*:
One of the alternative sequences of statements in a conditional statement.

*chained conditional*:
A conditional statement with a series of alternative branches.

*nested conditional*:
A conditional statement that appears in one of the branches of another conditional statement.

*return statement*:
A statement that causes a function to end immediately and return to the caller.

*recursion*:
The process of calling the function that is currently executing.

*base case*:
A conditional branch in a recursive function that does not make a recursive call.

*infinite recursion*:
A recursion that doesn’t have a base case, or never reaches it. Eventually, an infinite recursion causes a runtime error.

## Exercises

### Exercise 5-1

The function `time` returns the current Greenwich Mean Time in “the epoch”, which is an arbitrary time used as a reference point. On UNIX systems, the epoch is 1 January 1970.

```@repl
time()
```

Write a script that reads the current time and converts it to a time of day in hours, minutes, and seconds, plus the number of days since the epoch.

### Exercise 5-2

Fermat’s Last Theorem says that there are no positive integers ``a``, ``b``, and ``c`` such that

```math
a^n + b^n = c^n
```

for any values of ``n`` greater than 2.

1. Write a function named `checkfermat` that takes four parameters—`a`, `b`, `c` and `n`—and checks to see if Fermat’s theorem holds. If `n` is greater than 2 and `a^n + b^n == c^n` the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”

2. Write a function that prompts the user to input values for `a`, `b`, `c` and `n`, converts them to integers, and uses `checkfermat` to check whether they violate Fermat’s theorem.

### Exercise 5-3

If you are given three sticks, you may or may not be able to arrange them in a triangle. For example, if one of the sticks is 12 inches long and the other two are one inch long, you will not be able to get the short sticks to meet in the middle. For any three lengths, there is a simple test to see if it is possible to form a triangle:

*If any of the three lengths is greater than the sum of the other two, then you cannot form a triangle. Otherwise, you can. (If the sum of two lengths equals the third, they form what is called a “degenerate” triangle.)*

1. Write a function named `istriangle` that takes three integers as arguments, and that prints either “Yes” or “No”, depending on whether you can or cannot form a triangle from sticks with the given lengths.

2. Write a function that prompts the user to input three stick lengths, converts them to integers, and uses `istriangle` to check whether sticks with the given lengths can form a triangle.

### Exercise 5-4

What is the output of the following program? Draw a stack diagram that shows the state of the program when it prints the result.

```julia
function recurse(n, s)
    if n == 0
        println(s)
    else
        recurse(n-1, n+s)
    end
end

recurse(3, 0)
```

1. What would happen if you called this function like this: `recurse(-1, 0)`?

2. Write a docstring that explains everything someone would need to know in order to use this function (and nothing else).

The following exercises use the `Luxor` module, described in Chapter 4:

### Exercise 5-5

Read the following function and see if you can figure out what it does (see the examples in Chapter 4). Then run it and see if you got it right.

```julia
function draw(t, length, n)
    if n == 0
        return
    end
    angle = 50
    forward(t, length*n)
    turn(t, -angle)
    draw(t, length, n-1)
    furn(t, 2*angle)
    draw(t, length, n-1)
    turn(t, -angle)
    forward(-length*n)
end
```

### Exercise 5-6

![A Koch curve.](images/fig52.svg)

The Koch curve is a fractal that looks something like Figure 5-2. To draw a Koch curve with length ``x``, all you have to do is

1. Draw a Koch curve with length ``\frac{x}{3}``.

2. Turn left 60 degrees.

3. Draw a Koch curve with length ``\frac{x}{3}``.

4. Turn right 120 degrees.

5. Draw a Koch curve with length ``\frac{x}{3}``.

6. Turn left 60 degrees.

7. Draw a Koch curve with length ``\frac{x}{3}``.

The exception is if ``x`` is less than 3: in that case, you can just draw a straight line with length ``x``.

1. Write a function called `koch` that takes a turtle and a length as parameters, and that uses the turtle to draw a Koch curve with the given length.

2. Write a function called `snowflake` that draws three Koch curves to make the outline of a snowflake.

3. The Koch curve can be generalized in several ways. See <http://en.wikipedia.org/wiki/Koch_snowflake> for examples and implement your favorite.