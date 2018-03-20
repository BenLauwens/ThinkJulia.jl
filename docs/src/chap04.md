# Case study: interface design

This chapter presents a case study that demonstrates a process for designing functions that work together.

It introduces the `Luxor` module, which allows you to create images using turtle graphics. 

The examples in this chapter can be executed in a graphical notebook on JuliaBox, which combines code, formatted text, math, and multimedia in a single document.

## The Luxor module

A **module** is a file that contains a collection of related functions. Modules can be installed in the REPL:
```julia
julia> Pkg.add("Luxor")
INFO: Cloning cache of Luxor from https://github.com/JuliaGraphics/Luxor.jl.git
INFO: Installing Luxor v0.10.4
...
```

This can take some time.

Before we can use the functions in a module, we have to import it with an `using` statement:
```@example chap04
using Luxor
bob = Turtle()
```

The `Luxor` module provides a function called `Turtle` that creates a `Luxor.Turtle` object, which we assign to a variable named `bob`.

Once you create a Turtle, you can call a function to move it around a drawing. For example, to move the Turtle forward:

```julia
@svg begin
    forward(bob, 100)
end
```

```@eval
using ThinkJulia
fig04_1()
```

```@raw html
<figure>
  <img src="fig41.svg" alt="Moving the Turtle forward.">
  <figcaption>Figure 4.1. Moving the Turtle forward.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig41}
\caption{Moving the Turtle forward.}
\label{fig41}
\end{figure}
```

The `@svg` keyword starts a macro that draws a svg picture. Macros are an important but advanced feature of Julia.

The arguments of `forward` are the Turtle and a distance in pixels, so the actual size depends on your display.

Another function you can call with a Turtle as argument is `turn` for turning. The second argument for `turn` is an angle in degrees.

Also, each Turtle is holding a pen, which is either down or up; if the pen is down, the Turtle leaves a trail when it moves. Figure 1 shows the trail left behind by the Turtle. The functions `penup` and `pendown` stand for “pen up” and “pen down”.

To draw a right angle, modify the macro:

```julia
bob = Turtle()
@svg begin
    forward(bob, 100)
    turn(bob, -90)
    forward(bob, 100)
end
```

Now modify the macro to draw a square. Don’t go on until you’ve got it working!

## Simple repetition

Chances are you wrote something like this:

```julia
bob = Turtle()
@svg begin
    forward(bob, 100)
    turn(bob, -90)
    forward(bob, 100)
    turn(bob, -90)
    forward(bob, 100)
    turn(bob, -90)
    forward(bob, 100)
end
```

We can do the same thing more concisely with a `for` statement:

```@repl
for i in 1:4
    println("Hello!")
end
```

This is the simplest use of the `for` statement; we will see more later. But that should be enough to let you rewrite your square-drawing program. Don’t go on until you do.

Here is a `for` statement that draws a square:

```julia
bob = Turtle()
@svg begin
    for i in 1:4
        forward(bob, 100)
        turn(bob, -90)
    end
end
```

The syntax of a `for` statement is similar to a function definition. It has a header and a body that ends with the keyword `end`. The body can contain any number of statements.

A `for` statement is also called a **loop** because the flow of execution runs through the body and then loops back to the top. In this case, it runs the body four times.

This version is actually a little different from the previous square-drawing code because it makes another turn after drawing the last side of the square. The extra turn takes more time, but it simplifies the code if we do the same thing every time through the loop. This version also has the effect of leaving the Turtle back in the starting position, facing in the starting direction.

## Exercises

The following is a series of exercises using Turtles. They are meant to be fun, but they have a point, too. While you are working on them, think about what the point is.

The following sections have solutions to the exercises, so don’t look until you have finished (or at least tried).

1. Write a function called `square` that takes a parameter named `t`, which is a Turtle. It should use the Turtle to draw a square.

2. Write a function call that passes `bob` as an argument to `square`, and then run the macro again.

3. Add another parameter, named `length`, to square. Modify the body so length of the sides is length, and then modify the function call to provide a second argument. Run the macro again. Test with a range of values for `length`.

