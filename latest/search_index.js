var documenterSearchIndex = {"docs": [

{
    "location": "chap00.html#",
    "page": "Preface",
    "title": "Preface",
    "category": "page",
    "text": "using ThinkJulia\nfig00_1()\\pagestyle{empty}\n\\begin{center}\n\\normalfont\\sffamily\\bfseries\n\\vspace*{\\stretch{3}}\n\n\\begin{minipage}{1.25cm}\n\\Huge Think\n\\end{minipage}\n\\begin{minipage}{1.25cm}\n\\includegraphics[scale=0.125]{fig01}\n\\end{minipage} \\\\\n\\vspace*{\\stretch{2}}\n\\Large HOW TO THINK LIKE A COMPUTER SCIENTISTS\\\\\n\\vspace*{\\stretch{3}}\n\\huge Ben Lauwens\\\\\n\\vspace*{\\stretch{1}}\n\\Large with Allen B. Downey\\\\\n\\vspace*{\\stretch{4}}\n\\end{center}\n\\clearpage<h1>\n<a class=\"nav-anchor\" id=\"Copyright-1\" href=\"#Copyright-1\">Copyright</a>\n</h1>Copyright ©2018 Allen Downey, Ben Lauwens.Permission is granted to copy, distribute, and/or modify this document under the terms of the Creative Commons Attribution-NonCommercial 3.0 Unported License, which is available at http://creativecommons.org/licenses/by-nc/3.0/.The Markdown source for this book is available from https://github.com/BenLauwens/ThinkJulia.jl\\frontmatter\n\\pagestyle{headings}\n\\tableofcontents*"
},

{
    "location": "chap00.html#Preface-1",
    "page": "Preface",
    "title": "Preface",
    "category": "section",
    "text": ""
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
    "text": "The goal of this book is to teach you to think like a computer scientist. This way of thinking combines some of the best features of mathematics, engineering, and natural science. Like mathematicians, computer scientists use formal languages to denote ideas (specifically computations). Like engineers, they design things, assembling components into systems and evaluating tradeoffs among alternatives. Like scientists, they observe the behavior of complex systems, form hypotheses, and test predictions.The single most important skill for a computer scientist is problem solving. Problem solving means the ability to formulate problems, think creatively about solutions, and express a solution clearly and accurately. As it turns out, the process of learning to program is an excellent opportunity to practice problem-solving skills. That’s why this chapter is called, “The way of the program”.On one level, you will be learning to program, a useful skill by itself. On another level, you will use programming as a means to an end. As we go along, that end will become clearer."
},

{
    "location": "chap01.html#What-is-a-program?-1",
    "page": "The way of the program",
    "title": "What is a program?",
    "category": "section",
    "text": "A program is a sequence of instructions that specifies how to perform a computation. The computation might be something mathematical, such as solving a system of equations or finding the roots of a polynomial, but it can also be a symbolic computation, such as searching and replacing text in a document or something graphical, like processing an image or playing a video.The details look different in different languages, but a few basic instructions appear in just about every language:input: Get data from the keyboard, a file, the network, or some other device.\noutput: Display data on the screen, save it in a file, send it over the network, etc.\nmath: Perform basic mathematical operations like addition and multiplication.\nconditional execution: Check for certain conditions and run the appropriate code.\nrepetition: Perform some action repeatedly, usually with some variation.Believe it or not, that’s pretty much all there is to it. Every program you’ve ever used, no matter how complicated, is made up of instructions that look pretty much like these. So you can think of programming as the process of breaking a large, complex task into smaller and smaller subtasks until the subtasks are simple enough to be performed with one of these basic instructions."
},

{
    "location": "chap01.html#Running-Julia-1",
    "page": "The way of the program",
    "title": "Running Julia",
    "category": "section",
    "text": "One of the challenges of getting started with Julia is that you might have to install Julia and related software on your computer. If you are familiar with your operating system, and especially if you are comfortable with the command-line interface, you will have no trouble installing Julia. But for beginners, it can be painful to learn about system administration and programming at the same time.To avoid that problem, I recommend that you start out running Julia in a browser. Later, when you are comfortable with Julia, I’ll make suggestions for installing Julia on your computer.In the browser you can run Julia on JuliaBox: https://www.juliabox.com. No installation is required – just point your browser there, login and start computing.The Julia REPL (Read–Eval–Print Loop) is a program that reads and executes Julia code. You might start the REPL by opening a terminal on JuliaBox and typing julia on the command line. When it starts, you should see output like this:Base.banner() # hide\\begin{minted}{jlcon}\njulia>\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt;</code></pre>The first lines contain information about the REPL and the operating system it’s running on, so it might be different for you. But you should check that the version number is at least v0.x.The last line is a prompt that indicates that the REPL is ready for you to enter code. If you type a line of code and hit ENTER, the REPL displays the result:julia> 1 + 1\n2Now you’re ready to get started. From here on, I assume that you know how to start the Julia REPL and run code."
},

{
    "location": "chap01.html#The-first-program-1",
    "page": "The way of the program",
    "title": "The first program",
    "category": "section",
    "text": "Traditionally, the first program you write in a new language is called “Hello, World!” because all it does is display the words “Hello, World!”. In Julia, it looks like this:julia> println(\"Hello, World!\")\nHello, World!This is an example of a print statement, although it doesn’t actually print anything on paper. It displays a result on the screen.The quotation marks in the program mark the beginning and end of the text to be displayed; they don’t appear in the result.The parentheses indicate that println is a function. We’ll get to functions in Chapter 3 Functions."
},

{
    "location": "chap01.html#Arithmetic-operators-1",
    "page": "The way of the program",
    "title": "Arithmetic operators",
    "category": "section",
    "text": "After “Hello, World!”, the next step is arithmetic. Julia provides operators, which are special symbols that represent computations like addition and multiplication.The operators +, -, and * perform addition, subtraction, and multiplication, as in the following examples:julia> 40 + 2\n42\njulia> 43 - 1\n42\njulia> 6 * 7\n42The operator / performs division:julia> 84 / 2\n42.0You might wonder why the result is 42.0 instead of 42. I’ll explain in the next section.Finally, the operator ^ performs exponentiation; that is, it raises a number to a power:julia> 6^2 + 6\n42"
},

{
    "location": "chap01.html#Values-and-types-1",
    "page": "The way of the program",
    "title": "Values and types",
    "category": "section",
    "text": "A value is one of the basic things a program works with, like a letter or a number. Some values we have seen so far are 2, 42.0, and \"Hello, World!\".These values belong to different types: 2 is an integer, 42.0 is a floating-point number, and \"Hello, World!\" is a string, so-called because the letters it contains are strung together.If you are not sure what type a value has, the REPL can tell you:julia> typeof(2)\nInt64\njulia> typeof(42.0)\nFloat64\njulia> typeof(\"Hello, World!\")\nStringNot surprisingly, integers belong to the type Int64, strings belong to String and floating-point numbers belong to Float64.What about values like \"2\" and \"42.0\"? They look like numbers, but they are in quotation marks like strings.julia> typeof(\"2\")\nString\njulia> typeof(\"42.0\")\nStringThey’re strings.When you type a large integer, you might be tempted to use commas between groups of digits, as in 1,000,000. This is not a legal integer in Julia, but it is legal:julia> 1,000,000\n(1, 0, 0)That’s not what we expected at all! Julia parses 1,000,000 as a comma-separated sequence of integers. We’ll learn more about this kind of sequence later."
},

{
    "location": "chap01.html#Formal-and-natural-languages-1",
    "page": "The way of the program",
    "title": "Formal and natural languages",
    "category": "section",
    "text": "Natural languages are the languages people speak, such as English, Spanish, and French. They were not designed by people (although people try to impose some order on them); they evolved naturally.Formal languages are languages that are designed by people for specific applications. For example, the notation that mathematicians use is a formal language that is particularly good at denoting relationships among numbers and symbols. Chemists use a formal language to represent the chemical structure of molecules. And most importantly:Programming languages are formal languages that have been designed to express computations.Formal languages tend to have strict syntax rules that govern the structure of statements. For example, in mathematics the statement 3 + 3 = 6 has correct syntax, but 3 + = 3  6 does not. In chemistry H_2O is a syntactically correct formula, but _2Zz is not.Syntax rules come in two flavors, pertaining to tokens and structure. Tokens are the basic elements of the language, such as words, numbers, and chemical elements. One of the problems with 3 += 3  6 is that  is not a legal token in mathematics (at least as far as I know). Similarly, _2Zz is not legal because there is no element with the abbreviation Zz.The second type of syntax rule pertains to the way tokens are combined. The equation 3 += 3 is illegal because even though + and = are legal tokens, you can’t have one right after the other. Similarly, in a chemical formula the subscript comes after the element name, not before.This is @ well-structured Engli$h sentence with invalid t*kens in it. This sentence all valid tokens has, but invalid structure with.When you read a sentence in English or a statement in a formal language, you have to figure out the structure (although in a natural language you do this subconsciously). This process is called parsing.Although formal and natural languages have many features in common—tokens, structure, and syntax—there are some differences:ambiguity: Natural languages are full of ambiguity, which people deal with by using contextual clues and other information. Formal languages are designed to be nearly or completely unambiguous, which means that any statement has exactly one meaning, regardless of context.\nredundancy: In order to make up for ambiguity and reduce misunderstandings, natural languages employ lots of redundancy. As a result, they are often verbose. Formal languages are less redundant and more concise.\nliteralness: Natural languages are full of idiom and metaphor. If I say, “The penny dropped”, there is probably no penny and nothing dropping (this idiom means that someone understood something after a period of confusion). Formal languages mean exactly what they say.Because we all grow up speaking natural languages, it is sometimes hard to adjust to formal languages. The difference between formal and natural language is like the difference between poetry and prose, but more so:Poetry: Words are used for their sounds as well as for their meaning, and the whole poem together creates an effect or emotional response. Ambiguity is not only common but often deliberate.\nProse: The literal meaning of words is more important, and the structure contributes more meaning. Prose is more amenable to analysis than poetry but still often ambiguous.\nPrograms: The meaning of a computer program is unambiguous and literal, and can be understood entirely by analysis of the tokens and structure.Formal languages are more dense than natural languages, so it takes longer to read them. Also, the structure is important, so it is not always best to read from top to bottom, left to right. Instead, learn to parse the program in your head, identifying the tokens and interpreting the structure. Finally, the details matter. Small errors in spelling and punctuation, which you can get away with in natural languages, can make a big difference in a formal language."
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
    "text": "problem solving: The process of formulating a problem, finding a solution, and expressing it.high-level language: A programming language like Julia that is designed to be easy for humans to read and write.low-level language: A programming language that is designed to be easy for a computer to run; also called “machine language” or “assembly language”.portability: A property of a program that can run on more than one kind of computer.REPL: A program that reads another program and executes it.prompt: Characters displayed by the REPL to indicate that it is ready to take input from the user.program: A sequence of instructions that specifies a computation.print statement: An instruction that causes the Julia REPL to display a value on the screen.operator: A special symbol that represents a simple computation like addition, multiplication, or string concatenation.value: One of the basic units of data, like a number or string, that a program manipulates.type: A category of values. The types we have seen so far are integers (Int64), floating-point numbers (Float64), and strings (String).integer: A type that represents whole numbers.floating-point: A type that represents numbers with fractional parts.string: A type that represents sequences of characters.natural language: Any one of the languages that people speak that evolved naturally.formal language: Any one of the languages that people have designed for specific purposes, such as representing mathematical ideas or computer programs; all programming languages are formal languages.token: One of the basic elements of the syntactic structure of a program, analogous to a word in a natural language.syntax: The rules that govern the structure of a program.parse: To examine a program and analyze the syntactic structure.bug: An error in a program.debugging: The process of finding and correcting bugs."
},

{
    "location": "chap01.html#Exercises-1",
    "page": "The way of the program",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap01.html#Exercise-1-1-1",
    "page": "The way of the program",
    "title": "Exercise 1-1",
    "category": "section",
    "text": "It is a good idea to read this book in front of a computer so you can try out the examples as you go.Whenever you are experimenting with a new feature, you should try to make mistakes. For example, in the “Hello, World!” program, what happens if you leave out one of the quotation marks? What if you leave out both? What if you spell println wrong?This kind of experiment helps you remember what you read; it also helps when you are programming, because you get to know what the error messages mean. It is better to make mistakes now and on purpose than later and accidentally.In a print statement, what happens if you leave out one of the parentheses, or both?\nIf you are trying to print a string, what happens if you leave out one of the quotation marks, or both?\nYou can use a minus sign to make a negative number like -2. What happens if you put a plus sign before a number? What about 2++2?\nIn math notation, leading zeros are ok, as in 02. What happens if you try this in Julia?\nWhat happens if you have two values with no operator between them?"
},

{
    "location": "chap01.html#Exercise-1-2-1",
    "page": "The way of the program",
    "title": "Exercise 1-2",
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
    "text": "An assignment statement creates a new variable and gives it a value:julia> message = \"And now for something completely different\"\n\"And now for something completely different\"\njulia> n = 17\n17\njulia> π = 3.141592653589793\n3.141592653589793This example makes three assignments. The first assigns a string to a new variable named message; the second gives the integer 17 to n; the third assigns the (approximate) value of pi to π.A common way to represent variables on paper is to write the name with an arrow pointing to its value. This kind of figure is called a state diagram because it shows what state each of the variables is in (think of it as the variable’s state of mind). Figure 2.1 shows the result of the previous example.using ThinkJulia\nfig02_1()<figure>\n  <img src=\"fig21.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 2.1. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig21}\n\\caption{State diagram.}\n\\label{fig21}\n\\end{figure}"
},

{
    "location": "chap02.html#Variable-names-1",
    "page": "Variables, expressions and statements",
    "title": "Variable names",
    "category": "section",
    "text": "Programmers generally choose names for their variables that are meaningful—they document what the variable is used for.Variable names can be as long as you like. They can contain almost all Unicode characters, but they can’t begin with a number. It is legal to use uppercase letters, but it is conventional to use only lower case for variables names.The underscore character, _, can appear in a name. It is often used in names with multiple words, such as your_name or airspeed_of_unladen_swallow.If you give a variable an illegal name, you get a syntax error:\\begin{minted}{jlcon}\njulia> 76trombones = \"big parade\"\nERROR: syntax: \"76\" is not a valid function argument name\njulia> more@ = 1000000\nERROR: syntax: unexpected \"=\"\njulia> type = \"Advanced Theoretical Zymurgy\"\nERROR: syntax: unexpected \"=\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; 76trombones = &quot;big parade&quot;\nERROR: syntax: \"76\" is not a valid function argument name\njulia&gt; more@ = 1000000\nERROR: syntax: unexpected \"=\"\njulia&gt; type = &quot;Advanced Theoretical Zymurgy&quot;\nERROR: syntax: unexpected \"=\"</code></pre>76trombones is illegal because it begins with a number. more@ is illegal because it contains an illegal character, @. But what’s wrong with type?It turns out that type is one of Julia’s keywords. The REPL uses keywords to recognize the structure of the program, and they cannot be used as variable names.Julia has these keywords:abstract    baremodule   begin      break       catch\nccall       const        continue   do          else\nelseif      end          export     finally     for\nfunction    global       if         import      importall\nlet         local        macro      module      mutable\nprimitive   quote        return     try         type\nusing       struct       whileYou don’t have to memorize this list. In most development environments, keywords are displayed in a different color; if you try to use one as a variable name, you’ll know."
},

{
    "location": "chap02.html#Expressions-and-statements-1",
    "page": "Variables, expressions and statements",
    "title": "Expressions and statements",
    "category": "section",
    "text": "An expression is a combination of values, variables, and operators. A value all by itself is considered an expression, and so is a variable, so the following are all legal expressions:julia> 42\n42\njulia> n\n17\njulia> n + 25\n42When you type an expression at the prompt, the REPL evaluates it, which means that it finds the value of the expression. In this example, n has the value 17 and n + 25 has the value 42.A statement is a unit of code that has an effect, like creating a variable or displaying a value.julia> n = 17\n17\njulia> println(n)\n17The first line is an assignment statement that gives a value to n. The second line is a print statement that displays the value of n.When you type a statement, the REPL executes it, which means that it does whatever the statement says. In general, statements don’t have values."
},

{
    "location": "chap02.html#Script-mode-1",
    "page": "Variables, expressions and statements",
    "title": "Script mode",
    "category": "section",
    "text": "So far we have run Julia in interactive mode, which means that you interact directly with the REPL. Interactive mode is a good way to get started, but if you are working with more than a few lines of code, it can be clumsy.The alternative is to save code in a file called a script and then run the REPL in script mode to execute the script. By convention, Julia scripts have names that end with .jl.If you know how to create and run a script on your computer, you are ready to go. Otherwise I recommend using JuliaBox again. Open a text file, write the script and save with a .jl extension. The script can be executed in a terminal with the command julia name_of_the_script.jl.Because Julia provides both modes, you can test bits of code in interactive mode before you put them in a script. But there are differences between interactive mode and script mode that can be confusing.For example, if you are using Julia as a calculator, you might typejulia> miles = 26.2\n26.2\njulia> miles * 1.61\n42.182The first line assigns a value to miles, but it has no visible effect. The second line is an expression, so the REPL evaluates it and displays the result. It turns out that a marathon is about 42 kilometers.But if you type the same code into a script and run it, you get no output at all. In script mode an expression, all by itself, has no visible effect. Julia actually evaluates the expression, but it doesn’t display the value unless you tell it to:miles = 26.2\nprintln(miles * 1.61)This behavior can be confusing at first.A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.For example, the scriptprintln(1)\nx = 2\nprintln(x)produces the outputprintln(1) # hide\nx = 2      # hide\nprintln(x) # hideThe assignment statement produces no output.To check your understanding, type the following statements in the Julia REPL and see what they do:5\nx = 5\nx + 1Now put the same statements in a script and run it. What is the output? Modify the script by transforming each expression into a print statement and then run it again."
},

{
    "location": "chap02.html#Order-of-operations-1",
    "page": "Variables, expressions and statements",
    "title": "Order of operations",
    "category": "section",
    "text": "When an expression contains more than one operator, the order of evaluation depends on the order of operations. For mathematical operators, Julia follows mathematical convention. The acronym PEMDAS is a useful way to remember the rules:Parentheses have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated first, 2 * (3-1) is 4, and (1+1)^(5-2) is 8. You can also use parentheses to make an expression easier to read, as in (minute * 100) / 60, even if it doesn’t change the result.\nExponentiation has the next highest precedence, so 1+2^3 is 9, not 27, and 2*3^2 is 18, not 36.\nMultiplication and Division have higher precedence than Addition and Subtraction. So 2*3-1 is 5, not 4, and 6+4/2 is 8, not 5.\nOperators with the same precedence are evaluated from left to right (except exponentiation). So in the expression degrees / 2 * π, the division happens first and the result is multiplied by π. To divide by 2pi, you can use parentheses or write degrees / 2 / π.I don’t work very hard to remember the precedence of operators. If I can’t tell by looking at the expression, I use parentheses to make it obvious.Unicode characters that can be entered via tab completion of LaTeX-like abbreviations in the Julia REPL."
},

{
    "location": "chap02.html#String-operations-1",
    "page": "Variables, expressions and statements",
    "title": "String operations",
    "category": "section",
    "text": "In general, you can’t perform mathematical operations on strings, even if the strings look like numbers, so the following are illegal:\"2\" - \"1\"    \"eggs\" / \"easy\"    \"third\" + \"a charm\"But there are two exceptions, * and ^.The * operator performs string concatenation, which means it joins the strings by linking them end-to-end. For example:julia> first = \"throat\"\n\"throat\"\njulia> second = \"warbler\"\n\"warbler\"\njulia> first * second\n\"throatwarbler\"The ^ operator also works on strings; it performs repetition. For example, \"Spam\"^3 is \"SpamSpamSpam\". If one of the values is a string, the other has to be an integer.This use of * and ^ makes sense by analogy with multiplication and exponentiation. Just as 4^3 is equivalent to 4*4*4, we expect \"Spam\"^3 to be the same as \"Spam\"*\"Spam\"*\"Spam\", and it is."
},

{
    "location": "chap02.html#Comments-1",
    "page": "Variables, expressions and statements",
    "title": "Comments",
    "category": "section",
    "text": "As programs get bigger and more complicated, they get more difficult to read. Formal languages are dense, and it is often difficult to look at a piece of code and figure out what it is doing, or why.For this reason, it is a good idea to add notes to your programs to explain in natural language what the program is doing. These notes are called comments, and they start with the # symbol:# compute the percentage of the hour that has elapsed\npercentage = (minute * 100) / 60In this case, the comment appears on a line by itself. You can also put comments at the end of a line:percentage = (minute * 100) / 60   # percentage of an hourEverything from the # to the end of the line is ignored—it has no effect on the execution of the program.Comments are most useful when they document non-obvious features of the code. It is reasonable to assume that the reader can figure out what the code does; it is more useful to explain why.This comment is redundant with the code and useless:v = 5   # assign 5 to vThis comment contains useful information that is not in the code:v = 5   # velocity in meters/second.Good variable names can reduce the need for comments, but long names can make complex expressions hard to read, so there is a tradeoff."
},

{
    "location": "chap02.html#Debugging-1",
    "page": "Variables, expressions and statements",
    "title": "Debugging",
    "category": "section",
    "text": "Three kinds of errors can occur in a program: syntax errors, runtime errors, and semantic errors. It is useful to distinguish between them in order to track them down more quickly.Syntax error: “Syntax” refers to the structure of a program and the rules about that structure. For example, parentheses have to come in matching pairs, so (1 + 2) is legal, but 8) is a syntax error.\nIf there is a syntax error anywhere in your program, Julia displays an error message and quits, and you will not be able to run the program. During the first few weeks of your programming career, you might spend a lot of time tracking down syntax errors. As you gain experience, you will make fewer errors and find them faster.\nRuntime error: The second type of error is a runtime error, so called because the error does not appear until after the program has started running. These errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened.\nRuntime errors are rare in the simple programs you will see in the first few chapters, so it might be a while before you encounter one.\nSemantic error: The third type of error is “semantic”, which means related to meaning. If there is a semantic error in your program, it will run without generating error messages, but it will not do the right thing. It will do something else. Specifically, it will do what you told it to do.\nIdentifying semantic errors can be tricky because it requires you to work backward by looking at the output of the program and trying to figure out what it is doing."
},

{
    "location": "chap02.html#Glossary-1",
    "page": "Variables, expressions and statements",
    "title": "Glossary",
    "category": "section",
    "text": "variable: A name that refers to a value.assignment: A statement that assigns a value to a variablestate diagram: A graphical representation of a set of variables and the values they refer to.keyword: A reserved word that is used to parse a program; you cannot use keywords like if, function, and while as variable names.operand: One of the values on which an operator operates.expression: A combination of variables, operators, and values that represents a single result.evaluate: To simplify an expression by performing the operations in order to yield a single value.statement: A section of code that represents a command or action. So far, the statements we have seen are assignments and print statements.execute: To run a statement and do what it says.interactive mode: A way of using the Julia REPL by typing code at the prompt.script mode: A way of using the Julia REPL to read code from a script and run it.script: A program stored in a file.order of operations: Rules governing the order in which expressions involving multiple operators and operands are evaluated.concatenate: To join two operands end-to-end.comment: Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.syntax error: An error in a program that makes it impossible to parse (and therefore impossible to interpret).exception: An error that is detected while the program is running.semantics: The meaning of a program.semantic error: An error in a program that makes it do something other than what the programmer intended."
},

{
    "location": "chap02.html#Exercises-1",
    "page": "Variables, expressions and statements",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap02.html#Exercise-2-1-1",
    "page": "Variables, expressions and statements",
    "title": "Exercise 2-1",
    "category": "section",
    "text": "Repeating my advice from the previous chapter, whenever you learn a new feature, you should try it out in interactive mode and make errors on purpose to see what goes wrong.We’ve seen that n = 42 is legal. What about 42 = n?\nHow about x = y = 1?\nIn some languages every statement ends with a semi-colon, ;. What happens if you put a semi-colon at the end of a Julia statement?\nWhat if you put a period at the end of a statement?\nIn math notation you can multiply x and y like this: x y. What happens if you try that in Julia?"
},

{
    "location": "chap02.html#Exercise-2-2-1",
    "page": "Variables, expressions and statements",
    "title": "Exercise 2-2",
    "category": "section",
    "text": "Practice using the Julia REPL as a calculator:The volume of a sphere with radius r is frac43 pi r^3. What is the volume of a sphere with radius 5?\nSuppose the cover price of a book is € 24.95, but bookstores get a 40 % discount. Shipping costs € 3 for the first copy and 75 cents for each additional copy. What is the total wholesale cost for 60 copies?\nIf I leave my house at 6:52 am and run 1 mile at an easy pace (8:15 per mile), then 3 miles at tempo (7:12 per mile) and 1 mile at easy pace again, what time do I get home for breakfast?"
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
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendIn the context of programming, a function is a named sequence of statements that performs a computation. When you define a function, you specify the name and the sequence of statements. Later, you can “call” the function by name."
},

{
    "location": "chap03.html#Function-calls-1",
    "page": "Functions",
    "title": "Function calls",
    "category": "section",
    "text": "We have already seen one example of a function call:julia> typeof(42)\nInt64The name of the function is typeof. The expression in parentheses is called the argument of the function. The result, for this function, is the type of the argument.It is common to say that a function “takes” an argument and “returns” a result. The result is also called the return value.Julia provides functions that convert values from one type to another. The parse function takes a string and converts it to any number type, if it can, or complains otherwise:julia> parse(Int64, \"32\")\n32\njulia> parse(Float64, \"3.14159\")\n3.14159\njulia> parse(Int64, \"Hello\")\nERROR: ArgumentError: invalid base 10 digit \'H\' in \"Hello\"trunc can convert floating-point values to integers, but it doesn’t round off; it chops off the fraction part:julia> trunc(Int64, 3.99999)\n3\njulia> trunc(Int64, -2.3)\n-2float converts integers to floating-point numbers:julia> float(32)\n32.0Finally, string converts its argument to a string:julia> string(32)\n\"32\"\njulia> string(3.14159)\n\"3.14159\""
},

{
    "location": "chap03.html#Math-functions-1",
    "page": "Functions",
    "title": "Math functions",
    "category": "section",
    "text": "In Julia,  most of the familiar mathematical functions are directly available:ratio = signal_power / noise_power\ndecibels = 10 * log10(ratio)radians = 0.7\nheight = sin(radians)The first example uses log10 to compute a signal-to-noise ratio in decibels (assuming that signal_power and noise_power are defined). log, which computes logarithms base e, is also provided.The second example finds the sine of radians. The name of the variable is a hint that sin and the other trigonometric functions (cos, tan, etc.) take arguments in radians. To convert from degrees to radians, divide by 180 and multiply by pi:julia> degrees = 45\n45\njulia> radians = degrees / 180 * π\n0.7853981633974483\njulia> sin(radians)\n0.7071067811865475The value of the variable π is a floating-point approximation of pi, accurate to about 21 digits.If you know trigonometry, you can check the previous result by comparing it to the square root of two divided by two:julia> sqrt(2) / 2\n0.7071067811865476"
},

{
    "location": "chap03.html#Composition-1",
    "page": "Functions",
    "title": "Composition",
    "category": "section",
    "text": "So far, we have looked at the elements of a program—variables, expressions, and statements—in isolation, without talking about how to combine them.One of the most useful features of programming languages is their ability to take small building blocks and compose them. For example, the argument of a function can be any kind of expression, including arithmetic operators:x = sin(degrees / 360 * 2 * π)And even function calls:x = exp(log(x+1))Almost anywhere you can put a value, you can put an arbitrary expression, with one exception: the left side of an assignment statement has to be a variable name. Any other expression on the left side is a syntax error (we will see exceptions to this rule later).hours = 2julia> minutes = hours * 60 # right\n120\njulia> hours * 60 = minutes # wrong!\nERROR: syntax: \"60\" is not a valid function argument name"
},

{
    "location": "chap03.html#Adding-new-functions-1",
    "page": "Functions",
    "title": "Adding new functions",
    "category": "section",
    "text": "So far, we have only been using the functions that come with Julia, but it is also possible to add new functions. A function definition specifies the name of a new function and the sequence of statements that run when the function is called. Here is an example:function printlyrics()\n    println(\"I\'m a lumberjack, and I\'m okay.\")\n    println(\"I sleep all night and I work all day.\")\nendfunction is a keyword that indicates that this is a function definition. The name of the function is printlyrics. The rules for function names are the same as for variable names: they can contain almost all Unicode characters, but the first character can’t be a number. You can’t use a keyword as the name of a function, and you should avoid having a variable and a function with the same name.The empty parentheses after the name indicate that this function doesn’t take any arguments.The first line of the function definition is called the header; the rest is called the body. The body is terminated with the keyword end and it can contain any number of statements.The quotation marks must be “straight quotes”, usually located next to Enter on the keyboard. “Curly quotes”, like the ones in this sentence, are not legal in Julia.If you type a function definition in interactive mode, the REPL indents to let you know that the definition isn’t complete:\\begin{minted}{jlcon}\njulia> function printlyrics()\n       println(\"I\'m a lumberjack, and I\'m okay.\")\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; function printlyrics()\n       println(\"I\'m a lumberjack, and I\'m okay.\")</code></pre>To end the function, you have to enter end.Defining a function creates a function object, which is of type Function:julia> printlyrics isa Function\ntrueThe syntax for calling the new function is the same as for built-in functions:julia> printlyrics()\nI\'m a lumberjack, and I\'m okay.\nI sleep all night and I work all day.Once you have defined a function, you can use it inside another function. For example, to repeat the previous refrain, we could write a function called repeatlyrics:function repeatlyrics()\n    printlyrics()\n    printlyrics()\nendAnd then call repeatlyrics:julia> repeatlyrics()\nI\'m a lumberjack, and I\'m okay.\nI sleep all night and I work all day.\nI\'m a lumberjack, and I\'m okay.\nI sleep all night and I work all day.But that’s not really how the song goes."
},

{
    "location": "chap03.html#Definitions-and-uses-1",
    "page": "Functions",
    "title": "Definitions and uses",
    "category": "section",
    "text": "Pulling together the code fragments from the previous section, the whole program looks like this:function printlyrics()\n    println(\"I\'m a lumberjack, and I\'m okay.\")\n    println(\"I sleep all night and I work all day.\")\nend\n\nfunction repeatlyrics()\n    printlyrics()\n    printlyrics()\nend\n\nrepeatlyrics()This program contains two function definitions: printlyrics and repeatlyrics. Function definitions get executed just like other statements, but the effect is to create function objects. The statements inside the function do not run until the function is called, and the function definition generates no output.As you might expect, you have to create a function before you can run it. In other words, the function definition has to run before the function gets called.As an exercise, move the last line of this program to the top, so the function call appears before the definitions. Run the program and see what error message you get.Now move the function call back to the bottom and move the definition of printlyrics after the definition of repeatlyrics. What happens when you run this program?"
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
    "text": "Some of the functions we have seen require arguments. For example, when you call sin you pass a number as an argument. Some functions take more than one argument: parse takes two, a number type and a string.Inside the function, the arguments are assigned to variables called parameters. Here is a definition for a function that takes an argument:function printtwice(bruce)\n    println(bruce)\n    println(bruce)\nendThis function assigns the argument to a parameter named bruce. When the function is called, it prints the value of the parameter (whatever it is) twice.This function works with any value that can be printed.julia> printtwice(\"Spam\")\nSpam\nSpam\njulia> printtwice(42)\n42\n42\njulia> printtwice(π)\nπ = 3.1415926535897...\nπ = 3.1415926535897...The same rules of composition that apply to built-in functions also apply to programmer-defined functions, so we can use any kind of expression as an argument for printtwice:julia> printtwice(\"Spam \"^4)\nSpam Spam Spam Spam\nSpam Spam Spam SpamThe argument is evaluated before the function is called, so in the examples the expressions \"Spam \"^4 and cos(π) are only evaluated once.You can also use a variable as an argument:julia> michael = \"Eric, the half a bee.\"\n\"Eric, the half a bee.\"\njulia> printtwice(michael)\nEric, the half a bee.\nEric, the half a bee.The name of the variable we pass as an argument (michael) has nothing to do with the name of the parameter (bruce). It doesn’t matter what the value was called back home (in the caller); here in printtwice, we call everybody bruce."
},

{
    "location": "chap03.html#Variables-and-parameters-are-local-1",
    "page": "Functions",
    "title": "Variables and parameters are local",
    "category": "section",
    "text": "When you create a variable inside a function, it is local, which means that it only exists inside the function. For example:function cattwice(part1, part2)\n    concat = part1 * part2\n    printtwice(concat)\nendThis function takes two arguments, concatenates them, and prints the result twice. Here is an example that uses it:julia> line1 = \"Bing tiddle \"\n\"Bing tiddle \"\njulia> line2 = \"tiddle bang.\"\n\"tiddle bang.\"\njulia> cattwice(line1, line2)\nBing tiddle tiddle bang.\nBing tiddle tiddle bang.When cattwice terminates, the variable concat is destroyed. If we try to print it, we get an exception:julia> println(concat)\nERROR: UndefVarError: concat not definedParameters are also local. For example, outside printtwice, there is no such thing as bruce."
},

{
    "location": "chap03.html#Stack-diagrams-1",
    "page": "Functions",
    "title": "Stack diagrams",
    "category": "section",
    "text": "To keep track of which variables can be used where, it is sometimes useful to draw a stack diagram. Like state diagrams, stack diagrams show the value of each variable, but they also show the function each variable belongs to.Each function is represented by a frame. A frame is a box with the name of a function beside it and the parameters and variables of the function inside it. The stack diagram for the previous example is shown in Figure 3.1.using ThinkJulia\nfig03_1()<figure>\n  <img src=\"fig31.svg\" alt=\"Stack diagram.\">\n  <figcaption>Figure 3.1. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig31}\n\\caption{Stack diagram.}\n\\label{fig31}\n\\end{figure}The frames are arranged in a stack that indicates which function called which, and so on. In this example, printtwice was called by cattwice, and cattwice was called by __main__, which is a special name for the topmost frame. When you create a variable outside of any function, it belongs to __main__.Each parameter refers to the same value as its corresponding argument. So, part1 has the same value as line1, part2 has the same value as line2, and bruce has the same value as concat.If an error occurs during a function call, Julia prints the name of the function, the name of the function that called it, and the name of the function that called that, all the way back to __main__.For example, if you try to access concat from within printtwice, you get a UndefVarError:ERROR: UndefVarError: concat not defined\nStacktrace:\n [1] printtwice at ./REPL[1]:2 [inlined]\n [2] cattwice(::String, ::String) at ./REPL[2]:3This list of functions is called a traceback. It tells you what program file the error occurred in, and what line, and what functions were executing at the time. It also shows the line of code that caused the error.The order of the functions in the traceback is the inverse of the order of the frames in the stack diagram. The function that is currently running is at the top."
},

{
    "location": "chap03.html#Fruitful-functions-and-void-functions-1",
    "page": "Functions",
    "title": "Fruitful functions and void functions",
    "category": "section",
    "text": "Some of the functions we have used, such as the math functions, return results; for lack of a better name, I call them fruitful functions. Other functions, like printtwice, perform an action but don’t return a value. They are called void functions.When you call a fruitful function, you almost always want to do something with the result; for example, you might assign it to a variable or use it as part of an expression:x = cos(radians)\ngolden = (sqrt(5) + 1) / 2When you call a function in interactive mode, Julia displays the result:julia> sqrt(5)\n2.23606797749979But in a script, if you call a fruitful function all by itself, the return value is lost forever!sqrt(5)This script computes the square root of 5, but since it doesn’t store or display the result, it is not very useful.Void functions might display something on the screen or have some other effect, but they don’t have a return value. If you assign the result to a variable, you get a special value called nothing.julia> result = printtwice(\"Bing\")\nBing\nBing\njulia> println(result)\nnothingThe value nothing is not the same as the string \"nothing\". It is a special value that has its own type:julia> typeof(nothing) # Nothing in Julia v0.7\nVoidThe functions we have written so far are all void. We will start writing fruitful functions in a few chapters."
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
    "text": "One of the most important skills you will acquire is debugging. Although it can be frustrating, debugging is one of the most intellectually rich, challenging, and interesting parts of programming.In some ways debugging is like detective work. You are confronted with clues and you have to infer the processes and events that led to the results you see.Debugging is also like an experimental science. Once you have an idea about what is going wrong, you modify your program and try again. If your hypothesis was correct, you can predict the result of the modification, and you take a step closer to a working program. If your hypothesis was wrong, you have to come up with a new one. As Sherlock Holmes pointed out, “When you have eliminated the impossible, whatever remains, however improbable, must be the truth.” (A. Conan Doyle, The Sign of Four)For some people, programming and debugging are the same thing. That is, programming is the process of gradually debugging a program until it does what you want. The idea is that you should start with a working program and make small modifications, debugging them as you go.For example, Linux is an operating system that contains millions of lines of code, but it started out as a simple program Linus Torvalds used to explore the Intel 80386 chip. According to Larry Greenfield, “One of Linus’s earlier projects was a program that would switch between printing “AAAA and “BBBB”. This later evolved to Linux.” (The Linux Users’ Guide Beta Version 1)."
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
    "location": "chap03.html#Exercise-3-1-1",
    "page": "Functions",
    "title": "Exercise 3-1",
    "category": "section",
    "text": "Write a function named rightjustify that takes a string named s as a parameter and prints the string with enough leading spaces so that the last letter of the string is in column 70 of the display.using ThinkJuliarightjustify(\"monty\")Hint: Use string concatenation and repetition. Also, Julia provides a built-in function called length that returns the length of a string, so the value of length(\"monty\") is 5."
},

{
    "location": "chap03.html#Exercise-3-2-1",
    "page": "Functions",
    "title": "Exercise 3-2",
    "category": "section",
    "text": "A function object is a value you can assign to a variable or pass as an argument. For example, dotwice is a function that takes a function object as an argument and calls it twice:function dotwice(f)\n    f()\n    f()\nendHere’s an example that uses dotwice to call a function named print_spam twice.function print_spam()\n    println(\"spam\")\nend\n\ndotwice(print_spam)Type this example into a script and test it.\nModify dotwice so that it takes two arguments, a function object and a value, and calls the function twice, passing the value as an argument.\nCopy the definition of printtwice from earlier in this chapter to your script.\nUse the modified version of dotwice to call printtwice twice, passing \"spam\" as an argument.\nDefine a new function called dofour that takes a function object and a value and calls the function four times, passing the value as a parameter. There should be only two statements in the body of this function, not four."
},

{
    "location": "chap03.html#Exercise-3-3-1",
    "page": "Functions",
    "title": "Exercise 3-3",
    "category": "section",
    "text": "Note: This exercise should be done using only the statements and other features we have learned so far.Write a function printgrid that draws a grid like the following:julia> printgrid()\n+ - - - - + - - - - +\n|         |         |\n|         |         |\n|         |         |\n|         |         |\n+ - - - - + - - - - +\n|         |         |\n|         |         |\n|         |         |\n|         |         |\n+ - - - - + - - - - +Hint: to print more than one value on a line, you can print a comma-separated sequence of values:println(\"+\", \"-\")The function print does not advance to the next line:print(\"+ \")\nprintln(\"-\")The output of these statements is \"+ -\" on the same line.The output from the next print statement would begin on the next line.Write a function that draws a similar grid with four rows and four columns.Credit: This exercise is based on an exercise in Oualline, Practical C Programming, Third Edition, O’Reilly Media, 1997."
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
    "text": "This chapter presents a case study that demonstrates a process for designing functions that work together.It introduces the Luxor module, which allows you to create images using turtle graphics.The examples in this chapter can be executed in a graphical notebook on JuliaBox, which combines code, formatted text, math, and multimedia in a single document."
},

{
    "location": "chap04.html#The-Luxor-module-1",
    "page": "Case study: interface design",
    "title": "The Luxor module",
    "category": "section",
    "text": "A module is a file that contains a collection of related functions. Modules can be installed in the REPL:\\begin{minted}{jlcon}\njulia> Pkg.add(\"Luxor\")\nINFO: Cloning cache of Luxor from https://github.com/JuliaGraphics/Luxor.jl.git\nINFO: Installing Luxor v0.10.4\n...\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; Pkg.add(\"Luxor\")\nINFO: Cloning cache of Luxor from https://github.com/JuliaGraphics/Luxor.jl.git\nINFO: Installing Luxor v0.10.4</code></pre>This can take some time.Before we can use the functions in a module, we have to import it with an using statement:julia> using Luxor\n\njulia> 🐢 = Turtle()\nLuxor.Turtle(0.0, 0.0, true, 0.0, (0.0, 0.0, 0.0))The Luxor module provides a function called Turtle that creates a Luxor.Turtle object, which we assign to a variable named 🐢 (\\:turtle: TAB).Once you create a turtle, you can call a function to move it around a drawing. For example, to move the turtle forward:@svg begin\n    forward(🐢, 100)\nendusing ThinkJulia\nfig04_1()<figure>\n  <img src=\"fig41.svg\" alt=\"Moving the turtle forward.\">\n  <figcaption>Figure 4.1. Moving the turtle forward.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig41}\n\\caption{Moving the turtle forward.}\n\\label{fig41}\n\\end{figure}The @svg keyword starts a macro that draws a svg picture. Macros are an important but advanced feature of Julia.The arguments of forward are the turtle and a distance in pixels, so the actual size depends on your display.Another function you can call with a turtle as argument is turn for turning. The second argument for turn is an angle in degrees.Also, each turtle is holding a pen, which is either down or up; if the pen is down, the turtle leaves a trail when it moves. Figure 1 shows the trail left behind by the turtle. The functions penup and pendown stand for “pen up” and “pen down”.To draw a right angle, modify the macro:🐢 = Turtle()\n@svg begin\n    forward(🐢, 100)\n    turn(🐢, -90)\n    forward(🐢, 100)\nendNow modify the macro to draw a square. Don’t go on until you’ve got it working!"
},

{
    "location": "chap04.html#Simple-repetition-1",
    "page": "Case study: interface design",
    "title": "Simple repetition",
    "category": "section",
    "text": "Chances are you wrote something like this:🐢 = Turtle()\n@svg begin\n    forward(🐢, 100)\n    turn(🐢, -90)\n    forward(🐢, 100)\n    turn(🐢, -90)\n    forward(🐢, 100)\n    turn(🐢, -90)\n    forward(🐢, 100)\nendWe can do the same thing more concisely with a for statement:julia> for i in 1:4\n          println(\"Hello!\")\n       end\nHello!\nHello!\nHello!\nHello!This is the simplest use of the for statement; we will see more later. But that should be enough to let you rewrite your square-drawing program. Don’t go on until you do.Here is a for statement that draws a square:🐢 = Turtle()\n@svg begin\n    for i in 1:4\n        forward(🐢, 100)\n        turn(🐢, -90)\n    end\nendThe syntax of a for statement is similar to a function definition. It has a header and a body that ends with the keyword end. The body can contain any number of statements.A for statement is also called a loop because the flow of execution runs through the body and then loops back to the top. In this case, it runs the body four times.This version is actually a little different from the previous square-drawing code because it makes another turn after drawing the last side of the square. The extra turn takes more time, but it simplifies the code if we do the same thing every time through the loop. This version also has the effect of leaving the turtle back in the starting position, facing in the starting direction."
},

{
    "location": "chap04.html#Exercises-1",
    "page": "Case study: interface design",
    "title": "Exercises",
    "category": "section",
    "text": "The following is a series of exercises using turtles. They are meant to be fun, but they have a point, too. While you are working on them, think about what the point is.The following sections have solutions to the exercises, so don’t look until you have finished (or at least tried).Write a function called square that takes a parameter named t, which is a turtle. It should use the turtle to draw a square.\nWrite a function call that passes t as an argument to square, and then run the macro again.\nAdd another parameter, named len, to square. Modify the body so length of the sides is len, and then modify the function call to provide a second argument. Run the macro again. Test with a range of values for len.\nMake a copy of square and change the name to polygon. Add another parameter named n and modify the body so it draws an n-sided regular polygon. Hint: The exterior angles of an n-sided regular polygon are frac360n degrees.\nWrite a function called circle that takes a turtle, t, and radius, r, as parameters and that draws an approximate circle by calling polygon with an appropriate length and number of sides. Test your function with a range of values of r. Hint: figure out the circumference of the circle and make sure that len * n == circumference.\nMake a more general version of circle called arc that takes an additional parameter angle, which determines what fraction of a circle to draw. angle is in units of degrees, so when angle=360, arc should draw a complete circle."
},

{
    "location": "chap04.html#Encapsulation-1",
    "page": "Case study: interface design",
    "title": "Encapsulation",
    "category": "section",
    "text": "The first exercise asks you to put your square-drawing code into a function definition and then call the function, passing the turtle as a parameter. Here is a solution:function square(t)\n    for i in 1:4\n        forward(t, 100)\n        turn(t, -90)\n    end\nend\n🐢 = Turtle()\n@svg begin\n    square(🐢)\nendThe innermost statements, forward and turn are indented twice to show that they are inside the for loop, which is inside the function definition.Inside the function, t refers to the same turtle 🐢, so turn(t, -90) has the same effect as turn(🐢, -90). In that case, why not call the parameter 🐢? The idea is that t can be any turtle, not just 🐢, so you could create a second turtle and pass it as an argument to square:🐫 = Turtle()\n@svg begin\n    square(🐫)\nendWrapping a piece of code up in a function is called encapsulation. One of the benefits of encapsulation is that it attaches a name to the code, which serves as a kind of documentation. Another advantage is that if you re-use the code, it is more concise to call a function twice than to copy and paste the body!"
},

{
    "location": "chap04.html#Generalization-1",
    "page": "Case study: interface design",
    "title": "Generalization",
    "category": "section",
    "text": "The next step is to add a len parameter to square. Here is a solution:function square(t, len)\n    for i in 1:4\n        forward(t, len)\n        turn(t, -90)\n    end\nend\n🐢 = Turtle()\n@svg begin\n    square(🐢, 100)\nendAdding a parameter to a function is called generalization because it makes the function more general: in the previous version, the square is always the same size; in this version it can be any size.The next step is also a generalization. Instead of drawing squares, polygon draws regular polygons with any number of sides. Here is a solution:function polygon(t, n, len)\n    angle = 360 / n\n    for i in 1:n\n        forward(t, len)\n        turn(t, -angle)\n    end\nend\n🐢 = Turtle()\n@svg begin\n    polygon(🐢, 7, 70)\nendThis example draws a 7-sided polygon with side length 70."
},

{
    "location": "chap04.html#Interface-design-1",
    "page": "Case study: interface design",
    "title": "Interface design",
    "category": "section",
    "text": "The next step is to write circle, which takes a radius, r, as a parameter. Here is a simple solution that uses polygon to draw a 50-sided polygon:function circle(t, r)\n    circumference = 2 * π * r\n    n = 50\n    len = circumference / n\n    polygon(t, n, len)\nendThe first line computes the circumference of a circle with radius r using the formula 2  r. n is the number of line segments in our approximation of a circle, so len is the length of each segment. Thus, polygon draws a 50-sided polygon that approximates a circle with radius r.One limitation of this solution is that n is a constant, which means that for very big circles, the line segments are too long, and for small circles, we waste time drawing very small segments. One solution would be to generalize the function by taking n as a parameter. This would give the user (whoever calls circle) more control, but the interface would be less clean.The interface of a function is a summary of how it is used: what are the parameters? What does the function do? And what is the return value? An interface is “clean” if it allows the caller to do what they want without dealing with unnecessary details.In this example, r belongs in the interface because it specifies the circle to be drawn. n is less appropriate because it pertains to the details of how the circle should be rendered.Rather than clutter up the interface, it is better to choose an appropriate value of n depending on circumference:function circle(t, r)\n    circumference = 2 * π * r\n    n = trunc(circumference / 3) + 3\n    len = circumference / n\n    polygon(t, n, len)\nendNow the number of segments is an integer near circumference/3, so the length of each segment is approximately 3, which is small enough that the circles look good, but big enough to be efficient, and acceptable for any size circle.Adding 3 to n guarantees that the polygon has at least 3 sides."
},

{
    "location": "chap04.html#Refactoring-1",
    "page": "Case study: interface design",
    "title": "Refactoring",
    "category": "section",
    "text": "When I wrote circle, I was able to re-use polygon because a many-sided polygon is a good approximation of a circle. But arc is not as cooperative; we can’t use polygon or circle to draw an arc.One alternative is to start with a copy of polygon and transform it into arc. The result might look like this:function arc(t, r, angle)\n    arc_len = 2 * π * r * angle / 360\n    n = trunc(arc_len / 3) + 1\n    step_len = arc_len / n\n    step_angle = angle / n\n    for i in 1:n\n        forward(t, step_len)\n        turn(t, -step_angle)\n    end\nendThe second half of this function looks like polygon, but we can’t re-use polygon without changing the interface. We could generalize polygon to take an angle as a third argument, but then polygon would no longer be an appropriate name! Instead, let’s call the more general function polyline:function polyline(t, n, len, angle)\n    for i in 1:n\n        forward(t, len)\n        turn(t, -angle)\n    end\nendNow we can rewrite polygon and arc to use polyline:function polygon(t, n, len)\n    angle = 360 / n\n    polyline(t, n, len, angle)\nend\n\nfunction arc(t, r, angle)\n    arc_len = 2 * π * r * angle / 360\n    n = trunc(arc_len / 3) + 1\n    step_len = arc_len / n\n    step_angle = angle / n\n    polyline(t, n, step_len, step_angle)\nendFinally, we can rewrite circle to use arc:function circle(t, r)\n    arc(t, r, 360)\nendThis process—rearranging a program to improve interfaces and facilitate code re-use—is called refactoring. In this case, we noticed that there was similar code in arc and polygon, so we “factored it out” into polyline.If we had planned ahead, we might have written polyline first and avoided refactoring, but often you don’t know enough at the beginning of a project to design all the interfaces. Once you start coding, you understand the problem better. Sometimes refactoring is a sign that you have learned something."
},

{
    "location": "chap04.html#A-development-plan-1",
    "page": "Case study: interface design",
    "title": "A development plan",
    "category": "section",
    "text": "A development plan is a process for writing programs. The process we used in this case study is “encapsulation and generalization”. The steps of this process are:Start by writing a small program with no function definitions.\nOnce you get the program working, identify a coherent piece of it, encapsulate the piece in a function and give it a name.\nGeneralize the function by adding appropriate parameters.\nRepeat steps 1–3 until you have a set of working functions. Copy and paste working code to avoid retyping (and re-debugging).\nLook for opportunities to improve the program by refactoring. For example, if you have similar code in several places, consider factoring it into an appropriately general function.This process has some drawbacks—we will see alternatives later—but it can be useful if you don’t know ahead of time how to divide the program into functions. This approach lets you design as you go along."
},

{
    "location": "chap04.html#Docstring-1",
    "page": "Case study: interface design",
    "title": "Docstring",
    "category": "section",
    "text": "A docstring is a string before a function that explains the interface (“doc” is short for “documentation”). Here is an example:\"\"\"\npolyline(t, n, len, angle)\n\nDraws n line segments with the given length and\nangle (in degrees) between them.  t is a turtle.\n\"\"\"\nfunction polyline(t, n, len, angle)\n    for i in 1:n\n        forward(t, len)\n        turn(t, -angle)\n    end\nendDocumentation can be accessed in the REPL or in a notebook by typing ? followed by the name of a function or macro, and pressing ENTER:help?> polyline\nsearch:\n\n  polyline(t, n, len, angle)\n\n  Draws n line segments with the given length and angle (in degrees) between them. t is a turtle.By convention, all docstrings are triple-quoted strings, also known as multiline strings because the triple quotes allow the string to span more than one line.It is terse, but it contains the essential information someone would need to use this function. It explains concisely what the function does (without getting into the details of how it does it). It explains what effect each parameter has on the behavior of the function and what type each parameter should be (if it is not obvious).Writing this kind of documentation is an important part of interface design. A well-designed interface should be simple to explain; if you have a hard time explaining one of your functions, maybe the interface could be improved."
},

{
    "location": "chap04.html#Debugging-1",
    "page": "Case study: interface design",
    "title": "Debugging",
    "category": "section",
    "text": "An interface is like a contract between a function and a caller. The caller agrees to provide certain parameters and the function agrees to do certain work.For example, polyline requires four arguments: t has to be a turtle; n has to be an integer; len should be a positive number; and angle has to be a number, which is understood to be in degrees.These requirements are called preconditions because they are supposed to be true before the function starts executing. Conversely, conditions at the end of the function are postconditions. Postconditions include the intended effect of the function (like drawing line segments) and any side effects (like moving the turtle or making other changes).Preconditions are the responsibility of the caller. If the caller violates a (properly documented!) precondition and the function doesn’t work correctly, the bug is in the caller, not the function.If the preconditions are satisfied and the postconditions are not, the bug is in the function. If your pre- and postconditions are clear, they can help with debugging."
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
    "location": "chap04.html#Exercise-4-1-1",
    "page": "Case study: interface design",
    "title": "Exercise 4-1",
    "category": "section",
    "text": "Enter the code in this chapter in a notebook.Draw a stack diagram that shows the state of the program while executing circle(🐢, radius). You can do the arithmetic by hand or add print statements to the code.\nThe version of arc in Section 4.7 is not very accurate because the linear approximation of the circle is always outside the true circle. As a result, the turtle ends up a few pixels away from the correct destination. My solution shows a way to reduce the effect of this error. Read the code and see if it makes sense to you. If you draw a diagram, you might see how it works.\"\"\"\narc(t, r, angle)\n\nDraws an arc with the given radius and angle:\n\n    t: turtle\n    r: radius\n    angle: angle subtended by the arc, in degrees\n\"\"\"\nfunction arc(t, r, angle)\n    arc_len = 2 * π * r * abs(angle) / 360\n    n = trunc(arc_len / 4) + 3\n    step_len = arc_len / n\n    step_angle = angle / n\n\n    # making a slight left turn before starting reduces\n    # the error caused by the linear approximation of the arc\n    turn(t, step_angle/2)\n    polyline(t, n, step_len, step_angle)\n    turn(t, -step_angle/2)\nend"
},

{
    "location": "chap04.html#Exercise-4-2-1",
    "page": "Case study: interface design",
    "title": "Exercise 4-2",
    "category": "section",
    "text": "Write an appropriately general set of functions that can draw flowers as in Figure 4.2.using ThinkJulia\nfig04_2()<figure>\n  <img src=\"fig42.svg\" alt=\"Turtle flowers.\">\n  <figcaption>Figure 4.2. Turtle flowers.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig42}\n\\caption{Turtle flowers.}\n\\label{fig42}\n\\end{figure}"
},

{
    "location": "chap04.html#Exercise-4-3-1",
    "page": "Case study: interface design",
    "title": "Exercise 4-3",
    "category": "section",
    "text": "Write an appropriately general set of functions that can draw shapes as in Figure 4.3.using ThinkJulia\nfig04_3()<figure>\n  <img src=\"fig43.svg\" alt=\"Turtle pies.\">\n  <figcaption>Figure 4.3. Turtle pies.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig43}\n\\caption{Turtle pies.}\n\\label{fig43}\n\\end{figure}"
},

{
    "location": "chap04.html#Exercise-4-4-1",
    "page": "Case study: interface design",
    "title": "Exercise 4-4",
    "category": "section",
    "text": "The letters of the alphabet can be constructed from a moderate number of basic elements, like vertical and horizontal lines and a few curves. Design an alphabet that can be drawn with a minimal number of basic elements and then write functions that draw the letters.You should write one function for each letter, with names draw_a, draw_b, etc., and put your functions in a file named letters.jl."
},

{
    "location": "chap04.html#Exercise-4-5-1",
    "page": "Case study: interface design",
    "title": "Exercise 4-5",
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
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendThe main topic of this chapter is the if statement, which executes different code depending on the state of the program. But first I want to introduce two new operators: floor division and modulus."
},

{
    "location": "chap05.html#Floor-division-and-modulus-1",
    "page": "Conditionals and recursion",
    "title": "Floor division and modulus",
    "category": "section",
    "text": "The floor division operator, ÷ (\\div TAB), divides two numbers and rounds down to an integer. For example, suppose the run time of a movie is 105 minutes. You might want to know how long that is in hours. Conventional division returns a floating-point number:julia> minutes = 105\n105\njulia> minutes / 60\n1.75But we don’t normally write hours with decimal points. Floor division returns the integer number of hours, rounding down:julia> hours = minutes ÷ 60\n1To get the remainder, you could subtract off one hour in minutes:julia> remainder = minutes - hours * 60\n45An alternative is to use the modulus operator, %, which divides two numbers and returns the remainder.julia> remainder = minutes % 60\n45The modulus operator is more useful than it seems. For example, you can check whether one number is divisible by another—if x % y is zero, then x is divisible by y.Also, you can extract the right-most digit or digits from a number. For example, x % 10 yields the right-most digit of x (in base 10). Similarly x % 100 yields the last two digits."
},

{
    "location": "chap05.html#Boolean-expressions-1",
    "page": "Conditionals and recursion",
    "title": "Boolean expressions",
    "category": "section",
    "text": "A boolean expression is an expression that is either true or false. The following examples use the operator ==, which compares two operands and produces true if they are equal and false otherwise:julia> 5 == 5\ntrue\njulia> 5 == 6\nfalsetrue and false are special values that belong to the type Bool; they are not strings:julia> typeof(true)\nBool\njulia> typeof(false)\nBoolThe == operator is one of the relational operators; the others are:      x != y               # x is not equal to y\n      x ≠ y                # (\\ne TAB)\n      x > y                # x is greater than y\n      x < y                # x is less than y\n      x >= y               # x is greater than or equal to y\n      x ≥ y                # (\\ge TAB)\n      x <= y               # x is less than or equal to y\n      x ≤ y                # (\\le TAB)Although these operations are probably familiar to you, the Julia symbols are different from the mathematical symbols. A common error is to use a single equal sign (=) instead of a double equal sign (==). Remember that = is an assignment operator and == is a relational operator. There is no such thing as =< or =>."
},

{
    "location": "chap05.html#Logical-operators-1",
    "page": "Conditionals and recursion",
    "title": "Logical operators",
    "category": "section",
    "text": "There are three logical operators: && (and), || (or), and ! (not). The semantics (meaning) of these operators is similar to their meaning in English. For example, x > 0 && x < 10 is true only if x is greater than 0 and less than 10.n % 2 == 0 || n % 3 == 0 is true if either or both of the conditions is true, that is, if the number is divisible by 2 or 3.Finally, the ! operator negates a boolean expression, so !(x > y) is true if x > y is false, that is, if x is less than or equal to y."
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
    "text": "It is legal for one function to call another; it is also legal for a function to call itself. It may not be obvious why that is a good thing, but it turns out to be one of the most magical things a program can do. For example, look at the following function:function countdown(n)\n    if n <= 0\n        println(\"Blastoff!\")\n    else\n        print(n, \" \")\n        countdown(n-1)\n    end\nendIf n is 0 or negative, it outputs the word, \"Blastoff!\" Otherwise, it outputs n and then calls a function named countdown—itself—passing n-1 as an argument.What happens if we call this function like this?julia> countdown(3)\n3 2 1 Blastoff!The execution of countdown begins with n = 3, and since n is greater than 0, it outputs the value 3, and then calls itself...The execution of countdown begins with n = 2, and since n is greater than 0, it outputs the value 2, and then calls itself...The execution of countdown begins with n = 1, and since n is greater than 0, it outputs the value 1, and then calls itself...The execution of countdown begins with n = 0, and since n is not greater than 0, it outputs the word, \"Blastoff!\" and then returns.The countdown that got n = 1 returns.The countdown that got n = 2 returns.The countdown that got n = 3 returns.And then you’re back in __main__.A function that calls itself is recursive; the process of executing it is called recursion.As another example, we can write a function that prints a string n times.function printn(s, n)\n    if n <= 0\n        return\n    end\n    println(s)\n    printn(s, n-1)\nendIf n <= 0 the return statement exits the function. The flow of execution immediately returns to the caller, and the remaining lines of the function don’t run.The rest of the function is similar to countdown: it displays s and then calls itself to display s n1 additional times. So the number of lines of output is 1 + (n - 1), which adds up to n.For simple examples like this, it is probably easier to use a for loop. But we will see examples later that are hard to write with a for loop and easy to write with recursion, so it is good to start early."
},

{
    "location": "chap05.html#Stack-diagrams-for-recursive-functions-1",
    "page": "Conditionals and recursion",
    "title": "Stack diagrams for recursive functions",
    "category": "section",
    "text": "In Section 3.9, we used a stack diagram to represent the state of a program during a function call. The same kind of diagram can help interpret a recursive function.Every time a function gets called, Julia creates a frame to contain the function’s local variables and parameters. For a recursive function, there might be more than one frame on the stack at the same time.using ThinkJulia\nfig05_1()<figure>\n  <img src=\"fig51.svg\" alt=\"Stack diagram.\">\n  <figcaption>Figure 5.1. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig51}\n\\caption{Stack diagram.}\n\\label{fig51}\n\\end{figure}Figure 5.1 shows a stack diagram for countdown called with n = 3.As usual, the top of the stack is the frame for __main__. It is empty because we did not create any variables in __main__ or pass any arguments to it.The four countdown frames have different values for the parameter n. The bottom of the stack, where n = 0, is called the base case. It does not make a recursive call, so there are no more frames.As an exercise, draw a stack diagram for printn called with s = \"Hello\" and n = 2. Then write a function called do_n that takes a function object and a number, n, as arguments, and that calls the given function n times."
},

{
    "location": "chap05.html#Infinite-recursion-1",
    "page": "Conditionals and recursion",
    "title": "Infinite recursion",
    "category": "section",
    "text": "If a recursion never reaches a base case, it goes on making recursive calls forever, and the program never terminates. This is known as infinite recursion, and it is generally not a good idea. Here is a minimal program with an infinite recursion:function recurse()\n    recurse()\nendIn most programming environments, a program with infinite recursion does not really run forever. Julia reports an error message when the maximum recursion depth is reached:\\begin{minted}{jlcon}\njulia> recurse()\nERROR: StackOverflowError:\nStacktrace:\n [1] recurse() at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap05.jl:19 (repeats 80000 times)\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; recurse()\nERROR: StackOverflowError:\nStacktrace:\n [1] recurse() at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap05.jl:19 (repeats 80000 times)</code></pre>This traceback is a little bigger than the one we saw in the previous chapter. When the error occurs, there are 80000 recurse frames on the stack!If you encounter an infinite recursion by accident, review your function to confirm that there is a base case that does not make a recursive call. And if there is a base case, check whether you are guaranteed to reach it."
},

{
    "location": "chap05.html#Keyboard-input-1",
    "page": "Conditionals and recursion",
    "title": "Keyboard input",
    "category": "section",
    "text": "The programs we have written so far accept no input from the user. They just do the same thing every time.Julia provides a built-in function called input that stops the program and waits for the user to type something. When the user presses RETURN or ENTER, the program resumes and readline returns what the user typed as a string.\\begin{minted}{jlcon}\njulia> text = readline()\nWhat are you waiting for?\n\"What are you waiting for?\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; text = readline()\nWhat are you waiting for?\n\"What are you waiting for?\"</code></pre>Before getting input from the user, it is a good idea to print a prompt telling the user what to type:\\begin{minted}{jlcon}\njulia> print(\"What...is your name? \"); readline()\nWhat...is your name? Arthur, King of the Britons!\n\"Arthur, King of the Britons!\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; print(\"What...is your name? \"); readline()\nWhat...is your name? Arthur, King of the Britons!\n\"Arthur, King of the Britons!\"</code></pre>A semi-colon ; allows to put multiple statements on the same line. In the REPL only the last statement returns its value.If you expect the user to type an integer, you can try to convert the return value to Int64:\\begin{minted}{jlcon}\njulia> println(\"What...is the airspeed velocity of an unladen swallow?\"); speed = readline()\nWhat...is the airspeed velocity of an unladen swallow?\n42\n\"42\"\njulia> parse(Int64, speed)\n42\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; println(\"What...is the airspeed velocity of an unladen swallow?\"); speed = readline()\nWhat...is the airspeed velocity of an unladen swallow?\n42\n\"42\"\njulia&gt; parse(Int64, speed)\n42</code></pre>But if the user types something other than a string of digits, you get an error:\\begin{minted}{jlcon}\njulia> println(\"What...is the airspeed velocity of an unladen swallow? \"); speed = readline()\nWhat...is the airspeed velocity of an unladen swallow?\nWhat do you mean, an African or a European swallow?\n\"What do you mean, an African or a European swallow?\"\njulia> parse(Int64, speed)\nERROR: ArgumentError: invalid base 10 digit \'W\' in \"What do you mean, an African or a European swallow?\"\n[...]\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; println(\"What...is the airspeed velocity of an unladen swallow? \"); speed = readline()\nWhat...is the airspeed velocity of an unladen swallow?\nWhat do you mean, an African or a European swallow?\n\"What do you mean, an African or a European swallow?\"\njulia&gt; parse(Int64, speed)\nERROR: ArgumentError: invalid base 10 digit \'W\' in \"What do you mean, an African or a European swallow?\"\n[...]</code></pre>We will see how to handle this kind of error later."
},

{
    "location": "chap05.html#Debugging-1",
    "page": "Conditionals and recursion",
    "title": "Debugging",
    "category": "section",
    "text": "When a syntax or runtime error occurs, the error message contains a lot of information, but it can be overwhelming. The most useful parts are usually:What kind of error it was, and\nWhere it occurred.Syntax errors are usually easy to find, but there are a few gotchas. In general, error messages indicate where the problem was discovered, but the actual error might be earlier in the code, sometimes on a previous line.The same is true of runtime errors. Suppose you are trying to compute a signal-to-noise ratio in decibels. The formula istextitSNR_mathrmdb = 10 log_10 fracP_mathrmsignalP_mathrmnoise In Julia, you might write something like this:signal_power = 9\nnoise_power = 10\nratio = signal_power ÷ noise_power\ndecibels = 10 * log10(ratio)\nprint(decibels)This is not the result you expected.To find the error, it might be useful to print the value of ratio, which turns out to be 0. The problem is in line 3, which uses floor division instead of floating-point division.You should take the time to read error messages carefully, but don’t assume that everything they say is correct."
},

{
    "location": "chap05.html#Glossary-1",
    "page": "Conditionals and recursion",
    "title": "Glossary",
    "category": "section",
    "text": "floor division: An operator, denoted ÷, that divides two numbers and rounds down (toward negative infinity) to an integer.modulus operator: An operator, denoted with a percent sign (%), that works on integers and returns the remainder when one number is divided by another.boolean expression: An expression whose value is either true or false.relational operator: One of the operators that compares its operands: ==, ≠ (!=), >, <, ≥ (>=), and ≤ (<=).logical operator: One of the operators that combines boolean expressions: && (and), || (or), and ! (not).conditional statement: A statement that controls the flow of execution depending on some condition.condition: The boolean expression in a conditional statement that determines which branch runs.compound statement: A statement that consists of a header and a body. The body is terminated with the keyword end.branch: One of the alternative sequences of statements in a conditional statement.chained conditional: A conditional statement with a series of alternative branches.nested conditional: A conditional statement that appears in one of the branches of another conditional statement.return statement: A statement that causes a function to end immediately and return to the caller.recursion: The process of calling the function that is currently executing.base case: A conditional branch in a recursive function that does not make a recursive call.infinite recursion: A recursion that doesn’t have a base case, or never reaches it. Eventually, an infinite recursion causes a runtime error."
},

{
    "location": "chap05.html#Exercises-1",
    "page": "Conditionals and recursion",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap05.html#Exercise-5-1-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5-1",
    "category": "section",
    "text": "The function time returns the current Greenwich Mean Time in “the epoch”, which is an arbitrary time used as a reference point. On UNIX systems, the epoch is 1 January 1970.time()Write a script that reads the current time and converts it to a time of day in hours, minutes, and seconds, plus the number of days since the epoch."
},

{
    "location": "chap05.html#Exercise-5-2-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5-2",
    "category": "section",
    "text": "Fermat’s Last Theorem says that there are no positive integers a, b, and c such thata^n + b^n = c^nfor any values of n greater than 2.Write a function named checkfermat that takes four parameters—a, b, c and n—and checks to see if Fermat’s theorem holds. If n is greater than 2 and a^n + b^n == c^n the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”\nWrite a function that prompts the user to input values for a, b, c and n, converts them to integers, and uses checkfermat to check whether they violate Fermat’s theorem."
},

{
    "location": "chap05.html#Exercise-5-3-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5-3",
    "category": "section",
    "text": "If you are given three sticks, you may or may not be able to arrange them in a triangle. For example, if one of the sticks is 12 inches long and the other two are one inch long, you will not be able to get the short sticks to meet in the middle. For any three lengths, there is a simple test to see if it is possible to form a triangle:If any of the three lengths is greater than the sum of the other two, then you cannot form a triangle. Otherwise, you can. (If the sum of two lengths equals the third, they form what is called a “degenerate” triangle.)Write a function named istriangle that takes three integers as arguments, and that prints either “Yes” or “No”, depending on whether you can or cannot form a triangle from sticks with the given lengths.\nWrite a function that prompts the user to input three stick lengths, converts them to integers, and uses istriangle to check whether sticks with the given lengths can form a triangle."
},

{
    "location": "chap05.html#Exercise-5-4-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5-4",
    "category": "section",
    "text": "What is the output of the following program? Draw a stack diagram that shows the state of the program when it prints the result.function recurse(n, s)\n    if n == 0\n        println(s)\n    else\n        recurse(n-1, n+s)\n    end\nend\n\nrecurse(3, 0)What would happen if you called this function like this: recurse(-1, 0)?\nWrite a docstring that explains everything someone would need to know in order to use this function (and nothing else).The following exercises use the Luxor module, described in Chapter 4:"
},

{
    "location": "chap05.html#Exercise-5-5-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5-5",
    "category": "section",
    "text": "Read the following function and see if you can figure out what it does (see the examples in Chapter 4). Then run it and see if you got it right.function draw(t, length, n)\n    if n == 0\n        return\n    end\n    angle = 50\n    forward(t, length*n)\n    turn(t, -angle)\n    draw(t, length, n-1)\n    furn(t, 2*angle)\n    draw(t, length, n-1)\n    turn(t, -angle)\n    forward(-length*n)\nend"
},

{
    "location": "chap05.html#Exercise-5-6-1",
    "page": "Conditionals and recursion",
    "title": "Exercise 5-6",
    "category": "section",
    "text": "using ThinkJulia\nfig05_2()<figure>\n  <img src=\"fig52.svg\" alt=\"A Koch curve.\">\n  <figcaption>Figure 5.2. A Koch curve.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig52}\n\\caption{A Koch curve.}\n\\label{fig52}\n\\end{figure}The Koch curve is a fractal that looks something like Figure 5.2. To draw a Koch curve with length x, all you have to do isDraw a Koch curve with length fracx3.\nTurn left 60 degrees.\nDraw a Koch curve with length fracx3.\nTurn right 120 degrees.\nDraw a Koch curve with length fracx3.\nTurn left 60 degrees.\nDraw a Koch curve with length fracx3.The exception is if x is less than 3: in that case, you can just draw a straight line with length x.Write a function called koch that takes a turtle and a length as parameters, and that uses the turtle to draw a Koch curve with the given length.\nWrite a function called snowflake that draws three Koch curves to make the outline of a snowflake.\nThe Koch curve can be generalized in several ways. See http://en.wikipedia.org/wiki/Koch_snowflake for examples and implement your favorite."
},

{
    "location": "chap06.html#",
    "page": "Fruitful functions",
    "title": "Fruitful functions",
    "category": "page",
    "text": ""
},

{
    "location": "chap06.html#Fruitful-functions-1",
    "page": "Fruitful functions",
    "title": "Fruitful functions",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendMany of the Julia functions we have used, such as the math functions, produce return values. But the functions we’ve written are all void: they have an effect, like printing a value or moving a turtle, but they return nothing. In this chapter you will learn to write fruitful functions."
},

{
    "location": "chap06.html#Return-values-1",
    "page": "Fruitful functions",
    "title": "Return values",
    "category": "section",
    "text": "Calling the function generates a return value, which we usually assign to a variable or use as part of an expression.e = exp(1.0)\nheight = radius * sin(radians)The functions we have written so far are void. Speaking casually, they have no return value; more precisely, their return value is nothing. In this chapter, we are (finally) going to write fruitful functions. The first example is area, which returns the area of a circle with the given radius:function area(radius)\n    a = π * radius^2\n    return a\nendWe have seen the return statement before, but in a fruitful function the return statement includes an expression. This statement means: “Return immediately from this function and use the following expression as a return value.” The expression can be arbitrarily complicated, so we could have written this function more concisely:function area(radius)\n    π * radius^2\nendThe value returned by a function is the value of the last expression evaluated, which, by default, is the last expression in the body of the function definition.On the other hand, temporary variables like a and explicit return statements can make debugging easier.Sometimes it is useful to have multiple return statements, one in each branch of a conditional:function absvalue(x)\n    if x < 0\n        return -x\n    else\n        return x\n    end\nendSince these return statements are in an alternative conditional, only one runs.As soon as a return statement runs, the function terminates without executing any subsequent statements. Code that appears after a return statement, or any other place the flow of execution can never reach, is called dead code.In a fruitful function, it is a good idea to ensure that every possible path through the program hits a return statement. For example:function absvalue(x)\n    if x < 0\n        return -x\n    end\n    if x > 0\n        return x\n    end\nendThis function is incorrect because if x happens to be 0, neither condition is true, and the function ends without hitting a return statement. If the flow of execution gets to the end of a function, the return value is nothing, which is not the absolute value of 0.julia> println(absvalue(0))\nnothingBy the way, Julia provides a built-in function called abs that computes absolute values.As an exercise, write a compare function takes two values, x and y, and returns 1 if x > y, 0 if x == y, and -1 if x < y."
},

{
    "location": "chap06.html#Incremental-development-1",
    "page": "Fruitful functions",
    "title": "Incremental development",
    "category": "section",
    "text": "As you write larger functions, you might find yourself spending more time debugging.To deal with increasingly complex programs, you might want to try a process called incremental development. The goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time.As an example, suppose you want to find the distance between two points, given by the coordinates (x_1 y_1) and (x_2 y_2). By the Pythagorean theorem, the distance is:d = sqrt(x_2 - x_1)^2 + (y_2 - y_1)^2The first step is to consider what a distance function should look like in Julia. In other words, what are the inputs (parameters) and what is the output (return value)?In this case, the inputs are two points, which you can represent using four numbers. The return value is the distance represented by a floating-point value.Immediately you can write an outline of the function:function distance(x₁, y₁, x₂, y₂)\n    0.0\nendObviously, this version doesn’t compute distances; it always returns zero. But it is syntactically correct, and it runs, which means that you can test it before you make it more complicated. The subscript numbers are available in the Unicode character encoding (\\_1 TAB, \\_2 TAB, etc.).To test the new function, call it with sample arguments:distance(1, 2, 4, 6)I chose these values so that the horizontal distance is 3 and the vertical distance is 4; that way, the result is 5, the hypotenuse of a 3-4-5 triangle. When testing a function, it is useful to know the right answer.At this point we have confirmed that the function is syntactically correct, and we can start adding code to the body. A reasonable next step is to find the differences x_2  x_1 and y_2  y_1. The next version stores those values in temporary variables and prints them.function distance(x₁, y₁, x₂, y₂)\n    dx = x₂ - x₁\n    dy = y₂ - y₁\n    println(\"dx is \", dx)\n    println(\"dy is \", dy)\n    0.0\nendIf the function is working, it should display dx is 3 and dy is 4. If so, we know that the function is getting the right arguments and performing the first computation correctly. If not, there are only a few lines to check.Next we compute the sum of squares of dx and dy:function distance(x₁, y₁, x₂, y₂)\n    dx = x₂ - x₁\n    dy = y₂ - y₁\n    d² = dx^2 + dy^2\n    println(\"d² is \", d²)\n    0.0\nendAgain, you would run the program at this stage and check the output (which should be 25). Superscript numbers are also available (\\^2 TAB). Finally, you can use sqrt to compute and return the result:function distance(x₁, y₁, x₂, y₂)\n    dx = x₂ - x₁\n    dy = y₂ - y₁\n    d² = dx^2 + dy^2\n    sqrt(d²)\nendIf that works correctly, you are done. Otherwise, you might want to print the value of sqrt(d²) before the return statement.The final version of the function doesn’t display anything when it runs; it only returns a value. The print statements we wrote are useful for debugging, but once you get the function working, you should remove them. Code like that is called scaffolding because it is helpful for building the program but is not part of the final product.When you start out, you should add only a line or two of code at a time. As you gain more experience, you might find yourself writing and debugging bigger chunks. Either way, incremental development can save you a lot of debugging time.The key aspects of the process are:Start with a working program and make small incremental changes. At any point, if there is an error, you should have a good idea where it is.\nUse variables to hold intermediate values so you can display and check them.\nOnce the program is working, you might want to remove some of the scaffolding or consolidate multiple statements into compound expressions, but only if it does not make the program difficult to read.As an exercise, use incremental development to write a function called hypotenuse that returns the length of the hypotenuse of a right triangle given the lengths of the other two legs as arguments. Record each stage of the development process as you go."
},

{
    "location": "chap06.html#Composition-1",
    "page": "Fruitful functions",
    "title": "Composition",
    "category": "section",
    "text": "As you should expect by now, you can call one function from within another. As an example, we’ll write a function that takes two points, the center of the circle and a point on the perimeter, and computes the area of the circle.Assume that the center point is stored in the variables xc and yc, and the perimeter point is in xp and yp. The first step is to find the radius of the circle, which is the distance between the two points. We just wrote a function, distance, that does that:radius = distance(xc, yc, xp, yp)The next step is to find the area of a circle with that radius; we just wrote that, too:result = area(radius)Encapsulating these steps in a function, we get:function circlearea(xc, yc, xp, yp)\n    radius = distance(xc, yc, xp, yp)\n    result = area(radius)\n    return result\nendThe temporary variables radius and result are useful for development and debugging, but once the program is working, we can make it more concise by composing the function calls:function circlearea(xc, yc, xp, yp)\n    area(distance(xc, yc, xp, yp))\nend"
},

{
    "location": "chap06.html#Boolean-functions-1",
    "page": "Fruitful functions",
    "title": "Boolean functions",
    "category": "section",
    "text": "Functions can return booleans, which is often convenient for hiding complicated tests inside functions. For example:function isdivisible(x, y)\n    if x % y == 0\n        return true\n    else\n        return false\n    end\nendIt is common to give boolean functions names that sound like yes/no questions; isdivisible returns either true or false to indicate whether x is divisible by y.Here is an example:julia> isdivisible(6, 4)\nfalse\njulia> isdivisible(6, 3)\ntrueThe result of the == operator is a boolean, so we can write the function more concisely by returning it directly:function isdivisible(x, y)\n    x % y == 0\nendBoolean functions are often used in conditional statements:if isdivisible(x, y)\n    println(\"x is divisible by y\")\nendIt might be tempting to write something like:if isdivisible(x, y) == true\n    println(\"x is divisible by y\")\nendBut the extra comparison is unnecessary.As an exercise, write a function isbetween(x, y, z) that returns true if x ≤ y ≤ z or false otherwise."
},

{
    "location": "chap06.html#More-recursion-1",
    "page": "Fruitful functions",
    "title": "More recursion",
    "category": "section",
    "text": "We have only covered a small subset of Julia, but you might be interested to know that this subset is a complete programming language, which means that anything that can be computed can be expressed in this language. Any program ever written could be rewritten using only the language features you have learned so far (actually, you would need a few commands to control devices like the mouse, disks, etc., but that’s all).Proving that claim is a nontrivial exercise first accomplished by Alan Turing, one of the first computer scientists (some would argue that he was a mathematician, but a lot of early computer scientists started as mathematicians). Accordingly, it is known as the Turing Thesis. For a more complete (and accurate) discussion of the Turing Thesis, I recommend Michael Sipser’s book Introduction to the Theory of Computation.To give you an idea of what you can do with the tools you have learned so far, we’ll evaluate a few recursively defined mathematical functions. A recursive definition is similar to a circular definition, in the sense that the definition contains a reference to the thing being defined. A truly circular definition is not very useful:vorpal: An adjective used to describe something that is vorpal.If you saw that definition in the dictionary, you might be annoyed. On the other hand, if you looked up the definition of the factorial function, denoted with the symbol , you might get something like this:beginaligned\n  0  = 1 \n  n  = n (n-1)\nendalignedThis definition says that the factorial of 0 is 1, and the factorial of any other value, n, is n multiplied by the factorial of n1.So 3 is 3 times 2, which is 2 times 1, which is 1 times 0. Putting it all together, 3 equals 3 times 2 times 1 times 1, which is 6.If you can write a recursive definition of something, you can write a Julia program to evaluate it. The first step is to decide what the parameters should be. In this case it should be clear that factorial takes an integer:function fact(n) endIf the argument happens to be 0, all we have to do is return 1:function fact(n)\n    if n == 0\n        return 1\n    end\nendOtherwise, and this is the interesting part, we have to make a recursive call to find the factorial of n−1 and then multiply it by n:function fact(n)\n    if n == 0\n        return 1\n    else\n        recurse = fact(n-1)\n        result = n * recurse\n        return result\n    end\nendThe flow of execution for this program is similar to the flow of countdown in Section 5.8. If we call fact with the value 3:Since 3 is not 0, we take the second branch and calculate the factorial of n-1...Since 2 is not 0, we take the second branch and calculate the factorial of n-1...Since 1 is not 0, we take the second branch and calculate the factorial of n-1...Since 0 equals 0, we take the first branch and return 1 without making any more recursive calls.The return value, 1, is multiplied by n, which is 1, and the result is returned.The return value, 1, is multiplied by n, which is 2, and the result is returned.The return value 2 is multiplied by n, which is 3, and the result, 6, becomes the return value of the function call that started the whole process.using ThinkJulia\nfig06_1()<figure>\n  <img src=\"fig61.svg\" alt=\"Stack diagram.\">\n  <figcaption>Figure 6.1. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig61}\n\\caption{Stack diagram.}\n\\label{fig61}\n\\end{figure}Figure 6.1 shows what the stack diagram looks like for this sequence of function calls.The return values are shown being passed back up the stack. In each frame, the return value is the value of result, which is the product of n and recurse.In the last frame, the local variables recurse and result do not exist, because the branch that creates them does not run."
},

{
    "location": "chap06.html#Leap-of-faith-1",
    "page": "Fruitful functions",
    "title": "Leap of faith",
    "category": "section",
    "text": "Following the flow of execution is one way to read programs, but it can quickly become overwhelming. An alternative is what I call the “leap of faith”. When you come to a function call, instead of following the flow of execution, you assume that the function works correctly and returns the right result.In fact, you are already practicing this leap of faith when you use built-in functions. When you call cos or exp, you don’t examine the bodies of those functions. You just assume that they work because the people who wrote the built-in functions were good programmers.The same is true when you call one of your own functions. For example, in Section 6.4, we wrote a function called isdivisible that determines whether one number is divisible by another. Once we have convinced ourselves that this function is correct—by examining the code and testing—we can use the function without looking at the body again.The same is true of recursive programs. When you get to the recursive call, instead of following the flow of execution, you should assume that the recursive call works (returns the correct result) and then ask yourself, “Assuming that I can find the factorial of n1, can I compute the factorial of n?” It is clear that you can, by multiplying by n.Of course, it’s a bit strange to assume that the function works correctly when you haven’t finished writing it, but that’s why it’s called a leap of faith!"
},

{
    "location": "chap06.html#One-more-example-1",
    "page": "Fruitful functions",
    "title": "One more example",
    "category": "section",
    "text": "After factorial, the most common example of a recursively defined mathematical function is fibonacci, which has the following definition (see http://en.wikipedia.org/wiki/Fibonacci_number):beginaligned\n    textitfib(0) = 0 \n    textitfib(1) = 1 \n    textitfib(n) = textitfib(n-1) + textitfib(n-2)\nendalignedTranslated into Julia, it looks like this:function fib(n)\n    if n == 0\n        return 0\n    elseif n == 1\n        return 1\n    else\n        return fib(n-1) + fib(n-2)\n    end\nendIf you try to follow the flow of execution here, even for fairly small values of n, your head explodes. But according to the leap of faith, if you assume that the two recursive calls work correctly, then it is clear that you get the right result by adding them together."
},

{
    "location": "chap06.html#Checking-types-1",
    "page": "Fruitful functions",
    "title": "Checking types",
    "category": "section",
    "text": "What happens if we call fact and give it 1.5 as an argument?\\begin{minted}{jlcon}\njulia> fact(1.5)\nERROR: StackOverflowError:\nStacktrace:\n [1] fact(::Float64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap06.jl:0\n [2] fact(::Float64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap06.jl:38 (repeats 52402 times)\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; fact(1.5)\nERROR: StackOverflowError:\nStacktrace:\n [1] fact(::Float64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap06.jl:0\n [2] fact(::Float64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap06.jl:38 (repeats 52402 times)</code></pre>It looks like an infinite recursion. How can that be? The function has a base case—when n == 0. But if n is not an integer, we can miss the base case and recurse forever.In the first recursive call, the value of n is 0.5. In the next, it is -0.5. From there, it gets smaller (more negative), but it will never be 0.We have two choices. We can try to generalize the factorial function to work with floating-point numbers, or we can make fact check the type of its argument. The first option is called the gamma function and it’s a little beyond the scope of this book. So we’ll go for the second.We can use the built-in operator isa to verify the type of the argument. While we’re at it, we can also make sure the argument is positive:function fact(n)\n    if !(n isa Int64)\n        println(\"Factorial is only defined for integers.\")\n        return\n    elseif n < 0\n        println(\"Factorial is not defined for negative integers.\")\n        return\n    elseif n == 0\n        return 1\n    else\n        return n * fact(n-1)\n    end\nendThe first base case handles nonintegers; the second handles negative integers. In both cases, the program prints an error message and returns nothing to indicate that something went wrong:DocTestSetup = quote\n    function fact(n)\n        if !(n isa Int64)\n            println(\"Factorial is only defined for integers.\")\n            return\n        elseif n < 0\n            println(\"Factorial is not defined for negative integers.\")\n            return\n        elseif n == 0\n            return 1\n        else\n            return n * fact(n-1)\n        end\n    end\nendjulia> println(fact(\"fred\"))\nFactorial is only defined for integers.\nnothing\njulia> println(fact(-2))\nFactorial is not defined for negative integers.\nnothingIf we get past both checks, we know that n is positive or zero, so we can prove that the recursion terminates.This program demonstrates a pattern sometimes called a guardian. The first two conditionals act as guardians, protecting the code that follows from values that might cause an error. The guardians make it possible to prove the correctness of the code.In Section 11.4 we will see a more flexible alternative to printing an error message: raising an exception."
},

{
    "location": "chap06.html#Debugging-1",
    "page": "Fruitful functions",
    "title": "Debugging",
    "category": "section",
    "text": "Breaking a large program into smaller functions creates natural checkpoints for debugging. If a function is not working, there are three possibilities to consider:There is something wrong with the arguments the function is getting; a precondition is violated.\nThere is something wrong with the function; a postcondition is violated.\nThere is something wrong with the return value or the way it is being used.To rule out the first possibility, you can add a print statement at the beginning of the function and display the values of the parameters (and maybe their types). Or you can write code that checks the preconditions explicitly.If the parameters look good, add a print statement before each return statement and display the return value. If possible, check the result by hand. Consider calling the function with values that make it easy to check the result (as in Section 6.2).If the function seems to be working, look at the function call to make sure the return value is being used correctly (or used at all!).Adding print statements at the beginning and end of a function can help make the flow of execution more visible. For example, here is a version of fact with print statements:function fact(n)\n    space = \" \" ^ (4 * n)\n    println(space, \"factorial \", n)\n    if n == 0\n        println(space, \"returning 1\")\n        return 1\n    else\n        recurse = fact(n-1)\n        result = n * recurse\n        println(space, \"returning \", result)\n        return result\n    end\nendspace is a string of space characters that controls the indentation of the output:function fact(n)\n    space = \" \" ^ (4 * n)\n    println(space, \"factorial \", n)\n    if n == 0\n        println(space, \"returning 1\")\n        return 1\n    else\n        recurse = fact(n-1)\n        result = n * recurse\n        println(space, \"returning \", result)\n        return result\n    end\nendfact(4)If you are confused about the flow of execution, this kind of output can be helpful. It takes some time to develop effective scaffolding, but a little bit of scaffolding can save a lot of debugging."
},

{
    "location": "chap06.html#Glossary-1",
    "page": "Fruitful functions",
    "title": "Glossary",
    "category": "section",
    "text": "temporary variable: A variable used to store an intermediate value in a complex calculation.dead code: Part of a program that can never run, often because it appears after a return statement.incremental development: A program development plan intended to avoid debugging by adding and testing only a small amount of code at a time.scaffolding: Code that is used during program development but is not part of the final version.guardian: A programming pattern that uses a conditional statement to check for and handle circumstances that might cause an error."
},

{
    "location": "chap06.html#Exercises-1",
    "page": "Fruitful functions",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap06.html#Exercise-6-1-1",
    "page": "Fruitful functions",
    "title": "Exercise 6-1",
    "category": "section",
    "text": "Draw a stack diagram for the following program. What does the program print?function b(z)\n    prod = a(z, z)\n    println(z, \" \", prod)\n    prod\nend\n\nfunction a(x, y)\n    x = x + 1\n    x * y\nend\n\nfunction c(x, y, z)\n    total = x + y + z\n    square = b(total)^2\n    square\nend\n\nx = 1\ny = x + 1\nprintln(c(x, y+3, x+y))"
},

{
    "location": "chap06.html#Exercise-6-2-1",
    "page": "Fruitful functions",
    "title": "Exercise 6-2",
    "category": "section",
    "text": "The Ackermann function, A(m n), is defined:A(m n) =\nbegincases\n              n+1 textrmif   m = 0 \n        A(m-1 1) textrmif   m  0 textrm and  n = 0 \nA(m-1 A(m n-1)) textrmif   m  0 textrm and  n  0\nendcasesSee http://en.wikipedia.org/wiki/Ackermann_function. Write a function named ack that evaluates the Ackermann function. Use your function to evaluate ack(3, 4), which should be 125. What happens for larger values of m and n?"
},

{
    "location": "chap06.html#Exercise-6-3-1",
    "page": "Fruitful functions",
    "title": "Exercise 6-3",
    "category": "section",
    "text": "A palindrome is a word that is spelled the same backward and forward, like “noon” and “redivider”. Recursively, a word is a palindrome if the first and last letters are the same and the middle is a palindrome.The following are functions that take a string argument and return the first, last, and middle letters:function first(word)\n    first = firstindex(word)\n    word[first]\nend\n\nfunction last(word)\n    last = lastindex(word)\n    word[last]\nend\n\nfunction middle(word)\n    first = firstindex(word)\n    last = lastindex(word)\n    word[nextind(word, first) : prevind(word, last)]\nendWe’ll see how they work in chapter 8Test these functions out. What happens if you call middle with a string with two letters? One letter? What about the empty string, which is written \"\" and contains no letters?\nWrite a function called ispalindrome that takes a string argument and returns true if it is a palindrome and false otherwise. Remember that you can use the built-in function length to check the length of a string."
},

{
    "location": "chap06.html#Exercise-6-4-1",
    "page": "Fruitful functions",
    "title": "Exercise 6-4",
    "category": "section",
    "text": "A number, a, is a power of b if it is divisible by b and fracab is a power of b. Write a function called ispower that takes parameters a and b and returns true if a is a power of b. Note: you will have to think about the base case."
},

{
    "location": "chap06.html#Exercise-6-5-1",
    "page": "Fruitful functions",
    "title": "Exercise 6-5",
    "category": "section",
    "text": "The greatest common divisor (GCD) of a and b is the largest number that divides both of them with no remainder.One way to find the GCD of two numbers is based on the observation that if r is the remainder when a is divided by b, then gcd(a, b) = gcd(b, r). As a base case, we can use gcd(a, 0) = a.Write a function called gcd that takes parameters a and b and returns their greatest common divisor.Credit: This exercise is based on an example from Abelson and Sussman’s Structure and Interpretation of Computer Programs."
},

{
    "location": "chap07.html#",
    "page": "Iteration",
    "title": "Iteration",
    "category": "page",
    "text": ""
},

{
    "location": "chap07.html#Iteration-1",
    "page": "Iteration",
    "title": "Iteration",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendThis chapter is about iteration, which is the ability to run a block of statements repeatedly. We saw a kind of iteration, using recursion, in Section 5.8. We saw another kind, using a for loop, in Section 4.2. In this chapter we’ll see yet another kind, using a while statement. But first I want to say a little more about variable assignment."
},

{
    "location": "chap07.html#Reassignment-1",
    "page": "Iteration",
    "title": "Reassignment",
    "category": "section",
    "text": "As you may have discovered, it is legal to make more than one assignment to the same variable. A new assignment makes an existing variable refer to a new value (and stop referring to the old value).julia> x=5\n5\njulia> x=7\n7The first time we display x, its value is 5; the second time, its value is 7.using ThinkJulia\nfig07_1()<figure>\n  <img src=\"fig71.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 7.1. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig71}\n\\caption{State diagram.}\n\\label{fig71}\n\\end{figure}Figure 7.1 shows what reassignment looks like in a state diagram.At this point I want to address a common source of confusion. Because Julia uses the equal sign (=) for assignment, it is tempting to interpret a statement like a = b as a mathematical proposition of equality; that is, the claim that a and b are equal. But this interpretation is wrong.First, equality is a symmetric relationship and assignment is not. For example, in mathematics, if a=7 then 7=a. But in Julia, the statement a = 7 is legal and 7 = a is not.Also, in mathematics, a proposition of equality is either true or false for all time. If a=b now, then a will always equal b. In Julia, an assignment statement can make two variables equal, but they don’t have to stay that way:julia> a = 5\n5\njulia> b = a    # a and b are now equal\n5\njulia> a = 3    # a and b are no longer equal\n3\njulia> b\n5\nThe third line changes the value of a but does not change the value of b, so they are no longer equal.Reassigning variables is often useful, but you should use it with caution. If the values of variables change frequently, it can make the code difficult to read and debug."
},

{
    "location": "chap07.html#Updating-variables-1",
    "page": "Iteration",
    "title": "Updating variables",
    "category": "section",
    "text": "A common kind of reassignment is an update, where the new value of the variable depends on the old.julia> x = x + 1\n8This means “get the current value of x, add one, and then update x with the new value.”If you try to update a variable that doesn’t exist, you get an error, because Julia evaluates the right side before it assigns a value to x:julia> y = y + 1\nERROR: UndefVarError: y not definedBefore you can update a variable, you have to initialize it, usually with a simple assignment:julia> y = 0\n0\njulia> y = y + 1\n1Updating a variable by adding 1 is called an increment; subtracting 1 is called a decrement."
},

{
    "location": "chap07.html#The-while-statement-1",
    "page": "Iteration",
    "title": "The while statement",
    "category": "section",
    "text": "Computers are often used to automate repetitive tasks. Repeating identical or similar tasks without making errors is something that computers do well and people do poorly. In a computer program, repetition is also called iteration.We have already seen two functions, countdown and printn, that iterate using recursion. Because iteration is so common, Julia provides language features to make it easier. One is the for statement we saw in Section 4.2. We’ll get back to that later.Another is the while statement. Here is a version of countdown that uses a while statement:function countdown(n)\n    while n > 0\n        print(n, \" \")\n        n = n - 1\n    end\n    println(\"Blastoff!\")\nendYou can almost read the while statement as if it were English. It means, “While n is greater than 0, display the value of n and then decrement n. When you get to 0, display the word Blastoff!”More formally, here is the flow of execution for a while statement:Determine whether the condition is true or false.\nIf false, exit the while statement and continue execution at the next statement.\nIf the condition is true, run the body and then go back to step 1.This type of flow is called a loop because the third step loops back around to the top.The body of the loop should change the value of one or more variables so that the condition becomes false eventually and the loop terminates. Otherwise the loop will repeat forever, which is called an infinite loop. An endless source of amusement for computer scientists is the observation that the directions on shampoo, “Lather, rinse, repeat”, are an infinite loop.In the case of countdown, we can prove that the loop terminates: if n is zero or negative, the loop never runs. Otherwise, n gets smaller each time through the loop, so eventually we have to get to 0.For some other loops, it is not so easy to tell. For example:function sequence(n)\n    while n != 1\n        println(n)\n        if n % 2 == 0        # n is even\n            n = n / 2\n        else                 # n is odd\n            n = n*3 + 1\n        end\n    end\nendThe condition for this loop is n != 1, so the loop will continue until n is 1, which makes the condition false.Each time through the loop, the program outputs the value of n and then checks whether it is even or odd. If it is even, n is divided by 2. If it is odd, the value of n is replaced with n*3 + 1. For example, if the argument passed to sequence is 3, the resulting values of n are 3, 10, 5, 16, 8, 4, 2, 1.Since n sometimes increases and sometimes decreases, there is no obvious proof that n will ever reach 1, or that the program terminates. For some particular values of n, we can prove termination. For example, if the starting value is a power of two, n will be even every time through the loop until it reaches 1. The previous example ends with such a sequence, starting with 16.The hard question is whether we can prove that this program terminates for all positive values of n. So far, no one has been able to prove it or disprove it! (See http://en.wikipedia.org/wiki/Collatz_conjecture.)As an exercise, rewrite the function printn from Section 5.8 using iteration instead of recursion."
},

{
    "location": "chap07.html#break-1",
    "page": "Iteration",
    "title": "break",
    "category": "section",
    "text": "Sometimes you don’t know it’s time to end a loop until you get half way through the body. In that case you can use the break statement to jump out of the loop.For example, suppose you want to take input from the user until they type done. You could write:while true\n    print(\"> \")\n    line = readline()\n    if line == \"done\"\n        break\n    end\n    println(line)\nend\nprintln(\"Done!\")The loop condition is true, which is always true, so the loop runs until it hits the break statement.Each time through, it prompts the user with an angle bracket. If the user types done, the break statement exits the loop. Otherwise the program echoes whatever the user types and goes back to the top of the loop. Here’s a sample run:> not done\nnot done\n> done\nDone!This way of writing while loops is common because you can check the condition anywhere in the loop (not just at the top) and you can express the stop condition affirmatively (“stop when this happens”) rather than negatively (“keep going until that happens”)."
},

{
    "location": "chap07.html#continue-1",
    "page": "Iteration",
    "title": "continue",
    "category": "section",
    "text": "The break statement exits the loop. When a continue statement is encountered inside a loop, control jumps to the beginning of the loop for the next iteration, skipping the execution of statements inside the body of the loop for the current iteration. For example:for i in 1:10\n    if i % 3 == 0\n        continue\n    end\n    println(i)\nendIf i is divisible by 3, the continue statement stops the current iteration and the next iteration starts. Only the numbers in the range 1 to 10 not divisible by 3 are printed."
},

{
    "location": "chap07.html#Square-roots-1",
    "page": "Iteration",
    "title": "Square roots",
    "category": "section",
    "text": "Loops are often used in programs that compute numerical results by starting with an approximate answer and iteratively improving it.For example, one way of computing square roots is Newton’s method. Suppose that you want to know the square root of a. If you start with almost any estimate, x, you can compute a better estimate with the following formula:y = frac12left(x + fracaxright)For example, if a is 4 and x is 3:julia> a = 4\n4\njulia> x = 3\n3\njulia> y = (x + a/x) / 2\n2.1666666666666665The result is closer to the correct answer (sqrt 4 = 2). If we repeat the process with the new estimate, it gets even closer:julia> x = y\n2.1666666666666665\njulia> y = (x + a/x) / 2\n2.0064102564102564After a few more updates, the estimate is almost exact:julia> x = y\n2.0064102564102564\njulia> y = (x + a/x) / 2\n2.0000102400262145\njulia> x = y\n2.0000102400262145\njulia> y = (x + a/x) / 2\n2.0000000000262146In general we don’t know ahead of time how many steps it takes to get to the right answer, but we know when we get there because the estimate stops changing:julia> x = y\n2.0000000000262146\njulia> y = (x + a/x) / 2\n2.0\njulia> x = y\n2.0\njulia> y = (x + a/x) / 2\n2.0When y == x, we can stop. Here is a loop that starts with an initial estimate, x, and improves it until it stops changing:while true\n    println(x)\n    y = (x + a/x) / 2\n    if y == x\n        break\n    end\n    x = y\nendFor most values of a this works fine, but in general it is dangerous to test float equality. Floating-point values are only approximately right: most rational numbers, like frac13, and irrational numbers, like sqrt 2, can’t be represented exactly with a Float64.Rather than checking whether x and y are exactly equal, it is safer to use the built-in function abs to compute the absolute value, or magnitude, of the difference between them:if abs(y-x) < ε\n    break\nendWhere ε (\\varepsilon TAB) has a value like 0.0000001 that determines how close is close enough."
},

{
    "location": "chap07.html#Algorithms-1",
    "page": "Iteration",
    "title": "Algorithms",
    "category": "section",
    "text": "Newton’s method is an example of an algorithm: it is a mechanical process for solving a category of problems (in this case, computing square roots).To understand what an algorithm is, it might help to start with something that is not an algorithm. When you learned to multiply single-digit numbers, you probably memorized the multiplication table. In effect, you memorized 100 specific solutions. That kind of knowledge is not algorithmic.But if you were “lazy”, you might have learned a few tricks. For example, to find the product of n and 9, you can write n1 as the first digit and 10n as the second digit. This trick is a general solution for multiplying any single-digit number by 9. That’s an algorithm!Similarly, the techniques you learned for addition with carrying, subtraction with borrowing, and long division are all algorithms. One of the characteristics of algorithms is that they do not require any intelligence to carry out. They are mechanical processes where each step follows from the last according to a simple set of rules.Executing algorithms is boring, but designing them is interesting, intellectually challenging, and a central part of computer science.Some of the things that people do naturally, without difficulty or conscious thought, are the hardest to express algorithmically. Understanding natural language is a good example. We all do it, but so far no one has been able to explain how we do it, at least not in the form of an algorithm."
},

{
    "location": "chap07.html#Debugging-1",
    "page": "Iteration",
    "title": "Debugging",
    "category": "section",
    "text": "As you start writing bigger programs, you might find yourself spending more time debugging. More code means more chances to make an error and more places for bugs to hide.One way to cut your debugging time is “debugging by bisection”. For example, if there are 100 lines in your program and you check them one at a time, it would take 100 steps.Instead, try to break the problem in half. Look at the middle of the program, or near it, for an intermediate value you can check. Add a print statement (or something else that has a verifiable effect) and run the program.If the mid-point check is incorrect, there must be a problem in the first half of the program. If it is correct, the problem is in the second half.Every time you perform a check like this, you halve the number of lines you have to search. After six steps (which is fewer than 100), you would be down to one or two lines of code, at least in theory.In practice it is not always clear what the “middle of the program” is and not always possible to check it. It doesn’t make sense to count lines and find the exact midpoint. Instead, think about places in the program where there might be errors and places where it is easy to put a check. Then choose a spot where you think the chances are about the same that the bug is before or after the check."
},

{
    "location": "chap07.html#Glossary-1",
    "page": "Iteration",
    "title": "Glossary",
    "category": "section",
    "text": "reassignment: Assigning a new value to a variable that already exists.update: An assignment where the new value of the variable depends on the old.initialization: An assignment that gives an initial value to a variable that will be updated.increment: An update that increases the value of a variable (often by one).decrement: An update that decreases the value of a variable.iteration: Repeated execution of a set of statements using either a recursive function call or a loop.infinite loop: A loop in which the terminating condition is never satisfied.algorithm: A general process for solving a category of problems."
},

{
    "location": "chap07.html#Exercises-1",
    "page": "Iteration",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap07.html#Exercise-7-1-1",
    "page": "Iteration",
    "title": "Exercise 7-1",
    "category": "section",
    "text": "Copy the loop from Section 7.5 and encapsulate it in a function called mysqrt that takes a as a parameter, chooses a reasonable value of x, and returns an estimate of the square root of a.To test it, write a function named testsquareroot that prints a table like this:using ThinkJuliatestsquareroot() # hideThe first column is a number, a; the second column is the square root of a computed with mysqrt; the third column is the square root computed by sqrt; the fourth column is the absolute value of the difference between the two estimates."
},

{
    "location": "chap07.html#Exercise-7-2-1",
    "page": "Iteration",
    "title": "Exercise 7-2",
    "category": "section",
    "text": "The built-in function parse takes a string and transforms it into an expression. This expression can be evaluated in Julia with the function eval. For example:julia> expr = parse(\"1+2*3\")\n:(1 + 2 * 3)\njulia> eval(expr)\n7\njulia> expr = parse(\"sqrt(π)\")\n:(sqrt(π))\njulia> eval(expr)\n1.7724538509055159Write a function called evalloop that iteratively prompts the user, takes the resulting input and evaluates it using eval, and prints the result. It should continue until the user enters done, and then return the value of the last expression it evaluated."
},

{
    "location": "chap07.html#Exercise-7-3-1",
    "page": "Iteration",
    "title": "Exercise 7-3",
    "category": "section",
    "text": "The mathematician Srinivasa Ramanujan found an infinite series that can be used to generate a numerical approximation of frac1pi:frac1pi=frac2sqrt29801sum_k=0^inftyfrac(4k)(1103+26390k)(k)^4 396^4kWrite a function called estimatepi that uses this formula to compute and return an estimate of π. It should use a while loop to compute terms of the summation until the last term is smaller than 1e-15 (which is Julia notation for 10^15). You can check the result by comparing it to π."
},

{
    "location": "chap08.html#",
    "page": "Strings",
    "title": "Strings",
    "category": "page",
    "text": ""
},

{
    "location": "chap08.html#Strings-1",
    "page": "Strings",
    "title": "Strings",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\n    using Compat\nendStrings are not like integers, floats, and booleans. A string is a sequence, which means it is an ordered collection of other values. In this chapter you’ll see how to access the characters that make up a string, and you’ll learn about some of the string helper functions provided by Julia."
},

{
    "location": "chap08.html#Characters-1",
    "page": "Strings",
    "title": "Characters",
    "category": "section",
    "text": "The characters that English speakers are familiar with are the letters A, B, C, etc., together with numerals and common punctuation symbols. These characters are standardized together with a mapping to integer values between 0 and 127 by the ASCII standard.There are, of course, many other characters used in non-English languages, including variants of the ASCII characters with accents and other modifications, related scripts such as Cyrillic and Greek, and scripts completely unrelated to ASCII and English, including Arabic, Chinese, Hebrew, Hindi, Japanese, and Korean.The Unicode standard tackles the complexities of what exactly a character is, and is generally accepted as the definitive standard addressing this problem.A Char value represents a single character and is surrounded by single quotes:julia> \'x\'\n\'x\': ASCII/Unicode U+0078 (category Ll: Letter, lowercase)\njulia> \'🍌\'\n\'🍌\': Unicode U+01f34c (category So: Symbol, other)\njulia> typeof(\'x\')\nCharEmojis are part of the Unicode standard."
},

{
    "location": "chap08.html#A-string-is-a-sequence-1",
    "page": "Strings",
    "title": "A string is a sequence",
    "category": "section",
    "text": "A string is a sequence of characters. You can access the characters one at a time with the bracket operator:julia> fruit = \"banana\"\n\"banana\"\njulia> letter = fruit[1]\n\'b\': ASCII/Unicode U+0062 (category Ll: Letter, lowercase)The second statement selects character number 1 from fruit and assigns it to letter.The expression in brackets is called an index. The index indicates which character in the sequence you want (hence the name).All indexing in Julia is 1-based: the first element of any integer-indexed object is found at index 1 and the last element at index end:julia> fruit[end]\n\'a\': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)As an index you can use an expression that contains variables and operators:julia> i = 1\n1\njulia> fruit[i+1]\n\'a\': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)\njulia> fruit[end-1]\n\'n\': ASCII/Unicode U+006e (category Ll: Letter, lowercase)But the value of the index has to be an integer. Otherwise you get:julia> letter = fruit[1.5]\nERROR: MethodError: no method matching getindex(::String, ::Float64)"
},

{
    "location": "chap08.html#length-1",
    "page": "Strings",
    "title": "length",
    "category": "section",
    "text": "length is a built-in function that returns the number of characters in a string:julia> fruits = \"🍌 🍎 🍐\"\n\"🍌 🍎 🍐\"\njulia> len = length(fruits)\n5To get the last letter of a string, you might be tempted to try something like this:julia> last = fruits[len]\n\' \': ASCII/Unicode U+0020 (category Zs: Separator, space)But you might not get what you expect.Strings are encoded using the UTF-8 encoding. UTF-8 is a variable-width encoding, meaning that not all characters are encoded in the same number of bytes.The function sizeof gives the number of bytes in a string:julia> sizeof(\"🍌\")\n4Because an emoji is encoded in 4 bytes and string indexing is byte based, the 5th element of fruits is a SPACE.This means also that not every byte index into a UTF-8 string is necessarily a valid index for a character. If you index into a string at such an invalid byte index, an error is thrown:julia> fruits[2]\nERROR: UnicodeError: invalid character index 2 (0x9f is a continuation byte)In the case of fruits, the character 🍌 is a four-byte character, so the indices 2, 3 and 4 are invalid and the next character\'s index is 5; this next valid index can be computed by nextind(fruit, 1), and the next index after that by nextind(fruit, 5) and so on."
},

{
    "location": "chap08.html#Traversal-with-a-for-loop-1",
    "page": "Strings",
    "title": "Traversal with a for loop",
    "category": "section",
    "text": "A lot of computations involve processing a string one character at a time. Often they start at the beginning, select each character in turn, do something to it, and continue until the end. This pattern of processing is called a traversal. One way to write a traversal is with a while loop:index = firstindex(fruits)\nwhile index <= sizeof(fruits)\n    letter = fruits[index]\n    println(letter)\n    index = nextind(fruits, index)\nendThis loop traverses the string and displays each letter on a line by itself. The loop condition is index <= sizeof(fruit), so when index is larger than the number of bytes in the string, the condition is false, and the body of the loop doesn’t run.The function firstindex returns the first valid byte index.As an exercise, write a function that takes a string as an argument and displays the letters backward, one per line.Another way to write a traversal is with a for loop:for letter in fruits\n    println(letter)\nendEach time through the loop, the next character in the string is assigned to the variable letter. The loop continues until no characters are left.The following example shows how to use concatenation (string multiplication) and a for loop to generate an abecedarian series (that is, in alphabetical order). In Robert McCloskey’s book Make Way for Ducklings, the names of the ducklings are Jack, Kack, Lack, Mack, Nack, Ouack, Pack, and Quack. This loop outputs these names in order:prefixes = \"JKLMNOPQ\"\nsuffix = \"ack\"\n\nfor letter in prefixes\n    println(letter * suffix)\nendThe output is:prefixes = \"JKLMNOPQ\"\nsuffix = \"ack\"for letter in prefixes       # hide\n    println(letter * suffix) # hide\nend                          # hideOf course, that’s not quite right because “Ouack” and “Quack” are misspelled. As an exercise, modify the program to fix this error."
},

{
    "location": "chap08.html#String-slices-1",
    "page": "Strings",
    "title": "String slices",
    "category": "section",
    "text": "A segment of a string is called a slice. Selecting a slice is similar to selecting a character:julia> str = \"Julius Caesar\";\n\njulia> str[1:6]\n\"Julius\"The operator [n:m] returns the part of the string from the “n-eth” byte to the “m-eth” byte. So the same caution is needed as for simple indexing.The end keyword can be used to indicate the last byte of the string:julia> str[8:end]\n\"Caesar\"If the first index is greater than the second the result is an empty string, represented by two quotation marks:julia> str[8:7]\n\"\"An empty string contains no characters and has length 0, but other than that, it is the same as any other string.Continuing this example, what do you think str[:] means? Try it and see."
},

{
    "location": "chap08.html#Strings-are-immutable-1",
    "page": "Strings",
    "title": "Strings are immutable",
    "category": "section",
    "text": "It is tempting to use the [] operator on the left side of an assignment, with the intention of changing a character in a string. For example:julia> greeting = \"Hello, world!\"\n\"Hello, world!\"\njulia> greeting[0] = \'J\'\nERROR: MethodError: no method matching setindex!(::String, ::Char, ::Int64)The reason for the error is that strings are immutable, which means you can’t change an existing string. The best you can do is create a new string that is a variation on the original:julia> greeting = \"J\" * greeting[2:end]\n\"Jello, world!\"This example concatenates a new first letter onto a slice of greeting. It has no effect on the original string."
},

{
    "location": "chap08.html#String-interpolation-1",
    "page": "Strings",
    "title": "String interpolation",
    "category": "section",
    "text": "Constructing strings using concatenation can become a bit cumbersome, however. To reduce the need for these verbose calls to string or repeated multiplications, Julia allows string interpolation using $:julia> greet = \"Hello\"\n\"Hello\"\njulia> whom = \"World\"\n\"World\"\njulia> \"$greet, $(whom)!\"\n\"Hello, World!\"This is more readable and convenient than string concatenation: greet * \", \" * whom * \"!\"The shortest complete expression after the $ is taken as the expression whose value is to be interpolated into the string. Thus, you can interpolate any expression into a string using parentheses:julia> \"1 + 2 = $(1 + 2)\"\n\"1 + 2 = 3\""
},

{
    "location": "chap08.html#Searching-1",
    "page": "Strings",
    "title": "Searching",
    "category": "section",
    "text": "What does the following function do?function find(word, letter)\n    index = firstindex(fruits)\n    while index <= sizeof(word)\n        if word[index] == letter\n            return index\n        end\n        index = nextind(word, index)\n    end\n    -1\nendIn a sense, find is the inverse of the [] operator. Instead of taking an index and extracting the corresponding character, it takes a character and finds the index where that character appears. If the character is not found, the function returns -1.This is the first example we have seen of a return statement inside a loop. If word[index] == letter, the function breaks out of the loop and returns immediately.If the character doesn’t appear in the string, the program exits the loop normally and returns -1.This pattern of computation—traversing a sequence and returning when we find what we are looking for—is called a search.As an exercise, modify find so that it has a third parameter, the index in word where it should start looking."
},

{
    "location": "chap08.html#Looping-and-counting-1",
    "page": "Strings",
    "title": "Looping and counting",
    "category": "section",
    "text": "The following program counts the number of times the letter a appears in a string:word = \"banana\"\ncount = 0\nfor letter in word\n    if letter == \'a\'\n        count = count + 1\n    end\nend\nprintln(count)This program demonstrates another pattern of computation called a counter. The variable count is initialized to 0 and then incremented each time an a is found. When the loop exits, count contains the result—the total number of a’s.As an exercise, encapsulate this code in a function named count, and generalize it so that it accepts the string and the letter as arguments.Then rewrite the function so that instead of traversing the string, it uses the three-parameter version of find from the previous section."
},

{
    "location": "chap08.html#String-library-functions-1",
    "page": "Strings",
    "title": "String library functions",
    "category": "section",
    "text": "Julia provides functions that perform a variety of useful operations on strings. For example, the function uppercase takes a string and returns a new string with all uppercase letters.julia> uppercase(\"Hello, World!\")\n\"HELLO, WORLD!\"As it turns out, there is a function named search that is remarkably similar to the function find we wrote:julia> search(\"banana\", \'a\')\n2Actually, the search function is more general than our function; it can find substrings, not just characters:julia> search(\"banana\", \"na\")\n3:4By default, search starts at the beginning of the string, but it can take a third argument, the index where it should start:julia> search(\"banana\", \"na\", 4)\n5:6This is an example of an optional argument."
},

{
    "location": "chap08.html#The-operator-1",
    "page": "Strings",
    "title": "The ∈ operator",
    "category": "section",
    "text": "The keyword ∈ (\\in TAB) is a boolean operator that takes a character and a string and returns true if the first appears as in the second:julia> \'a\' ∈ \"banana\"    # \'a\' in \"banana\"\ntrueFor example, the following function prints all the letters from word1 that also appear in word2:function inboth(word1, word2)\n    for letter in word1\n        if letter ∈ word2\n            println(letter)\n        end\n    end\nendWith well-chosen variable names, Julia sometimes reads like English. You could read this loop, “for (each) letter in (the first) word, if (the) letter is an element of (the second) word, print (the) letter.”Here’s what you get if you compare \"apples\" and \"oranges\":julia> inboth(\"apples\", \"oranges\")\na\ne\ns"
},

{
    "location": "chap08.html#String-comparison-1",
    "page": "Strings",
    "title": "String comparison",
    "category": "section",
    "text": "The relational operators work on strings. To see if two strings are equal:word = \"Pineapple\"\nif word == \"banana\"\n    println(\"All right, bananas.\")\nendOther relational operations are useful for putting words in alphabetical order:if word < \"banana\"\n    println(\"Your word, $word, comes before banana.\")\nelseif word > \"banana\"\n    println(\"Your word, $word, comes after banana.\")\nelse\n    println(\"All right, bananas.\")\nendJulia does not handle uppercase and lowercase letters the same way people do. All the uppercase letters come before all the lowercase letters, so:Your word, Pineapple, comes before banana.A common way to address this problem is to convert strings to a standard format, such as all lowercase, before performing the comparison. Keep that in mind in case you have to defend yourself against a man armed with a Pineapple."
},

{
    "location": "chap08.html#Debugging-1",
    "page": "Strings",
    "title": "Debugging",
    "category": "section",
    "text": "When you use indices to traverse the values in a sequence, it is tricky to get the beginning and end of the traversal right. Here is a function that is supposed to compare two words and return true if one of the words is the reverse of the other, but it contains two errors:function isreverse(word1, word2)\n    if length(word1) != length(word2)\n        return false\n    end\n    i = firstindex(word1)\n    j = lastindex(word2)\n    while j >= 0\n        j = prevind(word2, j)\n        if word1[i] != word2[j]\n            return false\n        end\n        i = nextind(word1, i)\n    end\n    true\nendThe first if statement checks whether the words are the same length. If not, we can return false immediately. Otherwise, for the rest of the function, we can assume that the words are the same length. This is an example of the guardian pattern.i and j are indices: i traverses word1 forward while j traverses word2 backward. If we find two letters that don’t match, we can return false immediately. If we get through the whole loop and all the letters match, we return true.The function lastindex returns the last valid byte index of a string and prevind the previous valid index of a character.If we test this function with the words \"pots\" and \"stop\", we expect the return value true, but we get false:DocTestSetup = quote\n    using ThinkJulia\n    using Compat\n\n    function isreverse(word1, word2)\n        if length(word1) != length(word2)\n            return false\n        end\n        i = firstindex(word1)\n        j = lastindex(word2)\n        while j >= 0\n            j = prevind(word2, j)\n            if word1[i] != word2[j]\n                return false\n            end\n            i = nextind(word1, i)\n        end\n        true\n    end\nendjulia> isreverse(\"pots\", \"stop\")\nfalseFor debugging this kind of error, my first move is to print the values of the indices:    while j >= 0\n        j = prevind(word2, j)\n        println(\"$i $j\")        # print here\n        if word1[i] != word2[j]DocTestSetup = quote\n    using ThinkJulia\n    using Compat\n\n    function isreverse(word1, word2)\n        if length(word1) != length(word2)\n            return false\n        end\n        i = firstindex(word1)\n        j = lastindex(word2)\n        while j >= 0\n            j = prevind(word2, j)\n            println(\"$i $j\")\n            if word1[i] != word2[j]\n                return false\n            end\n            i = nextind(word1, i)\n        end\n        true\n    end\nendNow when I run the program again, I get more information:julia> isreverse(\"pots\", \"stop\")\n1 3\nfalseThe first time through the loop, the value of j is 3, which has to be 4. This can be fixed by moving j = prevind(word2, j) to the end of the while loop.If I fix that error and run the program again, I get:DocTestSetup = quote\n    using ThinkJulia\n    using Compat\n\n    function isreverse(word1, word2)\n        if length(word1) != length(word2)\n            return false\n        end\n        i = firstindex(word1)\n        j = lastindex(word2)\n        while j >= 0\n            println(\"$i $j\")\n            if word1[i] != word2[j]\n                return false\n            end\n            i = nextind(word1, i)\n            j = prevind(word2, j)\n        end\n        true\n    end\nendjulia> isreverse(\"pots\", \"stop\")\n1 4\n2 3\n3 2\n4 1\n5 0\nERROR: BoundsError: attempt to access \"pots\"\n  at index [5]This time a BoundsError has been thrown. The value of i is 5, which is out a range for the string \"pots\".Run the program on paper, changing the values of i and j during each iteration. Find and fix the second error in this function."
},

{
    "location": "chap08.html#Glossary-1",
    "page": "Strings",
    "title": "Glossary",
    "category": "section",
    "text": "sequence: An ordered collection of values where each value is identified by an integer index.ASCII standard: A character encoding standard for electronic communication specifying 128 characters.Unicode standard: A computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world\'s writing systems.index: An integer value used to select an item in a sequence, such as a character in a string. In Python indices start from 0.UTF-8 encoding: A variable width character encoding capable of encoding all 1112064 valid code points in Unicode using one to four 8-bit bytes.traverse: To iterate through the items in a sequence, performing a similar operation on each.slice: A part of a string specified by a range of indices.empty string: A string with no characters and length 0, represented by two quotation marks.immutable: The property of a sequence whose items cannot be changed.string interpolation: The process of evaluating a string containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.search: A pattern of traversal that stops when it finds what it is looking for.counter: A variable used to count something, usually initialized to zero and then incremented.optional argument: A function or method argument that is not required."
},

{
    "location": "chap08.html#Exercises-1",
    "page": "Strings",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap08.html#Exercise-8-1-1",
    "page": "Strings",
    "title": "Exercise 8-1",
    "category": "section",
    "text": "Read the documentation of the string functions at https://docs.julialang.org/en/stable/stdlib/strings/. You might want to experiment with some of them to make sure you understand how they work. strip and replace are particularly useful.The documentation uses a syntax that might be confusing. For example, in search(string::AbstractString, chars::Chars, [start::Integer]), the brackets indicate optional arguments. So string and chars are required, but start is optional."
},

{
    "location": "chap08.html#Exercise-8-2-1",
    "page": "Strings",
    "title": "Exercise 8-2",
    "category": "section",
    "text": "There is a builtin function called count that is similar to the function in Section 8.9. Read the documentation of this function and use it to count the number of a’s in \"banana\"."
},

{
    "location": "chap08.html#Exercise-8-3-1",
    "page": "Strings",
    "title": "Exercise 8-3",
    "category": "section",
    "text": "A string slice can take a third index. The first specifies the start, the third the end and the second the “step size”; that is, the number of spaces between successive characters. A step size of 2 means every other character; 3 means every third, etc.julia> fruit = \"banana\"\n\"banana\"\njulia> fruit[1:2:6]\n\"bnn\"A step size of -1 goes through the word backwards, so the slice [end:-1:1] generates a reversed string.Use this idiom to write a one-line version of ispalindrome from Exercise 6.3."
},

{
    "location": "chap08.html#Exercise-8-4-1",
    "page": "Strings",
    "title": "Exercise 8-4",
    "category": "section",
    "text": "The following functions are all intended to check whether a string contains any lowercase letters, but at least some of them are wrong. For each function, describe what the function actually does (assuming that the parameter is a string).function anylowercase1(s)\n    for c in s\n        if islower(c)\n            return true\n        else\n            return false\n        end\n    end\nend\n\nfunction anylowercase2(s)\n    for c in s\n        if islower(\'c\')\n            return \"true\"\n        else\n            return \"false\"\n        end\n    end\nend\n\nfunction anylowercase3(s)\n    for c in s\n        flag = islower(c)\n    end\n    flag\nend\n\nfunction anylowercase4(s)\n    flag = false\n    for c in s\n        flag = flag || islower(c)\n    end\n    flag\nend\n\nfunction anylowercase5(s)\n    for c in s\n        if !islower(c)\n            return false\n        end\n    end\n    true\nend"
},

{
    "location": "chap08.html#Exercise-8-5-1",
    "page": "Strings",
    "title": "Exercise 8-5",
    "category": "section",
    "text": "A Caesar cypher is a weak form of encryption that involves “rotating” each letter by a fixed number of places. To rotate a letter means to shift it through the alphabet, wrapping around to the beginning if necessary, so ’A’ rotated by 3 is ’D’ and ’Z’ rotated by 1 is ’A’.To rotate a word, rotate each letter by the same amount. For example, \"cheer\" rotated by 7 is \"jolly\" and \"melon\" rotated by -10 is \"cubed\". In the movie 2001: A Space Odyssey, the ship computer is called HAL, which is IBM rotated by -1.Write a function called rotateword that takes a string and an integer as parameters, and returns a new string that contains the letters from the original string rotated by the given amount.You might want to use the built-in function Int, which converts a character to a numeric code, and Char, which converts numeric codes to characters. Letters of the alphabet are encoded in alphabetical order, so for example:julia> Int(\'c\') - Int(\'a\')\n2Because \'c\' is the third letter of the alphabet. But beware: the numeric codes for uppercase letters are different.julia> Char(Int(\'A\') + 32)\n\'a\': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)Potentially offensive jokes on the Internet are sometimes encoded in ROT13, which is a Caesar cypher with rotation 13. If you are not easily offended, find and decode some of them."
},

{
    "location": "chap09.html#",
    "page": "Case study: word play",
    "title": "Case study: word play",
    "category": "page",
    "text": ""
},

{
    "location": "chap09.html#Case-study:-word-play-1",
    "page": "Case study: word play",
    "title": "Case study: word play",
    "category": "section",
    "text": "This chapter presents the second case study, which involves solving word puzzles by searching for words that have certain properties. For example, we’ll find the longest palindromes in English and search for words whose letters appear in alphabetical order. And I will present another program development plan: reduction to a previously solved problem."
},

{
    "location": "chap09.html#Reading-word-lists-1",
    "page": "Case study: word play",
    "title": "Reading word lists",
    "category": "section",
    "text": "For the exercises in this chapter we need a list of English words. There are lots of word lists available on the Web, but the one most suitable for our purpose is one of the word lists collected and contributed to the public domain by Grady Ward as part of the Moby lexicon project (see http://wikipedia.org/wiki/Moby_Project). It is a list of 113809 official crosswords; that is, words that are considered valid in crossword puzzles and other word games. In the Moby collection, the filename is 113809of.fic; you can download a copy, with the simpler name words.txt, from https://github.com/BenLauwens/ThinkJulia.jl/data/words.txt.This file is in plain text, so you can open it with a text editor, but you can also read it from Julia. The built-in function open takes the name of the file as a parameter and returns a file stream you can use to read the file.dir = Pkg.dir(\"ThinkJulia\")\nfin = open(dir * \"/data/words.txt\")\\begin{minted}{jlcon}\njulia> fin = open(\"words.txt\")\nIOStream(<file words.txt>)\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; fin = open(\"words.txt\")\nIOStream(<file words.txt>)</code></pre>fin is a common name for a file stream used for input. Julia provides several function for reading, including readline, which reads characters from the file until it gets to a NEWLINE and returns the result as a string:readline(fin)The first word in this particular list is “aa”, which is a kind of lava.The file stream keeps track of where it is in the file, so if you call readline again, you get the next word:readline(fin)The next word is “aah”, which is a perfectly legitimate word, so stop looking at me like that.You can also use a file as part of a for loop. This program reads words.txt and prints each word, one per line:for line in eachline(\"words.txt\")\n    println(line)\nend"
},

{
    "location": "chap09.html#Exercises-1",
    "page": "Case study: word play",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap09.html#Exercise-9-1-1",
    "page": "Case study: word play",
    "title": "Exercise 9-1",
    "category": "section",
    "text": "Write a program that reads words.txt and prints only the words with more than 20 characters (not counting whitespace)."
},

{
    "location": "chap09.html#Exercise-9-2-1",
    "page": "Case study: word play",
    "title": "Exercise 9-2",
    "category": "section",
    "text": "In 1939 Ernest Vincent Wright published a 50,000 word novel called Gadsby that does not contain the letter \'e\'. Since \'e\' is the most common letter in English, that’s not easy to do.In fact, it is difficult to construct a solitary thought without using that most common symbol. It is slow going at first, but with caution and hours of training you can gradually gain facility.All right, I’ll stop now.Write a function called hasno_e that returns true if the given word doesn’t have the letter \'e\' in it.Modify your program from the previous section to print only the words that have no \'e\' and compute the percentage of the words in the list that have no \'e\'."
},

{
    "location": "chap09.html#Exercise-9-3-1",
    "page": "Case study: word play",
    "title": "Exercise 9-3",
    "category": "section",
    "text": "Write a function named avoids that takes a word and a string of forbidden letters, and that returns true if the word doesn’t use any of the forbidden letters.Modify your program to prompt the user to enter a string of forbidden letters and then print the number of words that don’t contain any of them. Can you find a combination of 5 forbidden letters that excludes the smallest number of words?"
},

{
    "location": "chap09.html#Exercise-9-4-1",
    "page": "Case study: word play",
    "title": "Exercise 9-4",
    "category": "section",
    "text": "Write a function named usesonly that takes a word and a string of letters, and that returns true if the word contains only letters in the list. Can you make a sentence using only the letters acefhlo? Other than \"Hoe alfalfa?\""
},

{
    "location": "chap09.html#Exercise-9-5-1",
    "page": "Case study: word play",
    "title": "Exercise 9-5",
    "category": "section",
    "text": "Write a function named usesall that takes a word and a string of required letters, and that returns true if the word uses all the required letters at least once. How many words are there that use all the vowels aeiou? How about aeiouy?"
},

{
    "location": "chap09.html#Exercise-9-6-1",
    "page": "Case study: word play",
    "title": "Exercise 9-6",
    "category": "section",
    "text": "Write a function called isabecedarian that returns true if the letters in a word appear in alphabetical order (double letters are ok). How many abecedarian words are there?"
},

{
    "location": "chap09.html#Search-1",
    "page": "Case study: word play",
    "title": "Search",
    "category": "section",
    "text": "All of the exercises in the previous section have something in common; they can be solved with the search pattern. The simplest example is:function hasno_e(word)\n    for letter in word\n        if letter == \'e\'\n            return false\n        end\n    end\n    true\nendThe for loop traverses the characters in word. If we find the letter \'e\', we can immediately return false; otherwise we have to go to the next letter. If we exit the loop normally, that means we didn’t find an \'e\', so we return true.You could write this function more concisely using the ∉ (\\notin TAB) operator, but I started with this version because it demonstrates the logic of the search pattern.avoids is a more general version of hasno_e but it has the same structure:function avoids(word, forbidden)\n    for letter in word\n        if letter ∈ forbidden\n            return false\n        end\n    end\n    true\nendWe can return false as soon as we find a forbidden letter; if we get to the end of the loop, we return true.usesonly is similar except that the sense of the condition is reversed:function usesonly(word, available)\n    for letter in word\n        if letter ∉ available\n            return false\n        end\n    end\n    true\nendInstead of a list of forbidden letters, we have a list of available letters. If we find a letter in word that is not in available, we can return false.usesall is similar except that we reverse the role of the word and the string of letters:function usesall(word, required)\n    for letter in required\n        if letter ∉ word\n            return false\n        end\n    end\n    true\nendInstead of traversing the letters in word, the loop traverses the required letters. If any of the required letters do not appear in the word, we can return false.If you were really thinking like a computer scientist, you would have recognized that usesall was an instance of a previously solved problem, and you would have written:function usesall(word, required)\n    usesonly(required, word)\nendThis is an example of a program development plan called reduction to a previously solved problem, which means that you recognize the problem you are working on as an instance of a solved problem and apply an existing solution."
},

{
    "location": "chap09.html#Looping-with-indices-1",
    "page": "Case study: word play",
    "title": "Looping with indices",
    "category": "section",
    "text": "I wrote the functions in the previous section with for loops because I only needed the characters in the strings; I didn’t have to do anything with the indices.For isabecedarian we have to compare adjacent letters, which is a little tricky with a for loop:function isabecedarian(word)\n    i = firstindex(word)\n    previous = word[i]\n    j = nextind(word, i)\n    for c in word[j:end]\n        if c < previous\n            return false\n        end\n        previous = c\n    end\n    true\nendAn alternative is to use recursion:function isabecedarian(word)\n    if length(word) <= 1\n        return true\n    end\n    i = firstindex(word)\n    j = nextind(word, i)\n    if word[1] > word[j]\n        return false\n    end\n    isabecedarian(word[j:end])\nendAnother option is to use a while loop:function isabecedarian(word)\n    i = firstindex(word)\n    j = nextind(word, 1)\n    while j <= sizeof(word)\n        if word[j] < word[i]\n            return false\n        end\n        i = j\n        j = nextind(word, i)\n    end\n    true\nendThe loop starts at i=1 and j=nextind(word, 1) and ends when j>sizeof(word). Each time through the loop, it compares the ith character (which you can think of as the current character) to the jth character (which you can think of as the next).If the next character is less than (alphabetically before) the current one, then we have discovered a break in the abecedarian trend, and we return false.If we get to the end of the loop without finding a fault, then the word passes the test. To convince yourself that the loop ends correctly, consider an example like \"flossy\".Here is a version of ispalindrome that uses two indices; one starts at the beginning and goes up; the other starts at the end and goes down.function ispalindrome(word)\n    i = firstindex(word)\n    j = lastindex(word)\n    while i<j\n        if word[i] != word[j]\n            return false\n        end\n        i = nextind(word, i)\n        j = prevind(word, j)\n    end\n    true\nendOr we could reduce to a previously solved problem and write:function ispalindrome(word)\n    isreverse(word, word)\nendUsing isreverse from Section 8.13."
},

{
    "location": "chap09.html#Debugging-1",
    "page": "Case study: word play",
    "title": "Debugging",
    "category": "section",
    "text": "Testing programs is hard. The functions in this chapter are relatively easy to test because you can check the results by hand. Even so, it is somewhere between difficult and impossible to choose a set of words that test for all possible errors.Taking hasno_e as an example, there are two obvious cases to check: words that have an \'e\' should return false, and words that don’t should return true. You should have no trouble coming up with one of each.Within each case, there are some less obvious subcases. Among the words that have an “e”, you should test words with an “e” at the beginning, the end, and somewhere in the middle. You should test long words, short words, and very short words, like the empty string. The empty string is an example of a special case, which is one of the non-obvious cases where errors often lurk.In addition to the test cases you generate, you can also test your program with a word list like words.txt. By scanning the output, you might be able to catch errors, but be careful: you might catch one kind of error (words that should not be included, but are) and not another (words that should be included, but aren’t).In general, testing can help you find bugs, but it is not easy to generate a good set of test cases, and even if you do, you can’t be sure your program is correct. According to a legendary computer scientist:Program testing can be used to show the presence of bugs, but never to show their absence!— Edsger W. Dijkstra"
},

{
    "location": "chap09.html#Glossary-1",
    "page": "Case study: word play",
    "title": "Glossary",
    "category": "section",
    "text": "file stream: A value that represents an open file.reduction to a previously solved problem: A way of solving a problem by expressing it as an instance of a previously solved problem.special case: A test case that is atypical or non-obvious (and less likely to be handled correctly)."
},

{
    "location": "chap09.html#Exercises-2",
    "page": "Case study: word play",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap09.html#Exercise-9-7-1",
    "page": "Case study: word play",
    "title": "Exercise 9-7",
    "category": "section",
    "text": "This question is based on a Puzzler that was broadcast on the radio program Car Talk (http://www.cartalk.com/content/puzzlers):Give me a word with three consecutive double letters. I’ll give you a couple of words that almost qualify, but don’t. For example, the word committee, c-o-m-m-i-t-t-e-e. It would be great except for the \'i\' that sneaks in there. Or Mississippi: M-i-s-s-i-s-s-i-p-p-i. If you could take out those i’s it would work. But there is a word that has three consecutive pairs of letters and to the best of my knowledge this may be the only word. Of course there are probably 500 more but I can only think of one. What is the word?Write a program to find it."
},

{
    "location": "chap09.html#Exercise-9-8-1",
    "page": "Case study: word play",
    "title": "Exercise 9-8",
    "category": "section",
    "text": "Here’s another Car Talk Puzzler (http://www.cartalk.com/content/puzzlers):“I was driving on the highway the other day and I happened to notice my odometer. Like most odometers, it shows six digits, in whole miles only. So, if my car had 300000 miles, for example, I’d see 3-0-0-0-0-0. “Now, what I saw that day was very interesting. I noticed that the last 4 digits were palindromic; that is, they read the same forward as backward. For example, 5-4-4-5 is a palindrome, so my odometer could have read 3-1-5-4-4-5. “One mile later, the last 5 numbers were palindromic. For example, it could have read 3-6-5-4-5-6. One mile after that, the middle 4 out of 6 numbers were palindromic. And you ready for this? One mile later, all 6 were palindromic! “The question is, what was on the odometer when I first looked?”Write a Julia program that tests all the six-digit numbers and prints any numbers that satisfy these requirements."
},

{
    "location": "chap09.html#Exercise-9-9-1",
    "page": "Case study: word play",
    "title": "Exercise 9-9",
    "category": "section",
    "text": "Here’s another Car Talk Puzzler you can solve with a search (http://www.cartalk.com/content/puzzlers):“Recently I had a visit with my mom and we realized that the two digits that make up my age when reversed resulted in her age. For example, if she’s 73, I’m 37. We wondered how often this has happened over the years but we got sidetracked with other topics and we never came up with an answer. “When I got home I figured out that the digits of our ages have been reversible six times so far. I also figured out that if we’re lucky it would happen again in a few years, and if we’re really lucky it would happen one more time after that. In other words, it would have happened 8 times over all. So the question is, how old am I now?”Write a Julia program that searches for solutions to this Puzzler. Hint: you might find the function lpad useful."
},

{
    "location": "chap10.html#",
    "page": "Arrays",
    "title": "Arrays",
    "category": "page",
    "text": ""
},

{
    "location": "chap10.html#Arrays-1",
    "page": "Arrays",
    "title": "Arrays",
    "category": "section",
    "text": "This chapter presents one of Julia’s most useful built-in types, arrays. You will also learn about objects and what can happen when you have more than one name for the same object."
},

{
    "location": "chap10.html#An-array-is-a-sequence-1",
    "page": "Arrays",
    "title": "An array is a sequence",
    "category": "section",
    "text": "Like a string, an array is a sequence of values. In a string, the values are characters; in an array, they can be any type. The values in an array are called elements or sometimes items.There are several ways to create a new array; the simplest is to enclose the elements in square brackets ([ ]):[10, 20, 30, 40]\n[\"crunchy frog\", \"ram bladder\", \"lark vomit\"]The first example is an array of four integers. The second is an array of three strings. The elements of an array don’t have to be the same type. The following array contains a string, a float, an integer, and another array:[\"spam\", 2.0, 5, [10, 20]]An array within another array is nested.An array that contains no elements is called an empty array; you can create one with empty brackets, [].As you might expect, you can assign array values to variables:julia> cheeses = [\"Cheddar\", \"Edam\", \"Gouda\"];\n\njulia> numbers = [42, 123];\n\njulia> empty = [];\n\njulia> print(cheeses, \" \", numbers, \" \", empty)\nString[\"Cheddar\", \"Edam\", \"Gouda\"] [42, 123] Any[]The function typeof can be used to find out the kind of the array:julia> typeof(cheeses)\nArray{String,1}\njulia> typeof(numbers)\nArray{Int64,1}\njulia> typeof(empty)\nArray{Any,1}The kind of the array is specified between curly braces and is composed of a type and a number. The number indicate the dimensions. The array empty contains values of type Any. This is a predefined type that can represent any type."
},

{
    "location": "chap10.html#Arrays-are-mutable-1",
    "page": "Arrays",
    "title": "Arrays are mutable",
    "category": "section",
    "text": "The syntax for accessing the elements of an array is the same as for accessing the characters of a string—the bracket operator. The expression inside the brackets specifies the index. Remember that the indices start at 1:julia> cheeses[1]\n\"Cheddar\"Unlike strings, arrays are mutable. When the bracket operator appears on the left side of an assignment, it identifies the element of the array that will be assigned:julia> numbers[2] = 5\n5\njulia> print(numbers)\n[42, 5]The second element of numbers, which used to be 123, is now 5.Figure 10.1 shows the state diagrams for cheeses, numbers and empty.using ThinkJulia\nfig10_1()<figure>\n  <img src=\"fig101.svg\" alt=\"State diagrams.\">\n  <figcaption>Figure 10.1. State diagrams.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig101}\n\\caption{State diagrams.}\n\\label{fig101}\n\\end{figure}Arrays are represented by boxes and the elements of the array inside. cheeses refers to an array with three elements indexed 1, 2 and 3. numbers contains two elements; the diagram shows that the value of the second element has been reassigned from 123 to 5. empty refers to an array with no elements.Array indices work the same way as string indices:Any integer expression can be used as an index.\nIf you try to read or write an element that does not exist, you get a BoundsError.\nThe keyword end points to the last index of the array.The ∈ operator also works on arrays:julia> \"Edam\" ∈ cheeses\ntrue\njulia> \"Brie\" in cheeses\nfalse"
},

{
    "location": "chap10.html#Traversing-an-array-1",
    "page": "Arrays",
    "title": "Traversing an array",
    "category": "section",
    "text": "The most common way to traverse the elements of an array is with a for loop. The syntax is the same as for strings:for cheese in cheeses\n    println(cheese)\nendThis works well if you only need to read the elements of the array. But if you want to write or update the elements, you need the indices. A common way to do that is to use the built-in function length:for i in 1:length(numbers)\n    numbers[i] = numbers[i] * 2\nendThis loop traverses the array and updates each element. length returns the number of elements in the array. Each time through the loop i gets the index of the next element. The assignment statement in the body uses i to read the old value of the element and to assign the new value.A for loop over an empty array never runs the body:for x in []\n    println(\"This can never happens.\")\nendAlthough an array can contain another array, the nested array still counts as a single element. The length of this array is four:[\"spam\", 1, [\"Brie\", \"Roquefort\", \"Camembert\"], [1, 2, 3]]"
},

{
    "location": "chap10.html#Array-slices-1",
    "page": "Arrays",
    "title": "Array slices",
    "category": "section",
    "text": "The slice operator also works on arrays:julia> t = [\'a\', \'b\', \'c\', \'d\', \'e\', \'f\'];\n\njulia> print(t[1:3])\n[\'a\', \'b\', \'c\']\njulia> print(t[3:end])\n[\'c\', \'d\', \'e\', \'f\']The slice operator [:], makes a copy of the whole array:julia> print(t[:])\n[\'a\', \'b\', \'c\', \'d\', \'e\', \'f\']Since arrays are mutable, it is often useful to make a copy before performing operations that modify arrays.A slice operator on the left side of an assignment can update multiple elements:julia> t[2:3] = [\'x\', \'y\'];\n\njulia> print(t)\n[\'a\', \'x\', \'y\', \'d\', \'e\', \'f\']"
},

{
    "location": "chap10.html#Array-library-functions-1",
    "page": "Arrays",
    "title": "Array library functions",
    "category": "section",
    "text": "Julia provides functions that operate on arrays. For example, push! adds a new element to the end of an array:julia> t = [\'a\', \'b\', \'c\'];\n\njulia> push!(t, \'d\');\n\njulia> print(t)\n[\'a\', \'b\', \'c\', \'d\']append! add the elements of the second array to the end of the first:julia> t1 = [\'a\', \'b\', \'c\'];\n\njulia> t2 = [\'d\', \'e\'];\n\njulia> append!(t1, t2);\n\njulia> print(t1)\n[\'a\', \'b\', \'c\', \'d\', \'e\']This example leaves t2 unmodified.sort! arranges the elements of the array from low to high:julia> t = [\'d\', \'c\', \'e\', \'b\', \'a\'];\n\njulia> sort!(t);\n\njulia> print(t)\n[\'a\', \'b\', \'c\', \'d\', \'e\']sort returns a copy of the elements of the array in order:julia> t1 = [\'d\', \'c\', \'e\', \'b\', \'a\'];\n\njulia> t2 = sort(t1);\n\njulia> print(t1)\n[\'d\', \'c\', \'e\', \'b\', \'a\']\njulia> print(t2)\n[\'a\', \'b\', \'c\', \'d\', \'e\']As a style convention in Julia, ! is appended to names of functions that modify their arguments."
},

{
    "location": "chap10.html#Map,-filter-and-reduce-1",
    "page": "Arrays",
    "title": "Map, filter and reduce",
    "category": "section",
    "text": "To add up all the numbers in an array, you can use a loop like this:function addall(t)\n    total = 0\n    for x in t\n        total += x\n    end\n    total\nendtotal is initialized to 0. Each time through the loop, x gets one element from the array. The += operator provides a short way to update a variable. This augmented assignment statement,total += xis equivalent tototal = total + xAs the loop runs, total accumulates the sum of the elements; a variable used this way is sometimes called an accumulator.Adding up the elements of an array is such a common operation that Julia provides it as a built-in function, sum:julia> t = [1, 2, 3, 4];\n\njulia> sum(t)\n10An operation like this that combines a sequence of elements into a single value is sometimes called reduce.Sometimes you want to traverse one array while building another. For example, the following function takes an array of strings and returns a new array that contains capitalized strings:function capitalizeall(t)\n    res = []\n    for s in t\n        push!(res, uppercase(s))\n    end\n    res\nendres is initialized with an empty array; each time through the loop, we append the next element. So res is another kind of accumulator.An operation like capitalizeall is sometimes called a map because it “maps” a function (in this case uppercase) onto each of the elements in a sequence.Another common operation is to select some of the elements from an array and return a subarray. For example, the following function takes an array of strings and returns a array that contains only the uppercase strings:function onlyupper(t)\n    res = []\n    for s in t\n        if s == uppercase(s)\n            push!(res, s)\n        end\n    end\n    res\nendAn operation like onlyupper is called a filter because it selects some of the elements and filters out the others.Most common array operations can be expressed as a combination of map, filter and reduce."
},

{
    "location": "chap10.html#Dot-syntax-1",
    "page": "Arrays",
    "title": "Dot syntax",
    "category": "section",
    "text": "For every binary operator like ^, there is a corresponding dot operator .^ that is automatically defined to perform ^ element-by-element on arrays. For example, [1, 2, 3] ^ 3 is not defined, but [1, 2, 3] .^ 3 is defined as computing the elementwise result [1^3, 2^3, 3^3]:julia> print([1, 2, 3] .^ 3)\n[1, 8, 27]Any Julia function f can be applied elementwise to any array with the dot syntax. For example to capitalize an array of strings, we don\'t need a loop:julia> t = uppercase.([\"abc\", \"def\", \"ghi\"]);\n\njulia> print(t)\nString[\"ABC\", \"DEF\", \"GHI\"]This is an elegant way to create a map. The function capitalizeall can be implemented by a one-liner:function capitalizeall(t)\n    uppercase.(t)\nend"
},

{
    "location": "chap10.html#Deleting-(inserting)-elements-1",
    "page": "Arrays",
    "title": "Deleting (inserting) elements",
    "category": "section",
    "text": "There are several ways to delete elements from an array. If you know the index of the element you want, you can use splice!:julia> t = [\'a\', \'b\', \'c\'];\n\njulia> splice!(t, 2)\n\'b\': ASCII/Unicode U+0062 (category Ll: Letter, lowercase)\njulia> print(t)\n[\'a\', \'c\']splice! modifies the array and returns the element that was removed.pop! deletes and returns the last element:julia> t = [\'a\', \'b\', \'c\'];\n\njulia> pop!(t)\n\'c\': ASCII/Unicode U+0063 (category Ll: Letter, lowercase)\njulia> print(t)\n[\'a\', \'b\']shift! deletes and returns the first element:julia> t = [\'a\', \'b\', \'c\'];\n\njulia> shift!(t)\n\'a\': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)\njulia> print(t)\n[\'b\', \'c\']The functions unshift! and push! insert an element at the beginning, respectively at the end of the array.If you don’t need the removed value, you can use the function deleteat!:julia> t = [\'a\', \'b\', \'c\'];\n\njulia> print(deleteat!(t, 2))\n[\'a\', \'c\']The function insert! inserts an element at a given index:julia> t = [\'a\', \'b\', \'c\'];\n\njulia> print(insert!(t, 2, \'x\'))\n[\'a\', \'x\', \'b\', \'c\']"
},

{
    "location": "chap10.html#Arrays-and-strings-1",
    "page": "Arrays",
    "title": "Arrays and strings",
    "category": "section",
    "text": "A string is a sequence of characters and an array is a sequence of values, but an array of characters is not the same as a string. To convert from a string to an array of characters, you can use the function collect:julia> t = collect(\"spam\");\n\njulia> print(t)\n[\'s\', \'p\', \'a\', \'m\']The collect function breaks a string or another sequence into individual elements.If you want to break a string into words, you can use the split function:julia> t = split(\"pining for the fjords\");\n\njulia> print(t)\nSubString{String}[\"pining\", \"for\", \"the\", \"fjords\"]An optional argument called a delimiter specifies which characters to use as word boundaries. The following example uses a hyphen as a delimiter:julia> t = split(\"spam-spam-spam\", \'-\');\n\njulia> print(t)\nSubString{String}[\"spam\", \"spam\", \"spam\"]join is the inverse of split. It takes an array of strings and concatenates the elements:julia> t = [\"pining\", \"for\", \"the\", \"fjords\"];\n\njulia> s = join(t, \' \')\n\"pining for the fjords\"In this case the delimiter is a space character. To concatenate strings without spaces, you don\'t specify a delimiter."
},

{
    "location": "chap10.html#Objects-and-values-1",
    "page": "Arrays",
    "title": "Objects and values",
    "category": "section",
    "text": "An object is something a variable can refer to. Until now, you could use “object” and “value” interchangeably.If we run these assignment statements:a = \"banana\"\nb = \"banana\"We know that a and b both refer to a string, but we don’t know whether they refer to the same string. There are two possible states, shown in Figure 10.2.using ThinkJulia\nfig10_2()<figure>\n  <img src=\"fig102.svg\" alt=\"State diagrams.\">\n  <figcaption>Figure 10.2. State diagrams.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig102}\n\\caption{State diagrams.}\n\\label{fig102}\n\\end{figure}In one case, a and b refer to two different objects that have the same value. In the second case, they refer to the same object.To check whether two variables refer to the same object, you can use the ≡ (\\equiv TAB) or === operator.DocTestSetup = quote\n    if VERSION < v\"0.7-\"\n        ≡(a::String, b::String) = a == b\n        ≡(a, b) = a === b\n    end\nendjulia> a = \"banana\"\n\"banana\"\njulia> b = \"banana\"\n\"banana\"\njulia> a ≡ b        # false for Julia v0.6\ntrueIn this example, Julia only created one string object, and both a and b refer to it. But when you create two arrays, you get two objects:julia> a = [1, 2, 3];\n\njulia> b = [1, 2, 3];\n\njulia> a ≡ b\nfalseSo the state diagram looks like Figure 10.3.using ThinkJulia\nfig10_3()<figure>\n  <img src=\"fig103.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 10.3. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig103}\n\\caption{State diagram.}\n\\label{fig103}\n\\end{figure}In this case we would say that the two arrays are equivalent, because they have the same elements, but not identical, because they are not the same object. If two objects are identical, they are also equivalent, but if they are equivalent, they are not necessarily identical.To be precise an object has a value. If you evaluate [1, 2, 3], you get an array object whose value is a sequence of integers. If another array has the same elements, we say it has the same value, but it is not the same object."
},

{
    "location": "chap10.html#Aliasing-1",
    "page": "Arrays",
    "title": "Aliasing",
    "category": "section",
    "text": "If a refers to an object and you assign b = a, then both variables refer to the same object:julia> a = [1, 2, 3];\n\njulia> b = a;\n\njulia> b ≡ a\ntrueThe state diagram looks like Figure 10.4.using ThinkJulia\nfig10_4()<figure>\n  <img src=\"fig104.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 10.4. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig104}\n\\caption{State diagram.}\n\\label{fig104}\n\\end{figure}The association of a variable with an object is called a reference. In this example, there are two references to the same object.An object with more than one reference has more than one name, so we say that the object is aliased.If the aliased object is mutable, changes made with one alias affect the other:julia> b[1] = 42\n42\njulia> print(a)\n[42, 2, 3]Although this behavior can be useful, it is error-prone. In general, it is safer to avoid aliasing when you are working with mutable objects.For immutable objects like strings, aliasing is not as much of a problem. In this example:a = \"banana\"\nb = \"banana\"It almost never makes a difference whether a and b refer to the same string or not."
},

{
    "location": "chap10.html#Array-arguments-1",
    "page": "Arrays",
    "title": "Array arguments",
    "category": "section",
    "text": "When you pass an array to a function, the function gets a reference to the array. If the function modifies the array, the caller sees the change. For example, deletehead! removes the first element from an array:function deletehead!(t)\n    shift!(t)\nendHere’s how it is used:DocTestSetup = quote\n    using ThinkJulia\nendjulia> letters = [\'a\', \'b\', \'c\'];\n\njulia> deletehead!(letters);\n\njulia> print(letters)\n[\'b\', \'c\']The parameter t and the variable letters are aliases for the same object. The stack diagram looks like Figure 10.5.using ThinkJulia\nfig10_5()<figure>\n  <img src=\"fig105.svg\" alt=\"Stack diagram.\">\n  <figcaption>Figure 10.5. Stack diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig105}\n\\caption{Stack diagram.}\n\\label{fig105}\n\\end{figure}Since the array is shared by two frames, I drew it between them.It is important to distinguish between operations that modify arrays and operations that create new arrays. For example, push! modifies an array, but vcat creates a new array.Here’s an example using push!:julia> t1 = [1, 2];\n\njulia> t2 = push!(t1, 3);\n\njulia> print(t1)\n[1, 2, 3]t2 is an alias of t1.Here’s an example using vcat:julia> t3 = vcat(t1, [4]);\n\njulia> print(t1)\n[1, 2, 3]\njulia> print(t3)\n[1, 2, 3, 4]The result of vcat is a new array, and the original array is unchanged.This difference is important when you write functions that are supposed to modify arrays.For example, this function does not delete the head of a array:function baddeletehead(t)\n    t[2:end]                # WRONG!\nendThe slice operator creates a new array and the assignment makes t refer to it, but that doesn’t affect the caller.julia> t4 = baddeletehead(t3);\n\njulia> print(t3)\n[1, 2, 3, 4]\njulia> print(t4)\n[2, 3, 4]At the beginning of baddeletehead, t and t3 refer to the same array. At the end, t refers to a new array, but t3 still refers to the original, unmodified array.An alternative is to write a function that creates and returns a new array. For example, tail returns all but the first element of an array:function tail(t)\n    t[2:end]\nendThis function leaves the original array unmodified. Here’s how it is used:julia> letters = [\'a\', \'b\', \'c\'];\n\njulia> rest = tail(letters);\n\njulia> print(rest)\n[\'b\', \'c\']"
},

{
    "location": "chap10.html#Debugging-1",
    "page": "Arrays",
    "title": "Debugging",
    "category": "section",
    "text": "Careless use of arrays (and other mutable objects) can lead to long hours of debugging. Here are some common pitfalls and ways to avoid them:Most array functions modify the argument. This is the opposite of the string functions, which return a new string and leave the original alone.\nIf you are used to writing string code like this:new_word = strip(word)It is tempting to write array code like this:t2 = sort!(t1)Because sort! returns the modified original array t1, t2 is an alias of t1.Before using array functions and operators, you should read the documentation carefully and then test them in interactive mode.Pick an idiom and stick with it.\nPart of the problem with arrays is that there are too many ways to do things. For example, to remove an element from an array, you can use pop!, shift!, delete_at, or even a slice assignment. To add an element, you can use push!, unshift!, insert or vcat. Assuming that t is an array and x is an array element, these are correct:insert!(t, 4, x)\npush!(t, x)\nappend!(t, [x])And these are wrong:insert!(t, 4, [x])         # WRONG!\npush!(t, [x])              # WRONG!\nvcat(t, [x])               # WRONG!Make copies to avoid aliasing.\nIf you want to use a function like sort! that modifies the argument, but you need to keep the original array as well, you can make a copy:julia> t = [3, 1, 2];\n\njulia> t2 = t[:];\n\njulia> sort!(t2);\n\njulia> print(t)\n[3, 1, 2]\njulia> print(t2)\n[1, 2, 3]In this example you could also use the built-in function sort, which returns a new, sorted array and leaves the original alone:julia> t2 = sort(t);\n\njulia> println(t)\n[3, 1, 2]\njulia> println(t2)\n[1, 2, 3]"
},

{
    "location": "chap10.html#Glossary-1",
    "page": "Arrays",
    "title": "Glossary",
    "category": "section",
    "text": "array: A sequence of values.element: One of the values in an array (or other sequence), also called items.nested array: An array that is an element of another array.accumulator: A variable used in a loop to add up or accumulate a result.augmented assignment: A statement that updates the value of a variable using an operator like +=.dot operator: Binary operator that is applied element-by-element to arrays.dot-syntax: Syntax used to apply a function elementwise to any array.reduce: A processing pattern that traverses a sequence and accumulates the elements into a single result.map: A processing pattern that traverses a sequence and performs an operation on each element.filter: A processing pattern that traverses a sequence and selects the elements that satisfy some criterion.object: Something a variable can refer to. An object has a type and a value.equivalent: Having the same value.identical: Being the same object (which implies equivalence).reference: The association between a variable and its value.aliasing: A circumstance where two or more variables refer to the same object.delimiter: A character or string used to indicate where a string should be split."
},

{
    "location": "chap10.html#Exercises-1",
    "page": "Arrays",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap10.html#Exercise-10-1-1",
    "page": "Arrays",
    "title": "Exercise 10-1",
    "category": "section",
    "text": "Write a function called nestedsum that takes an array of arrays of integers and adds up the elements from all of the nested arrays. For example:julia> t = [[1, 2], [3], [4, 5, 6]];\n\njulia> nestedsum(t)\n21"
},

{
    "location": "chap10.html#Exercise-10-2-1",
    "page": "Arrays",
    "title": "Exercise 10-2",
    "category": "section",
    "text": "Write a function called cumulsum that takes an array of numbers and returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements from the original array. For example:julia> t = [1, 2, 3];\n\njulia> print(cumulsum(t))\nAny[1, 3, 6]"
},

{
    "location": "chap10.html#Exercise-10-3-1",
    "page": "Arrays",
    "title": "Exercise 10-3",
    "category": "section",
    "text": "Write a function called interior that takes an array and returns a new array that contains all but the first and last elements. For example:julia> t = [1, 2, 3, 4];\n\njulia> print(interior(t))\n[2, 3]"
},

{
    "location": "chap10.html#Exercise-10-4-1",
    "page": "Arrays",
    "title": "Exercise 10-4",
    "category": "section",
    "text": "Write a function called interior! that takes an array, modifies it by removing the first and last elements, and returns nothing. For example:julia> t = [1, 2, 3, 4];\n\njulia> interior!(t)\n\njulia> print(t)\n[2, 3]"
},

{
    "location": "chap10.html#Exercise-10-5-1",
    "page": "Arrays",
    "title": "Exercise 10-5",
    "category": "section",
    "text": "Write a function called issort that takes an array as a parameter and returns true if the array is sorted in ascending order and false otherwise. For example:julia> issort([1, 2, 2])\ntrue\njulia> issort([\'b\', \'a\'])\nfalse"
},

{
    "location": "chap10.html#Exercise-10-6-1",
    "page": "Arrays",
    "title": "Exercise 10-6",
    "category": "section",
    "text": "Two words are anagrams if you can rearrange the letters from one to spell the other. Write a function called isanagram that takes two strings and returns true if they are anagrams."
},

{
    "location": "chap10.html#Exercise-10-7-1",
    "page": "Arrays",
    "title": "Exercise 10-7",
    "category": "section",
    "text": "Write a function called hasduplicates that takes an array and returns true if there is any element that appears more than once. It should not modify the original array."
},

{
    "location": "chap10.html#Exercise-10-8-1",
    "page": "Arrays",
    "title": "Exercise 10-8",
    "category": "section",
    "text": "This exercise pertains to the so-called Birthday Paradox, which you can read about at http://en.wikipedia.org/wiki/Birthday_paradox.If there are 23 students in your class, what are the chances that two of you have the same birthday? You can estimate this probability by generating random samples of 23 birthdays and checking for matches. Hint: you can generate random birthdays with rand(1:365)."
},

{
    "location": "chap10.html#Exercise-10-9-1",
    "page": "Arrays",
    "title": "Exercise 10-9",
    "category": "section",
    "text": "Write a function that reads the file words.txt and builds an array with one element per word. Write two versions of this function, one using push! and the other using the idiom t = [t..., x]. Which one takes longer to run? Why?"
},

{
    "location": "chap10.html#Exercise-10-10-1",
    "page": "Arrays",
    "title": "Exercise 10-10",
    "category": "section",
    "text": "To check whether a word is in the word array, you could use the ∈ operator, but it would be slow because it searches through the words in order.Because the words are in alphabetical order, we can speed things up with a bisection search (also known as binary search), which is similar to what you do when you look a word up in the dictionary. You start in the middle and check to see whether the word you are looking for comes before the word in the middle of the array. If so, you search the first half of the array the same way. Otherwise you search the second half.Either way, you cut the remaining search space in half. If the word array has 113,809 words, it will take about 17 steps to find the word or conclude that it’s not there.Write a function called inbisect that takes a sorted array and a target value and returns true if the word is in the array and false if it’s not."
},

{
    "location": "chap10.html#Exercise-10-11-1",
    "page": "Arrays",
    "title": "Exercise 10-11",
    "category": "section",
    "text": "Two words are a “reverse pair” if each is the reverse of the other. Write a program that finds all the reverse pairs in the word array."
},

{
    "location": "chap10.html#Exercise-10-12-1",
    "page": "Arrays",
    "title": "Exercise 10-12",
    "category": "section",
    "text": "Two words “interlock” if taking alternating letters from each forms a new word. For example, “shoe” and “cold” interlock to form “schooled”.Credit: This exercise is inspired by an example at http://puzzlers.org.Write a program that finds all pairs of words that interlock. Hint: don’t enumerate all pairs!\nCan you find any words that are three-way interlocked; that is, every third letter forms a word, starting from the first, second or third?"
},

{
    "location": "chap11.html#",
    "page": "Dictionaries",
    "title": "Dictionaries",
    "category": "page",
    "text": ""
},

{
    "location": "chap11.html#Dictionaries-1",
    "page": "Dictionaries",
    "title": "Dictionaries",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendThis chapter presents another built-in type called a dictionary. Dictionaries are one of Julia’s best features; they are the building blocks of many efficient and elegant algorithms."
},

{
    "location": "chap11.html#A-dictionary-is-a-mapping-1",
    "page": "Dictionaries",
    "title": "A dictionary is a mapping",
    "category": "section",
    "text": "A dictionary is like an array, but more general. In an array, the indices have to be integers; in a dictionary they can be (almost) any type.A dictionary contains a collection of indices, which are called keys, and a collection of values. Each key is associated with a single value. The association of a key and a value is called a key-value pair or sometimes an item.In mathematical language, a dictionary represents a mapping from keys to values, so you can also say that each key “maps to” a value. As an example, we’ll build a dictionary that maps from English to Spanish words, so the keys and the values are all strings.The function Dict creates a new dictionary with no items. Because Dict is the name of a built-in function, you should avoid using it as a variable name.julia> eng2sp = Dict()\nDict{Any,Any} with 0 entriesThe kind of dictionary is surrounded by curly brackets: the keys are of type Any and also the values are of type Any.The dictionary is empty. To add items to the dictionary, you can use square brackets:julia> eng2sp[\"one\"] = \"uno\";\nThis line creates an item that maps from the key \"one\" to the value \"uno\". If we print the dictionary again, we see a key-value pair with an arrow \"=>\" between the key and value:julia> eng2sp\nDict{Any,Any} with 1 entry:\n  \"one\" => \"uno\"This output format is also an input format. For example, you can create a new dictionary with three items:julia> eng2sp = Dict(\"one\" => \"uno\", \"two\" => \"dos\", \"three\" => \"tres\")\nDict{String,String} with 3 entries:\n  \"two\"   => \"dos\"\n  \"one\"   => \"uno\"\n  \"three\" => \"tres\"The order of the key-value pairs might not be the same. If you type the same example on your computer, you might get a different result. In general, the order of items in a dictionary is unpredictable.But that’s not a problem because the elements of a dictionary are never indexed with integer indices. Instead, you use the keys to look up the corresponding values:julia> eng2sp[\"two\"]\n\"dos\"The key \"two\" always maps to the value \"dos\" so the order of the items doesn’t matter.If the key isn’t in the dictionary, you get an exception:julia> eng2sp[\"four\"]\nERROR: KeyError: key \"four\" not foundThe length function works on dictionaries; it returns the number of key-value pairs:julia> length(eng2sp)\n3The function keys returns an array with the keys of the dictionary:julia> ks = keys(eng2sp);\n\njulia> print(ks)\nString[\"two\", \"one\", \"three\"]Now you can use the ∈ operator to see whether something appears as a key in the dictionary:julia> \"one\" ∈ ks\ntrue\njulia> \"uno\" ∈ ks\nfalseTo see whether something appears as a value in a dictionary, you can use the function values, which returns a collection of values, and then use the ∈ operator:julia> vs = values(eng2sp);\n\njulia> \"uno\" ∈ vs\ntrueThe ∈ operator uses different algorithms for arrays and dictionaries. For arrays, it searches the elements of the array in order, as in Section 8.6. As the array gets longer, the search time gets longer in direct proportion.For dictionaries, Julia uses an algorithm called a hashtable that has a remarkable property: the ∈ operator takes about the same amount of time no matter how many items are in the dictionary."
},

{
    "location": "chap11.html#Dictionary-as-a-collection-of-counters-1",
    "page": "Dictionaries",
    "title": "Dictionary as a collection of counters",
    "category": "section",
    "text": "Suppose you are given a string and you want to count how many times each letter appears. There are several ways you could do it:You could create 26 variables, one for each letter of the alphabet. Then you could traverse the string and, for each character, increment the corresponding counter, probably using a chained conditional.\nYou could create an array with 26 elements. Then you could convert each character to a number (using the built-in function Int), use the number as an index into the array, and increment the appropriate counter.\nYou could create a dictionary with characters as keys and counters as the corresponding values. The first time you see a character, you would add an item to the dictionary. After that you would increment the value of an existing item.Each of these options performs the same computation, but each of them implements that computation in a different way.An implementation is a way of performing a computation; some implementations are better than others. For example, an advantage of the dictionary implementation is that we don’t have to know ahead of time which letters appear in the string and we only have to make room for the letters that do appear.Here is what the code might look like:function histogram(s)\n    d = Dict()\n    for c in s\n        if c ∉ keys(d)\n            d[c] = 1\n        else\n            d[c] += 1\n        end\n    end\n    d\nendThe name of the function is histogram, which is a statistical term for a collection of counters (or frequencies).The first line of the function creates an empty dictionary. The for loop traverses the string. Each time through the loop, if the character c is not in the dictionary, we create a new item with key c and the initial value 1 (since we have seen this letter once). If c is already in the dictionary we increment d[c].Here’s how it works:julia> h = histogram(\"brontosaurus\")\nDict{Any,Any} with 8 entries:\n  \'n\' => 1\n  \'b\' => 1\n  \'o\' => 2\n  \'t\' => 1\n  \'a\' => 1\n  \'u\' => 2\n  \'s\' => 2\n  \'r\' => 2The histogram indicates that the letters \'a\' and \'b\' appear once; \'o\' appears twice, and so on.Dictionaries have a function called get that takes a key and a default value. If the key appears in the dictionary, get returns the corresponding value; otherwise it returns the default value. For example:julia> h = histogram(\"a\")\nDict{Any,Any} with 1 entry:\n  \'a\' => 1\njulia> get(h, \'a\', 0)\n1\njulia> get(h, \'b\', 0)\n0As an exercise, use get to write histogram more concisely. You should be able to eliminate the if statement."
},

{
    "location": "chap11.html#Looping-and-dictionaries-1",
    "page": "Dictionaries",
    "title": "Looping and dictionaries",
    "category": "section",
    "text": "You can traverse the keys of the dictionary in a for statement. For example, printhist prints each key and the corresponding value:function printhist(h)\n    for c in keys(h)\n        println(c, \" \", h[c])\n    end\nendHere’s what the output looks like:julia> h = histogram(\"parrot\");\n\njulia> printhist(h)\no 1\na 1\np 1\nt 1\nr 2Again, the keys are in no particular order. To traverse the keys in sorted order, you can combine sort! and collect:julia> for c in sort!(collect(keys(h)))\n           println(c, \" \", h[c])\n       end\na 1\no 1\np 1\nr 2\nt 1"
},

{
    "location": "chap11.html#Reverse-lookup-1",
    "page": "Dictionaries",
    "title": "Reverse lookup",
    "category": "section",
    "text": "Given a dictionary d and a key k, it is easy to find the corresponding value v = d[k]. This operation is called a lookup.But what if you have v and you want to find k? You have two problems: first, there might be more than one key that maps to the value v. Depending on the application, you might be able to pick one, or you might have to make an array that contains all of them. Second, there is no simple syntax to do a reverse lookup; you have to search.Here is a function that takes a value and returns the first key that maps to that value:function reverselookup(d, v)\n    for k in keys(d)\n        if d[k] == v\n            return k\n        end\n    end\n    error(\"LookupError\")\nendThis function is yet another example of the search pattern, but it uses a function we haven’t seen before, error. The error function is used to produce an ErrorException that interrupts the normal flow of control. In this case it has the message \"LookupError\", indicating that a key does not exist.If we get to the end of the loop, that means v doesn’t appear in the dictionary as a value, so we throw an exception.Here is an example of a successful reverse lookup:julia> h = histogram(\"parrot\");\n\njulia> key = reverselookup(h, 2)\n\'r\': ASCII/Unicode U+0072 (category Ll: Letter, lowercase)And an unsuccessful one:julia> key = reverselookup(h, 3)\nERROR: LookupError\nStacktrace:\n [1] reverselookup(::Dict{Any,Any}, ::Int64) at /Users/ben/.julia/v0.6/ThinkJulia/src/code/chap11.jl:21The effect when you generate an exception is the same as when Julia throws one: it prints a traceback and an error message.A reverse lookup is much slower than a forward lookup; if you have to do it often, or if the dictionary gets big, the performance of your program will suffer."
},

{
    "location": "chap11.html#Dictionaries-and-arrays-1",
    "page": "Dictionaries",
    "title": "Dictionaries and arrays",
    "category": "section",
    "text": "Arrays can appear as values in a dictionary. For example, if you are given a dictionary that maps from letters to frequencies, you might want to invert it; that is, create a dictionary that maps from frequencies to letters. Since there might be several letters with the same frequency, each value in the inverted dictionary should be an array of letters.Here is a function that inverts a dictionary:function invertdict(d)\n    inverse = Dict()\n    for key in keys(d)\n        val = d[key]\n        if val ∉ keys(inverse)\n            inverse[val] = [key]\n        else\n            push!(inverse[val], key)\n        end\n    end\n    inverse\nendEach time through the loop, key gets a key from d and val gets the corresponding value. If val is not in inverse, that means we haven’t seen it before, so we create a new item and initialize it with a singleton (an array that contains a single element). Otherwise we have seen this value before, so we append the corresponding key to the array.Here is an example:julia> hist = histogram(\"parrot\");\n\njulia> inverse = invertdict(hist)\nDict{Any,Any} with 2 entries:\n  2 => [\'r\']\n  1 => [\'o\', \'a\', \'p\', \'t\']using ThinkJulia\nfig11_1()<figure>\n  <img src=\"fig111.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 11.1. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig111}\n\\caption{State diagram.}\n\\label{fig111}\n\\end{figure}Figure 11.1 is a state diagram showing hist and inverse. A dictionary is represented as a box with the key-value pairs inside. If the values are integers, floats or strings, I draw them inside the box, but I usually draw arrays outside the box, just to keep the diagram simple.I mentioned earlier that a dictionary is implemented using a hashtable and that means that the keys have to be hashable.A hash is a function that takes a value (of any kind) and returns an integer. Dictionaries use these integers, called hash values, to store and look up key-value pairs."
},

{
    "location": "chap11.html#Memos-1",
    "page": "Dictionaries",
    "title": "Memos",
    "category": "section",
    "text": "If you played with the fibonacci function from Section 6.7, you might have noticed that the bigger the argument you provide, the longer the function takes to run. Furthermore, the run time increases quickly.To understand why, consider Figure 11.2, which shows the call graph for fibonacci with n = 4:using ThinkJulia\nfig11_2()<figure>\n  <img src=\"fig112.svg\" alt=\"Call graph.\">\n  <figcaption>Figure 11.2. Call graph.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig112}\n\\caption{Call graph.}\n\\label{fig112}\n\\end{figure}A call graph shows a set of function frames, with lines connecting each frame to the frames of the functions it calls. At the top of the graph, fibonacci with n = 4 calls fibonacci with  n = 3 and n = 2. In turn, fibonacci with n = 3 calls fibonacci with n = 2 and n = 1. And so on.Count how many times fibonacci(0) and fibonacci(1) are called. This is an inefficient solution to the problem, and it gets worse as the argument gets bigger.One solution is to keep track of values that have already been computed by storing them in a dictionary. A previously computed value that is stored for later use is called a memo. Here is a “memoized” version of fibonacci:known = Dict(0=>0, 1=>1)\n\nfunction fibonacci(n)\n    if n ∈ keys(known)\n        return known[n]\n    end\n    res = fibonacci(n-1) + fibonacci(n-2)\n    known[n] = res\n    res\nendknown is a dictionary that keeps track of the Fibonacci numbers we already know. It starts with two items: 0 maps to 0 and 1 maps to 1.Whenever fibonacci is called, it checks known. If the result is already there, it can return immediately. Otherwise it has to compute the new value, add it to the dictionary, and return it.If you run this version of fibonacci and compare it with the original, you will find that it is much faster."
},

{
    "location": "chap11.html#Global-variables-1",
    "page": "Dictionaries",
    "title": "Global variables",
    "category": "section",
    "text": "In the previous example, known is created outside the function, so it belongs to the special frame called __main__. Variables in __main__ are sometimes called global because they can be accessed from any function. Unlike local variables, which disappear when their function ends, global variables persist from one function call to the next.It is common to use global variables for flags; that is, boolean variables that indicate (“flag”) whether a condition is true. For example, some programs use a flag named verbose to control the level of detail in the output:verbose = true\n\nfunction example1()\n    if verbose\n        println(\"Running example1\")\n    end\nendIf you try to reassign a global variable, you might be surprised. The following example is supposed to keep track of whether the function has been called:been_called = false\n\nfunction example2()\n    been_called = true         # WRONG\nendBut if you run it you will see that the value of been_called doesn’t change. The problem is that example2 creates a new local variable named been_called. The local variable goes away when the function ends, and has no effect on the global variable.To reassign a global variable inside a function you have to declare the global variable before you use it:been_called = false\n\nfunction example2()\n    global been_called\n    been_called = true\nendThe global statement tells the interpreter something like, “In this function, when I say been_called, I mean the global variable; don’t create a local one.”Here’s an example that tries to update a global variable:count = 0\n\nfunction example3()\n    count = count + 1          # WRONG\nendIf you run it you get:ERROR: UndefVarError: count not definedJulia assumes that count is local, and under that assumption you are reading it before writing it. The solution, again, is to declare count global.count = 0\n\nfunction example3()\n    global count\n    count += 1\nendIf a global variable refers to a mutable value, you can modify the value without declaring the variable:known = Dict(0=>0, 1=>1)\n\nfunction example4()\n    known[2] = 1\nendSo you can add, remove and replace elements of a global array or dictionary, but if you want to reassign the variable, you have to declare it:known = Dict(0=>0, 1=>1)\n\nfunction example5()\n    global known\n    known = Dict()\nendGlobal variables can be useful, but if you have a lot of them, and you modify them frequently, they can make programs hard to debug and perform badly.In almost all code (and particularly performance sensitive code) global variables should be declared constant:const known = Dict(0=>0, 1=>1)\n\nfunction fibonacci(n)\n    if n ∉ keys(known)\n        known[n] = fibonacci(n-1) + fibonacci(n-2)\n    end\n    known[n]\nendHere is a function that tries to reassign a constant global variable:const known = Dict(0=>0, 1=>1)\n\nfunction example5()\n    global known\n    known = Dict()\nendIf you run this an exception is generated:ERROR: invalid redefinition of constant known"
},

{
    "location": "chap11.html#Debugging-1",
    "page": "Dictionaries",
    "title": "Debugging",
    "category": "section",
    "text": "As you work with bigger datasets it can become unwieldy to debug by printing and checking the output by hand. Here are some suggestions for debugging large datasets:Scale down the input:If possible, reduce the size of the dataset. For example if the program reads a text file, start with just the first 10 lines, or with the smallest example you can find. You can either edit the files themselves, or (better) modify the program so it reads only the first n lines. If there is an error, you can reduce n to the smallest value that manifests the error, and then increase it gradually as you find and correct errors.Check summaries and types:Instead of printing and checking the entire dataset, consider printing summaries of the data: for example, the number of items in a dictionary or the total of an array of numbers. A common cause of runtime errors is a value that is not the right type. For debugging this kind of error, it is often enough to print the type of a value.Write self-checks:Sometimes you can write code to check for errors automatically. For example, if you are computing the average of an array of numbers, you could check that the result is not greater than the largest element in the array or less than the smallest. This is called a “sanity check” because it detects results that are “insane”. Another kind of check compares the results of two different computations to see if they are consistent. This is called a “consistency check”.Format the output:Formatting debugging output can make it easier to spot an error. We saw an example in Section 6.9. Again, time you spend building scaffolding can reduce the time you spend debugging."
},

{
    "location": "chap11.html#Glossary-1",
    "page": "Dictionaries",
    "title": "Glossary",
    "category": "section",
    "text": "mapping: A relationship in which each element of one set corresponds to an element of another set.dictionary: A mapping from keys to their corresponding values.key-value pair: The representation of the mapping from a key to a value.item: In a dictionary, another name for a key-value pair.key: An object that appears in a dictionary as the first part of a key-value pair.value: An object that appears in a dictionary as the second part of a key-value pair. This is more specific than our previous use of the word “value”.implementation: A way of performing a computation.hashtable: The algorithm used to implement Python dictionaries.hash function: A function used by a hashtable to compute the location for a key.hashable: A type that has a hash function. Immutable types like integers, floats and strings are hashable; mutable types like arrays and dictionaries are not.lookup: A dictionary operation that takes a key and finds the corresponding value.reverse lookup: A dictionary operation that takes a value and finds one or more keys that map to it.singleton: An array (or other sequence) with a single element.call graph: A diagram that shows every frame created during the execution of a program, with an arrow from each caller to each callee.memo: A computed value stored to avoid unnecessary future computation.global variable: A variable defined outside a function. Global variables can be accessed from any function.global statement: A statement that declares a variable name global.flag: A boolean variable used to indicate whether a condition is true.declaration: A statement like global that tells the interpreter something about a variable.constant global variable: A global variable that can not be reassigned."
},

{
    "location": "chap11.html#Exercises-1",
    "page": "Dictionaries",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap11.html#Exercise-11-1-1",
    "page": "Dictionaries",
    "title": "Exercise 11-1",
    "category": "section",
    "text": "Write a function that reads the words in words.txt and stores them as keys in a dictionary. It doesn’t matter what the values are. Then you can use the ∈ operator as a fast way to check whether a string is in the dictionary.If you did Exercise 10-10, you can compare the speed of this implementation with the array ∈ operator and the bisection search."
},

{
    "location": "chap11.html#Exercise-11-2-1",
    "page": "Dictionaries",
    "title": "Exercise 11-2",
    "category": "section",
    "text": "Read the documentation of the dictionary function get! and use it to write a more concise version of invert_dict."
},

{
    "location": "chap11.html#Exercise-11-3-1",
    "page": "Dictionaries",
    "title": "Exercise 11-3",
    "category": "section",
    "text": "Memoize the Ackermann function from Exercise 6-2 and see if memoization makes it possible to evaluate the function with bigger arguments. Hint: no."
},

{
    "location": "chap11.html#Exercise-11-4-1",
    "page": "Dictionaries",
    "title": "Exercise 11-4",
    "category": "section",
    "text": "If you did Exercise 10-7, you already have a function named hasduplicates that takes an array as a parameter and returns true if there is any object that appears more than once in the array.Use a dictionary to write a faster, simpler version of hasduplicates."
},

{
    "location": "chap11.html#Exercise-11-5-1",
    "page": "Dictionaries",
    "title": "Exercise 11-5",
    "category": "section",
    "text": "Two words are “rotate pairs” if you can rotate one of them and get the other (see rotateword in Exercise 8.5).Write a program that reads a word array and finds all the rotate pairs."
},

{
    "location": "chap11.html#Exercise-11-6-1",
    "page": "Dictionaries",
    "title": "Exercise 11-6",
    "category": "section",
    "text": "Here’s another Puzzler from Car Talk (http://www.cartalk.com/content/puzzlers):This was sent in by a fellow named Dan O’Leary. He came upon a common one-syllable, five-letter word recently that has the following unique property. When you remove the first letter, the remaining letters form a homophone of the original word, that is a word that sounds exactly the same. Replace the first letter, that is, put it back and remove the second letter and the result is yet another homophone of the original word. And the question is, what’s the word? Now I’m going to give you an example that doesn’t work. Let’s look at the five-letter word, ‘wrack.’ W-R-A-C-K, you know like to ‘wrack with pain.’ If I remove the first letter, I am left with a four-letter word, ’R-A-C-K.’ As in, ‘Holy cow, did you see the rack on that buck! It must have been a nine-pointer!’ It’s a perfect homophone. If you put the ‘w’ back, and remove the ‘r,’ instead, you’re left with the word, ‘wack,’ which is a real word, it’s just not a homophone of the other two words. But there is, however, at least one word that Dan and we know of, which will yield two homophones if you remove either of the first two letters to make two, new four-letter words. The question is, what’s the word?You can use the dictionary from Exercise 11-1 to check whether a string is in the word array.To check whether two words are homophones, you can use the CMU Pronouncing Dictionary. You can download it from http://www.speech.cs.cmu.edu/cgi-bin/cmudict.Write a program that lists all the words that solve the Puzzler."
},

{
    "location": "chap12.html#",
    "page": "Tuples",
    "title": "Tuples",
    "category": "page",
    "text": ""
},

{
    "location": "chap12.html#Tuples-1",
    "page": "Tuples",
    "title": "Tuples",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendThis chapter presents one more built-in type, the tuple, and then shows how arrays, dictionaries, and tuples work together. I also present a useful feature for variable-length argument arrays, the gather and scatter operators.One note: there is no consensus on how to pronounce “tuple”. Some people say “tuh-ple”, which rhymes with “supple”. But in the context of programming, most people say “too-ple”, which rhymes with “quadruple”."
},

{
    "location": "chap12.html#Tuples-are-immutable-1",
    "page": "Tuples",
    "title": "Tuples are immutable",
    "category": "section",
    "text": "A tuple is a sequence of values. The values can be any type, and they are indexed by integers, so in that respect tuples are a lot like arrays. The important difference is that tuples are immutable.Syntactically, a tuple is a comma-separated list of values:julia> t = \'a\', \'b\', \'c\', \'d\', \'e\'\n(\'a\', \'b\', \'c\', \'d\', \'e\')Although it is not necessary, it is common to enclose tuples in parentheses:julia> t = (\'a\', \'b\', \'c\', \'d\', \'e\')\n(\'a\', \'b\', \'c\', \'d\', \'e\')To create a tuple with a single element, you have to include a final comma:julia> t1 = (\'a\',)\n(\'a\',)\njulia> typeof(t1)\nTuple{Char}A value in parentheses is not a tuple:julia> t2 = (\'a\')\n\'a\': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)\njulia> typeof(t2)\nCharAnother way to create a tuple is the built-in function tuple. With no argument, it creates an empty tuple:julia> tuple()\n()If multiple arguments are provided, the result is a tuple with the given arguments:julia> t3 = tuple(1, \'a\', pi)\n(1, \'a\', π = 3.1415926535897...)Because tuple is the name of a built-in function, you should avoid using it as a variable name.Most array operators also work on tuples. The bracket operator indexes an element:julia> t = (\'a\', \'b\', \'c\', \'d\', \'e\');\n\njulia> t[1]\n\'a\': ASCII/Unicode U+0061 (category Ll: Letter, lowercase)And the slice operator selects a range of elements:julia> t[2:4]\n(\'b\', \'c\', \'d\')But if you try to modify one of the elements of the tuple, you get an error:julia> t[0] = \'A\'\nERROR: MethodError: no method matching setindex!(::NTuple{5,Char}, ::Char, ::Int64)Because tuples are immutable, you can’t modify the elements.The relational operators work with tuples and other sequences; Julia starts by comparing the first element from each sequence. If they are equal, it goes on to the next elements, and so on, until it finds elements that differ. Subsequent elements are not considered (even if they are really big).julia> (0, 1, 2) < (0, 3, 4)\ntrue\njulia> (0, 1, 2000000) < (0, 3, 4)\ntrue"
},

{
    "location": "chap12.html#Tuple-assignment-1",
    "page": "Tuples",
    "title": "Tuple assignment",
    "category": "section",
    "text": "It is often useful to swap the values of two variables. With conventional assignments, you have to use a temporary variable. For example, to swap a and b:temp = a\na = b\nb = tempThis solution is cumbersome; tuple assignment is more elegant:a, b = b, aThe left side is a tuple of variables; the right side is a tuple of expressions. Each value is assigned to its respective variable. All the expressions on the right side are evaluated before any of the assignments.The number of variables on the left and the number of values on the right have to be the same:julia> a, b, c = 1, 2\nERROR: BoundsError: attempt to access (1, 2)\n  at index [3]More generally, the right side can be any kind of sequence (string, array or tuple). For example, to split an email address into a user name and a domain, you could write:julia> addr = \"julius.caesar@rome\"\n\"julius.caesar@rome\"\njulia> uname, domain = split(addr, \'@\');\nThe return value from split is an array with two elements; the first element is assigned to uname, the second to domain.julia> uname\n\"julius.caesar\"\njulia> domain\n\"rome\""
},

{
    "location": "chap12.html#Tuples-as-return-values-1",
    "page": "Tuples",
    "title": "Tuples as return values",
    "category": "section",
    "text": "Strictly speaking, a function can only return one value, but if the value is a tuple, the effect is the same as returning multiple values. For example, if you want to divide two integers and compute the quotient and remainder, it is inefficient to compute x ÷ y and then x % y. It is better to compute them both at the same time.The built-in function divrem takes two arguments and returns a tuple of two values, the quotient and remainder. You can store the result as a tuple:julia> t = divrem(7, 3)\n(2, 1)Or use tuple assignment to store the elements separately:julia> quot, rem = divrem(7, 3);\n\njulia> println(quot)\n2\njulia> println(rem)\n1Here is an example of a function that returns a tuple:function min_max(t)\n    minimum(t), maximum(t)\nendmaximum and mininimum are built-in functions that find the largest and smallest elements of a sequence. min_max computes both and returns a tuple of two values."
},

{
    "location": "chap12.html#Variable-length-argument-tuples-1",
    "page": "Tuples",
    "title": "Variable-length argument tuples",
    "category": "section",
    "text": "Functions can take a variable number of arguments. A parameter name that ends with ... gathers arguments into a tuple. For example, printall takes any number of arguments and prints them:function printall(args...)\n    println(args)\nendThe gather parameter can have any name you like, but args is conventional. Here’s how the function works:julia> printall(1, 2.0, \'3\')\n(1, 2.0, \'3\')The complement of gather is scatter. If you have a sequence of values and you want to pass it to a function as multiple arguments, you can use the ... operator. For example, divrem takes exactly two arguments; it doesn’t work with a tuple:julia> t = (7, 3);\n\njulia> divrem(t)\nERROR: MethodError: no method matching divrem(::Tuple{Int64,Int64})But if you scatter the tuple, it works:julia> divrem(t...)\n(2, 1)Many of the built-in functions use variable-length argument tuples. For example, max and min can take any number of arguments:julia> max(1, 2, 3)\n3But sum does not:julia> sum(1, 2, 3)\nERROR: MethodError: no method matching sum(::Int64, ::Int64, ::Int64)As an exercise, write a function called sumall that takes any number of arguments and returns their sum."
},

{
    "location": "chap12.html#Arrays-and-tuples-1",
    "page": "Tuples",
    "title": "Arrays and tuples",
    "category": "section",
    "text": "zip is a built-in function that takes two or more sequences and returns an array of tuples where each tuple contains one element from each sequence. The name of the function refers to a zipper, which joins and interleaves two rows of teeth.This example zips a string and an array:julia> s = \"abc\";\n\njulia> t = [1, 2, 3];\n\njulia> zip(s, t)\nBase.Iterators.Zip2{String,Array{Int64,1}}(\"abc\", [1, 2, 3])The result is a zip object that knows how to iterate through the pairs. The most common use of zip is in a for loop:julia> for pair in zip(s, t)\n           println(pair)\n       end\n(\'a\', 1)\n(\'b\', 2)\n(\'c\', 3)A zip object is a kind of iterator, which is any object that iterates through a sequence. Iterators are similar to arrays in some ways, but unlike arrays, you can’t use an index to select an element from an iterator.If you want to use array operators and functions, you can use a zip object to make an array:julia> collect(zip(s, t))\n3-element Array{Tuple{Char,Int64},1}:\n (\'a\', 1)\n (\'b\', 2)\n (\'c\', 3)The result is an array of tuples; in this example, each tuple contains a character from the string and the corresponding element from the array.If the sequences are not the same length, the result has the length of the shorter one.julia> collect(zip(\"Anne\", \"Elk\"))\n3-element Array{Tuple{Char,Char},1}:\n (\'A\', \'E\')\n (\'n\', \'l\')\n (\'n\', \'k\')You can use tuple assignment in a for loop to traverse an array of tuples:julia> t = [(\'a\', 1), (\'b\', 2), (\'c\', 3)];\n\njulia> for (letter, number) in t\n           println(number, \" \", letter)\n       end\n1 a\n2 b\n3 cEach time through the loop, Julia selects the next tuple in the array and assigns the elements to letter and number. The parentheses around (letter, number) are compulsory.If you combine zip, for and tuple assignment, you get a useful idiom for traversing two (or more) sequences at the same time. For example, hasmatch takes two sequences, t1 and t2, and returns true if there is an index i such that t1[i] == t2[i]:function has_match(t1, t2)\n    for (x, y) in zip(t1, t2)\n        if x == y\n            return true\n        end\n    end\n    false\nendIf you need to traverse the elements of a sequence and their indices, you can use the built-in function enumerate:julia> for (index, element) in enumerate(\"abc\")\n           println(index, \" \", element)\n       end\n1 a\n2 b\n3 cThe result from enumerate is an enumerate object, which iterates a sequence of pairs; each pair contains an index (starting from 1) and an element from the given sequence."
},

{
    "location": "chap12.html#Dictionaries-and-tuples-1",
    "page": "Tuples",
    "title": "Dictionaries and tuples",
    "category": "section",
    "text": "Dictionaries can be used as iterators that iterates the key-value pairs. You can use it in a for loop like this:julia> d = Dict(\'a\'=>1, \'b\'=>2, \'c\'=>3);\n\njulia> for (key, value) in d\n           println(key, \" \", value)\n       end\nb 2\na 1\nc 3As you should expect from a dictionary, the items are in no particular order.Going in the other direction, you can use an array of tuples to initialize a new dictionary:julia> t = [(\'a\', 1), (\'c\', 3), (\'b\', 2)];\n\njulia> d = Dict(t)\nDict{Char,Int64} with 3 entries:\n  \'b\' => 2\n  \'a\' => 1\n  \'c\' => 3Combining Dict with zip yields a concise way to create a dictionary:julia> d = Dict(zip(\"abc\", 1:3))\nDict{Char,Int64} with 3 entries:\n  \'b\' => 2\n  \'a\' => 1\n  \'c\' => 3It is common to use tuples as keys in dictionaries. For example, a telephone directory might map from last-name, first-name pairs to telephone numbers. Assuming that we have defined last, first and number, we could write:directory[last, first] = numberThe expression in brackets is a tuple. We could use tuple assignment to traverse this dictionary.for ((last, first), number) in directory\n    println(first, \" \", last, \" \", number)\nendThis loop traverses the key-value pairs in directory, which are tuples. It assigns the elements of the key in each tuple to last and first, and the value to number, then prints the name and corresponding telephone number.There are two ways to represent tuples in a state diagram. The more detailed version shows the indices and elements just as they appear in an array. For example, the tuple (\"Cleese\", \"John\") would appear as in Figure 12.1.using ThinkJulia\nfig12_1()<figure>\n  <img src=\"fig121.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 12.1. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig121}\n\\caption{State diagram.}\n\\label{fig121}\n\\end{figure}But in a larger diagram you might want to leave out the details. For example, a diagram of the telephone directory might appear as in Figure 12.2.using ThinkJulia\nfig12_2()<figure>\n  <img src=\"fig122.svg\" alt=\"State diagram.\">\n  <figcaption>Figure 12.2. State diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig122}\n\\caption{State diagram.}\n\\label{fig122}\n\\end{figure}Here the tuples are shown using Julia syntax as a graphical shorthand. The telephone number in the diagram is the complaints line for the BBC, so please don’t call it."
},

{
    "location": "chap12.html#Sequences-of-sequences-1",
    "page": "Tuples",
    "title": "Sequences of sequences",
    "category": "section",
    "text": "I have focused on arrays of tuples, but almost all of the examples in this chapter also work with arrays of arrays, tuples of tuples, and tuples of arrays. To avoid enumerating the possible combinations, it is sometimes easier to talk about sequences of sequences.In many contexts, the different kinds of sequences (strings, arrays and tuples) can be used interchangeably. So how should you choose one over the others?To start with the obvious, strings are more limited than other sequences because the elements have to be characters. They are also immutable. If you need the ability to change the characters in a string (as opposed to creating a new string), you might want to use an array of characters instead.Arrays are more common than tuples, mostly because they are mutable. But there are a few cases where you might prefer tuples:In some contexts, like a return statement, it is syntactically simpler to create a tuple than an array.\nIf you are passing a sequence as an argument to a function, using tuples reduces the potential for unexpected behavior due to aliasing.Because tuples are immutable, they don’t provide function like sort! and reverse!, which modify existing arrays. But Julia provides the built-in function sort, which takes an array and returns a new array with the same elements in sorted order, and reverse, which takes any sequence and returns a sequence of the same type in reverse order."
},

{
    "location": "chap12.html#Debugging-1",
    "page": "Tuples",
    "title": "Debugging",
    "category": "section",
    "text": "Arrays, dictionaries and tuples are examples of data structures; in this lecture we are starting to see compound data structures, like arrays of tuples, or dictionaries that contain tuples as keys and arrays as values. Compound data structures are useful, but they are prone to what I call shape errors; that is, errors caused when a data structure has the wrong type, size, or structure. For example, if you are expecting an array with one integer and I give you a plain old integer (not in an array), it won’t work."
},

{
    "location": "chap12.html#Glossary-1",
    "page": "Tuples",
    "title": "Glossary",
    "category": "section",
    "text": "tuple: An immutable sequence of elements.tuple assignment: An assignment with a sequence on the right side and a tuple of variables on the left. The right side is evaluated and then its elements are assigned to the variables on the left.gather: The operation of assembling a variable-length argument tuple.scatter: The operation of treating a sequence as a list of arguments.zip object: The result of calling a built-in function zip; an object that iterates through a sequence of tuples.iterator: An object that can iterate through a sequence, but which does not provide array operators and functions.data structure: A collection of related values, often organized in array, dictionaries, tuples, etc.shape error: An error caused because a value has the wrong shape; that is, the wrong type or size."
},

{
    "location": "chap12.html#Exercises-1",
    "page": "Tuples",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap12.html#Exercise-1-1",
    "page": "Tuples",
    "title": "Exercise 1",
    "category": "section",
    "text": "Write a function called mostfrequent that takes a string and prints the letters in decreasing order of frequency. Find text samples from several different languages and see how letter frequency varies between languages. Compare your results with the tables at http://en.wikipedia.org/wiki/Letter_frequencies."
},

{
    "location": "chap12.html#Exercise-2-1",
    "page": "Tuples",
    "title": "Exercise 2",
    "category": "section",
    "text": "More anagrams!Write a program that reads a word list from a file (see Section 9.1) and prints all the sets of words that are anagrams.\nHere is an example of what the output might look like:[\"deltas\", \"desalt\", \"lasted\", \"salted\", \"slated\", \"staled\"]\n[\"retainers\", \"ternaries\"]\n[\"generating\", \"greatening\"]\n[\"resmelts\", \"smelters\", \"termless\"]Hint: you might want to build a dictionary that maps from a collection of letters to a list of words that can be spelled with those letters. The question is, how can you represent the collection of letters in a way that can be used as a key?Modify the previous program so that it prints the longest list of anagrams first, followed by the second longest, and so on.\nIn Scrabble a “bingo” is when you play all seven tiles in your rack, along with a letter on the board, to form an eight-letter word. What collection of 8 letters forms the most possible bingos? Hint: there are seven."
},

{
    "location": "chap12.html#Exercise-3-1",
    "page": "Tuples",
    "title": "Exercise 3",
    "category": "section",
    "text": "Two words form a “metathesis pair” if you can transform one into the other by swapping two letters; for example, “converse” and “conserve”. Write a program that finds all of the metathesis pairs in the dictionary. Hint: don’t test all pairs of words, and don’t test all possible swaps. Credit: This exercise is inspired by an example at http://puzzlers.org."
},

{
    "location": "chap12.html#Exercise-4-1",
    "page": "Tuples",
    "title": "Exercise 4",
    "category": "section",
    "text": "Here’s another Car Talk Puzzler (http://www.cartalk.com/content/puzzlers):What is the longest English word, that remains a valid English word, as you remove its letters one at a time? Now, letters can be removed from either end, or the middle, but you can’t rearrange any of the letters. Every time you drop a letter, you wind up with another English word. If you do that, you’re eventually going to wind up with one letter and that too is going to be an English word—one that’s found in the dictionary. I want to know what’s the longest word and how many letters does it have? I’m going to give you a little modest example: Sprite. Ok? You start off with sprite, you take a letter off, one from the interior of the word, take the r away, and we’re left with the word spite, then we take the e off the end, we’re left with spit, we take the s off, we’re left with pit, it, and I.Write a program to find all words that can be reduced in this way, and then find the longest one.This exercise is a little more challenging than most, so here are some suggestions:You might want to write a function that takes a word and computes a list of all the words that can be formed by removing one letter. These are the “children” of the word.\nRecursively, a word is reducible if any of its children are reducible. As a base case, you can consider the empty string reducible.\nThe wordlist I provided, words.txt, doesn’t contain single letter words. So you might want to add “I”, “a”, and the empty string.\nTo improve the performance of your program, you might want to memoize the words that are known to be reducible."
},

{
    "location": "chap13.html#",
    "page": "Case study: data structure selection",
    "title": "Case study: data structure selection",
    "category": "page",
    "text": ""
},

{
    "location": "chap13.html#Case-study:-data-structure-selection-1",
    "page": "Case study: data structure selection",
    "title": "Case study: data structure selection",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\n    dir = Pkg.dir(\"ThinkJulia\")\n    hist = processfile(dir * \"/data/emma.txt\");\nendAt this point you have learned about Julia’s core data structures, and you have seen some of the algorithms that use them.This chapter presents a case study with exercises that let you think about choosing data structures and practice using them."
},

{
    "location": "chap13.html#Word-frequency-analysis-1",
    "page": "Case study: data structure selection",
    "title": "Word frequency analysis",
    "category": "section",
    "text": "As usual, you should at least attempt the exercises before you read my solutions."
},

{
    "location": "chap13.html#Exercise-1-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 1",
    "category": "section",
    "text": "Write a program that reads a file, breaks each line into words, strips whitespace and punctuation from the words, and converts them to lowercase.Hint: the function isalpha tests whether a character is alphabetic."
},

{
    "location": "chap13.html#Exercise-2-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 2",
    "category": "section",
    "text": "Go to Project Gutenberg (http://gutenberg.org) and download your favorite out-of-copyright book in plain text format.Modify your program from the previous exercise to read the book you downloaded, skip over the header information at the beginning of the file, and process the rest of the words as before.Then modify the program to count the total number of words in the book, and the number of times each word is used.Print the number of different words used in the book. Compare different books by different authors, written in different eras. Which author uses the most extensive vocabulary?"
},

{
    "location": "chap13.html#Exercise-3-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 3",
    "category": "section",
    "text": "Modify the program from the previous exercise to print the 20 most frequently used words in the book."
},

{
    "location": "chap13.html#Exercise-4-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 4",
    "category": "section",
    "text": "Modify the previous program to read a word list and then print all the words in the book that are not in the word list. How many of them are typos? How many of them are common words that should be in the word list, and how many of them are really obscure?"
},

{
    "location": "chap13.html#Random-numbers-1",
    "page": "Case study: data structure selection",
    "title": "Random numbers",
    "category": "section",
    "text": "Given the same inputs, most computer programs generate the same outputs every time, so they are said to be deterministic. Determinism is usually a good thing, since we expect the same calculation to yield the same result. For some applications, though, we want the computer to be unpredictable. Games are an obvious example, but there are more.Making a program truly nondeterministic turns out to be difficult, but there are ways to make it at least seem nondeterministic. One of them is to use algorithms that generate pseudorandom numbers. Pseudorandom numbers are not truly random because they are generated by a deterministic computation, but just by looking at the numbers it is all but impossible to distinguish them from random.The function rand returns a random float between 0.0 and 1.0 (including 0.0 but not 1.0). Each time you call random, you get the next number in a long series. To see a sample, run this loop:for i in 1:10\n    x = rand()\n    println(x)\nendThe function rand can take an iterator or array as argument and returns a random element:for i in 1:10\n    x = rand(1:6)\n    print(x, \" \")\nendThe Distributions module also provides functions to generate random values from discrete or continuous distributions including Gaussian, exponential, gamma, and a few more."
},

{
    "location": "chap13.html#Exercise-5-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 5",
    "category": "section",
    "text": "Write a function named choosefromhist that takes a histogram as defined in Section 11.2 and returns a random value from the histogram, chosen with probability in proportion to frequency. For example, for this histogram:julia> t = [\'a\', \'a\', \'b\'];\n\njulia> histogram(t)\nDict{Any,Any} with 2 entries:\n  \'b\' => 1\n  \'a\' => 2your function should return \'a\' with probability frac23 and \'b\' with probability frac13."
},

{
    "location": "chap13.html#Word-histogram-1",
    "page": "Case study: data structure selection",
    "title": "Word histogram",
    "category": "section",
    "text": "You should attempt the previous exercises before you go on. You will also need https://github.com/BenLauwens/ThinkJulia.jl/data/emma.txt.Here is a program that reads a file and builds a histogram of the words in the file:function processfile(filename)\n    hist = Dict()\n    for line in eachline(filename)\n        processline(line, hist)\n    end\n    hist\nend\n\nfunction processline(line, hist)\n    line = replace(line, \'-\', \' \')\n    for word in split(line)\n        word = string(filter(isalpha, [word...])...)\n        word = lowercase(word)\n        hist[word] = get!(hist, word, 0) + 1\n    end\nend\n\nhist = processfile(\"emma.txt\")This program reads emma.txt, which contains the text of Emma by Jane Austen.processfile loops through the lines of the file, passing them one at a time to process_line. The histogram hist is being used as an accumulator.processline uses the string method replace to replace hyphens with spaces before using split to break the line into an array of strings. It traverses the array of words and uses filter, isalpha and lowercase to remove punctuation and convert to lower case. (It is a shorthand to say that strings are “converted”; remember that strings are immutable, so a function like lowercase return new strings.)Finally, processline updates the histogram by creating a new item or incrementing an existing one.To count the total number of words in the file, we can add up the frequencies in the histogram:function totalwords(hist)\n    sum(values(hist))\nendThe number of different words is just the number of items in the dictionary:function differentwords(hist)\n    length(hist)\nendHere is some code to print the results:julia> println(\"Total number of words: \", totalwords(hist))\nTotal number of words: 162742\n\njulia> println(\"Number of different words: \", differentwords(hist))\nNumber of different words: 7380"
},

{
    "location": "chap13.html#Most-common-words-1",
    "page": "Case study: data structure selection",
    "title": "Most common words",
    "category": "section",
    "text": "To find the most common words, we can make an array of tuples, where each tuple contains a word and its frequency, and sort it. The following function takes a histogram and returns an array of word-frequency tuples:function mostcommon(hist)\n    t = []\n    for (key, value) in hist\n        push!(t, (value, key))\n    end\n    reverse!(sort!(t))\nendIn each tuple, the frequency appears first, so the resulting array is sorted by frequency. Here is a loop that prints the ten most common words:t = mostcommon(hist)\nprintln(\"The most common words are:\")\nfor (freq, word) in t[1:10]\n    println(word, \"\\t\", freq)\nendI use a tab character (\'\\t\') as a “separator”, rather than a space, so the second column is lined up. Here are the results from Emma:The most common words are:\nto     5295\nthe    5266\nand    4931\nof     4339\ni      3191\na      3155\nit     2546\nher    2483\nwas    2400\nshe    2364This code can be simplified using the rev keyword argument of the sort! function. If you are curious, you can read about it at https://docs.julialang.org/en/stable/stdlib/sort/#Base.sort!."
},

{
    "location": "chap13.html#Optional-parameters-1",
    "page": "Case study: data structure selection",
    "title": "Optional parameters",
    "category": "section",
    "text": "We have seen built-in functions and methods that take optional arguments. It is possible to write programmer-defined functions with optional arguments, too. For example, here is a function that prints the most common words in a histogram:function printmostcommon(hist, num=10)\n    t = most_common(hist)\n    println(\"The most common words are: \")\n    for (freq, word) in t[1:num]\n        println(word, \"\\t\", freq)\n    end\nendThe first parameter is required; the second is optional. The default value of num is 10.If you only provide one argument:printmostcommon(hist)num gets the default value. If you provide two arguments:print_most_common(hist, 20)num gets the value of the argument instead. In other words, the optional argument overrides the default value.If a function has both required and optional parameters, all the required parameters have to come first, followed by the optional ones."
},

{
    "location": "chap13.html#Dictionary-subtraction-1",
    "page": "Case study: data structure selection",
    "title": "Dictionary subtraction",
    "category": "section",
    "text": "Finding the words from the book that are not in the word list from words.txt is a problem you might recognize as set subtraction; that is, we want to find all the words from one set (the words in the book) that are not in the other (the words in the list).subtract takes dictionaries d1 and d2 and returns a new dictionary that contains all the keys from d1 that are not in d2. Since we don’t really care about the values, we set them all to nothing.function subtract(d1, d2)\n    res = Dict()\n    for key in keys(d1)\n        if key ∉ keys(d2)\n            res[key] = nothing\n        end\n    end\n    res\nendTo find the words in the book that are not in words.txt, we can use processfile to build a histogram for words.txt, and then subtract:words = processfile(\"words.txt\")\ndiff = subtract(hist, words)\n\nprintln(\"Words in the book that aren\'t in the word list:\")\nfor word in keys(diff)\n    print(word, \" \")\nendHere are some of the results from Emma:Words in the book that aren\'t in the word list:\noutree quicksighted outwardly adelaide rencontre jeffereys unreserved dixons betweens ...Some of these words are names and possessives. Others, like “rencontre”, are no longer in common use. But a few are common words that should really be in the list!"
},

{
    "location": "chap13.html#Exercise-6-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 6",
    "category": "section",
    "text": "Julia provides a data structure called set that provides many common set operations. You can read about them in Section 19.5, or read the documentation at https://docs.julialang.org/en/stable/stdlib/collections/#Set-Like-Collections-1.Write a program that uses set subtraction to find words in the book that are not in the word list."
},

{
    "location": "chap13.html#Random-words-1",
    "page": "Case study: data structure selection",
    "title": "Random words",
    "category": "section",
    "text": "To choose a random word from the histogram, the simplest algorithm is to build an array with multiple copies of each word, according to the observed frequency, and then choose from the array:function random_word(h)\n    t = []\n    for (word, freq) in h\n        for i in 1:freq\n            push!(t, word)\n        end\n    end\n    rand(t)\nendThis algorithm works, but it is not very efficient; each time you choose a random word, it rebuilds the array, which is as big as the original book. An obvious improvement is to build the array once and then make multiple selections, but the array is still big.An alternative is:Use keys to get an array of the words in the book.\nBuild an array that contains the cumulative sum of the word frequencies (see Exercise 10-2). The last item in this array is the total number of words in the book, n.\nChoose a random number from 1 to n. Use a bisection search (See Exercise 10-10) to find the index where the random number would be inserted in the cumulative sum.\nUse the index to find the corresponding word in the word array."
},

{
    "location": "chap13.html#Exercise-7-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 7",
    "category": "section",
    "text": "Write a program that uses this algorithm to choose a random word from the book."
},

{
    "location": "chap13.html#Markov-analysis-1",
    "page": "Case study: data structure selection",
    "title": "Markov analysis",
    "category": "section",
    "text": "If you choose words from the book at random, you can get a sense of the vocabulary, but you probably won’t get a sentence:this the small regard harriet which knightley\'s it most thingsA series of random words seldom makes sense because there is no relationship between successive words. For example, in a real sentence you would expect an article like “the” to be followed by an adjective or a noun, and probably not a verb or adverb.One way to measure these kinds of relationships is Markov analysis, which characterizes, for a given sequence of words, the probability of the words that might come next. For example, the song Eric, the Half a Bee begins:\\begin{verse}\nHalf a bee, philosophically,\\\\\nMust, ipso facto, half not be.\\\\\nBut half the bee has got to be\\\\\nVis a vis, its entity. D’you see?\n\nBut can a bee be said to be\\\\\nOr not to be an entire bee\\\\\nWhen half the bee is not a bee\\\\\nDue to some ancient injury?\n\\end{verse}<blockquote class=\"quote\">\nHalf a bee, philosophically, <br>\nMust, ipso facto, half not be. <br>\nBut half the bee has got to be <br>\nVis a vis, its entity. D&#X2019;you see? <br>\n<br>\nBut can a bee be said to be <br>\nOr not to be an entire bee <br>\nWhen half the bee is not a bee <br>\nDue to some ancient injury? <br>\n</blockquote><p>In this text, the phrase “half the” is always followed by the word “bee”, but the phrase “the bee” might be followed by either “has” or “is”.The result of Markov analysis is a mapping from each prefix (like “half the” and “the bee”) to all possible suffixes (like “has” and “is”).Given this mapping, you can generate a random text by starting with any prefix and choosing at random from the possible suffixes. Next, you can combine the end of the prefix and the new suffix to form the next prefix, and repeat.For example, if you start with the prefix “Half a”, then the next word has to be “bee”, because the prefix only appears once in the text. The next prefix is “a bee”, so the next suffix might be “philosophically”, “be” or “due”.In this example the length of the prefix is always two, but you can do Markov analysis with any prefix length."
},

{
    "location": "chap13.html#Exercise-8-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 8",
    "category": "section",
    "text": "Markov analysis:Write a program to read a text from a file and perform Markov analysis. The result should be a dictionary that maps from prefixes to a collection of possible suffixes. The collection might be a list, tuple, or dictionary; it is up to you to make an appropriate choice. You can test your program with prefix length two, but you should write the program in a way that makes it easy to try other lengths.\nAdd a function to the previous program to generate random text based on the Markov analysis. Here is an example from Emma with prefix length 2:\nHe was very clever, be it sweetness or be angry, ashamed or only amused, at such a stroke. She had never thought of Hannah till you were never meant for me?\" \"I cannot make speeches, Emma:\" he soon cut it all himself.\nFor this example, I left the punctuation attached to the words. The result is almost syntactically correct, but not quite. Semantically, it almost makes sense, but not quite.\nWhat happens if you increase the prefix length? Does the random text make more sense?\nOnce your program is working, you might want to try a mash-up: if youCredit: This case study is based on an example from Kernighan and Pike, The Practice of Programming, Addison-Wesley, 1999.You should attempt this exercise before you go on."
},

{
    "location": "chap13.html#Data-structures-1",
    "page": "Case study: data structure selection",
    "title": "Data structures",
    "category": "section",
    "text": "Using Markov analysis to generate random text is fun, but there is also a point to this exercise: data structure selection. In your solution to the previous exercises, you had to choose:How to represent the prefixes.\nHow to represent the collection of possible suffixes.\nHow to represent the mapping from each prefix to the collection of possible suffixes.The last one is easy: a dictionary is the obvious choice for a mapping from keys to corresponding values.For the prefixes, the most obvious options are string, array of strings, or tuple of strings.For the suffixes, one option is an array; another is a histogram (dictionary).How should you choose? The first step is to think about the operations you will need to implement for each data structure. For the prefixes, we need to be able to remove words from the beginning and add to the end. For example, if the current prefix is “Half a”, and the next word is “bee”, you need to be able to form the next prefix, “a bee”.Your first choice might be an array, since it is easy to add and remove elements.For the collection of suffixes, the operations we need to perform include adding a new suffix (or increasing the frequency of an existing one), and choosing a random suffix.Adding a new suffix is equally easy for the array implementation or the histogram. Choosing a random element from a array is easy; choosing from a histogram is harder to do efficiently (see Exercise 13-7).So far we have been talking mostly about ease of implementation, but there are other factors to consider in choosing data structures. One is run time. Sometimes there is a theoretical reason to expect one data structure to be faster than other; for example, I mentioned that the in operator is faster for dictionaries than for lists, at least when the number of elements is large.But often you don’t know ahead of time which implementation will be faster. One option is to implement both of them and see which is better. This approach is called benchmarking. A practical alternative is to choose the data structure that is easiest to implement, and then see if it is fast enough for the intended application. If so, there is no need to go on. If not, there are tools, like the profile module, that can identify the places in a program that take the most time.The other factor to consider is storage space. For example, using a histogram for the collection of suffixes might take less space because you only have to store each word once, no matter how many times it appears in the text. In some cases, saving space can also make your program run faster, and in the extreme, your program might not run at all if you run out of memory. But for many applications, space is a secondary consideration after run time.One final thought: in this discussion, I have implied that we should use one data structure for both analysis and generation. But since these are separate phases, it would also be possible to use one structure for analysis and then convert to another structure for generation. This would be a net win if the time saved during generation exceeded the time spent in conversion."
},

{
    "location": "chap13.html#Debugging-1",
    "page": "Case study: data structure selection",
    "title": "Debugging",
    "category": "section",
    "text": "When you are debugging a program, and especially if you are working on a hard bug, there are five things to try:Reading: Examine your code, read it back to yourself, and check that it says what you meant to say.Running: Experiment by making changes and running different versions. Often if you display the right thing at the right place in the program, the problem becomes obvious, but sometimes you have to build scaffolding.Ruminating: Take some time to think! What kind of error is it: syntax, runtime, or semantic? What information can you get from the error messages, or from the output of the program? What kind of error could cause the problem you’re seeing? What did you change last, before the problem appeared?Rubberducking: If you explain the problem to someone else, you sometimes find the answer before you finish asking the question. Often you don’t need the other person; you could just talk to a rubber duck. And that’s the origin of the well-known strategy called rubber duck debugging. I am not making this up; see https://en.wikipedia.org/wiki/Rubber_duck_debugging.Retreating: At some point, the best thing to do is back off, undoing recent changes, until you get back to a program that works and that you understand. Then you can start rebuilding.Beginning programmers sometimes get stuck on one of these activities and forget the others. Each activity comes with its own failure mode.For example, reading your code might help if the problem is a typographical error, but not if the problem is a conceptual misunderstanding. If you don’t understand what your program does, you can read it 100 times and never see the error, because the error is in your head.Running experiments can help, especially if you run small, simple tests. But if you run experiments without thinking or reading your code, you might fall into a pattern I call “random walk programming”, which is the process of making random changes until the program does the right thing. Needless to say, random walk programming can take a long time.You have to take time to think. Debugging is like an experimental science. You should have at least one hypothesis about what the problem is. If there are two or more possibilities, try to think of a test that would eliminate one of them.But even the best debugging techniques will fail if there are too many errors, or if the code you are trying to fix is too big and complicated. Sometimes the best option is to retreat, simplifying the program until you get to something that works and that you understand.Beginning programmers are often reluctant to retreat because they can’t stand to delete a line of code (even if it’s wrong). If it makes you feel better, copy your program into another file before you start stripping it down. Then you can copy the pieces back one at a time.Finding a hard bug requires reading, running, ruminating, and sometimes retreating. If you get stuck on one of these activities, try the others."
},

{
    "location": "chap13.html#Glossary-1",
    "page": "Case study: data structure selection",
    "title": "Glossary",
    "category": "section",
    "text": "deterministic: Pertaining to a program that does the same thing each time it runs, given the same inputs.pseudorandom: Pertaining to a sequence of numbers that appears to be random, but is generated by a deterministic program.default value: The value given to an optional parameter if no argument is provided.override: To replace a default value with an argument.benchmarking: The process of choosing between data structures by implementing alternatives and testing them on a sample of the possible inputs.rubber duck debugging: Debugging by explaining your problem to an inanimate object such as a rubber duck. Articulating the problem can help you solve it, even if the rubber duck doesn’t know Julia."
},

{
    "location": "chap13.html#Exercises-1",
    "page": "Case study: data structure selection",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap13.html#Exercise-9-1",
    "page": "Case study: data structure selection",
    "title": "Exercise 9",
    "category": "section",
    "text": "The “rank” of a word is its position in an array of words sorted by frequency: the most common word has rank 1, the second most common has rank 2, etc.Zipf’s law describes a relationship between the ranks and frequencies of words in natural languages (http://en.wikipedia.org/wiki/Zipf\'s_law). Specifically, it predicts that the frequency, f, of the word with rank r is:f = c r^swhere s and c are parameters that depend on the language and the text. If you take the logarithm of both sides of this equation, you get:log f = log c  s log rSo if you plot log f versus log r, you should get a straight line with slope s and intercept log c.Write a program that reads a text from a file, counts word frequencies, and prints one line for each word, in descending order of frequency, with log f and log r.Install a plotting library:Pkg.add(\"Plots\")Its usage is very easy:using Plots\nx = 1:10\ny = x.^2\nplot(x, y)Use the Plots library to plot the results and check whether they form a straight line."
},

{
    "location": "chap14.html#",
    "page": "Files",
    "title": "Files",
    "category": "page",
    "text": ""
},

{
    "location": "chap14.html#Files-1",
    "page": "Files",
    "title": "Files",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\nendThis chapter introduces the idea of “persistent” programs that keep data in permanent storage, and shows how to use different kinds of permanent storage, like files and databases."
},

{
    "location": "chap14.html#Persistence-1",
    "page": "Files",
    "title": "Persistence",
    "category": "section",
    "text": "Most of the programs we have seen so far are transient in the sense that they run for a short time and produce some output, but when they end, their data disappears. If you run the program again, it starts with a clean slate.Other programs are persistent: they run for a long time (or all the time); they keep at least some of their data in permanent storage (a hard drive, for example); and if they shut down and restart, they pick up where they left off.Examples of persistent programs are operating systems, which run pretty much whenever a computer is on, and web servers, which run all the time, waiting for requests to come in on the network.One of the simplest ways for programs to maintain their data is by reading and writing text files. We have already seen programs that read text files; in this chapter we will see programs that write them.An alternative is to store the state of the program in a database. In this chapter I will present a simple database and a module, JLD2, that makes it easy to store program data."
},

{
    "location": "chap14.html#Reading-and-writing-1",
    "page": "Files",
    "title": "Reading and writing",
    "category": "section",
    "text": "A text file is a sequence of characters stored on a permanent medium like a hard drive, flash memory, or CD-ROM. We saw how to open and read a file in Section 9.1.To write a file, you have to open it with mode \"w\" as a second parameter:julia> fout = open(\"output.txt\", \"w\")\nIOStream(<file output.txt>)If the file already exists, opening it in write mode clears out the old data and starts fresh, so be careful! If the file doesn’t exist, a new one is created. open returns a file object and the write function puts data into the file.julia> line1 = \"This here\'s the wattle,\\n\";\n\njulia> write(fout, line1)\n24The return value is the number of characters that were written. The file object keeps track of where it is, so if you call write again, it adds the new data to the end of the file.julia> line2 = \"the emblem of our land.\\n\";\n\njulia> write(fout, line2)\n24When you are done writing, you should close the file.julia> close(fout)\nIf you don’t close the file, it gets closed for you when the program ends."
},

{
    "location": "chap14.html#Formatting-1",
    "page": "Files",
    "title": "Formatting",
    "category": "section",
    "text": "The argument of write has to be a string, so if we want to put other values in a file, we have to convert them to strings. The easiest way to do that is with string or string interpolation:julia> fout = open(\"output.txt\", \"w\")\nIOStream(<file output.txt>)\njulia> write(fout, string(150))\n3An alternative is to use the print(ln) family of functions.julia> camels = 42\n42\njulia> println(fout, \"I have spotted $camels camels.\")\nA more powerful alternative is the @printf macro that prints using a C style format specification string, which you can read about at https://docs.julialang.org/en/stable/stdlib/io-network/#Base.Printf.@printf"
},

{
    "location": "chap14.html#Filenames-and-paths-1",
    "page": "Files",
    "title": "Filenames and paths",
    "category": "section",
    "text": "Files are organized into directories (also called “folders”). Every running program has a “current directory”, which is the default directory for most operations. For example, when you open a file for reading, Python looks for it in the current directory.The function pwd returns the name of the current directory:\\begin{minted}{jlcon}\njulia> cwd = pwd()\n\"/home/dinsdale\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; cwd = pwd()\n\"/home/dinsdale\"</code></pre>cwd stands for “current working directory”. The result in this example is /home/dinsdale, which is the home directory of a user named dinsdale.A string like \"/home/dinsdale\" that identifies a file or directory is called a path.A simple filename, like memo.txt is also considered a path, but it is a relative path because it relates to the current directory. If the current directory is /home/dinsdale, the filename memo.txt would refer to /home/dinsdale/memo.txt.A path that begins with / does not depend on the current directory; it is called an absolute path. To find the absolute path to a file, you can use abspath:\\begin{minted}{jlcon}\njulia> abspath(\"memo.txt\")\n\"/home/dinsdale/memo.txt\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; abspath(\"memo.txt\")\n\"/home/dinsdale/memo.txt\"</code></pre>Julia provides other functions for working with filenames and paths. For example, ispath checks whether a file or directory exists:\\begin{minted}{jlcon}\njulia> ispath(\"memo.txt\")\ntrue\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; ispath(\"memo.txt\")\ntrue</code></pre>If it exists, isdir checks whether it’s a directory:\\begin{minted}{jlcon}\njulia> isdir(\"memo.txt\")\nfalse\njulia> isdir(\"/home/dinsdale\")\ntrue\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; isdir(\"memo.txt\")\nfalse\njulia> isdir(\"/home/dinsdale\")\ntrue</code></pre>Similarly, isfile checks whether it’s a file.readdir returns a list of the files (and other directories) in the given directory:\\begin{minted}{jlcon}\njulia> readdir(cwd)\n3-element Array{String,1}:\n \"memo.txt\"\n \"music\"\n \"photos\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; readdir(cwd)\n3-element Array{String,1}:\n \"memo.txt\"\n \"music\"\n \"photos\"</code></pre>To demonstrate these functions, the following example “walks” through a directory, prints the names of all the files, and calls itself recursively on all the directories.function walk(dirname)\n    for name in readdir(dirname)\n        path = joinpath(dirname, name)\n        if isfile(path)\n            println(path)\n        else\n            walk(path)\n        end\n    end\nendjoinpath takes a directory and a file name and joins them into a complete path.Julia provides a function called walkdir (see https://docs.julialang.org/en/stable/stdlib/file/#Base.Filesystem.walkdir) that is similar to this one but more versatile. As an exercise, read the documentation and use it to print the names of the files in a given directory and its subdirectories."
},

{
    "location": "chap14.html#Catching-exceptions-1",
    "page": "Files",
    "title": "Catching exceptions",
    "category": "section",
    "text": "A lot of things can go wrong when you try to read and write files. If you try to open a file that doesn’t exist, you get a SystemError:fin = open(\"bad_file\")If you don’t have permission to access a file:fout = open(\"/etc/passwd\", \"w\")To avoid these errors, you could use functions like ispath and isfile, but it would take a lot of time and code to check all the possibilities.It is better to go ahead and try—and deal with problems if they happen—which is exactly what the try statement does. The syntax is similar to an if statement:try\n    fin = open(\"bad_file.txt\")\ncatch exc\n    println(\"Something went wrong: $exc\")\nendJulia starts by executing the try clause. If all goes well, it skips the catch clause and proceeds. If an exception occurs, it jumps out of the try clause and runs the catch clause.Handling an exception with a try statement is called catching an exception. In this example, the except clause prints an error message that is not very helpful. In general, catching an exception gives you a chance to fix the problem, or try again, or at least end the program gracefully.In code that performs state changes or uses resources like files, there is typically clean-up work (such as closing files) that needs to be done when the code is finished. Exceptions potentially complicate this task, since they can cause a block of code to exit before reaching its normal end. The finally keyword provides a way to run some code when a given block of code exits, regardless of how it exits:f = open(\"output.txt\")\ntry\n    line = readline(f)\n    println(line)\nfinally\n    close(f)\nendThe function close will always be executed."
},

{
    "location": "chap14.html#Databases-1",
    "page": "Files",
    "title": "Databases",
    "category": "section",
    "text": "A database is a file that is organized for storing data. Many databases are organized like a dictionary in the sense that they map from keys to values. The biggest difference between a database and a dictionary is that the database is on disk (or other permanent storage), so it persists after the program ends.The package GDBM provides an interface for creating and updating database files. As an example, I’ll create a database that contains captions for image files.First, we have to install the package GDBM:Pkg.add(\"GDBM\")Opening a database is similar to opening other files:julia> using GDBM\n\njulia> db = DBM(\"captions\", \"c\")\nDBM(<captions>)The mode \"c\" means that the database should be created if it doesn’t already exist. The result is a database object that can be used (for most operations) like a dictionary.When you create a new item, GDBM updates the database file:julia> db[\"cleese.png\"] = \"Photo of John Cleese.\"\n\"Photo of John Cleese.\"When you access one of the items, GDBM reads the file:julia> db[\"cleese.png\"]\n\"Photo of John Cleese.\"If you make another assignment to an existing key, GDBM replaces the old value:julia> db[\"cleese.png\"] = \"Photo of John Cleese doing a silly walk.\"\n\"Photo of John Cleese doing a silly walk.\"\njulia> db[\"cleese.png\"]\n\"Photo of John Cleese doing a silly walk.\"Some functions having a dictionary as argument, like keys and values, don’t work with database objects. But iteration with a for loop works:for (key, value) in db\n    println(key, \": \", value)\nendAs with other files, you should close the database when you are done:julia> close(db)\n"
},

{
    "location": "chap14.html#Serialization-1",
    "page": "Files",
    "title": "Serialization",
    "category": "section",
    "text": "A limitation of GDBM is that the keys and the values have to be strings or byte arrays. If you try to use any other type, you get an error.The functions serialize and deserialize can help. They translate almost any type of object into a byte array suitable for storage in a database, and then translates byte arrays back into objects:julia> io = IOBuffer();\n\njulia> t = [1, 2, 3];\n\njulia> serialize(io, t)\n24\njulia> print(take!(io))\nUInt8[0x15, 0x00, 0x08, 0xc8, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]The format isn’t obvious to human readers; it is meant to be easy for Julia to interpret. deserialize reconstitutes the object:julia> io = IOBuffer();\n\njulia> t1 = [1, 2, 3];\n\njulia> serialize(io, t1)\n24\njulia> s = take!(io);\n\njulia> t2 = deserialize(IOBuffer(s));\n\njulia> print(t2)\n[1, 2, 3]serialize and deserialize write to and read from a iobuffer object which represents an in-memory I/O stream. The function take! fetches the contents of the iobuffer as a byte array and resets the iobuffer to its initial state.Although the new object has the same value as the old, it is not (in general) the same object:julia> t1 == t2\ntrue\njulia> t1 ≡ t2\nfalseIn other words, serialization and then deserialization has the same effect as copying the object.You can use this to store non-strings in a database. In fact, this combination is so common that it has been encapsulated in a package called JLD(2)."
},

{
    "location": "chap14.html#Command-objects-1",
    "page": "Files",
    "title": "Command objects",
    "category": "section",
    "text": "Most operating systems provide a command-line interface, also known as a shell. Shells usually provide commands to navigate the file system and launch applications. For example, in Unix you can change directories with cd, display the contents of a directory with ls, and launch a web browser by typing (for example) firefox.Any program that you can launch from the shell can also be launched from Julia using a command object:julia> cmd = `echo hello`\n`echo hello`Backticks are used to delimit the command.The function run executes the command:julia> run(cmd)\nhelloThe hello is the output of the echo command, sent to STDOUT. The run function itself returns nothing, and throws an ErrorException if the external command fails to run successfully.If you want to read the output of the external command, readstring can be used instead:julia> a = readstring(cmd)\n\"hello\\n\"For example, most Unix systems provide a command called md5sum that reads the contents of a file and computes a “checksum”. You can read about MD5 at http://en.wikipedia.org/wiki/Md5. This command provides an efficient way to check whether two files have the same contents. The probability that different contents yield the same checksum is very small (that is, unlikely to happen before the universe collapses).You can use a command object to run md5sum from Julia and get the result:\\begin{minted}{jlcon}\njulia> filename = \"book.tex\"\n\"book.tex\"\n\njulia> cmd = `md5sum $filename`\n`md5sum book.tex`\n\njulia> res = readstring(cmd)\n\"d41d8cd98f00b204e9800998ecf8427e  book.tex\\n\"\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; julia> filename = \"book.tex\"\n\"book.tex\"\n\njulia&gt; cmd = `md5sum $filename`\n`md5sum book.tex`\n\njulia&gt; res = readstring(cmd)\n\"d41d8cd98f00b204e9800998ecf8427e  book.tex\\n\"</code></pre>"
},

{
    "location": "chap14.html#Modules-1",
    "page": "Files",
    "title": "Modules",
    "category": "section",
    "text": "Any file that contains Julia code can be imported as a module. For example, suppose you have a file named \"wc.jl\" with the following code:function linecount(filename)\n    count = 0\n    for line in readline(filename)\n        count += 1\n    end\n    count\nend\n\nprint(linecount(\"wc.jl\"))If you run this program, it reads itself and prints the number of lines in the file, which is 9. You can also include it like this:\\begin{minted}{jlcon}\njulia> include(\"wc.jl\")\n9\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; include(\"wc.jl\")\n9</code></pre>Modules in Julia are separate variable workspaces, i.e. they introduce a new global scope. They are delimited syntactically, inside module ...  end. Modules allow you to create top-level definitions without worrying about name conflicts when your code is used together with somebody else\'s. Within a module, you can control which names from other modules are visible (via importing), and specify which of your names are intended to be public (via exporting).module LineCount\n    export linecount\n\n    function linecount(filename)\n        count = 0\n        for line in eachline(filename)\n            count += 1\n        end\n        count\n    end\nendThe module LineCount object provides linecount:\\begin{minted}{jlcon}\njulia> using LineCount\n\njulia> linecount(\"wc.jl\")\n11\n\\end{minted}<pre><code class=\"language-julia-repl\">julia&gt; using LineCount\n\njulia&gt; linecount(\"wc.jl\")\n11</code></pre>As an exercise, type this example into a file named wc.jl, include it into the REPL and enter using LineCount.Warning: If you import a module that has already been imported, Julia does nothing. It does not re-read the file, even if it has changed.If you want to reload a module, you can use the built-in function reload, but it can be tricky, so the safest thing to do is restart the REPL."
},

{
    "location": "chap14.html#Debugging-1",
    "page": "Files",
    "title": "Debugging",
    "category": "section",
    "text": "When you are reading and writing files, you might run into problems with whitespace. These errors can be hard to debug because spaces, tabs and newlines are normally invisible:julia> s = \"1 2\\t 3\\n 4\";\n\njulia> println(s)\n1 2	 3\n 4The built-in function repr can help. It takes any object as an argument and returns a string representation of the object.This can be helpful for debugging.julia> repr(s)\n\"\\\"1 2\\\\t 3\\\\n 4\\\"\"One other problem you might run into is that different systems use different characters to indicate the end of a line. Some systems use a newline, represented \\n. Others use a return character, represented \\r. Some use both. If you move files between different systems, these inconsistencies can cause problems.For most systems, there are applications to convert from one format to another. You can find them (and read more about this issue) at http://en.wikipedia.org/wiki/Newline. Or, of course, you could write one yourself."
},

{
    "location": "chap14.html#Glossary-1",
    "page": "Files",
    "title": "Glossary",
    "category": "section",
    "text": "persistent: Pertaining to a program that runs indefinitely and keeps at least some of its data in permanent storage.text file: A sequence of characters stored in permanent storage like a hard drive.directory: A named collection of files, also called a folder.path: A string that identifies a file.relative path: A path that starts from the current directory.absolute path: A path that starts from the topmost directory in the file system.catch: To prevent an exception from terminating a program using the try ... catch ... finally statements.database: A file whose contents are organized like a dictionary with keys that correspond to values.shell: A program that allows users to type commands and then executes them by starting other programs.command object: An object that represents a shell command, allowing a Julia program to run commands and read the results."
},

{
    "location": "chap14.html#Exercises-1",
    "page": "Files",
    "title": "Exercises",
    "category": "section",
    "text": ""
},

{
    "location": "chap14.html#Exercise-14-1-1",
    "page": "Files",
    "title": "Exercise 14-1",
    "category": "section",
    "text": "Write a function called sed that takes as arguments a pattern string, a replacement string, and two filenames; it should read the first file and write the contents into the second file (creating it if necessary). If the pattern string appears anywhere in the file, it should be replaced with the replacement string.If an error occurs while opening, reading, writing or closing files, your program should catch the exception, print an error message, and exit."
},

{
    "location": "chap14.html#Exercise-14-2-1",
    "page": "Files",
    "title": "Exercise 14-2",
    "category": "section",
    "text": "If you have done Exercise 12-2, you’ll see that a dictionary is created that maps from a sorted string of letters to the list of words that can be spelled with those letters. For example, \"opst\" maps to the list [\"opts\", \"post\", \"pots\", \"spot\", \"stop\", \"tops\"].Write a module that imports anagramsets and provides two new functions: storeanagrams should store the anagram dictionary using JLD2; read_anagrams should look up a word and return a list of its anagrams."
},

{
    "location": "chap14.html#Exercise-14-3-1",
    "page": "Files",
    "title": "Exercise 14-3",
    "category": "section",
    "text": "In a large collection of MP3 files, there may be more than one copy of the same song, stored in different directories or with different file names. The goal of this exercise is to search for duplicates.Write a program that searches a directory and all of its subdirectories, recursively, and returns a list of complete paths for all files with a given suffix (like .mp3).\nTo recognize duplicates, you can use md5sum to compute a “checksum” for each files. If two files have the same checksum, they probably have the same contents.\nTo double-check, you can use the Unix command diff."
},

{
    "location": "chap15.html#",
    "page": "Types and objects",
    "title": "Types and objects",
    "category": "page",
    "text": ""
},

{
    "location": "chap15.html#Types-and-objects-1",
    "page": "Types and objects",
    "title": "Types and objects",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ThinkJulia\n\n    struct Point\n      x\n      y\n    end\nendAt this point you know how to use functions to organize code and built-in types to organize data. The next step is to learn how to build your own types to organize both code and data. This is a big topic; it will take a few chapters to get there."
},

{
    "location": "chap15.html#Composite-types-1",
    "page": "Types and objects",
    "title": "Composite types",
    "category": "section",
    "text": "We have used many of Julia’s built-in types; now we are going to define a new type. As an example, we will create a type called Point that represents a point in two-dimensional space.In mathematical notation, points are often written in parentheses with a comma separating the coordinates. For example, (00) represents the origin, and (xy) represents the point x units to the right and y units up from the origin.There are several ways we might represent points in Julia:We could store the coordinates separately in two variables, x and y.\nWe could store the coordinates as elements in a list or tuple.\nWe could create a new type to represent points as objects.Creating a new type is more complicated than the other options, but it has advantages that will be apparent soon.A programmer-defined composite type is also called a struct. The struct definition for a point looks like this:struct Point\n    x\n    y\nendThe header indicates that the new struct is called Point. The body defines the attributes or fields of the struct. The Point struct has two attributes: x and y.Defining a class named Point creates a datatype object:julia> typeof(Point)\nDataTypeA struct is like a factory for creating objects. To create a point, you call Point as if it were a function having as arguments the values of the attributes. When Point is used as a function, it is called a constructor.julia> p = Point(3.0, 4.0)\nPoint(3.0, 4.0)The return value is a reference to a point object, which we assign to p.Creating a new object is called instantiation, and the object is an instance of the type.When you print an instance, Julia tells you what type it belongs to and what the values of the atributes are.Every object is an instance of some class, so “object” and “instance” are interchangeable. But in this chapter I use “instance” to indicate that I am talking about a programmer-defined type.A state diagram that shows an object and its attributes is called an object diagram; see Figure 15.1.using ThinkJulia\nfig15_1()<figure>\n  <img src=\"fig151.svg\" alt=\"Object diagram.\">\n  <figcaption>Figure 15.1. Object diagram.</figcaption>\n</figure>\\begin{figure}\n\\centering\n\\includegraphics{fig121}\n\\caption{Object diagram.}\n\\label{fig151}\n\\end{figure}"
},

]}
