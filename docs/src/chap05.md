# Conditionals and recursion

The main topic of this chapter is the `if` statement, which executes different code depending on the state of the program. But first I want to introduce two new operators: floor division and modulus.

## Floor division and modulus

The **floor division** operator, `÷` (`\div TAB`), divides two numbers and rounds down to an integer. For example, suppose the run time of a movie is 105 minutes. You might want to know how long that is in hours. Conventional division returns a floating-point number:

```@repl chap05
minutes = 105
minutes / 60
```

But we don’t normally write hours with decimal points. Floor division returns the integer number of hours, rounding down:

```@repl chap05
hours = minutes ÷ 60
```

To get the remainder, you could subtract off one hour in minutes:

```@repl chap05
remainder = minutes - hours * 60
```

An alternative is to use the **modulus operator**, `%`, which divides two numbers and returns the remainder.

```@repl chap05
remainder = minutes % 60
```

The modulus operator is more useful than it seems. For example, you can check whether one number is divisible by another—if `x % y` is zero, then `x` is divisible by `y`.

Also, you can extract the right-most digit or digits from a number. For example, `x % 10` yields the right-most digit of `x` (in base 10). Similarly `x % 100` yields the last two digits.

## Boolean expressions

A **boolean expression** is an expression that is either true or false. The following examples use the operator `==`, which compares two operands and produces `true` if they are equal and `false` otherwise:

```@repl
5 == 5
5 == 6
```

`true` and `false` are special values that belong to the type `Bool`; they are not strings:

```@repl
typeof(true)
typeof(false)
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

## Logical operators

There are three **logical operators**: `&&` (and), `||` (or), and `!` (not). The semantics (meaning) of these operators is similar to their meaning in English. For example, `x > 0 && x < 10` is true only if `x` is greater than `0` *and* less than `10`.

`n%2 == 0 || n%3 == 0` is true if *either or both* of the conditions is true, that is, if the number is divisible by 2 *or* 3.

Finally, the `!` operator negates a boolean expression, so `!(x > y)` is true if `x > y` is false, that is, if `x` is less than or equal to `y`.

The operators `&&` and `||` do a **short-circuit evaluation**: in a series of boolean expressions connected by these operators, only the minimum number of expressions are evaluated as are necessary to determine the final boolean value of the entire chain. Explicitly, this means that:

- In the expression `a && b`, the subexpression `b` is only evaluated if `a` evaluates to `true`.

- In the expression `a || b`, the subexpression `b` is only evaluated if `a` evaluates to `false`.

Both `&&` and `||` associate to the right, but `&&` has higher precedence than `||` does.

## Conditional execution

In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. **Conditional statements** give us this ability. The simplest form is the `if` statement:

```julia
if x > 0
    println("x is positive")
end
```

The boolean expression after `if` is called the **condition**. If it is true, the indented statement runs. If not, nothing happens.

if statements have the same structure as function definitions: a header followed by body terminated with the keyword `end`. Statements like this are called **compound statements**.

There is no limit on the number of statements that can appear in the body. Occasionally, it is useful to have a body with no statements (usually as a place keeper for code you haven’t written yet).

```julia
if x < 0
    # TODO: need to handle negative values!
end
```

## Alternative execution

A second form of the `if` statement is “alternative execution”, in which there are two possibilities and the condition determines which one runs. The syntax looks like this:

```julia
if x % 2 == 0
    println("x is even")
else
    println("x is odd")
end
```

If the remainder when `x` is divided by 2 is 0, then we know that `x` is even, and the program displays an appropriate message. If the condition is false, the second set of statements runs. Since the condition must be true or false, exactly one of the alternatives will run. The alternatives are called **branches**, because they are branches in the flow of execution.

## Chained conditionals

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

## Nested conditionals

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

```@setup chap05
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

```@repl chap05
countdown(3)
```

- The execution of `countdown` begins with `n=3`, and since `n` is greater than 0, it outputs the value 3, and then calls itself...

  - The execution of `countdown` begins with `n=2`, and since `n` is greater than 0, it outputs the value 2, and then calls itself...

    - The execution of `countdown` begins with `n=1`, and since `n` is greater than 0, it outputs the value 1, and then calls itself...

      - The execution of `countdown` begins with `n=0`, and since `n` is not greater than 0, it outputs the word, `"Blastoff!"` and then returns.

    - The countdown that got `n=1` returns.

  - The countdown that got `n=2` returns.

- The countdown that got `n=3` returns.

And then you’re back in `__main__`.

A function that calls itself is **recursive**; the process of executing it is called **recursion**.

As another example, we can write a function that prints a string $n$ times.

```julia
function print_n(s, n)
    if n <= 0
        return
    end
    println(s)
    print_n(s, n-1)
end
```

```@setup chap05
function print_n(s, n)
    if n <= 0
        return
    end
    println(s)
    print_n(s, n-1)
end
```

If `n <= 0` the `return` statement exits the function. The flow of execution immediately returns to the caller, and the remaining lines of the function don’t run.

The rest of the function is similar to `countdown`: it displays `s` and then calls itself to display `s` $n−1$ additional times. So the number of lines of output is $1 + (n - 1)$, which adds up to $n$.

For simple examples like this, it is probably easier to use a `for` loop. But we will see examples later that are hard to write with a `for` loop and easy to write with recursion, so it is good to start early.

## Stack diagrams for recursive functions

In Section 3.9, we used a stack diagram to represent the state of a program during a function call. The same kind of diagram can help interpret a recursive function.

Every time a function gets called, Julia creates a frame to contain the function’s local variables and parameters. For a recursive function, there might be more than one frame on the stack at the same time.

```@eval
using ThinkJulia
fig05_1()
```

```@raw html
<figure>
  <img src="fig51.svg" alt="Stack diagram.">
  <figcaption>Figure 5.1. Stack diagram.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig51}
\caption{Stack diagram.}
\label{fig51}
\end{figure}
```

Figure 5.1 shows a stack diagram for `countdown` called with `n = 3`.

As usual, the top of the stack is the frame for `__main__`. It is empty because we did not create any variables in `__main__` or pass any arguments to it.

The four `countdown` frames have different values for the parameter `n`. The bottom of the stack, where `n=0`, is called the **base case**. It does not make a recursive call, so there are no more frames.

As an exercise, draw a stack diagram for `print_n` called with `s = "Hello"` and `n=2`. Then write a function called `do_n` that takes a function object and a number, `n`, as arguments, and that calls the given function $n$ times.

## Infinite recursion

If a recursion never reaches a base case, it goes on making recursive calls forever, and the program never terminates. This is known as **infinite recursion**, and it is generally not a good idea. Here is a minimal program with an infinite recursion:

```julia
function recurse()
    recurse()
end
```

In most programming environments, a program with infinite recursion does not really run forever. Julia reports an error message when the maximum recursion depth is reached:

```julia
julia> recurse()
ERROR: StackOverflowError:
Stacktrace:
 [1] recurse() at ./REPL[1]:2 (repeats 80000 times)
```

This traceback is a little bigger than the one we saw in the previous chapter. When the error occurs, there are 80000 `recurse` frames on the stack!

If you encounter an infinite recursion by accident, review your function to confirm that there is a base case that does not make a recursive call. And if there is a base case, check whether you are guaranteed to reach it.