4. Make a copy of `square` and change the name to `polygon`. Add another parameter named `n` and modify the body so it draws an ``n``-sided regular polygon. Hint: The exterior angles of an ``n``-sided regular polygon are ``\frac{360}{n}`` degrees.

5. Write a function called `circle` that takes a Turtle, `t`, and radius, `r`, as parameters and that draws an approximate circle by calling `polygon` with an appropriate length and number of sides. Test your function with a range of values of `r`. Hint: figure out the circumference of the circle and make sure that `length * n == circumference`.

6. Make a more general version of `circle` called `arc` that takes an additional parameter `angle`, which determines what fraction of a circle to draw. `angle` is in units of degrees, so when `angle=360`, `arc` should draw a complete circle.

## Encapsulation

The first exercise asks you to put your square-drawing code into a function definition and then call the function, passing the Turtle as a parameter. Here is a solution:

```julia
function square(t)
    for i in 1:4
        forward(t, 100)
        turn(t, -90)
    end
end
bob = Turtle()
@svg begin
    square(bob)
end
```

The innermost statements, `forward` and `turn` are indented twice to show that they are inside the `for` loop, which is inside the function definition.

Inside the function, `t` refers to the same Turtle `bob`, so `turn(t, -90)` has the same effect as `turn(bob, -90)`. In that case, why not call the parameter `bob`? The idea is that `t` can be any Turtle, not just bob, so you could create a second Turtle and pass it as an argument to `square`:

```julia
alice = Turtle()
@svg begin
    square(alice)
end
```

Wrapping a piece of code up in a function is called **encapsulation**. One of the benefits of encapsulation is that it attaches a name to the code, which serves as a kind of documentation. Another advantage is that if you re-use the code, it is more concise to call a function twice than to copy and paste the body!

## Generalization

The next step is to add a `length` parameter to `square`. Here is a solution:

```julia
function square(t, length)
    for i in 1:4
        forward(t, length)
        turn(t, -90)
    end
end
bob = Turtle()
@svg begin
    square(bob, 100)
end
```

Adding a parameter to a function is called **generalization** because it makes the function more general: in the previous version, the square is always the same size; in this version it can be any size.

The next step is also a generalization. Instead of drawing squares, `polygon` draws regular polygons with any number of sides. Here is a solution:

```julia
function polygon(t, n, length)
    angle = 360 / n
    for i in 1:n
        forward(t, length)
        turn(t, -angle)
    end
end
bob = Turtle()
@svg begin
    polygon(bob, 7, 70)
end
```

This example draws a 7-sided polygon with side length 70.

## Interface design

The next step is to write `circle`, which takes a radius, `r`, as a parameter. Here is a simple solution that uses `polygon` to draw a 50-sided polygon:

```julia
function circle(t, r)
    circumference = 2 * π * r
    n = 50
    length = circumference / n
    polygon(t, n, length)
end
```

The first line computes the circumference of a circle with radius ``r`` using the formula ``2 π r``. `n` is the number of line segments in our approximation of a circle, so length is the length of each segment. Thus, `polygon` draws a 50-sided polygon that approximates a circle with radius `r`.

One limitation of this solution is that `n` is a constant, which means that for very big circles, the line segments are too long, and for small circles, we waste time drawing very small segments. One solution would be to generalize the function by taking `n` as a parameter. This would give the user (whoever calls circle) more control, but the interface would be less clean.

The **interface** of a function is a summary of how it is used: what are the parameters? What does the function do? And what is the return value? An interface is “clean” if it allows the caller to do what they want without dealing with unnecessary details.

In this example, `r` belongs in the interface because it specifies the circle to be drawn. `n` is less appropriate because it pertains to the details of how the circle should be rendered.

Rather than clutter up the interface, it is better to choose an appropriate value of `n` depending on `circumference`:

```julia
function circle(t, r)
    circumference = 2 * π * r
    n = trunc(circumference / 3) + 3
    length = circumference / n
    polygon(t, n, length)
end
```

Now the number of segments is an integer near `circumference/3`, so the length of each segment is approximately 3, which is small enough that the circles look good, but big enough to be efficient, and acceptable for any size circle.

