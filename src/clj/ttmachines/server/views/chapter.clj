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
    (when *chapter-next*
      (link-to {:id "next"} *chapter-next* "Next"))
    (when *chapter-previous*
      (link-to {:id "previous"} *chapter-previous* "Previous"))])

;; private

(def ^:dynamic *base-url*)

(defn insert-chapter-nav [index content-map]
  (assoc 
    content-map 
    :chapter-nav
    {:next      (str *base-url* "/" (+ index 2))
     :previous  (str *base-url* "/" index)}))

(defn generate-url [index]
  (str *base-url* "/" (+ index 1)))

(defn fix-first-links [content-maps]
  (let [first-content (first content-maps)
        rest-content  (rest content-maps)]
    (conj
      rest-content
      (dissoc-in first-content [:chapter-nav :previous]))))

(defn fix-last-links [content-maps]
  (let [last-content  (last content-maps)
        rest-content  (drop-last content-maps)]
    (conj 
      (vec rest-content)
      (dissoc-in last-content [:chapter-nav :next]))))

(defn insert-navigation [content-maps]
  (->> content-maps
    (map insert-chapter-nav (range (count content-maps)))
    (fix-first-links)
    (fix-last-links)))

(defn expand-defcontent [content-maps]
  (doall
    (map 
      (fn [index content-map] 
        `(binding [*chapter-next*     ~(get-in content-map [:chapter-nav :next])
                   *chapter-previous* ~(get-in content-map [:chapter-nav :previous])]
            (defcontent ~(generate-url index) ~content-map)))
      (range (count content-maps))
      (insert-navigation content-maps))))

;; defchapter takes a sequence of content-maps and calls defcontent
;; on each in turn, with the appropriate navigation inserted

(defmacro defchapter [base-url & content-maps]
  (binding [*base-url* base-url]
    `(do ~@(expand-defcontent content-maps))))
