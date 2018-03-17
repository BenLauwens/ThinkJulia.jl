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