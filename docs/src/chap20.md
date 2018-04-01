# The goodies

## Keyword arguments

## Conditional expressions

The operators `&&` and `||` do a **short-circuit evaluation**: in a series of boolean expressions connected by these operators, only the minimum number of expressions are evaluated as are necessary to determine the final boolean value of the entire chain. Explicitly, this means that:

- In the expression `a && b`, the subexpression `b` is only evaluated if `a` evaluates to `true`.

- In the expression `a || b`, the subexpression `b` is only evaluated if `a` evaluates to `false`.

Both `&&` and `||` associate to the right, but `&&` has higher precedence than `||` does.

`cond ? yes: no`, `cond && func`, `cond || func`

## List comprehensions

## Map, filter and reduce

`any`, `all`, `map`, `filter`, `reduce`

## Parametric types and functions

## Macros

## Glossary

*short-circuit evaluation*:
Evalutation of boolean operator for which the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression.