var documenterSearchIndex = {"docs": [

{
    "location": "copyright.html#",
    "page": "License",
    "title": "License",
    "category": "page",
    "text": "\\begin{titlingpage}\n\\vspace*{\\stretch{3}}\n\\normalfont\\sffamily\\Huge\\centering Think Julia\\\\\n\\vspace*{\\stretch{2}}\n\\normalfont\\sffamily\\Large\\centering HOW TO THINK LIKE A COMPUTER SCIENTISTS\\\\\n\\vspace*{\\stretch{3}}\n\\normalfont\\sffamily\\huge\\centering Ben Lauwens\\\\\n\\vspace*{\\stretch{1}}\n\\normalfont\\sffamily\\Large\\centering with Allen B. Downey\\\\\n\\vspace*{\\stretch{4}}\n\\end{titlingpage}\n\\frontmatter\n\n\\tableofcontents"
},

{
    "location": "copyright.html#License-1",
    "page": "License",
    "title": "License",
    "category": "section",
    "text": "Copyright ©2018 Allen Downey, Ben Lauwens.Permission is granted to copy, distribute, and/or modify this document under the terms of the Creative Commons Attribution-NonCommercial 3.0 Unported License, which is available at http://creativecommons.org/licenses/by-nc/3.0/.The Markdown source for this book is available from https://github.com/BenLauwens/ThinkJulia.jl"
},

{
    "location": "chap01.html#",
    "page": "The way of the program",
    "title": "The way of the program",
    "category": "page",
    "text": "\\mainmatter"
},

{
    "location": "chap01.html#The-way-of-the-program-1",
    "page": "The way of the program",
    "title": "The way of the program",
    "category": "section",
    "text": "The goal of this book is to teach you to think like a computer scientist. This way of thinking combines some of the best features of mathematics, engineering, and natural science. Like mathematicians, computer scientists use formal languages to denote ideas (specifically computations). Like engineers, they design things, assembling components into systems and evaluating tradeoffs among alternatives. Like scientists, they observe the behavior of complex systems, form hypotheses, and test predictions.The single most important skill for a computer scientist is problem solving. Problem solving means the ability to formulate problems, think creatively about solutions, and express a solution clearly and accurately. As it turns out, the process of learning to program is an excellent opportunity to practice problem-solving skills. That\'s why this chapter is called, “The way of the program”.On one level, you will be learning to program, a useful skill by itself. On another level, you will use programming as a means to an end. As we go along, that end will become clearer."
},

{
    "location": "chap01.html#What-is-a-program?-1",
    "page": "The way of the program",
    "title": "What is a program?",
    "category": "section",
    "text": "A program is a sequence of instructions that specifies how to perform a computation. The computation might be something mathematical, such as solving a system of equations or finding the roots of a polynomial, but it can also be a symbolic computation, such as searching and replacing text in a document or something graphical, like processing an image or playing a video.The details look different in different languages, but a few basic instructions appear in just about every language:input: Get data from the keyboard, a file, the network, or some other device.\noutput: Display data on the screen, save it in a file, send it over the network, etc.\nmath: Perform basic mathematical operations like addition and multiplication.\nconditional execution: Check for certain conditions and run the appropriate code.\nrepetition: Perform some action repeatedly, usually with some variation.Believe it or not, that\'s pretty much all there is to it. Every program you\'ve ever used, no matter how complicated, is made up of instructions that look pretty much like these. So you can think of programming as the process of breaking a large, complex task into smaller and smaller subtasks until the subtasks are simple enough to be performed with one of these basic instructions."
},

{
    "location": "chap01.html#Running-Julia-1",
    "page": "The way of the program",
    "title": "Running Julia",
    "category": "section",
    "text": "One of the challenges of getting started with Julia is that you might have to install Julia and related software on your computer. If you are familiar with your operating system, and especially if you are comfortable with the command-line interface, you will have no trouble installing Julia. But for beginners, it can be painful to learn about system administration and programming at the same time.To avoid that problem, I recommend that you start out running Julia in a browser. Later, when you are comfortable with Julia, I\'ll make suggestions for installing Julia on your computer.In the browser you can run Julia on JuliaBox: https://www.juliabox.com. No installation is required – just point your browser there, login and start computing.The Julia REPL (Read–Eval–Print Loop) is a program that reads and executes Julia code. You might start the REPL by opening a terminal on JuliaBox and typing julia on the command line. When it starts, you should see output like this:Base.banner() # hide\nprintln(\"julia>\") # hideThe first lines contain information about the REPL and the operating system it\'s running on, so it might be different for you. But you should check that the version number is at least 0.6.0The last line is a prompt that indicates that the REPL is ready for you to enter code. If you type a line of code and hit Enter, the REPL displays the result: 1 + 1Now you\'re ready to get started. From here on, I assume that you know how to start the Julia REPL and run code."
},

{
    "location": "chap01.html#The-first-program-1",
    "page": "The way of the program",
    "title": "The first program",
    "category": "section",
    "text": "Traditionally, the first program you write in a new language is called “Hello, World!” because all it does is display the words “Hello, World!”. In Julia, it looks like this:println(\"Hello, World!\")This is an example of a print statement, although it doesn\'t actually print anything on paper. It displays a result on the screen. In this case, the result is the wordsHello, World!The quotation marks in the program mark the beginning and end of the text to be displayed; they don\'t appear in the result.The parentheses indicate that println is a function. We\'ll get to functions in Chapter Functions."
},

{
    "location": "chap01.html#Arithmetic-operators-1",
    "page": "The way of the program",
    "title": "Arithmetic operators",
    "category": "section",
    "text": "After \"Hello, World\", the next step is arithmetic. Julia provides operators, which are special symbols that represent computations like addition and multiplication. The operators +, -, and * perform addition, subtraction, and multiplication, as in the following examples:40 + 2\n43 - 1\n6 * 7The operator / performs division: 84 / 2You might wonder why the result is 42.0 instead of 42. I\'ll explain in the next section.Finally, the operator ^ performs exponentiation; that is, it raises a number to a power:6^2 + 6"
},

{
    "location": "chap01.html#Values-and-types-1",
    "page": "The way of the program",
    "title": "Values and types",
    "category": "section",
    "text": "A value is one of the basic things a program works with, like a letter or a number. Some values we have seen so far are 2, 42.0, and \"Hello, World!\".These values belong to different types: 2 is an integer, 42.0 is a floating-point number, and \"Hello, World!\" is a string, so-called because the letters it contains are strung together.If you are not sure what type a value has, the REPL can tell you:typeof(2)\ntypeof(42.0)\ntypeof(\"Hello, World!\")Not surprisingly, integers belong to the type Int64, strings belong to String and floating-point numbers belong to Float64.What about values like \"2\" and \"42.0\"? They look like numbers, but they are in quotation marks like strings.typeof(\"2\")\ntypeof(\"42.0\")They\'re strings.When you type a large integer, you might be tempted to use commas between groups of digits, as in 1,000,000. This is not a legal integer in Julia, but it is legal:1,000,000That\'s not what we expected at all! Julia parses 1,000,000 as a comma-separated sequence of integers. We\'ll learn more about this kind of sequence later."
},

{
    "location": "chap01.html#Formal-and-natural-languages-1",
    "page": "The way of the program",
    "title": "Formal and natural languages",
    "category": "section",
    "text": "Natural languages are the languages people speak, such as English, Spanish, and French. They were not designed by people (although people try to impose some order on them); they evolved naturally.Formal languages are languages that are designed by people for specific applications. For example, the notation that mathematicians use is a formal language that is particularly good at denoting relationships among numbers and symbols. Chemists use a formal language to represent the chemical structure of molecules. And most importantly:Programming languages are formal languages that have been designed to express computations.Formal languages tend to have strict syntax rules that govern the structure of statements. For example, in mathematics the statement 3 + 3 = 6 has correct syntax, but 3 + = 3  6 does not. In chemistry H_2O is a syntactically correct formula, but _2Zz is not.Syntax rules come in two flavors, pertaining to tokens and structure. Tokens are the basic elements of the language, such as words, numbers, and chemical elements. One of the problems with 3 += 3  6 is that  is not a legal token in mathematics (at least as far as I know). Similarly, _2Zz is not legal because there is no element with the abbreviation Zz.The second type of syntax rule pertains to the way tokens are combined. The equation 3 += 3 is illegal because even though + and = are legal tokens, you can\'t have one right after the other. Similarly, in a chemical formula the subscript comes after the element name, not before.This is @ well-structured Engli$h sentence with invalid t*kens in it. This sentence all valid tokens has, but invalid structure with.When you read a sentence in English or a statement in a formal language, you have to figure out the structure (although in a natural language you do this subconsciously). This process is called parsing.Although formal and natural languages have many features in common–tokens, structure, and syntax–there are some differences:ambiguity: Natural languages are full of ambiguity, which people deal with by using contextual clues and other information. Formal languages are designed to be nearly or completely unambiguous, which means that any statement has exactly one meaning, regardless of context.\nredundancy: In order to make up for ambiguity and reduce misunderstandings, natural languages employ lots of redundancy. As a result, they are often verbose. Formal languages are less redundant and more concise.\nliteralness: Natural languages are full of idiom and metaphor. If I say, ``The penny dropped\'\', there is probably no penny and nothing dropping (this idiom means that someone understood something after a period of confusion). Formal languages mean exactly what they say.Because we all grow up speaking natural languages, it is sometimes hard to adjust to formal languages. The difference between formal and natural language is like the difference between poetry and prose, but more so:Poetry: Words are used for their sounds as well as for their meaning, and the whole poem together creates an effect or emotional response. Ambiguity is not only common but often deliberate.\nProse: The literal meaning of words is more important, and the structure contributes more meaning. Prose is more amenable to analysis than poetry but still often ambiguous.\nPrograms: The meaning of a computer program is unambiguous and literal, and can be understood entirely by analysis of the tokens and structure.Formal languages are more dense than natural languages, so it takes longer to read them. Also, the structure is important, so it is not always best to read from top to bottom, left to right. Instead, learn to parse the program in your head, identifying the tokens and interpreting the structure. Finally, the details matter. Small errors in spelling and punctuation, which you can get away with in natural languages, can make a big difference in a formal language."
},

{
    "location": "chap01.html#Debugging-1",
    "page": "The way of the program",
    "title": "Debugging",
    "category": "section",
    "text": "Programmers make mistakes. For whimsical reasons, programming errors are called bugs and the process of tracking them down is called debugging.Programming, and especially debugging, sometimes brings out strong emotions. If you are struggling with a difficult bug, you might feel angry, despondent, or embarrassed.There is evidence that people naturally respond to computers as if they were people. When they work well, we think of them as teammates, and when they are obstinate or rude, we respond to them the same way we respond to rude, obstinate people (Reeves and Nass, The Media Equation: How People Treat Computers, Television, and New Media Like Real People and Places).Preparing for these reactions might help you deal with them. One approach is to think of the computer as an employee with certain strengths, like speed and precision, and particular weaknesses, like lack of empathy and inability to grasp the big picture.Your job is to be a good manager: find ways to take advantage of the strengths and mitigate the weaknesses. And find ways to use your emotions to engage with the problem, without letting your reactions interfere with your ability to work effectively.Learning to debug can be frustrating, but it is a valuable skill that is useful for many activities beyond programming. At the end of each chapter there is a section, like this one, with my suggestions for debugging. I hope they help!"
},

{
    "location": "chap01.html#Glossary-1",
    "page": "The way of the program",
    "title": "Glossary",
    "category": "section",
    "text": "problem solving: The process of formulating a problem, finding a solution, and expressing it.high-level language: A programming language like Julia that is designed to be easy for humans to read and write.low-level language: A programming language that is designed to be easy for a computer to run; also called “machine language” or “assembly language”.portability: A property of a program that can run on more than one kind of computer.REPL: A program that reads another program and executes itprompt: Characters displayed by the interpreter to indicate that it is ready to take input from the user.program: A set of instructions that specifies a computation.print statement: An instruction that causes the Julia REPL to display a value on the screen.operator: A special symbol that represents a simple computation like addition, multiplication, or string concatenation.value: One of the basic units of data, like a number or string, that a program manipulates.type: A category of values. The types we have seen so far are integers (Int64), floating-point numbers (Float64), and strings (String).integer: A type that represents whole numbers.floating-point: A type that represents numbers with fractional parts.string: A type that represents sequences of characters.natural language: Any one of the languages that people speak that evolved naturally.formal language: Any one of the languages that people have designed for specific purposes, such as representing mathematical ideas or computer programs; all programming languages are formal languages.token: One of the basic elements of the syntactic structure of a program, analogous to a word in a natural language.syntax: The rules that govern the structure of a program.parse: To examine a program and analyze the syntactic structure.bug: An error in a program.debugging: The process of finding and correcting bugs."
},

{
    "location": "chap01.html#Exercises-1",
    "page": "The way of the program",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap01.html#Exercise-1-1",
    "page": "The way of the program",
    "title": "Exercise 1",
    "category": "section",
    "text": "It is a good idea to read this book in front of a computer so you can try out the examples as you go.Whenever you are experimenting with a new feature, you should try to make mistakes. For example, in the \"Hello, world!\" program, what happens if you leave out one of the quotation marks? What if you leave out both? What if you spell println wrong?This kind of experiment helps you remember what you read; it also helps when you are programming, because you get to know what the error messages mean. It is better to make mistakes now and on purpose than later and accidentally.In a print statement, what happens if you leave out one of the parentheses, or both?\nIf you are trying to print a string, what happens if you leave out one of the quotation marks, or both?\nYou can use a minus sign to make a negative number like -2. What happens if you put a plus sign before a number? What about 2++2?\nIn math notation, leading zeros are ok, as in 02. What happens if you try this in Julia?\nWhat happens if you have two values with no operator between them?"
},

{
    "location": "chap01.html#Exercise-2-1",
    "page": "The way of the program",
    "title": "Exercise 2",
    "category": "section",
    "text": "Start the Julia REPL and use it as a calculator.How many seconds are there in 42 minutes 42 seconds?\nHow many miles are there in 10 kilometers? Hint: there are 1.61 kilometers in a mile.\nIf you run a 10 kilometer race in 42 minutes 42 seconds, what is your average pace (time per mile in minutes and seconds)? What is your average speed in miles per hour?"
},

{
    "location": "chap02.html#",
    "page": "Variables, expressions and statements",
    "title": "Variables, expressions and statements",
    "category": "page",
    "text": ""
},

{
    "location": "chap02.html#Variables,-expressions-and-statements-1",
    "page": "Variables, expressions and statements",
    "title": "Variables, expressions and statements",
    "category": "section",
    "text": "One of the most powerful features of a programming language is the ability to manipulate variables. A variable is a name that refers to a value."
},

{
    "location": "chap02.html#Assignment-statements-1",
    "page": "Variables, expressions and statements",
    "title": "Assignment statements",
    "category": "section",
    "text": "An assignment statement creates a new variable and gives it a value:message = \"And now for something completely different\"\nn = 17\nπ = 3.141592653589793This example makes three assignments. The first assigns a string to a new variable named message; the second gives the integer 17 to n; the third assigns the (approximate) value of pi to π.A common way to represent variables on paper is to write the name with an arrow pointing to its value. This kind of figure is called a state diagram because it shows what state each of the variables is in (think of it as the variable\'s state of mind). Figure 2.1 shows the result of the previous example.using ThinkJulia\nfig02_1() <figure>\n  <img src=\"fig21.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 2.1. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig21}\n\\caption{State diagram.}\n\\label{fig21}\n\\end{figure}"
},

{
    "location": "chap02.html#Variable-names-1",
    "page": "Variables, expressions and statements",
    "title": "Variable names",
    "category": "section",
    "text": "Programmers generally choose names for their variables that are meaningful–they document what the variable is used for.Variable names can be as long as you like. They can contain almost all Unicode characters, but they can\'t begin with a number. It is legal to use uppercase letters, but it is conventional to use only lower case for variables names.The underscore character, _, can appear in a name. It is often used in names with multiple words, such as your_name or airspeed_of_unladen_swallow.If you give a variable an illegal name, you get a syntax error:julia> 76trombones = \"big parade\"\nERROR: syntax: \"76\" is not a valid function argument name\n\njulia> more@ = 1000000\nERROR: syntax: unexpected \"=\"\n\njulia> type = \"Advanced Theoretical Zymurgy\"\nERROR: syntax: unexpected \"=\"76trombones is illegal because it begins with a number. more@ is illegal because it contains an illegal character, @. But what\'s wrong with type?It turns out that type is one of Julia\'s keywords. The REPL uses keywords to recognize the structure of the program, and they cannot be used as variable names.Julia has these keywords:abstract    baremodule   begin      break       catch\nccall       const        continue   do          else\nelseif      end          export     finally     for\nfunction    global       if         import      importall\nlet         local        macro      module      mutable\nprimitive   quote        return     try         type\nusing       struct       whileYou don\'t have to memorize this list. In most development environments, keywords are displayed in a different color; if you try to use one as a variable name, you\'ll know."
},

{
    "location": "chap02.html#Expressions-and-statements-1",
    "page": "Variables, expressions and statements",
    "title": "Expressions and statements",
    "category": "section",
    "text": "An expression is a combination of values, variables, and operators. A value all by itself is considered an expression, and so is a variable, so the following are all legal expressions:42\nn\nn + 25When you type an expression at the prompt, the REPL evaluates it, which means that it finds the value of the expression. In this example, n has the value 17 and n + 25 has the value 42.A statement is a unit of code that has an effect, like creating a variable or displaying a value. n = 17\nprintln(n)The first line is an assignment statement that gives a value to n. The second line is a print statement that displays the value of n.When you type a statement, the REPL executes it, which means that it does whatever the statement says. In general, statements don\'t have values."
},

{
    "location": "chap02.html#Script-mode-1",
    "page": "Variables, expressions and statements",
    "title": "Script mode",
    "category": "section",
    "text": "So far we have run Julia in interactive mode, which means that you interact directly with the REPL. Interactive mode is a good way to get started, but if you are working with more than a few lines of code, it can be clumsy.The alternative is to save code in a file called a script and then run the REPL in script mode to execute the script. By convention, Julia scripts have names that end with .jl.If you know how to create and run a script on your computer, you are ready to go. Otherwise I recommend using JuliaBox again. Open a text file, write the script and save with a .jl extension. The script can be executed in a terminal with the command julia name_of_the_script.jl.Because Julia provides both modes, you can test bits of code in interactive mode before you put them in a script. But there are differences between interactive mode and script mode that can be confusing.For example, if you are using Julia as a calculator, you might typemiles = 26.2\nmiles * 1.61The first line assigns a value to miles, but it has no visible effect. The second line is an expression, so the REPL evaluates it and displays the result. It turns out that a marathon is about 42 kilometers.But if you type the same code into a script and run it, you get no output at all. In script mode an expression, all by itself, has no visible effect. Julia actually evaluates the expression, but it doesn\'t display the value unless you tell it to:miles = 26.2\nprintln(miles * 1.61)This behavior can be confusing at first.A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.For example, the following script produces the outputprintln(1)\nx = 2\nprintln(x)The assignment statement produces no output.To check your understanding, type the following statements in the Julia REPL and see what they do:5\nx = 5\nx + 1Now put the same statements in a script and run it. What is the output? Modify the script by transforming each expression into a print statement and then run it again."
},

{
    "location": "chap02.html#Order-of-operations-1",
    "page": "Variables, expressions and statements",
    "title": "Order of operations",
    "category": "section",
    "text": "When an expression contains more than one operator, the order of evaluation depends on the order of operations. For mathematical operators, Julia follows mathematical convention. The acronym PEMDAS is a useful way to remember the rules:Parentheses have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated first, 2 * (3-1) is 4, and (1+1)^(5-2) is 8. You can also use parentheses to make an expression easier to read, as in (minute * 100) / 60, even if it doesn\'t change the result.\nExponentiation has the next highest precedence, so 1+2^3 is 9, not 27, and 2*3^2 is 18, not 36.\nMultiplication and Division have higher precedence than Addition and Subtraction. So 2*3-1 is 5, not 4, and 6+4/2 is 8, not 5.\nOperators with the same precedence are evaluated from left to right (except exponentiation). So in the expression degrees / 2 * π, the division happens first and the result is multiplied by π. To divide by 2pi, you can use parentheses or write degrees / 2 / π.I don\'t work very hard to remember the precedence of operators. If I can\'t tell by looking at the expression, I use parentheses to make it obvious.Unicode characters that can be entered via tab completion of LaTeX-like abbreviations in the Julia REPL."
},

{
    "location": "chap02.html#String-operations-1",
    "page": "Variables, expressions and statements",
    "title": "String operations",
    "category": "section",
    "text": "In general, you can\'t perform mathematical operations on strings, even if the strings look like numbers, so the following are illegal:\"2\" - \"1\"    \"eggs\" / \"easy\"    \"third\" + \"a charm\"But there are two exceptions, * and ^.The * operator performs string concatenation, which means it joins the strings by linking them end-to-end. For example:first = \"throat\"\nsecond = \"warbler\"\nfirst * secondThe ^ operator also works on strings; it performs repetition. For example, \"Spam\"^3 is \"SpamSpamSpam\". If one of the values is a string, the other has to be an integer.This use of * and ^ makes sense by analogy with multiplication and exponentiation. Just as 4^3 is equivalent to 4*4*4, we expect \"Spam\"^3 to be the same as \"Spam\"*\"Spam\"*\"Spam\", and it is."
},

{
    "location": "chap02.html#Comments-1",
    "page": "Variables, expressions and statements",
    "title": "Comments",
    "category": "section",
    "text": "As programs get bigger and more complicated, they get more difficult to read. Formal languages are dense, and it is often difficult to look at a piece of code and figure out what it is doing, or why.For this reason, it is a good idea to add notes to your programs to explain in natural language what the program is doing. These notes are called comments, and they start with the # symbol:# compute the percentage of the hour that has elapsed\npercentage = (minute * 100) / 60In this case, the comment appears on a line by itself. You can also put comments at the end of a line:percentage = (minute * 100) / 60   # percentage of an hourEverything from the # to the end of the line is ignored–it has no effect on the execution of the program.Comments are most useful when they document non-obvious features of the code. It is reasonable to assume that the reader can figure out what the code does; it is more useful to explain why.This comment is redundant with the code and useless:v = 5   # assign 5 to vThis comment contains useful information that is not in the code:v = 5   # velocity in meters/second. Good variable names can reduce the need for comments, but long names can make complex expressions hard to read, so there is a tradeoff."
},

{
    "location": "chap02.html#Debugging-1",
    "page": "Variables, expressions and statements",
    "title": "Debugging",
    "category": "section",
    "text": "Three kinds of errors can occur in a program: syntax errors, runtime errors, and semantic errors. It is useful to distinguish between them in order to track them down more quickly.Syntax error: \"Syntax\" refers to the structure of a program and the rules about that structure. For example, parentheses have to come in matching pairs, so (1 + 2) is legal, but 8) is a syntax error.\nIf there is a syntax error anywhere in your program, Julia displays an error message and quits, and you will not be able to run the program. During the first few weeks of your programming career, you might spend a lot of time tracking down syntax errors. As you gain experience, you will make fewer errors and find them faster.\nRuntime error: The second type of error is a runtime error, so called because the error does not appear until after the program has started running. These errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened.\nRuntime errors are rare in the simple programs you will see in the first few chapters, so it might be a while before you encounter one.\nSemantic error: The third type of error is \"semantic\", which means related to meaning. If there is a semantic error in your program, it will run without generating error messages, but it will not do the right thing. It will do something else. Specifically, it will do what you told it to do.\nIdentifying semantic errors can be tricky because it requires you to work backward by looking at the output of the program and trying to figure out what it is doing."
},

{
    "location": "chap02.html#Glossary-1",
    "page": "Variables, expressions and statements",
    "title": "Glossary",
    "category": "section",
    "text": "variable: A name that refers to a value.assignment: A statement that assigns a value to a variable.state diagram: A graphical representation of a set of variables and the values they refer to.keyword: A reserved word that is used to parse a program; you cannot use keywords like if, function, and while as variable names.operand: One of the values on which an operator operates.expression: A combination of variables, operators, and values that represents a single result.evaluate: To simplify an expression by performing the operations in order to yield a single value.statement: A section of code that represents a command or action. So far, the statements we have seen are assignments and print statements.execute: To run a statement and do what it says.interactive mode: A way of using the Julia REPL by typing code at the prompt.script mode: A way of using the Julia REPL to read code from a script and run it.script: A program stored in a file.order of operations: Rules governing the order in which expressions involving multiple operators and operands are evaluated.concatenate: To join two operands end-to-end.comment: Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.syntax error: An error in a program that makes it impossible to parse (and therefore impossible to interpret).exception: An error that is detected while the program is running.semantics: The meaning of a program.semantic error: An error in a program that makes it do something other than what the programmer intended."
},

{
    "location": "chap02.html#Exercises-1",
    "page": "Variables, expressions and statements",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap02.html#Exercise-1-1",
    "page": "Variables, expressions and statements",
    "title": "Exercise 1",
    "category": "section",
    "text": "Repeating my advice from the previous chapter, whenever you learn a new feature, you should try it out in interactive mode and make errors on purpose to see what goes wrong.We\'ve seen that n = 42 is legal. What about 42 = n?\nHow about x = y = 1?\nIn some languages every statement ends with a semi-colon, ;. What happens if you put a semi-colon at the end of a Julia statement?\nWhat if you put a period at the end of a statement?\nIn math notation you can multiply x and y like this: x y. What happens if you try that in Julia?"
},

{
    "location": "chap02.html#Exercise-2-1",
    "page": "Variables, expressions and statements",
    "title": "Exercise 2",
    "category": "section",
    "text": "Practice using the Julia REPL as a calculator: The volume of a sphere with radius r is frac43 pi r^3. What is the volume of a sphere with radius 5?\nSuppose the cover price of a book is € 24.95, but bookstores get a 40 % discount. Shipping costs € 3 for the first copy and 75 cents for each additional copy. What is the total wholesale cost for 60 copies?\nIf I leave my house at 6:52 am and run 1 mile at an easy pace (8:15 per mile), then 3 miles at tempo (7:12 per mile) and 1 mile at easy pace again, what time do I get home for breakfast?"
},

{
    "location": "chap03.html#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "chap03.html#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": "In the context of programming, a function is a named sequence of statements that performs a computation. When you define a function, you specify the name and the sequence of statements. Later, you can “call” the function by name."
},

{
    "location": "chap03.html#Function-calls-1",
    "page": "Functions",
    "title": "Function calls",
    "category": "section",
    "text": "We have already seen one example of a function call:typeof(42)The name of the function is typeof. The expression in parentheses is called the argument of the function. The result, for this function, is the type of the argument.It is common to say that a function “takes” an argument and “returns” a result. The result is also called the return value.Julia provides functions that convert values from one type to another. The parse function takes a string and converts it to any number type, if it can, or complains otherwise:parse(Int64, \"32\")\nparse(Float64, \"3.14159\")\nparse(Int64, \"Hello\")trunc can convert floating-point values to integers, but it doesn’t round off; it chops off the fraction part:trunc(3.99999)\ntrunc(-2.3)float converts integers to floating-point numbers:float(32)Finally, string converts its argument to a string:string(32)\nstring(3.14159)"
},

{
    "location": "chap03.html#Math-functions-1",
    "page": "Functions",
    "title": "Math functions",
    "category": "section",
    "text": "In Julia,  most of the familiar mathematical functions are directly available:signal_power = 9\nnoise_power = 10ratio = signal_power / noise_power\ndecibels = 10 * log10(ratio)radians = 0.7\nheight = sin(radians)The first example uses log10 to compute a signal-to-noise ratio in decibels (assuming that signal_power and noise_power are defined). log, which computes logarithms base e, is also provided.The second example finds the sine of radians. The name of the variable is a hint that sin and the other trigonometric functions (cos, tan, etc.) take arguments in radians. To convert from degrees to radians, divide by 180 and multiply by pi:degrees = 45\nradians = degrees / 180.0 * π\nsin(radians)The value of the variable π is a floating-point approximation of pi, accurate to about 21 digits.If you know trigonometry, you can check the previous result by comparing it to the square root of two divided by two:sqrt(2) / 2"
},

{
    "location": "chap03.html#Composition-1",
    "page": "Functions",
    "title": "Composition",
    "category": "section",
    "text": "So far, we have looked at the elements of a program—variables, expressions, and statements—in isolation, without talking about how to combine them.One of the most useful features of programming languages is their ability to take small building blocks and compose them. For example, the argument of a function can be any kind of expression, including arithmetic operators:x = sin(degrees / 360.0 * 2 * π)And even function calls:x = exp(log(x+1))Almost anywhere you can put a value, you can put an arbitrary expression, with one exception: the left side of an assignment statement has to be a variable name. Any other expression on the left side is a syntax error (we will see exceptions to this rule later).hours = 2minutes = hours * 60                 # right\nhours * 60 = minutes                 # wrong!"
},

{
    "location": "chap03.html#Adding-new-functions-1",
    "page": "Functions",
    "title": "Adding new functions",
    "category": "section",
    "text": "So far, we have only been using the functions that come with Julia, but it is also possible to add new functions. A function definition specifies the name of a new function and the sequence of statements that run when the function is called. Here is an example:function print_lyrics()\n    println(\"I\'m a lumberjack, and I\'m okay.\")\n    println(\"I sleep all night and I work all day.\")\nendfunction is a keyword that indicates that this is a function definition. The name of the function is print_lyrics. The rules for function names are the same as for variable names: they can contain almost all Unicode characters, but the first character can’t be a number. You can’t use a keyword as the name of a function, and you should avoid having a variable and a function with the same name.The empty parentheses after the name indicate that this function doesn’t take any arguments.The first line of the function definition is called the header; the rest is called the body. The body is terminated with the keyword end and it can contain any number of statements.The quotation marks must be “straight quotes”, usually located next to Enter on the keyboard. “Curly quotes”, like the ones in this sentence, are not legal in Julia.If you type a function definition in interactive mode, the REPL indents to let you know that the definition isn’t complete:julia> function print_lyrics()\n       println(\"I\'m a lumberjack, and I\'m okay.\")To end the function, you have to enter end.Defining a function creates a function object, which is of type Function:function print_lyrics()\nprintln(\"I\'m a lumberjack, and I\'m okay.\")\nprintln(\"I sleep all night and I work all day.\")\nendprint_lyrics isa FunctionThe syntax for calling the new function is the same as for built-in functions:print_lyrics()Once you have defined a function, you can use it inside another function. For example, to repeat the previous refrain, we could write a function called repeat_lyrics:function repeat_lyrics()\n    print_lyrics()\n    print_lyrics()\nendAnd then call repeat_lyrics:function repeat_lyrics()\nprint_lyrics()\nprint_lyrics()\nendrepeat_lyrics()But that’s not really how the song goes."
},

{
    "location": "chap03.html#Definitions-and-uses-1",
    "page": "Functions",
    "title": "Definitions and uses",
    "category": "section",
    "text": "Pulling together the code fragments from the previous section, the whole program looks like this:function print_lyrics()\n    println(\"I\'m a lumberjack, and I\'m okay.\")\n    println(\"I sleep all night and I work all day.\")\nend\n\nfunction repeat_lyrics()\n    print_lyrics()\n    print_lyrics()\nend\n\nrepeat_lyrics()This program contains two function definitions: print_lyrics and repeat_lyrics. Function definitions get executed just like other statements, but the effect is to create function objects. The statements inside the function do not run until the function is called, and the function definition generates no output.As you might expect, you have to create a function before you can run it. In other words, the function definition has to run before the function gets called.As an exercise, move the last line of this program to the top, so the function call appears before the definitions. Run the program and see what error message you get.Now move the function call back to the bottom and move the definition of print_lyrics after the definition of repeat_lyrics. What happens when you run this program?"
},

{
    "location": "chap03.html#Flow-of-execution-1",
    "page": "Functions",
    "title": "Flow of execution",
    "category": "section",
    "text": "To ensure that a function is defined before its first use, you have to know the order statements run in, which is called the flow of execution.Execution always begins at the first statement of the program. Statements are run one at a time, in order from top to bottom.Function definitions do not alter the flow of execution of the program, but remember that statements inside the function don’t run until the function is called.A function call is like a detour in the flow of execution. Instead of going to the next statement, the flow jumps to the body of the function, runs the statements there, and then comes back to pick up where it left off.That sounds simple enough, until you remember that one function can call another. While in the middle of one function, the program might have to run the statements in another function. Then, while running that new function, the program might have to run yet another function!Fortunately, Julia is good at keeping track of where it is, so each time a function completes, the program picks up where it left off in the function that called it. When it gets to the end of the program, it terminates.In summary, when you read a program, you don’t always want to read from top to bottom. Sometimes it makes more sense if you follow the flow of execution."
},

{
    "location": "chap03.html#Parameters-and-arguments-1",
    "page": "Functions",
    "title": "Parameters and arguments",
    "category": "section",
    "text": "Some of the functions we have seen require arguments. For example, when you call sin you pass a number as an argument. Some functions take more than one argument: parse takes two, a number type and a string.Inside the function, the arguments are assigned to variables called parameters. Here is a definition for a function that takes an argument:function print_twice(bruce)\n    println(bruce)\n    println(bruce)\nendThis function assigns the argument to a parameter named bruce. When the function is called, it prints the value of the parameter (whatever it is) twice.This function works with any value that can be printed.function print_twice(bruce)\n    println(bruce)\n    println(bruce)\nendprint_twice(\"Spam\")\nprint_twice(42)\nprint_twice(π)The same rules of composition that apply to built-in functions also apply to programmer-defined functions, so we can use any kind of expression as an argument for print_twice:print_twice(\"Spam \"^4)\nprint_twice(cos(π))The argument is evaluated before the function is called, so in the examples the expressions \"Spam \"^4 and cos(π) are only evaluated once.You can also use a variable as an argument:michael = \"Eric, the half a bee.\"\nprint_twice(michael)The name of the variable we pass as an argument (michael) has nothing to do with the name of the parameter (bruce). It doesn’t matter what the value was called back home (in the caller); here in print_twice, we call everybody bruce."
},

{
    "location": "chap03.html#Variables-and-parameters-are-local-1",
    "page": "Functions",
    "title": "Variables and parameters are local",
    "category": "section",
    "text": "When you create a variable inside a function, it is local, which means that it only exists inside the function. For example:function cat_twice(part1, part2)\n    concat = part1 * part2\n    print_twice(concat)\nendThis function takes two arguments, concatenates them, and prints the result twice. Here is an example that uses it:function cat_twice(part1, part2)\n    concat = part1 * part2\n    print_twice(concat)\nendline1 = \"Bing tiddle \"\nline2 = \"tiddle bang.\"\ncat_twice(line1, line2)When cat_twice terminates, the variable concat is destroyed. If we try to print it, we get an exception:println(concat)Parameters are also local. For example, outside print_twice, there is no such thing as bruce."
},

{
    "location": "chap03.html#Stack-diagrams-1",
    "page": "Functions",
    "title": "Stack diagrams",
    "category": "section",
    "text": "To keep track of which variables can be used where, it is sometimes useful to draw a stack diagram. Like state diagrams, stack diagrams show the value of each variable, but they also show the function each variable belongs to.Each function is represented by a frame. A frame is a box with the name of a function beside it and the parameters and variables of the function inside it. The stack diagram for the previous example is shown in Figure 3.1.using ThinkJulia\nfig03_1()<figure>\n  <img src=\"fig31.svg\" alt=\"Stack diagram.\">\n  <figcaption>Figure 3.1. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig31}\n\\caption{Stack diagram.}\n\\label{fig31}\n\\end{figure}The frames are arranged in a stack that indicates which function called which, and so on. In this example, print_twice was called by cat_twice, and cat_twice was called by __main__, which is a special name for the topmost frame. When you create a variable outside of any function, it belongs to __main__.Each parameter refers to the same value as its corresponding argument. So, part1 has the same value as line1, part2 has the same value as line2, and bruce has the same value as concat.If an error occurs during a function call, Julia prints the name of the function, the name of the function that called it, and the name of the function that called that, all the way back to __main__.For example, if you try to access concat from within print_twice, you get a UndefVarError:ERROR: UndefVarError: concat not defined\nStacktrace:\n [1] print_twice at ./REPL[1]:2 [inlined]\n [2] cat_twice(::String, ::String) at ./REPL[2]:3This list of functions is called a traceback. It tells you what program file the error occurred in, and what line, and what functions were executing at the time. It also shows the line of code that caused the error.The order of the functions in the traceback is the inverse of the order of the frames in the stack diagram. The function that is currently running is at the top."
},

{
    "location": "chap03.html#Fruitful-functions-and-void-functions-1",
    "page": "Functions",
    "title": "Fruitful functions and void functions",
    "category": "section",
    "text": "Some of the functions we have used, such as the math functions, return results; for lack of a better name, I call them fruitful functions. Other functions, like print_twice, perform an action but don’t return a value. They are called void functions.When you call a fruitful function, you almost always want to do something with the result; for example, you might assign it to a variable or use it as part of an expression:x = cos(radians)\ngolden = (sqrt(5) + 1) / 2When you call a function in interactive mode, Julia displays the result:sqrt(5)But in a script, if you call a fruitful function all by itself, the return value is lost forever!sqrt(5)This script computes the square root of 5, but since it doesn’t store or display the result, it is not very useful.Void functions might display something on the screen or have some other effect, but they don’t have a return value. If you assign the result to a variable, you get a special value called nothing.result = print_twice(\"Bing\")\nprintln(result)The value nothing is not the same as the string \"nothing\". It is a special value that has its own type:typeof(nothing)The functions we have written so far are all void. We will start writing fruitful functions in a few chapters."
},

{
    "location": "chap03.html#Why-functions?-1",
    "page": "Functions",
    "title": "Why functions?",
    "category": "section",
    "text": "It may not be clear why it is worth the trouble to divide a program into functions. There are several reasons:Creating a new function gives you an opportunity to name a group of statements, which makes your program easier to read and debug.\nFunctions can make a program smaller by eliminating repetitive code. Later, if you make a change, you only have to make it in one place.\nDividing a long program into functions allows you to debug the parts one at a time and then assemble them into a working whole.\nWell-designed functions are often useful for many programs. Once you write and debug one, you can reuse it."
},

{
    "location": "chap03.html#Debugging-1",
    "page": "Functions",
    "title": "Debugging",
    "category": "section",
    "text": "One of the most important skills you will acquire is debugging. Although it can be frustrating, debugging is one of the most intellectually rich, challenging, and interesting parts of programming.In some ways debugging is like detective work. You are confronted with clues and you have to infer the processes and events that led to the results you see.Debugging is also like an experimental science. Once you have an idea about what is going wrong, you modify your program and try again. If your hypothesis was correct, you can predict the result of the modification, and you take a step closer to a working program. If your hypothesis was wrong, you have to come up with a new one. As Sherlock Holmes pointed out, “When you have eliminated the impossible, whatever remains, however improbable, must be the truth.” (A. Conan Doyle, The Sign of Four)For some people, programming and debugging are the same thing. That is, programming is the process of gradually debugging a program until it does what you want. The idea is that you should start with a working program and make small modifications, debugging them as you go.For example, Linux is an operating system that contains millions of lines of code, but it started out as a simple program Linus Torvalds used to explore the Intel 80386 chip. According to Larry Greenfield, “One of Linus’s earlier projects was a program that would switch between printing AAAA and BBBB. This later evolved to Linux.” (The Linux Users’ Guide Beta Version 1)."
},

{
    "location": "chap03.html#Glossary-1",
    "page": "Functions",
    "title": "Glossary",
    "category": "section",
    "text": "function: A named sequence of statements that performs some useful operation. Functions may or may not take arguments and may or may not produce a result.function definition: A statement that creates a new function, specifying its name, parameters, and the statements it contains.function object: A value created by a function definition. The name of the function is a variable that refers to a function object.header: The first line of a function definition.body: The sequence of statements inside a function definition.parameter: A name used inside a function to refer to the value passed as an argument.function call: A statement that runs a function. It consists of the function name followed by an argument list in parentheses.argument: A value provided to a function when the function is called. This value is assigned to the corresponding parameter in the function.local variable: A variable defined inside a function. A local variable can only be used inside its function.return value: The result of a function. If a function call is used as an expression, the return value is the value of the expression.fruitful function: A function that returns a value.void function: A function that always returns nothing.nothing: A special value returned by void functions.composition: Using an expression as part of a larger expression, or a statement as part of a larger statement.flow of execution: The order statements run in.stack diagram: A graphical representation of a stack of functions, their variables, and the values they refer to.frame: A box in a stack diagram that represents a function call. It contains the local variables and parameters of the function.traceback: A list of the functions that are executing, printed when an exception occurs."
},

{
    "location": "chap03.html#Exercises-1",
    "page": "Functions",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap03.html#Exercise-1-1",
    "page": "Functions",
    "title": "Exercise 1",
    "category": "section",
    "text": "Write a function named right_justify that takes a string named s as a parameter and prints the string with enough leading spaces so that the last letter of the string is in column 70 of the display.function right_justify(s)\n    n = 70 - length(s)\n    println(\" \"^70 * s)\nendright_justify(\"monty\")Hint: Use string concatenation and repetition. Also, Julia provides a built-in function called length that returns the length of a string, so the value of length(\"monty\") is 5."
},

{
    "location": "chap03.html#Exercise-2-1",
    "page": "Functions",
    "title": "Exercise 2",
    "category": "section",
    "text": "A function object is a value you can assign to a variable or pass as an argument. For example, do_twice is a function that takes a function object as an argument and calls it twice:function do_twice(f)\n    f()\n    f()\nendHere’s an example that uses do_twice to call a function named print_spam twice.function print_spam()\n    println(\"spam\")\nend\n\ndo_twice(print_spam)Type this example into a script and test it.\nModify do_twice so that it takes two arguments, a function object and a value, and calls the function twice, passing the value as an argument.\nCopy the definition of print_twice from earlier in this chapter to your script.\nUse the modified version of do_twice to call print_twice twice, passing \"spam\" as an argument.\nDefine a new function called do_four that takes a function object and a value and calls the function four times, passing the value as a parameter. There should be only two statements in the body of this function, not four."
},

{
    "location": "chap03.html#Exercise-3-1",
    "page": "Functions",
    "title": "Exercise 3",
    "category": "section",
    "text": "Note: This exercise should be done using only the statements and other features we have learned so far.Write a function that draws a grid like the following:+ - - - - + - - - - +\n|         |         |\n|         |         |\n|         |         |\n|         |         |\n+ - - - - + - - - - +\n|         |         |\n|         |         |\n|         |         |\n|         |         |\n+ - - - - + - - - - +Hint: to print more than one value on a line, you can print a comma-separated sequence of values:println(\"+\", \"-\")The function print does not advance to the next line:print(\"+ \")\nprintln(\"-\")The output of these statements is \"+ -\" on the same line. The output from the next print statement would begin on the next line.Write a function that draws a similar grid with four rows and four columns.Credit: This exercise is based on an exercise in Oualline, Practical C Programming, Third Edition, O’Reilly Media, 1997."
},

{
    "location": "chap04.html#",
    "page": "Case study: interface design",
    "title": "Case study: interface design",
    "category": "page",
    "text": ""
},

{
    "location": "chap04.html#Case-study:-interface-design-1",
    "page": "Case study: interface design",
    "title": "Case study: interface design",
    "category": "section",
    "text": "This chapter presents a case study that demonstrates a process for designing functions that work together.It introduces the Luxor module, which allows you to create images using turtle graphics. The examples in this chapter can be executed in a graphical notebook on JuliaBox, which combines code, formatted text, math, and multimedia in a single document."
},

{
    "location": "chap04.html#The-Luxor-module-1",
    "page": "Case study: interface design",
    "title": "The Luxor module",
    "category": "section",
    "text": "A module is a file that contains a collection of related functions. Modules can be installed in the REPL:julia> Pkg.add(\"Luxor\")\nINFO: Cloning cache of Luxor from https://github.com/JuliaGraphics/Luxor.jl.git\nINFO: Installing Luxor v0.10.4\n...This can take some time.Before we can use the functions in a module, we have to import it with an using statement:using Luxor\nbob = Turtle()The Luxor module provides a function called Turtle that creates a Luxor.Turtle object, which we assign to a variable named bob.Once you create a Turtle, you can call a function to move it around a drawing. For example, to move the Turtle forward:@svg begin\n    Forward(bob, 100)\nendusing ThinkJulia\nfig04_1()<figure>\n  <img src=\"fig41.svg\" alt=\"Moving the turtle forward.\">\n  <figcaption>Figure 4.1. Moving the turtle forward.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig41}\n\\caption{Moving the turtle forward.}\n\\label{fig41}\n\\end{figure}The @svg keyword starts a macro that draws a svg picture. Macros are an important but advanced feature of Julia.The arguments of Forward are the Turtle and a distance in pixels, so the actual size depends on your display.Another function you can call with a Turtle as argument is Turn for turning. The second argument for Turn is an angle in degrees.Also, each Turtle is holding a pen, which is either down or up; if the pen is down, the Turtle leaves a trail when it moves. Figure 1 shows the trail left behind by the Turtle. The functions Penup and Pendown stand for “pen up” and “pen down”.To draw a right angle, modify the macro:bob = Turtle()\n@svg begin\n    Forward(bob, 100)\n    Turn(bob, -90)\n    Forward(bob, 100)\nendNow modify the macro to draw a square. Don’t go on until you’ve got it working!"
},

{
    "location": "chap04.html#Simple-repetition-1",
    "page": "Case study: interface design",
    "title": "Simple repetition",
    "category": "section",
    "text": "Chances are you wrote something like this:bob = Turtle()\n@svg begin\n    Forward(bob, 100)\n    Turn(bob, -90)\n    Forward(bob, 100)\n    Turn(bob, -90)\n    Forward(bob, 100)\n    Turn(bob, -90)\n    Forward(bob, 100)\nendWe can do the same thing more concisely with a for statement:for i in 1:4\n    println(\"Hello!\")\nendThis is the simplest use of the for statement; we will see more later. But that should be enough to let you rewrite your square-drawing program. Don’t go on until you do.Here is a for statement that draws a square:bob = Turtle()\n@svg begin\n    for i in 1:4\n        Forward(bob, 100)\n        Turn(bob, -90)\n    end\nendThe syntax of a for statement is similar to a function definition. It has a header and a body that ends with the keyword end. The body can contain any number of statements.A for statement is also called a loop because the flow of execution runs through the body and then loops back to the top. In this case, it runs the body four times.This version is actually a little different from the previous square-drawing code because it makes another turn after drawing the last side of the square. The extra turn takes more time, but it simplifies the code if we do the same thing every time through the loop. This version also has the effect of leaving the turtle back in the starting position, facing in the starting direction."
},

{
    "location": "chap04.html#Exercises-1",
    "page": "Case study: interface design",
    "title": "Exercises",
    "category": "section",
    "text": "The following is a series of exercises using Turtles. They are meant to be fun, but they have a point, too. While you are working on them, think about what the point is.The following sections have solutions to the exercises, so don’t look until you have finished (or at least tried).Write a function called square that takes a parameter named t, which is a turtle. It should use the turtle to draw a square.\nWrite a function call that passes bob as an argument to square, and then run the macro again.\nAdd another parameter, named length, to square. Modify the body so length of the sides is length, and then modify the function call to provide a second argument. Run the macro again. Test with a range of values for length.\nMake a copy of square and change the name to polygon. Add another parameter named n and modify the body so it draws an n-sided regular polygon. Hint: The exterior angles of an n-sided regular polygon are 360/n degrees.\nWrite a function called circle that takes a turtle, t, and radius, r, as parameters and that draws an approximate circle by calling polygon with an appropriate length and number of sides. Test your function with a range of values of r. Hint: figure out the circumference of the circle and make sure that length * n == circumference.\nMake a more general version of circle called arc that takes an additional parameter angle, which determines what fraction of a circle to draw. angle is in units of degrees, so when angle=360, arc should draw a complete circle."
},

{
    "location": "chap04.html#Encapsulation-1",
    "page": "Case study: interface design",
    "title": "Encapsulation",
    "category": "section",
    "text": "The first exercise asks you to put your square-drawing code into a function definition and then call the function, passing the turtle as a parameter. Here is a solution:function square(t)\n    for i in 1:4\n        Forward(t, 100)\n        Turn(t, -90)\n    end\nend\nbob = Turtle()\n@svg begin\n    square(bob)\nendThe innermost statements, Forward and Turn are indented twice to show that they are inside the for loop, which is inside the function definition.Inside the function, t refers to the same turtle bob, so Turn(t, -90) has the same effect as Turn(bob, -90). In that case, why not call the parameter bob? The idea is that t can be any turtle, not just bob, so you could create a second turtle and pass it as an argument to square:alice = Turtle()\n@svg begin\n    square(alice)\nendWrapping a piece of code up in a function is called encapsulation. One of the benefits of encapsulation is that it attaches a name to the code, which serves as a kind of documentation. Another advantage is that if you re-use the code, it is more concise to call a function twice than to copy and paste the body!"
},

{
    "location": "chap04.html#Generalization-1",
    "page": "Case study: interface design",
    "title": "Generalization",
    "category": "section",
    "text": "The next step is to add a length parameter to square. Here is a solution:function square(t, length)\n    for i in 1:4\n        Forward(t, length)\n        Turn(t, -90)\n    end\nend\nbob = Turtle()\n@svg begin\n    square(bob, 100)\nendAdding a parameter to a function is called generalization because it makes the function more general: in the previous version, the square is always the same size; in this version it can be any size.The next step is also a generalization. Instead of drawing squares, polygon draws regular polygons with any number of sides. Here is a solution:function polygon(t, n, length)\n    angle = 360 / n\n    for i in 1:n\n        Forward(t, length)\n        Turn(t, -angle)\n    end\nend\nbob = Turtle()\n@svg begin\n    polygon(bob, 7, 70)\nendThis example draws a 7-sided polygon with side length 70."
},

{
    "location": "chap04.html#Interface-design-1",
    "page": "Case study: interface design",
    "title": "Interface design",
    "category": "section",
    "text": "The next step is to write circle, which takes a radius, r, as a parameter. Here is a simple solution that uses polygon to draw a 50-sided polygon:function circle(t, r)\n    circumference = 2 * π * r\n    n = 50\n    length = circumference / n\n    polygon(t, n, length)\nendThe first line computes the circumference of a circle with radius r using the formula 2  r. n is the number of line segments in our approximation of a circle, so length is the length of each segment. Thus, polygon draws a 50-sided polygon that approximates a circle with radius r.One limitation of this solution is that n is a constant, which means that for very big circles, the line segments are too long, and for small circles, we waste time drawing very small segments. One solution would be to generalize the function by taking n as a parameter. This would give the user (whoever calls circle) more control, but the interface would be less clean.The interface of a function is a summary of how it is used: what are the parameters? What does the function do? And what is the return value? An interface is “clean” if it allows the caller to do what they want without dealing with unnecessary details.In this example, r belongs in the interface because it specifies the circle to be drawn. n is less appropriate because it pertains to the details of how the circle should be rendered.Rather than clutter up the interface, it is better to choose an appropriate value of n depending on circumference:function circle(t, r)\n    circumference = 2 * π * r\n    n = trunc(circumference / 3) + 3\n    length = circumference / n\n    polygon(t, n, length)\nendNow the number of segments is an integer near circumference/3, so the length of each segment is approximately 3, which is small enough that the circles look good, but big enough to be efficient, and acceptable for any size circle.Adding 3 to n guarantees that the polygon has at least 3 sides."
},

{
    "location": "chap04.html#Refactoring-1",
    "page": "Case study: interface design",
    "title": "Refactoring",
    "category": "section",
    "text": "When I wrote circle, I was able to re-use polygon because a many-sided polygon is a good approximation of a circle. But arc is not as cooperative; we can’t use polygon or circle to draw an arc.One alternative is to start with a copy of polygon and transform it into arc. The result might look like this:function arc(t, r, angle)\n    arc_length = 2 * π * r * angle / 360\n    n = trunc(arc_length / 3) + 1\n    step_length = arc_length / n\n    step_angle = angle / n\n    for i in 1:n\n        Forward(t, step_length)\n        Turn(t, -step_angle)\n    end\nendThe second half of this function looks like polygon, but we can’t re-use polygon without changing the interface. We could generalize polygon to take an angle as a third argument, but then polygon would no longer be an appropriate name! Instead, let’s call the more general function polyline:function polyline(t, n, length, angle)\n    for i 1:n\n        Forward(t, length)\n        Turn(t, -angle)\n    end\nendNow we can rewrite polygon and arc to use polyline:function polygon(t, n, length)\n    angle = 360 / n\n    polyline(t, n, length, angle)\nend\n\nfunction arc(t, r, angle)\n    arc_length = 2 * π * r * angle / 360\n    n = trunc(arc_length / 3) + 1\n    step_length = arc_length / n\n    step_angle = angle / n\n    polyline(t, n, step_length, step_angle)\nendFinally, we can rewrite circle to use arc:function circle(t, r)\n    arc(t, r, 360)\nendThis process—rearranging a program to improve interfaces and facilitate code re-use—is called refactoring. In this case, we noticed that there was similar code in arc and polygon, so we “factored it out” into polyline.If we had planned ahead, we might have written polyline first and avoided refactoring, but often you don’t know enough at the beginning of a project to design all the interfaces. Once you start coding, you understand the problem better. Sometimes refactoring is a sign that you have learned something."
},

{
    "location": "chap04.html#A-development-plan-1",
    "page": "Case study: interface design",
    "title": "A development plan",
    "category": "section",
    "text": "A development plan is a process for writing programs. The process we used in this case study is “encapsulation and generalization”. The steps of this process are:Start by writing a small program with no function definitions.\nOnce you get the program working, identify a coherent piece of it, encapsulate the piece in a function and give it a name.\nGeneralize the function by adding appropriate parameters.\nRepeat steps 1–3 until you have a set of working functions. Copy and paste working code to avoid retyping (and re-debugging).\nLook for opportunities to improve the program by refactoring. For example, if you have similar code in several places, consider factoring it into an appropriately general function.This process has some drawbacks—we will see alternatives later—but it can be useful if you don’t know ahead of time how to divide the program into functions. This approach lets you design as you go along."
},

{
    "location": "chap04.html#docstring-1",
    "page": "Case study: interface design",
    "title": "docstring",
    "category": "section",
    "text": "A docstring is a string before a function that explains the interface (“doc” is short for “documentation”). Here is an example:\"\"\"\npolyline(t, n, length, angle)\n\nDraws n line segments with the given length and\nangle (in degrees) between them.  t is a turtle.\n\"\"\" \nfunction polyline(t, n, length, angle)\n    for i in 1:n\n        Forward(t, length)\n        Turn(t, -angle)\n    end\nendDocumentation can be accessed at the REPL or in a notebook by typing ? followed by the name of a function or macro, and pressing Enter:help?> polyline\nsearch:\n\n  polyline(t, n, length, angle)\n\n  Draws n line segments with the given length and angle (in degrees) between them. t is a turtle.By convention, all docstrings are triple-quoted strings, also known as multiline strings because the triple quotes allow the string to span more than one line.It is terse, but it contains the essential information someone would need to use this function. It explains concisely what the function does (without getting into the details of how it does it). It explains what effect each parameter has on the behavior of the function and what type each parameter should be (if it is not obvious).Writing this kind of documentation is an important part of interface design. A well-designed interface should be simple to explain; if you have a hard time explaining one of your functions, maybe the interface could be improved."
},

{
    "location": "chap04.html#Debugging-1",
    "page": "Case study: interface design",
    "title": "Debugging",
    "category": "section",
    "text": "An interface is like a contract between a function and a caller. The caller agrees to provide certain parameters and the function agrees to do certain work.For example, polyline requires four arguments: t has to be a Turtle; n has to be an integer; length should be a positive number; and angle has to be a number, which is understood to be in degrees.These requirements are called preconditions because they are supposed to be true before the function starts executing. Conversely, conditions at the end of the function are postconditions. Postconditions include the intended effect of the function (like drawing line segments) and any side effects (like moving the Turtle or making other changes).Preconditions are the responsibility of the caller. If the caller violates a (properly documented!) precondition and the function doesn’t work correctly, the bug is in the caller, not the function.If the preconditions are satisfied and the postconditions are not, the bug is in the function. If your pre- and postconditions are clear, they can help with debugging."
},

{
    "location": "chap04.html#Glossary-1",
    "page": "Case study: interface design",
    "title": "Glossary",
    "category": "section",
    "text": "module: A file that contains a collection of related functions and other definitions.using statement: A statement that reads a module file and creates a module object.loop: A part of a program that can run repeatedly.encapsulation: The process of transforming a sequence of statements into a function definition.generalization: The process of replacing something unnecessarily specific (like a number) with something appropriately general (like a variable or parameter).interface: A description of how to use a function, including the name and descriptions of the arguments and return value.refactoring: The process of modifying a working program to improve function interfaces and other qualities of the code.development plan: A process for writing programs.docstring: A string that appears at the top of a function definition to document the function’s interface.precondition: A requirement that should be satisfied by the caller before a function starts.postcondition: A requirement that should be satisfied by the function before it ends."
},

{
    "location": "chap04.html#Exercises-2",
    "page": "Case study: interface design",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap04.html#Exercise-1-1",
    "page": "Case study: interface design",
    "title": "Exercise 1",
    "category": "section",
    "text": "Enter the code in this chapter in a notebook.Draw a stack diagram that shows the state of the program while executing circle(bob, radius). You can do the arithmetic by hand or add print statements to the code.\nThe version of arc in Section 4.7 is not very accurate because the linear approximation of the circle is always outside the true circle. As a result, the Turtle ends up a few pixels away from the correct destination. My solution shows a way to reduce the effect of this error. Read the code and see if it makes sense to you. If you draw a diagram, you might see how it works.\"\"\" \narc(t, r, angle)\n\nDraws an arc with the given radius and angle:\n\n    t: Turtle\n    r: radius\n    angle: angle subtended by the arc, in degrees\n\"\"\"\nfunction arc(t, r, angle)\n    arc_length = 2 * π * r * abs(angle) / 360\n    n = trunc(arc_length / 4) + 3\n    step_length = arc_length / n\n    step_angle = angle / n\n\n    # making a slight left turn before starting reduces\n    # the error caused by the linear approximation of the arc\n    Turn(t, step_angle/2)\n    polyline(t, n, step_length, step_angle)\n    Turn(t, -step_angle/2)\nend"
},

{
    "location": "chap04.html#Exercise-2-1",
    "page": "Case study: interface design",
    "title": "Exercise 2",
    "category": "section",
    "text": "Write an appropriately general set of functions that can draw flowers as in Figure 4.2.using ThinkJulia\nfig04_2()<figure>\n  <img src=\"fig42.svg\" alt=\"Turtle flowers.\">\n  <figcaption>Figure 4.2. Turtle flowers.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig42}\n\\caption{Turtle flowers.}\n\\label{fig42}\n\\end{figure}"
},

{
    "location": "chap04.html#Exercise-3-1",
    "page": "Case study: interface design",
    "title": "Exercise 3",
    "category": "section",
    "text": "Write an appropriately general set of functions that can draw shapes as in Figure 4.3.using ThinkJulia\nfig04_3()<figure>\n  <img src=\"fig43.svg\" alt=\"Turtle pies.\">\n  <figcaption>Figure 4.3. Turtle pies.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig43}\n\\caption{Turtle pies.}\n\\label{fig43}\n\\end{figure}"
},

{
    "location": "chap04.html#Exercise-4-1",
    "page": "Case study: interface design",
    "title": "Exercise 4",
    "category": "section",
    "text": "The letters of the alphabet can be constructed from a moderate number of basic elements, like vertical and horizontal lines and a few curves. Design an alphabet that can be drawn with a minimal number of basic elements and then write functions that draw the letters.You should write one function for each letter, with names draw_a, draw_b, etc., and put your functions in a file named letters.jl."
},

{
    "location": "chap04.html#Exercise-5-1",
    "page": "Case study: interface design",
    "title": "Exercise 5",
    "category": "section",
    "text": "Read about spirals at http://en.wikipedia.org/wiki/Spiral; then write a program that draws an Archimedian spiral as in Figure 4.4.using ThinkJulia\nfig04_4()<figure>\n  <img src=\"fig44.svg\" alt=\"Archimedian spiral.\">\n  <figcaption>Figure 4.4. Archimedian spiral.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig44}\n\\caption{Archimedian spiral.}\n\\label{fig44}\n\\end{figure}"
},

{
    "location": "chap05.html#",
    "page": "Conditionals and recursion",
    "title": "Conditionals and recursion",
    "category": "page",
    "text": ""
},

{
    "location": "chap05.html#Conditionals-and-recursion-1",
    "page": "Conditionals and recursion",
    "title": "Conditionals and recursion",
    "category": "section",
    "text": "The main topic of this chapter is the if statement, which executes different code depending on the state of the program. But first I want to introduce two new operators: floor division and modulus."
},

{
    "location": "chap05.html#Floor-division-and-modulus-1",
    "page": "Conditionals and recursion",
    "title": "Floor division and modulus",
    "category": "section",
    "text": "The floor division operator, ÷ (\\div TAB), divides two numbers and rounds down to an integer. For example, suppose the run time of a movie is 105 minutes. You might want to know how long that is in hours. Conventional division returns a floating-point number:minutes = 105\nminutes / 60But we don’t normally write hours with decimal points. Floor division returns the integer number of hours, rounding down:hours = minutes ÷ 60To get the remainder, you could subtract off one hour in minutes:remainder = minutes - hours * 60An alternative is to use the modulus operator, %, which divides two numbers and returns the remainder.remainder = minutes % 60The modulus operator is more useful than it seems. For example, you can check whether one number is divisible by another—if x % y is zero, then x is divisible by y.Also, you can extract the right-most digit or digits from a number. For example, x % 10 yields the right-most digit of x (in base 10). Similarly x % 100 yields the last two digits."
},

{
    "location": "chap05.html#Boolean-expressions-1",
    "page": "Conditionals and recursion",
    "title": "Boolean expressions",
    "category": "section",
    "text": "A boolean expression is an expression that is either true or false. The following examples use the operator ==, which compares two operands and produces true if they are equal and false otherwise:5 == 5\n5 == 6true and false are special values that belong to the type Bool; they are not strings:typeof(true)\ntypeof(false)The == operator is one of the relational operators; the others are:      x != y               # x is not equal to y\n      x ≠ y                # (\\ne TAB)\n      x > y                # x is greater than y\n      x < y                # x is less than y\n      x >= y               # x is greater than or equal to y\n      x ≥ y                # (\\ge TAB)\n      x <= y               # x is less than or equal to y\n      x ≤ y                # (\\le TAB)Although these operations are probably familiar to you, the Julia symbols are different from the mathematical symbols. A common error is to use a single equal sign (=) instead of a double equal sign (==). Remember that = is an assignment operator and == is a relational operator. There is no such thing as =< or =>."
},

{
    "location": "chap05.html#Logical-operators-1",
    "page": "Conditionals and recursion",
    "title": "Logical operators",
    "category": "section",
    "text": "There are three logical operators: && (and), || (or), and ! (not). The semantics (meaning) of these operators is similar to their meaning in English. For example, x > 0 && x < 10 is true only if x is greater than 0 and less than 10.n%2 == 0 || n%3 == 0 is true if either or both of the conditions is true, that is, if the number is divisible by 2 or 3.Finally, the ! operator negates a boolean expression, so !(x > y) is true if x > y is false, that is, if x is less than or equal to y.The operators && and || do a short-circuit evaluation: in a series of boolean expressions connected by these operators, only the minimum number of expressions are evaluated as are necessary to determine the final boolean value of the entire chain. Explicitly, this means that:In the expression a && b, the subexpression b is only evaluated if a evaluates to true.\nIn the expression a || b, the subexpression b is only evaluated if a evaluates to false.Both && and || associate to the right, but && has higher precedence than || does."
},

{
    "location": "chap05.html#Conditional-execution-1",
    "page": "Conditionals and recursion",
    "title": "Conditional execution",
    "category": "section",
    "text": "In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. Conditional statements give us this ability. The simplest form is the if statement:if x > 0\n    println(\"x is positive\")\nendThe boolean expression after if is called the condition. If it is true, the indented statement runs. If not, nothing happens.if statements have the same structure as function definitions: a header followed by body terminated with the keyword end. Statements like this are called compound statements.There is no limit on the number of statements that can appear in the body. Occasionally, it is useful to have a body with no statements (usually as a place keeper for code you haven’t written yet).if x < 0\n    # TODO: need to handle negative values!\nend"
},

{
    "location": "chap05.html#Alternative-execution-1",
    "page": "Conditionals and recursion",
    "title": "Alternative execution",
    "category": "section",
    "text": "A second form of the if statement is “alternative execution”, in which there are two possibilities and the condition determines which one runs. The syntax looks like this:if x % 2 == 0\n    println(\"x is even\")\nelse\n    println(\"x is odd\")\nendIf the remainder when x is divided by 2 is 0, then we know that x is even, and the program displays an appropriate message. If the condition is false, the second set of statements runs. Since the condition must be true or false, exactly one of the alternatives will run. The alternatives are called branches, because they are branches in the flow of execution."
},

{
    "location": "chap05.html#Chained-conditionals-1",
    "page": "Conditionals and recursion",
    "title": "Chained conditionals",
    "category": "section",
    "text": "Sometimes there are more than two possibilities and we need more than two branches. One way to express a computation like that is a chained conditional:if x < y\n    println(\"x is less than y\")\nelseif x > y\n    println(\"x is greater than y\")\nelse\n    println(\"x and y are equal\")\nendAgain, exactly one branch will run. There is no limit on the number of elseif statements. If there is an else clause, it has to be at the end, but there doesn’t have to be one.if choice == \"a\"\n    draw_a()\nelseif choice == \"b\"\n    draw_b()\nelseif choice == \"c\"\n    draw_c()\nendEach condition is checked in order. If the first is false, the next is checked, and so on. If one of them is true, the corresponding branch runs and the statement ends. Even if more than one condition is true, only the first true branch runs."
},

{
    "location": "chap05.html#Nested-conditionals-1",
    "page": "Conditionals and recursion",
    "title": "Nested conditionals",
    "category": "section",
    "text": "One conditional can also be nested within another. We could have written the example in the previous section like this:if x == y\n    println(\"x and y are equal\")\nelse\n    if x < y\n        println(\"x is less than y\")\n    else\n        println(\"x is greater than y\")\n    end\nendThe outer conditional contains two branches. The first branch contains a simple statement. The second branch contains another if statement, which has two branches of its own. Those two branches are both simple statements, although they could have been conditional statements as well.Although the non-compulsory indentation of the statements makes the structure apparent, nested conditionals become difficult to read very quickly. It is a good idea to avoid them when you can.Logical operators often provide a way to simplify nested conditional statements. For example, we can rewrite the following code using a single conditional:if 0 < x\n    if x < 10\n        println(\"x is a positive single-digit number.\")\n    end\nendThe print statement runs only if we make it past both conditionals, so we can get the same effect with the && operator:if 0 < x && x < 10\n    println(\"x is a positive single-digit number.\")\nendFor this kind of condition, Julia provides a more concise option:if 0 < x < 10\n    println(\"x is a positive single-digit number.\")\nend"
},

{
    "location": "chap05.html#Recursion-1",
    "page": "Conditionals and recursion",
    "title": "Recursion",
    "category": "section",
    "text": "It is legal for one function to call another; it is also legal for a function to call itself. It may not be obvious why that is a good thing, but it turns out to be one of the most magical things a program can do. For example, look at the following function:function countdown(n)\n    if n <= 0\n        println(\"Blastoff!\")\n    else\n        print(n, \" \")\n        countdown(n-1)\n    end\nendfunction countdown(n)\n    if n <= 0\n        println(\"Blastoff!\")\n    else\n        print(n, \" \")\n        countdown(n-1)\n    end\nendIf n is 0 or negative, it outputs the word, \"Blastoff!\" Otherwise, it outputs n and then calls a function named countdown—itself—passing n-1 as an argument.What happens if we call this function like this?countdown(3)The execution of countdown begins with n=3, and since n is greater than 0, it outputs the value 3, and then calls itself...\nThe execution of countdown begins with n=2, and since n is greater than 0, it outputs the value 2, and then calls itself...\nThe execution of countdown begins with n=1, and since n is greater than 0, it outputs the value 1, and then calls itself...\nThe execution of countdown begins with n=0, and since n is not greater than 0, it outputs the word, \"Blastoff!\" and then returns.\nThe countdown that got n=1 returns.\nThe countdown that got n=2 returns.\nThe countdown that got n=3 returns.And then you’re back in __main__.A function that calls itself is recursive; the process of executing it is called recursion.As another example, we can write a function that prints a string n times.function print_n(s, n)\n    if n <= 0\n        return\n    end\n    println(s)\n    print_n(s, n-1)\nendfunction print_n(s, n)\n    if n <= 0\n        return\n    end\n    println(s)\n    print_n(s, n-1)\nendIf n <= 0 the return statement exits the function. The flow of execution immediately returns to the caller, and the remaining lines of the function don’t run.The rest of the function is similar to countdown: it displays s and then calls itself to display s n1 additional times. So the number of lines of output is 1 + (n - 1), which adds up to n.For simple examples like this, it is probably easier to use a for loop. But we will see examples later that are hard to write with a for loop and easy to write with recursion, so it is good to start early."
},

{
    "location": "chap05.html#Stack-diagrams-for-recursive-functions-1",
    "page": "Conditionals and recursion",
    "title": "Stack diagrams for recursive functions",
    "category": "section",
    "text": "In Section 3.9, we used a stack diagram to represent the state of a program during a function call. The same kind of diagram can help interpret a recursive function.Every time a function gets called, Julia creates a frame to contain the function’s local variables and parameters. For a recursive function, there might be more than one frame on the stack at the same time.using ThinkJulia\nfig05_1()<figure>\n  <img src=\"fig51.svg\" alt=\"Stack diagram.\">\n  <figcaption>Figure 5.1. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig51}\n\\caption{Stack diagram.}\n\\label{fig51}\n\\end{figure}Figure 5.1 shows a stack diagram for countdown called with n = 3.As usual, the top of the stack is the frame for __main__. It is empty because we did not create any variables in __main__ or pass any arguments to it.The four countdown frames have different values for the parameter n. The bottom of the stack, where n=0, is called the base case. It does not make a recursive call, so there are no more frames.As an exercise, draw a stack diagram for print_n called with s = \"Hello\" and n=2. Then write a function called do_n that takes a function object and a number, n, as arguments, and that calls the given function n times."
},

{
    "location": "chap05.html#Infinite-recursion-1",
    "page": "Conditionals and recursion",
    "title": "Infinite recursion",
    "category": "section",
    "text": "If a recursion never reaches a base case, it goes on making recursive calls forever, and the program never terminates. This is known as infinite recursion, and it is generally not a good idea. Here is a minimal program with an infinite recursion:function recurse()\n    recurse()\nendIn most programming environments, a program with infinite recursion does not really run forever. Julia reports an error message when the maximum recursion depth is reached:julia> recurse()\nERROR: StackOverflowError:\nStacktrace:\n [1] recurse() at ./REPL[1]:2 (repeats 80000 times)This traceback is a little bigger than the one we saw in the previous chapter. When the error occurs, there are 80000 recurse frames on the stack!If you encounter an infinite recursion by accident, review your function to confirm that there is a base case that does not make a recursive call. And if there is a base case, check whether you are guaranteed to reach it."
},

{
    "location": "chap05.html#Keyboard-input-1",
    "page": "Conditionals and recursion",
    "title": "Keyboard input",
    "category": "section",
    "text": "The programs we have written so far accept no input from the user. They just do the same thing every time.Julia provides a built-in function called input that stops the program and waits for the user to type something. When the user presses RETURN or ENTER, the program resumes and readline returns what the user typed as a string.julia> text = readline()\nWhat are you waiting for?\n\"What are you waiting for?\"Before getting input from the user, it is a good idea to print a prompt telling the user what to type:julia> print(\"What...is your name? \"); readline()\nWhat...is your name? Arthur, King of the Britons!\n\"Arthur, King of the Britons!\"; allows to put multiple statements on the same line. In the REPL only the last statement returns its value.If you expect the user to type an integer, you can try to convert the return value to Int64:julia> println(\"What...is the airspeed velocity of an unladen swallow?\"); speed = readline()\nWhat...is the airspeed velocity of an unladen swallow?\n42\n\"42\"\n\njulia> parse(Int64, speed)But if the user types something other than a string of digits, you get an error:julia> println(\"What...is the airspeed velocity of an unladen swallow? \"); speed = readline()\nWhat...is the airspeed velocity of an unladen swallow?\nWhat do you mean, an African or a European swallow?\n\"What do you mean, an African or a European swallow?\"\n\njulia> parse(Int64, speed)\nERROR: ArgumentError: invalid base 10 digit \'W\' in \"What do you mean, an African or a European swallow?\"\nStacktrace:\n [1] macro expansion at ./REPL.jl:2 [inlined]\n [2] (::Base.REPL.##1#2{Base.REPL.REPLBackend})() at ./event.jl:73We will see how to handle this kind of error later."
},

{
    "location": "chap05.html#Debugging-1",
    "page": "Conditionals and recursion",
    "title": "Debugging",
    "category": "section",
    "text": "When a syntax or runtime error occurs, the error message contains a lot of information, but it can be overwhelming. The most useful parts are usually:What kind of error it was, and\nWhere it occurred.Syntax errors are usually easy to find, but there are a few gotchas. In general, error messages indicate where the problem was discovered, but the actual error might be earlier in the code, sometimes on a previous line.The same is true of runtime errors. Suppose you are trying to compute a signal-to-noise ratio in decibels. The formula is SNR_db = 10 log_10 fracP_signalP_noise In Julia, you might write something like this:signal_power = 9\nnoise_power = 10\nratio = signal_power ÷ noise_power\ndecibels = 10 * log10(ratio)\nprint(decibels)This is not the result you expected.To find the error, it might be useful to print the value of ratio, which turns out to be 0. The problem is in line 3, which uses floor division instead of floating-point division.You should take the time to read error messages carefully, but don’t assume that everything they say is correct."
},

{
    "location": "chap05.html#Glossary-1",
    "page": "Conditionals and recursion",
    "title": "Glossary",
    "category": "section",
    "text": "floor division: An operator, denoted ÷, that divides two numbers and rounds down (toward negative infinity) to an integer.modulus operator: An operator, denoted with a percent sign (%), that works on integers and returns the remainder when one number is divided by another.boolean expression: An expression whose value is either true or false.relational operator: One of the operators that compares its operands: ==, ≠ (!=), >, <, ≥ (>=\'), and≤(<=`).logical operator: One of the operators that combines boolean expressions: && (and), || (or), and ! (not).conditional statement: A statement that controls the flow of execution depending on some condition.condition: The boolean expression in a conditional statement that determines which branch runs.compound statement: A statement that consists of a header and a body. The body is terminated with the keyword end.branch: One of the alternative sequences of statements in a conditional statement.chained conditional: A conditional statement with a series of alternative branches.nested conditional: A conditional statement that appears in one of the branches of another conditional statement.return statement: A statement that causes a function to end immediately and return to the caller.recursion: The process of calling the function that is currently executing.base case: A conditional branch in a recursive function that does not make a recursive call.infinite recursion: A recursion that doesn’t have a base case, or never reaches it. Eventually, an infinite recursion causes a runtime error."
},

{
    "location": "chap05.html#Exercises-1",
    "page": "Conditionals and recursion",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap05.html#Exercise-1-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 1",
    "category": "section",
    "text": "The function time returns the current Greenwich Mean Time in “the epoch”, which is an arbitrary time used as a reference point. On UNIX systems, the epoch is 1 January 1970.time()Write a script that reads the current time and converts it to a time of day in hours, minutes, and seconds, plus the number of days since the epoch."
},

{
    "location": "chap05.html#Exercise-2-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 2",
    "category": "section",
    "text": "Fermat’s Last Theorem says that there are no positive integers a, b, and c such thata^n + b^n = c^nfor any values of n greater than 2.Write a function named check_fermat that takes four parameters—a, b, c and n—and checks to see if Fermat’s theorem holds. If n is greater than 2 and a^n + b^n == c^n the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”\nWrite a function that prompts the user to input values for a, b, c and n, converts them to integers, and uses check_fermat to check whether they violate Fermat’s theorem."
},

{
    "location": "chap05.html#Exercise-3-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 3",
    "category": "section",
    "text": "If you are given three sticks, you may or may not be able to arrange them in a triangle. For example, if one of the sticks is 12 inches long and the other two are one inch long, you will not be able to get the short sticks to meet in the middle. For any three lengths, there is a simple test to see if it is possible to form a triangle:If any of the three lengths is greater than the sum of the other two, then you cannot form a triangle. Otherwise, you can. (If the sum of two lengths equals the third, they form what is called a “degenerate” triangle.)Write a function named is_triangle that takes three integers as arguments, and that prints either “Yes” or “No”, depending on whether you can or cannot form a triangle from sticks with the given lengths.\nWrite a function that prompts the user to input three stick lengths, converts them to integers, and uses is_triangle to check whether sticks with the given lengths can form a triangle."
},

{
    "location": "chap05.html#Exercise-4-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 4",
    "category": "section",
    "text": "What is the output of the following program? Draw a stack diagram that shows the state of the program when it prints the result.function recurse(n, s)\n    if n == 0\n        println(s)\n    else\n        recurse(n-1, n+s)\n    end\nend\n\nrecurse(3, 0)What would happen if you called this function like this: recurse(-1, 0)?\nWrite a docstring that explains everything someone would need to know in order to use this function (and nothing else).The following exercises use the Luxor module, described in Chapter 4:"
},

{
    "location": "chap05.html#Exercise-5-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5",
    "category": "section",
    "text": "Read the following function and see if you can figure out what it does (see the examples in Chapter 4). Then run it and see if you got it right.function draw(t, length, n)\n    if n == 0\n        return\n    end\n    angle = 50\n    Forward(t, length*n)\n    Turn(t, -angle)\n    draw(t, length, n-1)\n    Turn(t, 2*angle)\n    draw(t, length, n-1)\n    Turn(t, -angle)\n    Forward(-length*n)\nend"
},

{
    "location": "chap05.html#Exercise-6-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 6",
    "category": "section",
    "text": "using ThinkJulia\nfig05_2()<figure>\n  <img src=\"fig52.svg\" alt=\"A Koch curve.\">\n  <figcaption>Figure 5.2. A Koch curve.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig52}\n\\caption{A Koch curve.}\n\\label{fig52}\n\\end{figure}The Koch curve is a fractal that looks something like Figure 5.2. To draw a Koch curve with length x, all you have to do isDraw a Koch curve with length fracx3.\nTurn left 60 degrees.\nDraw a Koch curve with length fracx3.\nTurn right 120 degrees.\nDraw a Koch curve with length fracx3.\nTurn left 60 degrees.\nDraw a Koch curve with length fracx3.The exception is if x is less than 3: in that case, you can just draw a straight line with length x.Write a function called koch that takes a turtle and a length as parameters, and that uses the turtle to draw a Koch curve with the given length.\nWrite a function called snowflake that draws three Koch curves to make the outline of a snowflake.\nThe Koch curve can be generalized in several ways. See http://en.wikipedia.org/wiki/Koch_snowflake for examples and implement your favorite."
},

]}
