# Structs and objects

```@meta
DocTestSetup = quote
    using ThinkJulia
end
```

At this point you know how to use functions to organize code and built-in types to organize data. The next step is to learn how to build your own types to organize both code and data. This is a big topic; it will take a few chapters to get there.

## Composite types

We have used many of Julia’s built-in types; now we are going to define a new type. As an example, we will create a type called `Point` that represents a point in two-dimensional space.

In mathematical notation, points are often written in parentheses with a comma separating the coordinates. For example, ``(0,0)`` represents the origin, and ``(x,y)`` represents the point ``x`` units to the right and ``y`` units up from the origin.

There are several ways we might represent points in Julia:

- We could store the coordinates separately in two variables, `x` and `y`.

- We could store the coordinates as elements in a list or tuple.

- We could create a new type to represent points as objects.

Creating a new type is more complicated than the other options, but it has advantages that will be apparent soon.

A programmer-defined **composite type** is also called a **struct**. The `struct` definition for a point looks like this:

```julia
struct Point
    x
    y
end
```

The header indicates that the new struct is called `Point`. The body defines the **attributes** or **fields** of the struct. The `Point` struct has two fields: `x` and `y`. As a noun, “AT-trib-ute” is pronounced with emphasis on the first syllable, as opposed to “a-TRIB-ute”, which is a verb.

Defining a type named Point creates a datatype object:

```jldoctest
julia> typeof(Point)
DataType
julia> Point
ThinkJulia.Point
```

Because `Point` is defined in the module `ThinkJulia`, its “full name” is `ThinkJulia.Point`.

A struct is like a factory for creating objects. To create a point, you call `Point` as if it were a function having as arguments the values of the fields. When `Point` is used as a function, it is called a **constructor**.

```jldoctest chap15
julia> p = Point(3.0, 4.0)
ThinkJulia.Point(3.0, 4.0)
```

The return value is a reference to a point object, which we assign to `p`.

Creating a new object is called **instantiation**, and the object is an **instance** of the type.

When you print an instance, Julia tells you what type it belongs to and what the values of the atributes are.

Every object is an instance of some type, so “object” and “instance” are interchangeable. But in this chapter I use “instance” to indicate that I am talking about a programmer-defined type.

A state diagram that shows an object and its fields is called an *object diagram*; see Figure 15-1.

![Object diagram.](images/fig151.svg)

## Structs are immutable

You can get the values of the fields using `.` notation:

```jldoctest chap15
julia> x = p.x
3.0
julia> p.y
4.0
```

The expression `p.x` means, “Go to the object `p` refers to and get the value of `x`.” In the example, we assign that value to a variable named `x`. There is no conflict between the variable `x` and the field `x`.

You can use dot notation as part of any expression. For example:

```jldoctest chap15
julia> distance = sqrt(p.x^2 + p.y^2)
5.0
```

Structs are however by default immutable, after construction the fields can not change value:

```jldoctest chap15
julia> p.y = 1.0
ERROR: type Point is immutable
```

This may seem odd at first, but it has several advantages:

- It can be more efficient.

- It is not possible to violate the invariants provided by the type's constructors (see later).

- Code using immutable objects can be easier to reason about.

## Mutable structs

Where required, mutable composite types can be declared with the keyword `mutable struct`. Here is the definition of a mutable point:

```julia
mutable struct MPoint
    x
    y
end
```

You can assign values to an instance of a mutable struct using dot notation:

```jldoctest chap15
julia> blank = MPoint(0.0, 0.0)
ThinkJulia.MPoint(0.0, 0.0)
julia> blank.x = 3.0
3.0
julia> blank.y = 4.0
4.0
```

You can pass an instance as an argument in the usual way. For example:

```julia
function printpoint(p)
    println("($(p.x), $(p.y))")
end
```

`printpoint` takes a point as an argument and displays it in mathematical notation. To invoke it, you can pass `p` as an argument:

