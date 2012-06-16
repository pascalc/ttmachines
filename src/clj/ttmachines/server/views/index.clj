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

(ns ttmachines.server.views.index
    (:use [noir.core]
          [ttmachines.server.views.layout :only [defcontent]])
    (:require [hiccup.element :as el]
              [ttmachines.server.views.strings.index :as strings]))

(defpartial tagline []
  [:h2#tagline strings/tagline])

(defpartial intro []
  [:section#intro strings/intro])

(defpartial enter-name []
  [:div#start-chapter
    [:div#enter-name.cm-s-ambiance strings/enter-name]
    [:br]
    [:button#start.btn.btn-large.btn-primary strings/introduce-me]])

(defpartial lost-robot []
  (el/image {:id "lost-robot"} "/images/lost_robot.jpg" "Lost robot by natdatnl"))

(defcontent "/"
  {:layout {:text (tagline)
            :main (intro)
            :below-main (enter-name)
            :sidebar (lost-robot)}})
