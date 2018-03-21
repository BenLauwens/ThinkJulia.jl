# Arrays

This chapter presents one of Julia’s most useful built-in types, arrays. You will also learn about objects and what can happen when you have more than one name for the same object.

## An array is a sequence

Like a string, an **array** is a sequence of values. In a string, the values are characters; in an array, they can be any type. The values in an array are called **elements** or sometimes **items**.

There are several ways to create a new array; the simplest is to enclose the elements in square brackets (`[ ]`):

```@repl
[10, 20, 30, 40]
["crunchy frog", "ram bladder", "lark vomit"]
```

The first example is an array of four integers. The second is an array of three strings. The elements of an array don’t have to be the same type. The following array contains a string, a float, an integer, and another list:

```@repl
["spam", 2.0, 5, [10, 20]]
```

As you might expect, you can assign array values to variables:

```@example
cheeses = ["Cheddar", "Edam", "Gouda"]
numbers = [42, 123]
empty = []
println(cheeses, " ", numbers, " ", empty)
```
