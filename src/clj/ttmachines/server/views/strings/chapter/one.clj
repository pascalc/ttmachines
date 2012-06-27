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

  Here, the command you're giving your machine is <span class=\"cm-s-ambiance clojure-code\">def</span>.
  Naturally, this tells your machine that you're *defining* something. Following this command are the inputs
  the command will work with, so let's look at those now.")

(defstring explain-my-name
  "### my-name

  The first of these inputs, or <strong>arguments</strong>, is <span class=\"cm-s-ambiance clojure-code\">my-name</span>.
  This is a <strong>symbol</strong> - a word that is a name for something else. Conveniently, the name we
  give here is *my-name*.")

(defstring explain-your-name
  "### Your name

  The final argument is, of course, your name. The quotation marks around it tell the computer that it is
  text, or, in machinespeak, a <strong>string</strong>. The <span class=\"cm-s-ambiance clojure-code\">def</span>
  command associates the symbol <span class=\"cm-s-ambiance clojure-code\">my-name</span> with this string.

  <br/>

  In other words, you have told your machine that <span class=\"cm-s-ambiance clojure-code\">my-name</span> is
  <span id=\"insert-name\" class=\"cm-s-ambiance clojure-code\"></span>.")

(defstring functions "Commands are functions")

(defstring explain-str "
  So now you know how to define things, what can we *do* with them?
  
  The answer is anything you can imagine, as long as you know the right commands, or <strong>functions</strong>
  as we usually call them.

  One of the most used functions is <span class=\"cm-s-ambiance clojure-code\">str</span>, which takes
  any number of strings as arguments and combines them into one.

  Try out different arguments to <span class=\"cm-s-ambiance clojure-code\">str</span> below and see
  how it affects the result")

(def repl-str-example 
  "(str \"Hello, \" \"world!\")")

(defstring str-with-symbols
  "
  You can also use symbols you've defined earlier as arguments to functions.")
