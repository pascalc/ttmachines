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

(ns ttmachines.server.views.strings.core
    (:require [clojure.string :as string]
              [markdown :as mkd]))

(def to-html mkd/md-to-html-string)

(def code-pattern #"`(\S+)`")

(defn expand-code-snippets [match]
  (str 
    "<span class=\"cm-s-ambiance clojure-code\">"
    (match 1)
    "</span>"))

(def bold-pattern #"\*\*(\S+)\*\*")

(defn boldify [match]
  (str "<strong>" (match 1) "</strong>"))

(defmacro defstring 
    "Compile the given string as Markdown and def the compiled HTML string"
    [var-name mkd-string]
    (let [out-str (-> mkd-string
                    (string/replace code-pattern expand-code-snippets)
                    (string/replace bold-pattern boldify)
                    (to-html))]
      `(def ~var-name ~out-str)))
