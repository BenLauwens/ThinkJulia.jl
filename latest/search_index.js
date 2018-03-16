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
    "text": "An assignment statement creates a new variable and gives it a value:message = \"And now for something completely different\"\nn = 17\nπ = 3.141592653589793This example makes three assignments. The first assigns a string to a new variable named message; the second gives the integer 17 to n; the third assigns the (approximate) value of pi to π.A common way to represent variables on paper is to write the name with an arrow pointing to its value. This kind of figure is called a state diagram because it shows what state each of the variables is in (think of it as the variable\'s state of mind). Figure 1 shows the result of the previous example.using TikzPictures\np = TikzPicture(L\"\"\"\n\\node[draw, fill=lightgray, minimum width=10cm, minimum height=1.5cm]{};\n\\node[anchor=east] (me) at(-3.5, 0.5) {\\tt message};\n\\node[anchor=west] (mev) at (-2.5, 0.5) {\\tt \"And now for something completely different\"};\n\\draw[-latex] (me) -- (mev);\n\\node[anchor=east] (n) at(-3.5, 0) {\\tt n};\n\\node[anchor=west] (nv) at (-2.5, 0) {\\tt 17};\n\\draw[-latex] (n) -- (nv);\n\\node[anchor=east] (pi) at(-3.5, -0.5) {\\tt π};\n\\node[anchor=west] (piv) at (-2.5, -0.5) {\\tt 3.141592653589793};\n\\draw[-latex] (pi) -- (piv);\n\"\"\"; options=\"\", preamble=\"\"\"\n  \\\\usepackage{fontspec}\n  \\\\setmonofont[Scale=MatchLowercase]{Ubuntu Mono}\n\"\"\")\n save(SVG(\"fig21\"), p)\n save(PDF(\"fig21\"), p)\n nothing<figure>\n  <img src=\"fig21.svg\" alt=\"State diagram.\" width=80%>\n  <figcaption>Figure 1. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig21}\n\\caption{State diagram.}\n\\label{fig21}\n\\end{figure}"
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
    "text": "An expression is a combination of values, variables, and operators. A value all by itself is considered an expression, and so is a variable, so the following are all legal expressions:n = 1742\nn\nn + 25When you type an expression at the prompt, the REPL evaluates it, which means that it finds the value of the expression. In this example, n has the value 17 and n + 25 has the value 42.A statement is a unit of code that has an effect, like creating a variable or displaying a value. n = 17\nprintln(n)The first line is an assignment statement that gives a value to n. The second line is a print statement that displays the value of n.When you type a statement, the REPL executes it, which means that it does whatever the statement says. In general, statements don\'t have values."
},

