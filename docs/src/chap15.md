# Types and objects

```@meta
DocTestSetup = quote
    using ThinkJulia

    struct Point
      x
      y
    end
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

The header indicates that the new struct is called `Point`. The body defines the **attributes** or **fields** of the struct. The `Point` struct has two attributes: `x` and `y`.

Defining a class named Point creates a datatype object:

```jldoctest
julia> typeof(Point)
DataType
```

A struct is like a factory for creating objects. To create a point, you call `Point` as if it were a function having as arguments the values of the attributes. When `Point` is used as a function, it is called a **constructor**.

```jldoctest
julia> p = Point(3.0, 4.0)
Point(3.0, 4.0)
```

The return value is a reference to a point object, which we assign to `p`.

Creating a new object is called **instantiation**, and the object is an **instance** of the type.

When you print an instance, Julia tells you what type it belongs to and what the values of the atributes are.

Every object is an instance of some class, so “object” and “instance” are interchangeable. But in this chapter I use “instance” to indicate that I am talking about a programmer-defined type.

A state diagram that shows an object and its attributes is called an *object diagram*; see Figure 15.1.

```@eval
using ThinkJulia
fig15_1()
```

```@raw html
<figure>
  <img src="fig151.svg" alt="Object diagram.">
  <figcaption>Figure 15.1. Object diagram.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig121}
\caption{Object diagram.}
\label{fig151}
\end{figure}
```