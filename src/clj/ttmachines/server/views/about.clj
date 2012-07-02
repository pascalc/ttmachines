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

(ns ttmachines.server.views.about
  (:require [ttmachines.server.views.strings.about :as strings])
  (:use [noir.core :only [defpartial]]
        [ttmachines.server.views.layout :only [defcontent]]))

(defpartial title [] 
  [:h2 strings/tell-me-more])

(defpartial faq []
  [:div#faq
    strings/which-language
    strings/why-clojure
    strings/isnt-lisp-difficult
    strings/what-can-i-make
    strings/website-aim])

(defpartial sidebar []
  [:aside#feedback.pillbox
    [:header [:h3 strings/feedback-title]]
    strings/feedback-text])

(defcontent "/about"
  {:layout  {:headline    (title)
             :text        nil
             :main        (faq)
             :below-main  nil
             :sidebar     (sidebar)}})