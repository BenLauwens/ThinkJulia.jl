# Tuples

This chapter presents one more built-in type, the tuple, and then shows how arrays, dictionaries, and tuples work together. I also present a useful feature for variable-length argument arrays, the gather and scatter operators.

One note: there is no consensus on how to pronounce “tuple”. Some people say “tuh-ple”, which rhymes with “supple”. But in the context of programming, most people say “too-ple”, which rhymes with “quadruple”.

## Tuples are immutable

A tuple is a sequence of values. The values can be any type, and they are indexed by integers, so in that respect tuples are a lot like arrays. The important difference is that tuples are immutable.

Syntactically, a tuple is a comma-separated list of values:

```jldoctest
julia> t = 'a', 'b', 'c', 'd', 'e'
('a', 'b', 'c', 'd', 'e')
```

Although it is not necessary, it is common to enclose tuples in parentheses:

```jldoctest
julia> t = ('a', 'b', 'c', 'd', 'e')
('a', 'b', 'c', 'd', 'e')
```

To create a tuple with a single element, you have to include a final comma:

```jldoctest
julia> t1 = ('a',)
('a',)
julia> typeof(t1)
Tuple{Char}
```

A value in parentheses is not a tuple:

```jldoctest
julia> t2 = ('a')
'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)
julia> typeof(t2)
Char
```

Another way to create a tuple is the built-in function tuple. With no argument, it creates an empty tuple:

```jldoctest
julia> tuple()
()
```

If multiple arguments are provided, the result is a tuple with the given arguments:

```jldoctest
julia> t3 = tuple(1, 'a', pi)
(1, 'a', π = 3.1415926535897...)
```

Because tuple is the name of a built-in function, you should avoid using it as a variable name.

Most array operators also work on tuples. The bracket operator indexes an element:

```jldoctest chap12
julia> t = ('a', 'b', 'c', 'd', 'e');

julia> t[1]
'a': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)
```

And the slice operator selects a range of elements:

```jldoctest chap12
julia> t[2:4]
('b', 'c', 'd')
```

But if you try to modify one of the elements of the tuple, you get an error:

```jldoctest chap12
julia> t[0] = 'A'
ERROR: MethodError: no method matching setindex!(::NTuple{5,Char}, ::Char, ::Int64)
```

Because tuples are immutable, you can’t modify the elements.

The relational operators work with tuples and other sequences; Julia starts by comparing the first element from each sequence. If they are equal, it goes on to the next elements, and so on, until it finds elements that differ. Subsequent elements are not considered (even if they are really big).

```jldoctest
julia> (0, 1, 2) < (0, 3, 4)
true
julia> (0, 1, 2000000) < (0, 3, 4)
true
```

## Tuple assignment

It is often useful to swap the values of two variables. With conventional assignments, you have to use a temporary variable. For example, to swap a and b:

```julia
temp = a
a = b
b = temp
```

This solution is cumbersome; tuple assignment is more elegant:

```julia
a, b = b, a
```

The left side is a tuple of variables; the right side is a tuple of expressions. Each value is assigned to its respective variable. All the expressions on the right side are evaluated before any of the assignments.

The number of variables on the left and the number of values on the right have to be the same:

```jldoctest
julia> a, b, c = 1, 2
ERROR: BoundsError: attempt to access (1, 2)
  at index [3]
```

More generally, the right side can be any kind of sequence (string, array or tuple). For example, to split an email address into a user name and a domain, you could write:

```jldoctest chap12
julia> addr = "julius.caesar@rome"
"julius.caesar@rome"
julia> uname, domain = split(addr, '@');

```

The return value from `split` is an array with two elements; the first element is assigned to `uname`, the second to `domain`.

```jldoctest chap12
julia> uname
"julius.caesar"
julia> domain
"rome"
```