{
    "location": "chap02.html#Script-mode-1",
    "page": "Variables, expressions and statements",
    "title": "Script mode",
    "category": "section",
    "text": "So far we have run Julia in interactive mode, which means that you interact directly with the REPL. Interactive mode is a good way to get started, but if you are working with more than a few lines of code, it can be clumsy.The alternative is to save code in a file called a script and then run the REPL in script mode to execute the script. By convention, Julia scripts have names that end with .jl.If you know how to create and run a script on your computer, you are ready to go. Otherwise I recommend using JuliaBox again. Open a text file, write the script and save with a .jl extension. The script can be executed in a terminal with the command julia name_of_the_script.jl.Because Julia provides both modes, you can test bits of code in interactive mode before you put them in a script. But there are differences between interactive mode and script mode that can be confusing.For example, if you are using Julia as a calculator, you might typemiles = 26.2\nmiles * 1.61The first line assigns a value to miles, but it has no visible effect. The second line is an expression, so the REPL evaluates it and displays the result. It turns out that a marathon is about 42 kilometers.But if you type the same code into a script and run it, you get no output at all. In script mode an expression, all by itself, has no visible effect. Julia actually evaluates the expression, but it doesn\'t display the value unless you tell it to:miles = 26.2\nprint(miles * 1.61)This behavior can be confusing at first.A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.For example, the following script produces the outputprintln(1)\nx = 2\nprintln(x)The assignment statement produces no output.To check your understanding, type the following statements in the Julia REPL and see what they do:5\nx = 5\nx + 1Now put the same statements in a script and run it. What is the output? Modify the script by transforming each expression into a print statement and then run it again."
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
    "text": "In general, you can\'t perform mathematical operations on strings, even if the strings look like numbers, so the following are illegal:\"2\"-\"1\"    \"eggs\"/\"easy\"    \"third\"+\"a charm\"But there are two exceptions, * and ^.The * operator performs string concatenation, which means it joins the strings by linking them end-to-end. For example:first = \"throat\"\nsecond = \"warbler\"\nfirst * secondThe ^ operator also works on strings; it performs repetition. For example, \"Spam\"^3 is \"SpamSpamSpam\". If one of the values is a string, the other has to be an integer.This use of * and ^ makes sense by analogy with multiplication and exponentiation. Just as 4^3 is equivalent to 4*4*4, we expect \"Spam\"^3 to be the same as \"Spam\"*\"Spam\"*\"Spam\", and it is."
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
    "text": "We have already seen one example of a function call:typeof(42)The name of the function is typeof. The expression in parentheses is called the argument of the function. The result, for this function, is the type of the argument.It is common to say that a function “takes” an argument and “returns” a result. The result is also called the return value.Julia provides functions that convert values from one type to another. The parse function takes a string and converts it to an integer (or to any number type), if it can, or complains otherwise:parse(Int64, \"32\")\nparse(Int64, \"Hello\")trunc can convert floating-point values to integers, but it doesn’t round off; it chops off the fraction part:trunc(3.99999)\ntrunc(-2.3)float converts integers and strings to floating-point numbers:float(32)\nfloat(\"3.14159\")Finally, string converts its argument to a string:string(32)\nstring(3.14159)"
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
    "text": "So far, we have looked at the elements of a program—variables, expressions, and statements—in isolation, without talking about how to combine them.One of the most useful features of programming languages is their ability to take small building blocks and compose them. For example, the argument of a function can be any kind of expression, including arithmetic operators:degrees = 45x = sin(degrees / 360.0 * 2 * π)And even function calls:x = sin(45 / 360.0 * 2 * π)x = exp(log(x+1))Almost anywhere you can put a value, you can put an arbitrary expression, with one exception: the left side of an assignment statement has to be a variable name. Any other expression on the left side is a syntax error (we will see exceptions to this rule later).hours = 2minutes = hours * 60                 # right\nhours * 60 = minutes                 # wrong!"
},

{
    "location": "chap03.html#Adding-new-functions-1",
    "page": "Functions",
    "title": "Adding new functions",
    "category": "section",
    "text": "So far, we have only been using the functions that come with Julia, but it is also possible to add new functions. A function definition specifies the name of a new function and the sequence of statements that run when the function is called. Here is an example:function print_lyrics()\n    println(\"I\'m a lumberjack, and I\'m okay.\")\n    println(\"I sleep all night and I work all day.\")\nendfunction is a keyword that indicates that this is a function definition. The name of the function is print_lyrics. The rules for function names are the same as for variable names: they can contain almost all Unicode characters, but the first character can’t be a number. You can’t use a keyword as the name of a function, and you should avoid having a variable and a function with the same name.The empty parentheses after the name indicate that this function doesn’t take any arguments.The first line of the function definition is called the header; the rest is called the body. The body is terminated with the keyword end and it can contain any number of statements.The quotation marks must be “straight quotes”, usually located next to Enter on the keyboard. “Curly quotes”, like the ones in this sentence, are not legal in Julia.If you type a function definition in interactive mode, the REPL indents to let you know that the definition isn’t complete:julia> function print_lyrics()\n       println(\"I\'m a lumberjack, and I\'m okay.\")To end the function, you have to enter end.Defining a function creates a function object, which is of type Function:function print_lyrics()\nprintln(\"I\'m a lumberjack, and I\'m okay.\")\nprintln(\"I sleep all night and I work all day.\")\nendprint_lyrics isa FunctionThe syntax for calling the new function is the same as for built-in functions:print_lyrics()Once you have defined a function, you can use it inside another function. For example, to repeat the previous refrain, we could write a function called repeat_lyrics:function repeat_lyrics()\n    print_lyrics()\n    print_lyrics()\nendAnd then call repeat_lyrics:function print_lyrics()\nprintln(\"I\'m a lumberjack, and I\'m okay.\")\nprintln(\"I sleep all night and I work all day.\")\nend\nfunction repeat_lyrics()\nprint_lyrics()\nprint_lyrics()\nendrepeat_lyrics()But that’s not really how the song goes."
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
    "text": "When you create a variable inside a function, it is local, which means that it only exists inside the function. For example:function cat_twice(part1, part2)\n    concat = part1 * part2\n    print_twice(concat)\nendThis function takes two arguments, concatenates them, and prints the result twice. Here is an example that uses it:function print_twice(bruce)\n    println(bruce)\n    println(bruce)\nend\n\nfunction cat_twice(part1, part2)\n    concat = part1 * part2\n    print_twice(concat)\nendline1 = \"Bing tiddle \"\nline2 = \"tiddle bang.\"\ncat_twice(line1, line2)When cat_twice terminates, the variable concat is destroyed. If we try to print it, we get an exception:println(concat)Parameters are also local. For example, outside print_twice, there is no such thing as bruce."
},

