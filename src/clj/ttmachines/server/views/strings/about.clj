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

(ns ttmachines.server.views.strings.about
  (:use ttmachines.server.views.strings.core))

(def tell-me-more "Tell me more...")

(defstring which-language
  "### What programming language are we using?

  The language used to talk to machines on this website is **Lisp**, more specifically
  the dialect of Lisp called **Clojure**. It's not the most widely-used language in the world,
  so don't be too surprised if some computer-inclined people you know haven't heard of it.")

(defstring why-clojure
  "### Why are we using Clojure?

  We're using Lisp because it's simple. We're using Clojure (or actually **ClojureScript**)
  because it's far more modern than other Lisps, can be used in many workplaces and also 
  executes nicely within web pages.")

(defstring isnt-lisp-difficult
  "### But I've heard Lisp is more complicated than other languages!

  Personally, I think that Lisp is misunderstood. It's true that Lisp code looks quite different
  to code in many other languages, but that doesn't make it harder to understand (in fact, it
  minimises confusion as there are fewer special cases). 

  In my opinion, Lisp is actually *simpler* than those other languages because it does away 
  with many of the unnecessary abstractions that beginner (and even expert) programmers 
  shouldn't have to deal with.")

(defstring what-can-i-make
  "### So what kind of things can I make with Lisp?

  Anything you can describe to a machine, whether in words from the dictionary or words
  that you invent yourself. This entire website is written in Clojure and Clojurescript
  and you can find the code [here](http://github.com/pascalc/ttmachines).")

(defstring website-aim
  "### Why did you make this website?

  Because I believe that programming is a lot more fun than a lot of people realise. I made 
  this website to show people why I think it's fun, so that maybe they might think so too.

  The reason I love to program is the creativity it enables: if you have an idea that 
  involves the manipulation of **information**, then a computer can help you realise it, as 
  long as you speak its language.

  Like with any other language, human or machine, learning purely theory will only
  get you so far. The only way to get better is to talk.
  
  And who better to talk to than a native speaker?

  If we treat programming as a way of talking to our machines: defining concepts that we
  can play around with directly; writing programs by way of conversation, changing them
  based on the instant feedback we get from the computer, then we really emphasise this
  creativity in a way that textbook-based methods can't.

  When you find that you've created something, after a constructive conversation, you may
  realise that it was kind of fun.")

(def feedback-title "Do you have any thoughts, ideas or suggestions for improvements?")

(defstring feedback-text
  "
  That's great! Talking to machines is an open-source project and a collaborative
  endeavour so you're very welcome to send me a [mail](mailto:pascal@talkingtomachines.org), 
  ping me on [Twitter](http://twitter.com/pkchatterjee) or send me a pull request on 
  [Github](http://github.com/pascalc/ttmachines).")

