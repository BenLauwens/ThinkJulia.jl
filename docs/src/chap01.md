# The way of the program

The goal of this book is to teach you to think like a computer scientist. This way of thinking combines some of the best features of mathematics, engineering, and natural science.  Like mathematicians, computer scientists use formal languages to denote ideas (specifically computations).  Like engineers, they design things, assembling components into systems and evaluating tradeoffs among alternatives. Like scientists, they observe the behavior of complex systems, form hypotheses, and test predictions.

The single most important skill for a computer scientist is **problem solving**. Problem solving means the ability to formulate problems, think creatively about solutions, and express a solution clearly and accurately.  As it turns out, the process of learning to program is an excellent opportunity to practice problem-solving skills.  That's why this chapter is called, "The way of the program".

On one level, you will be learning to program, a useful skill by itself.  On another level, you will use programming as a means to an end.  As we go along, that end will become clearer.

## What is a program?

A **program** is a sequence of instructions that specifies how to perform a computation. The computation might be something mathematical, such as solving a system of equations or finding the roots of a polynomial, but it can also be a symbolic computation, such as searching and replacing text in a document or something graphical, like processing an image or playing a video.

The details look different in different languages, but a few basic instructions appear in just about every language:

- input: Get data from the keyboard, a file, the network, or some other device.

- output: Display data on the screen, save it in a file, send it over the network, etc.

- math: Perform basic mathematical operations like addition and multiplication.

- conditional execution: Check for certain conditions and run the appropriate code.

- repetition: Perform some action repeatedly, usually with some variation.

Believe it or not, that's pretty much all there is to it.  Every program you've ever used, no matter how complicated, is made up of instructions that look pretty much like these.  So you can think of programming as the process of breaking a large, complex task into smaller and smaller subtasks until the subtasks are simple enough to be performed with one of these basic instructions.

## Running Julia

One of the challenges of getting started with Julia is that you might have to install Julia and related software on your computer. If you are familiar with your operating system, and especially if you are comfortable with the command-line interface, you will have no trouble installing Julia.  But for beginners, it can be painful to learn about system administration and programming at the same time.

To avoid that problem, I recommend that you start out running Julia in a browser.  Later, when you are comfortable with Julia, I'll make suggestions for installing Julia on your computer.

In the browser you can run Julia on JuliaBox: https://www.juliabox.com. No installation is required – just point your browser there, login and start computing.

The Julia **REPL** (Read–Eval–Print Loop) is a program that reads and executes Julia code.  You might start the REPL by opening a terminal on JuliaBox and typing `julia` on the command line. When it starts, you should see output like this:

```@example
Base.banner() # hide
println("julia>") # hide
```

The first lines contain information about the REPL and the operating system it's running on, so it might be different for you.  But you should check that the version number is at least 0.6.0

The last line is a **prompt** that indicates that the REPL is ready for you to enter code. If you type a line of code and hit Enter, the REPL displays the result: 

```@repl
1 + 1
```

Now you're ready to get started. From here on, I assume that you know how to start the Julia REPL and run code.

## The first program

Traditionally, the first program you write in a new language is called "Hello, World!" because all it does is display the words "Hello, World!".  In Julia, it looks like this:

```@repl
println("Hello, World!")
```

This is an example of a **print statement**, although it doesn't actually print anything on paper.  It displays a result on the screen.  In this case, the result is the words

```
Hello, World!
````

The quotation marks in the program mark the beginning and end of the text to be displayed; they don't appear in the result.