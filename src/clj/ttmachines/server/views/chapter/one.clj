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
  (:require [hiccup.element :as el]
            [ttmachines.server.views.strings.chapter.one :as strings]
            [ttmachines.server.views.repl :as repl]))

(defpartial tagline []
  [:h2 strings/tagline])

(defpartial intro []
  [:section#intro strings/intro])

(defpartial highlighted-def-name []
  [:span.cm-bracket "("]
  [:span.cm-keyword "def "]
  "my-name "
  [:span.cm-string 
    "\"" [:span#enter-my-name { :contenteditable "true" } "&nbsp;&nbsp;&nbsp;"] "\""]
  [:span.cm-bracket ")"])

(defpartial enter-name []
  [:div#start-chapter
    [:div#enter-name.cm-s-ambiance (highlighted-def-name)]
    [:br]
    [:button#introduce-me.btn.btn-large.btn-primary.disabled strings/introduce-me]])

(defpartial lost-robot []
  [:div#lost-robot
    (el/image {:id "lost-robot-img"} "/images/lost_robot.jpg" "Lost robot by Jochem van Wetten")
    [:span#lost-robot-credit strings/lost-robot-credit]])
 
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

(defpartial example-defn []
  [:div.code-wrapper  
      strings/example-defn])

(defpartial custom-functions []
  [:h2 strings/custom-functions])

(defpartial explain-custom-functions []
  [:div
    strings/intro-custom-functions
    (example-defn)
    strings/explain-custom-functions])

(defpartial explain-custom-functions-2 []
  [:div
    strings/explain-fn
    strings/explain-args
    strings/explain-body])

(defpartial outro-title []
  [:h2 strings/outro-title])

(defchapter "/chapter/1" "Introductions"
  {:layout {:headline     (tagline)
            :text         nil
            :main         (intro)       
            :below-main   (enter-name)
            :sidebar      (lost-robot)}}

  {:layout {:headline     (hello-user)
            :text         nil
            :main         (explain-def-my-name)
            :below-main   nil
            :sidebar      nil}}

  {:layout {:headline     nil
            :text         strings/explain-str
            :main         (repl/editor strings/repl-str-example)
            :below-main   (repl/result)
            :sidebar      (repl/info)}}

  {:layout {:headline     nil
            :text         strings/str-with-symbols}}

  {:layout {:headline     nil
            :text         strings/nested-str}}

  {:layout {:headline     (custom-functions)
            :text         nil
            :main         (explain-custom-functions)
            :below-main   nil
            :sidebar      nil}}

  {:layout {:main         (example-defn)        
            :below-main   (explain-custom-functions-2)}}

  {:layout {:headline     nil
            :text         strings/goodbye-ada
            :main         (repl/editor strings/repl-goodbye-ada)
            :below-main   (repl/result)
            :sidebar      (repl/info)}}

  {:layout {:headline     nil
            :text         strings/introducing-defn}
   :repl-text strings/repl-goodbye-defn}

  {:layout {:text         strings/greet-challenge}}

  {:layout {:headline     (outro-title)
            :text         nil
            :main         strings/outro-main
            :below-main   nil
            :sidebar      nil}})

