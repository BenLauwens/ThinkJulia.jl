# Debugging

When you are debugging, you should distinguish among different kinds of errors in order to track them down more quickly:

- Syntax errors are discovered by the interpreter when it is translating the source code into byte code. They indicate that there is something wrong with the structure of the program. Example: Omitting the `end` keyword at the end of a function block generates the somewhat redundant message `ERROR: LoadError: syntax: incomplete: function requires end`.

- Runtime errors are produced by the interpreter if something goes wrong while the program is running. Most runtime error messages include information about where the error occurred and what functions were executing. Example: An infinite recursion eventually causes the runtime error `ERROR: LoadError: StackOverflowError`.

- Semantic errors are problems with a program that runs without producing error messages but doesn’t do the right thing. Example: An expression may not be evaluated in the order you expect, yielding an incorrect result. The first step in debugging is to figure out which kind of error you are dealing with. Although the following sections are organized by error type, some techniques are applicable in more than one situation.

## Syntax errors

Syntax errors are usually easy to fix once you figure out what they are. Unfortunately, the error messages are often not helpful. The most common messages are `ERROR: LoadError: syntax: incomplete: premature end of input` and `ERROR: LoadError: syntax: unexpected "="`, neither of which is very informative.

On the other hand, the message does tell you where in the program the problem occurred. Actually, it tells you where Julia noticed a problem, which is not necessarily where the error is. Sometimes the error is prior to the location of the error message, often on the preceding line.

If you are building the program incrementally, you should have a good idea about where the error is. It will be in the last line you added.

If you are copying code from a book, start by comparing your code to the book’s code very carefully. Check every character. At the same time, remember that the book might be wrong, so if you see something that looks like a syntax error, it might be.

Here are some ways to avoid the most common syntax errors:

1. Make sure you are not using a Julia keyword for a variable name.

1. Check that you have the `end` keyword at the end of every compound statement, including `for`, `while`, `if`, and `function` blocks.

1. Make sure that any strings in the code have matching quotation marks. Make sure that all quotation marks are “straight quotes”, not “curly quotes”.

1. If you have multiline strings with triple quotes , make sure you have terminated the string properly. An unterminated string may cause an invalid token error at the end of your program, or it may treat the following part of the program as a string until it comes to the next string. In the second case, it might not produce an error message at all!

1. An unclosed opening operator—`(`, `{`, or `[`—makes Julia continue with the next line as part of the current statement. Generally, an error occurs almost immediately in the next line.

1. Check for the classic `=` instead of `==` inside a conditional.

1. If you have non-ASCII characters in the code (including strings and comments), that might cause a problem, although Julia usually handles non-ASCII characters. Be careful if you paste in text from a web page or other source.

If nothing works, move on to the next section...