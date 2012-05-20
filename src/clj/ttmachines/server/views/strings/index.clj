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

(ns ttmachines.server.views.strings.index
    (:use ttmachines.server.views.strings.core))

(defstring intro
    "
Machines are our faithful companions. More and more of our lives is spent in the company
 of our laptops, tablets and phones. But during this time, we've all been very rude.
 Computers are servants we depend on but never acknowledge. Most of us have never 
*introduced* ourselves to our machines, let alone engaged them in a conversation.

We can't go on like this. The best relationships are founded on communication, so we'd 
better start talking to each other.

The good news is that it isn't so difficult. As foreign languages go, there are far worse
. In fact, the hardest step might just be to break the awkward silence.

So take the initiative. Write your name between the quotation marks and say hello.")

(defstring info-title "Info")

(defstring info-explanation 
    "When you select a function on the left, information about it will be displayed here.
")

(def initial-editor-text 
    "(def me \"\")

(defn greet [name]
  (str \"Hello, \" name))

(greet me)")

(defstring result-title "Result")