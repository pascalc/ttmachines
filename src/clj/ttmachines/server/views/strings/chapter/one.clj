; Copyright (c) 2012 Pascal Chatterjee

; Permission is hereby granted, free of charge, to any person obtaining
; a copy of this software and associated documentation files (the
; "Software"), to deal in the Software without restriction, including
; without limitation the rights to use, copy, modify, merge, publish,
; distribute, sublicense, and/or sell copies of the Software, and to
; permit persons to whom the Software is furnished to do so, subject to
; the following conditions:

; The above copyright notice and this permission notice shall be
; included in all copies or substantial portions of the Software.

; THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
; EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
; MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
; NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
; LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
; OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
; WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(ns ttmachines.server.views.strings.chapter.one
    (:use ttmachines.server.views.strings.core))

(def title "Introductions")

(defstring description 
  "
  The first steps in speaking any language are learning how to say hello, goodbye and how to introduce yourself.
  This chapter begins with showing you how to define values such as your name and ends with you 
  defining a function of your own.")

(defstring tagline "Have you ever had a *conversation* with your computer?")

(defstring intro
    "
Not many of us have. But we spend so much of our lives in the company
 of our laptops, tablets and phones that the silence is deafening.

We can't go on like this. 

The best relationships are founded on communication, so we'd 
better start talking to our machines.

The good news is that it isn't so difficult. As foreign languages go, there are far worse.

So break the ice. Write your name between the quotation marks and say hello.")

(defstring enter-name
    "(def my-name \"      \")")

(defstring introduce-me "Introduce me!")

(defstring lost-robot-credit "&copy; Jochem van Wetten")

(defstring great-job
  "
  Great job! You just spoke your first words to your machine!

  Let's take a look at what you said and why that worked as an introduction.")

(defstring brackets
  "### Brackets

  The first thing you should notice are the brackets. Every time you want your machine to *do*
  something, you need to surround your command in brackets.")

(defstring explain-def
  "### def

  Here, the command you're giving your machine is `def`.
  Naturally, this tells your machine that you're *defining* something. Following this command are the inputs
  the command will work with, so let's look at those now.")

(defstring explain-my-name
  "### my-name

  The first of these inputs, or **arguments**, is `my-name`.
  This is a **symbol** - a word that is a name for something else. Conveniently, the name we
  give here is *my-name*.")

(defstring explain-your-name
  "### Your name

  The final argument is, of course, your name. The quotation marks around it tell the computer that it is
  text, or, in machinespeak, a **string**. The `def` command associates the symbol `my-name` with this string.
  
  <br/>
  In other words, you have told your machine that `my-name` is
  <span id=\"insert-name\" class=\"cm-s-ambiance clojure code\"></span>.")

(defstring explain-str "
  So now you know how to define things, what can we *do* with them?
  
  The answer is anything you can imagine, as long as you know the right commands, or **functions**
  as we usually call them.

  One of the most used functions is `str`, which takes any number of strings as arguments and combines them into one.

  Try out different arguments to `str` below and see how it affects the result:")

(def repl-str-example 
  "(str \"Hello, \" \"world!\")")

(defstring str-with-symbols
  "
  You can also use symbols you've defined earlier as arguments to functions.

  Here, the **value** of the symbol `my-name` is found to be 
  <span id=\"insert-name\" class=\"cm-s-ambiance clojure\"></span> before `str` is executed.

  This gives the result you see below. If you change the definition of `my-name`, the result of 
  the `str` function will also change.")

(defstring nested-str
  "
  You can even use the result of executing one function as an argument to another.

  The innermost function (the one within the most brackets) is always called first, and any others 
  called from the inside out. 

  This is exactly like math where if we have an expression like 
  <span class=\"cm-s-ambiance code\">1 
  <span class=\"cm-variable\">+</span> (2 <span class=\"cm-atom\">+</span> 3)
  </span>,
  the innermost <span class=\"cm-s-ambiance code\"><span class=\"cm-atom\">+</span></span>
  is evaluated first, before
  <span class=\"cm-s-ambiance code\">1 <span class=\"cm-variable\">+</span> 5</span> 
  leaves us with <span class=\"cm-s-ambiance code\">6</span>.

  Can you tell which of the calls to `str` happens first below?")

(defstring custom-functions "Functions of your own")

(defstring intro-custom-functions
  "
  The ability to define things and then manipulate them with functions is pretty powerful. You can do
  anything, as long as you know the right functions and you give them the right arguments.

  But when you've come up with a good combination of functions and arguments, how do you save it for later?

  The answer is to **define** your own function, like this:
  ")

(def example-defn
  [:div.cm-s-ambiance.clojure.code
    "(def goodbye"
    [:br]
    "&nbsp;&nbsp;(fn [person]"
    [:br]
    "&nbsp;&nbsp;&nbsp;&nbsp;(str \"Fare thee well, \" person)))"])

(defstring explain-custom-functions
  "
  Like earlier, we use `def` to associate the symbol `goodbye` with something. This something is the result
  of calling the `fn` function with the arguments `[person]` and `(str \"Fare thee well, \" person)`.")

(defstring explain-fn
  "
  `fn` is rather special in that it is the function that makes other functions, according to the arguments
  you give it. Let's look at them now.")

(defstring explain-args
  "### [person]
  
  The square brackets here signify that this is a **list**. The symbols in it are bound to the values of the
  arguments the function is called with. For example, if we execute `(goodbye \"Ada\")`, `person` will be bound
  to the string `\"Ada\"`, as that is the first (and only) argument to the `goodbye` function.
  ")

(defstring explain-body
  "### Everything else

  Following the list of arguments can be any number of function calls. These will form the **body** of the 
  function - i.e. the actions it carries out. The body of `goodbye` is `(str \"Fare thee well, \" person)`,
  meaning we make a string from combining `\"Fare thee well, \"` and whatever `person` is bound to at the time.

  So what does `(goodbye \"Ada\")` result in?
  ")

(defstring goodbye-ada 
  "
  If you were right, great job! If you weren't, play around with the function below to get a feel
  for how it works. Try changing `\"Ada\"` to another string and see what happens.")

(def repl-goodbye-ada
  "(def goodbye
  (fn [person]
    (str \"Fare thee well, \" person)))

(goodbye \"Ada\")")

(defstring introducing-defn
  "
  Defining functions is so common that there is a shorthand for it - the `defn` function (note the n) that
  combines `def` and `fn`. Below is how we would define `goodbye` with `defn`.")

(defstring greet-challenge
  "### Now for a challenge

  Define a new function called `greet`, that takes a person's name as an
  argument and returns the words `\"Hello there, \"` followed by their name. 

  Bonus points if you can put an exclamation mark on the end. Feel free to copy and paste from `goodbye`!")

(def repl-goodbye-defn
  "(defn goodbye [person]
  (str \"Fare thee well, \" person))

(goodbye \"Ada\")")

(def outro-title
  "You just wrote your first program!")

(defstring outro-main
  "
  We've really made amazing progress in talking to our machines. You went from not having said a word
  to a computer all the way to teaching machines the basics of etiquette - how to greet and say goodbye - and in
  doing so you wrote your first computer program.

  Though there's a lot more to programming, we've actually covered the core principles: 
  binding symbols to functions and values, and using them to derive results.")