```jldoctest chap15
julia> printpoint(blank)
(3.0, 4.0)
```

As an exercise, write a function called `distancebetweenpoints` that takes two points as arguments and returns the distance between them.

## Rectangles

Sometimes it is obvious what the fields of an object should be, but other times you have to make decisions. For example, imagine you are designing a type to represent rectangles. What fields would you use to specify the location and size of a rectangle? You can ignore angle; to keep things simple, assume that the rectangle is either vertical or horizontal.

There are at least two possibilities:

- You could specify one corner of the rectangle (or the center), the width, and the height.

- You could specify two opposing corners.

At this point it is hard to say whether either is better than the other, so we’ll implement the first one, just as an example.

```julia
"""
Represents a rectangle.

fields: width, height, corner.
"""
struct Rectangle
    width
    height
    corner
end
```

The docstring lists the fields: width and height are numbers; corner is a point object that specifies the lower-left corner.

To represent a rectangle, you have to instantiate a rectangle object:

```jldoctest chap15
julia> origin = MPoint(0.0, 0.0)
ThinkJulia.MPoint(0.0, 0.0)
julia> box = Rectangle(100.0, 200.0, origin)
ThinkJulia.Rectangle(100.0, 200.0, ThinkJulia.MPoint(0.0, 0.0))
```

Figure 15-2 shows the state of this object. An object that is a field of another object is **embedded**. Because the `corner` attribute refers to a mutable object, the latter is drawn outside the rectangle object.

![Object diagram.](images/fig152.svg)

## Instances as Return Values

Functions can return instances. For example, `findcenter` takes a rectangle as an argument and returns a point that contains the coordinates of the center of the rectangle:

```julia
function findcenter(rect)
    Point(rect.corner.x, rect.corner.y)
end
```

The expression `rect.corner.x` means, “Go to the object `rect` refers to and select the field named `corner`; then go to that object and select the field named `x`.”

Here is an example that passes `box` as an argument and assigns the resulting point to `center`:

```jldoctest chap15
julia> center = findcenter(box)
ThinkJulia.Point(0.0, 0.0)
```

## Instances as Arguments

If a mutable struct object is passed to a function as an argument, the function can modify the fields of the object. For example, `movepoint` takes a mutable point object and two numbers, `dx` and `dy`, and adds the numbers to respectively the `x` and the `y` attribute of the point:

```julia
function movepoint!(p, dx, dy)
    p.x += dx
    p.y += dy
    nothing
end
```

Here is an example that demonstrates the effect:

```jldoctest chap15
julia> origin = MPoint(0.0,0.0)
ThinkJulia.MPoint(0.0, 0.0)
julia> movepoint!(origin, 1.0, 2.0)

julia> origin
ThinkJulia.MPoint(1.0, 2.0)
```

Inside the function, `p` is an alias for `origin`, so when the function modifies `p`, `origin` changes.

Passing an immutable point object to `movepoint!` causes an error:

```jldoctest chap15
julia> movepoint!(p, 1.0, 2.0)
ERROR: type is immutable
```

You can however modify the value of a mutable attribute of an immutable object. For example, `moverectangle!` has as arguments a rectangle object and two numbers, `dx` and `dy`, and uses `movepoint!` to move the corner of the rectangle:

```julia
function moverectangle!(rect, dx, dy)
  movepoint!(rect.corner, dx, dy)
end
```

Now `p` in `movepoint!` is an alias for `rect.corner`, so when `p` is modified, `rect.corner` changes also:

```jldoctest chap15
julia> box
ThinkJulia.Rectangle(100.0, 200.0, ThinkJulia.MPoint(0.0, 0.0))
julia> moverectangle!(box, 1.0, 2.0)

julia> box
ThinkJulia.Rectangle(100.0, 200.0, ThinkJulia.MPoint(1.0, 2.0))
```

Attention you cannot reassign a mutable attribute of an immutable object:

