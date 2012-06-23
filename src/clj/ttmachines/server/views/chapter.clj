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

(ns ttmachines.server.views.chapter
  (:use [noir.core :only [defpartial]]
        hiccup.core
        hiccup.element
        [ttmachines.server.tools :only [dissoc-in]]
        [ttmachines.server.views.layout :only [defcontent]]))

(def ^:dynamic *chapter-next* nil)
(def ^:dynamic *chapter-previous* nil)

;; (chapter-nav) will insert the appropriate navigation links
;; in a content-map

(defpartial chapter-nav []
  [:div.chapter-nav
    [:hr]
    (when *chapter-next*
      (link-to 
        {:id    "next"
         :class "btn btn-large btn-success"} 
        *chapter-next* 
        "Next"))
    (when *chapter-previous*
      (link-to 
        {:id    "previous"
         :class "btn btn-large"} 
        *chapter-previous* 
        "Previous"))])

;; private

(def ^:dynamic *base-url*)

(defn generate-url [chapter-num]
  (str *base-url* "/" chapter-num))

(defn next-link [chapter-num chapter-length]
  (let [target (inc chapter-num)]
    (when (<= target chapter-length)
      (str *base-url* "/" target))))

(defn previous-link [chapter-num]
  (let [target (dec chapter-num)]
    (when (>= target 1)
      (str *base-url* "/" target))))  

(defn expand-defcontent [content-maps]
  (let [chapter-length (count content-maps)]
    (doall
      (map 
        (fn [chapter-num content-map] 
          `(binding [*chapter-next*     ~(next-link chapter-num chapter-length)
                     *chapter-previous* ~(previous-link chapter-num)]
              (defcontent ~(generate-url chapter-num) ~content-map)))
        (range 1 (inc chapter-length))
        content-maps))))

;; defchapter takes a sequence of content-maps and calls defcontent
;; on each in turn, with the appropriate navigation inserted

(defmacro defchapter [base-url & content-maps]
  (binding [*base-url* base-url]
    `(do ~@(expand-defcontent content-maps))))
