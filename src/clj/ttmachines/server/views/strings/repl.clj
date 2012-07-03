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

(ns ttmachines.server.views.strings.repl
    (:use ttmachines.server.views.strings.core))

(defstring text
    "
Welcome to the ClojureScript REPL! 

Any forms you type in the editor will be evaluated and the results displayed below.")

(defstring info-title "Info")

(defstring info-explanation 
    "When you select a function on the left, information about it will be displayed here.
")

(def initial-editor-text 
    "(defn fizzbuzz [n]
  (cond
    (= 0 (mod n 15))  \"fizzbuzz\"
    (= 0 (mod n 3))   \"fizz\"
    (= 0 (mod n 5))   \"buzz\"
    :else             (str n)))

(map (fn [n] [n (fizzbuzz n)]) (range 1 101))")

(defstring result-title "Result")