Adding 3 to `n` guarantees that the polygon has at least 3 sides.

## Refactoring

When I wrote `circle`, I was able to re-use `polygon` because a many-sided polygon is a good approximation of a circle. But `arc` is not as cooperative; we can’t use `polygon` or `circle` to draw an arc.

One alternative is to start with a copy of `polygon` and transform it into `arc`. The result might look like this:

```julia
function arc(t, r, angle)
    arc_length = 2 * π * r * angle / 360
    n = trunc(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = angle / n
    for i in 1:n
        forward(t, step_length)
        turn(t, -step_angle)
    end
end
```

The second half of this function looks like `polygon`, but we can’t re-use `polygon` without changing the interface. We could generalize `polygon` to take an `angle` as a third argument, but then `polygon` would no longer be an appropriate name! Instead, let’s call the more general function `polyline`:

```julia
function polyline(t, n, length, angle)
    for i 1:n
        forward(t, length)
        turn(t, -angle)
    end
end
```

Now we can rewrite `polygon` and `arc` to use `polyline`:

```julia
function polygon(t, n, length)
    angle = 360 / n
    polyline(t, n, length, angle)
end

function arc(t, r, angle)
    arc_length = 2 * π * r * angle / 360
    n = trunc(arc_length / 3) + 1
    step_length = arc_length / n
    step_angle = angle / n
    polyline(t, n, step_length, step_angle)
end
```

Finally, we can rewrite `circle` to use `arc`:

```julia
function circle(t, r)
    arc(t, r, 360)
end
```

This process—rearranging a program to improve interfaces and facilitate code re-use—is called **refactoring**. In this case, we noticed that there was similar code in `arc` and `polygon`, so we “factored it out” into `polyline`.

If we had planned ahead, we might have written `polyline` first and avoided refactoring, but often you don’t know enough at the beginning of a project to design all the interfaces. Once you start coding, you understand the problem better. Sometimes refactoring is a sign that you have learned something.

## A development plan

A **development plan** is a process for writing programs. The process we used in this case study is “encapsulation and generalization”. The steps of this process are:

1. Start by writing a small program with no function definitions.

2. Once you get the program working, identify a coherent piece of it, encapsulate the piece in a function and give it a name.

3. Generalize the function by adding appropriate parameters.

4. Repeat steps 1–3 until you have a set of working functions. Copy and paste working code to avoid retyping (and re-debugging).

5. Look for opportunities to improve the program by refactoring. For example, if you have similar code in several places, consider factoring it into an appropriately general function.

This process has some drawbacks—we will see alternatives later—but it can be useful if you don’t know ahead of time how to divide the program into functions. This approach lets you design as you go along.

## docstring

A **docstring** is a string before a function that explains the interface (“doc” is short for “documentation”). Here is an example:

```julia
"""
polyline(t, n, length, angle)

Draws n line segments with the given length and
angle (in degrees) between them.  t is a Turtle.
""" 
function polyline(t, n, length, angle)
    for i in 1:n
        forward(t, length)
        turn(t, -angle)
    end
end
```

Documentation can be accessed in the REPL or in a notebook by typing ? followed by the name of a function or macro, and pressing `ENTER`:

```julia
help?> polyline
search:

  polyline(t, n, length, angle)

  Draws n line segments with the given length and angle (in degrees) between them. t is a Turtle.
```

By convention, all docstrings are triple-quoted strings, also known as multiline strings because the triple quotes allow the string to span more than one line.

It is terse, but it contains the essential information someone would need to use this function. It explains concisely what the function does (without getting into the details of how it does it). It explains what effect each parameter has on the behavior of the function and what type each parameter should be (if it is not obvious).

Writing this kind of documentation is an important part of interface design. A well-designed interface should be simple to explain; if you have a hard time explaining one of your functions, maybe the interface could be improved.

## Debugging

An interface is like a contract between a function and a caller. The caller agrees to provide certain parameters and the function agrees to do certain work.

For example, `polyline` requires four arguments: `t` has to be a Turtle; `n` has to be an integer; `length` should be a positive number; and `angle` has to be a number, which is understood to be in degrees.