{
    "location": "chap03.html#Stack-diagrams-1",
    "page": "Functions",
    "title": "Stack diagrams",
    "category": "section",
    "text": "To keep track of which variables can be used where, it is sometimes useful to draw a stack diagram. Like state diagrams, stack diagrams show the value of each variable, but they also show the function each variable belongs to.Each function is represented by a frame. A frame is a box with the name of a function beside it and the parameters and variables of the function inside it. The stack diagram for the previous example is shown in Figure 1.using TikzPictures\np = TikzPicture(L\"\"\"\n\\node[anchor=east] at(-3.7,0){\\tt \\_\\_main\\_\\_};\n\\node[draw, fill=lightgray, minimum width=7cm, minimum height=1cm]{};\n\\node[anchor=east] (l1) at(-2, 0.25) {\\tt line1};\n\\node[anchor=west] (l1v) at (-1, 0.25) {\\tt \"Bing tiddle \"};\n\\draw[-latex] (l1) -- (l1v);\n\\node[anchor=east] (l2) at(-2, -0.25) {\\tt line2};\n\\node[anchor=west] (l2v) at (-1, -0.25) {\\tt \"tiddle bang\"};\n\\draw[-latex] (l2) -- (l2v);\n\\node[anchor=east] at(-3.7,-1.5){\\tt cat\\_twice};\n\\node[draw, fill=lightgray, minimum width=7cm, minimum height=1.5cm] at(0,-1.5){};\n\\node[anchor=east] (p1) at(-2, -1) {\\tt part1};\n\\node[anchor=west] (p1v) at (-1, -1) {\\tt \"Bing tiddle \"};\n\\draw[-latex] (p1) -- (p1v);\n\\node[anchor=east] (p2) at(-2, -1.5) {\\tt part2};\n\\node[anchor=west] (p2v) at (-1, -1.5) {\\tt \"tiddle bang\"};\n\\draw[-latex] (p2) -- (p2v);\n\\node[anchor=east] (cc) at(-2, -2) {\\tt concat};\n\\node[anchor=west] (ccv) at (-1, -2) {\\tt \"Bing tiddle tiddle bang\"};\n\\draw[-latex] (cc) -- (ccv);\n\\node[anchor=east] at(-3.7,-2.75){\\tt print\\_twice};\n\\node[draw, fill=lightgray, minimum width=7cm, minimum height=0.5cm] at(0,-2.75){};\n\\node[anchor=east] (b) at(-2, -2.75) {\\tt bruce};\n\\node[anchor=west] (bv) at (-1, -2.75) {\\tt \"Bing tiddle tiddle bang\"};\n\\draw[-latex] (b) -- (bv);\n\"\"\"; options=\"\", preamble=\"\"\"\n  \\\\usepackage{fontspec}\n  \\\\setmonofont[Scale=MatchLowercase]{Ubuntu Mono}\n\"\"\")\n save(SVG(\"fig31\"), p)\n save(PDF(\"fig31\"), p)\n nothing<figure>\n  <img src=\"fig31.svg\" alt=\"Stack diagram.\" width=80%>\n  <figcaption>Figure 1. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig31}\n\\caption{Stack diagram.}\n\\label{fig31}\n\\end{figure}The frames are arranged in a stack that indicates which function called which, and so on. In this example, print_twice was called by cat_twice, and cat_twice was called by __main__, which is a special name for the topmost frame. When you create a variable outside of any function, it belongs to __main__.Each parameter refers to the same value as its corresponding argument. So, part1 has the same value as line1, part2 has the same value as line2, and bruce has the same value as concat.If an error occurs during a function call, Julia prints the name of the function, the name of the function that called it, and the name of the function that called that, all the way back to __main__.For example, if you try to access concat from within print_twice, you get a UndefVarError:ERROR: UndefVarError: concat not defined\nStacktrace:\n [1] print_twice at ./REPL[1]:2 [inlined]\n [2] cat_twice(::String, ::String) at ./REPL[2]:3This list of functions is called a traceback. It tells you what program file the error occurred in, and what line, and what functions were executing at the time. It also shows the line of code that caused the error.The order of the functions in the traceback is the inverse of the order of the frames in the stack diagram. The function that is currently running is at the top."
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

]}
