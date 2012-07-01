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

(ns ttmachines.server.views.chapters
  (:require [ttmachines.server.views.strings.chapters :as strings]
            [ttmachines.server.views.chapter :as chapter]
            [ttmachines.server.views.chapter.one :as chapter.one])
  (:use [noir.core]
        [hiccup.element]
        [ttmachines.server.views.layout :only [defcontent]]))

(defpartial title []
  [:h2 strings/title])

(defpartial chapters []
  (let [chapter-links (into 
                        (sorted-map-by <)
                        @chapter/chapters)]
    [:section#chapters
      strings/before-chapters
      (map
        (fn [[number {:keys[url title description]}]]
          (link-to url 
            [:article
              [:header [:h3 (str "Chapter " number ": " title)]]
              description]))
        chapter-links)]))

(defcontent "/chapters"
  {:layout {:headline   (title)
            :text       nil
            :main       (chapters)
            :below-main nil
            :sidebar    (chapter.one/lost-robot)}})