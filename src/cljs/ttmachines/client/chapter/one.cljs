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

(ns ttmachines.client.chapter.one
  (:require [domina.domina :as dom]
            [ttmachines.client.util :as util])
  (:require-macros [ttmachines.client.macros :as macro]))

(def my-name (atom "User"))

(defn greeting [] 
  (str "It's nice to finally meet you, " @my-name "!"))

(macro/set-up-element "hello-user"
  (dom/set-text! hello-user (greeting)))

(macro/set-up-element "def-my-name-again"
  (util/code-highlight 
    (str "(def my-name \"" @my-name "\")")
    "def-my-name-again"))

(macro/set-up-element "insert-name"
  (dom/set-text! insert-name (str "\"" @my-name "\"")))