```jldoctest chap15
julia> box.corner = MPoint(1.0, 2.0)
ERROR: type Rectangle is immutable
```

## Copying

Aliasing can make a program difficult to read because changes in one place might have unexpected effects in another place. It is hard to keep track of all the variables that might refer to a given object.

Copying an object is often an alternative to aliasing. Julia provides a function called `deepcopy` that can duplicate any object:

```jldoctest
julia> p1 = MPoint(3.0, 4.0)
ThinkJulia.MPoint(3.0, 4.0)
julia> p2 = deepcopy(p1)
ThinkJulia.MPoint(3.0, 4.0)
julia> p1 ≡ p2
false
julia> p1 == p2
false
```

The `≡` operator indicates that `p1` and `p2` are not the same object, which is what we expected. But you might have expected `==` to yield `true` because these points contain the same data. In that case, you will be disappointed to learn that for mutable objects, the default behavior of the `==` operator is the same as the `===` operator; it checks object identity, not object equivalence. That’s because for mutable composite types, Julia doesn’t know what should be considered equivalent. At least, not yet.

As an exercise, create a `Point` instance, make a copy of it and check the equivalence and the egality of both. The result can surprise you but it explains why aliasing is a non issue for an immutable object.

## Debugging

When you start working with objects, you are likely to encounter some new exceptions. If you try to access a field that doesn’t exist, you get:

```jldoctest chap15
julia> p = Point(3.0, 4.0)
ThinkJulia.Point(3.0, 4.0)
julia> p.z = 1.0
ERROR: type Point is immutable
```

If you are not sure what type an object is, you can ask:

```jldoctest chap15
julia> typeof(p)
ThinkJulia.Point
```

You can also use isinstance to check whether an object is an instance of a type:

```jldoctest chap15
julia> p isa Point
true
```

If you are not sure whether an object has a particular attribute, you can use the built-in function `fieldnames`:

```jldoctest chap15
julia> fieldnames(Point)
(:x, :y)
```

or the function `isdefined`:

```jldoctest chap15
julia> isdefined(p, :x)
true
julia> isdefined(p, :z)
false
```

The first argument can be any object; the second argument is a symbol, `:` followed by the name of the field.

You can also use a `try` statement to see if the object has the fields you need:

```julia
try
    x = 1.0
catch exc
    x = 0.0
end
```

## Glossary

*struct*:
A composite type. A struct definition creates a new struct object.

*struct object*:
An object that contains information about a composite type. The struct object can be used to create instances of the type.

*instance*:
An object that belongs to a type.

*instantiate*:
To create a new object.

*attribute* or *field*:
One of the named values associated with an object.

*embedded object*:
An object that is stored as a field of another object.

*deep copy*:
To copy the contents of an object as well as any embedded objects, and any objects embedded in them, and so on; implemented by the `deepcopy` function.

*object diagram*:
A diagram that shows objects, their fields, and the values of the fields.

## Exercises

### Exercise 15-1

1. Write a definition for a type named `Circle` with fields `center` and `radius`, where `center` is a point object and `radius` is a number.

2. Instantiate a circle object that represents a circle with its center at ``(150, 100)`` and radius ``75``.

3. Write a function named `pointincircle` that takes a circle object and a point object and returns `true` if the point lies in or on the boundary of the circle.

4. Write a function named `rectincircle` that takes a circle object and a rectangle object and returns `true` if the rectangle lies entirely in or on the boundary of the circle.

5. Write a function named `rectcircleoverlap` that takes a circle object and a rectangle object and returns `true` if any of the corners of the rectangle fall inside the circle. Or as a more challenging version, return `true` if any part of the rectangle falls inside the circle.

### Exercise 15-2

1. Write a function called `drawrect` that takes a turtle object and a rectangle object and uses the turtle to draw the rectangle. See Chapter 4 for examples using turtle objects.

2. Write a function called `drawcircle` that takes a turtle object and a circle object and draws the circle.