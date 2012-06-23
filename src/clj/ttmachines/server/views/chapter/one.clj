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

(ns ttmachines.server.views.chapter.one
  (:use [noir.core]
        [ttmachines.server.views.chapter :only [defchapter chapter-nav]])
  (:require [ttmachines.server.views.strings.chapter.one :as strings]))

(defpartial hello-user []
  [:h2#hello-user])

(defpartial explain-def-my-name []
  [:div 
    strings/great-job
    [:div.code-wrapper
      [:div#def-my-name-again.cm-s-ambiance]]
    strings/brackets
    strings/explain-def
    strings/explain-my-name
    strings/explain-your-name])

(defchapter "/chapter/1"
  {:layout {:headline     (hello-user)
            :text         nil
            :main         (explain-def-my-name)
            :below-main   (chapter-nav)
            :sidebar      nil}}

  {:layout {:headline     "Functions!"
            :text         nil
            :main         "Commands are actually functions!"
            :below-main   (chapter-nav)}})