These requirements are called **preconditions** because they are supposed to be true before the function starts executing. Conversely, conditions at the end of the function are **postconditions**. Postconditions include the intended effect of the function (like drawing line segments) and any side effects (like moving the Turtle or making other changes).

Preconditions are the responsibility of the caller. If the caller violates a (properly documented!) precondition and the function doesn’t work correctly, the bug is in the caller, not the function.

If the preconditions are satisfied and the postconditions are not, the bug is in the function. If your pre- and postconditions are clear, they can help with debugging.

## Glossary

*module*:
A file that contains a collection of related functions and other definitions.

*using statement*:
A statement that reads a module file and creates a module object.

*loop*:
A part of a program that can run repeatedly.

*encapsulation*:
The process of transforming a sequence of statements into a function definition.

*generalization*:
The process of replacing something unnecessarily specific (like a number) with something appropriately general (like a variable or parameter).

*interface*:
A description of how to use a function, including the name and descriptions of the arguments and return value.

*refactoring*:
The process of modifying a working program to improve function interfaces and other qualities of the code.

*development plan*:
A process for writing programs.

*docstring*:
A string that appears at the top of a function definition to document the function’s interface.

*precondition*:
A requirement that should be satisfied by the caller before a function starts.

*postcondition*:
A requirement that should be satisfied by the function before it ends.

## Exercises

### Exercise 1  

Enter the code in this chapter in a notebook.

1. Draw a stack diagram that shows the state of the program while executing `circle(bob, radius)`. You can do the arithmetic by hand or add print statements to the code.

2. The version of `arc` in Section 4.7 is not very accurate because the linear approximation of the circle is always outside the true circle. As a result, the Turtle ends up a few pixels away from the correct destination. My solution shows a way to reduce the effect of this error. Read the code and see if it makes sense to you. If you draw a diagram, you might see how it works.

```julia
""" 
arc(t, r, angle)

Draws an arc with the given radius and angle:

    t: Turtle
    r: radius
    angle: angle subtended by the arc, in degrees
"""
function arc(t, r, angle)
    arc_length = 2 * π * r * abs(angle) / 360
    n = trunc(arc_length / 4) + 3
    step_length = arc_length / n
    step_angle = angle / n

    # making a slight left turn before starting reduces
    # the error caused by the linear approximation of the arc
    turn(t, step_angle/2)
    polyline(t, n, step_length, step_angle)
    turn(t, -step_angle/2)
end
```

### Exercise 2  

Write an appropriately general set of functions that can draw flowers as in Figure 4.2.

```@eval
using ThinkJulia
fig04_2()
```

```@raw html
<figure>
  <img src="fig42.svg" alt="Turtle flowers.">
  <figcaption>Figure 4.2. Turtle flowers.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig42}
\caption{Turtle flowers.}
\label{fig42}
\end{figure}
```

### Exercise 3 

Write an appropriately general set of functions that can draw shapes as in Figure 4.3.

```@eval
using ThinkJulia
fig04_3()
```

```@raw html
<figure>
  <img src="fig43.svg" alt="Turtle pies.">
  <figcaption>Figure 4.3. Turtle pies.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig43}
\caption{Turtle pies.}
\label{fig43}
\end{figure}
```

### Exercise 4 

The letters of the alphabet can be constructed from a moderate number of basic elements, like vertical and horizontal lines and a few curves. Design an alphabet that can be drawn with a minimal number of basic elements and then write functions that draw the letters.

You should write one function for each letter, with names `draw_a`, `draw_b`, etc., and put your functions in a file named `letters.jl`.

### Exercise 5  

Read about spirals at <http://en.wikipedia.org/wiki/Spiral>; then write a program that draws an Archimedian spiral as in Figure 4.4.

```@eval
using ThinkJulia
fig04_4()
```

```@raw html
<figure>
  <img src="fig44.svg" alt="Archimedian spiral.">
  <figcaption>Figure 4.4. Archimedian spiral.</figcaption>
</figure>
```

```@raw latex
\begin{figure}
\centering
\includegraphics{fig44}
\caption{Archimedian spiral.}
\label{fig44}
\end{figure}
```