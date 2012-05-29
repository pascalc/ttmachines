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
    (:require [ttmachines.server.views.strings.index :as strings]))

(defpartial section-title [title]
    [:header
        [:h2.fancy title]])

(defpartial editor [editor-text] 
    [:section#editor
        [:textarea#editor-textarea editor-text]])

(defpartial result [title]
    [:section#result
        (section-title title)
        [:textarea#result-textarea]])

(defpartial info [title explanation]
    [:aside#doc
        (section-title title)
        [:div#doc-text
            [:p#doc-name]
            [:ul#doc-args.unstyled]
            [:p#doc-body explanation]]])

(defcontent "/"
  {:include-js    "javascript/index.js"
   :text          strings/intro
   :main          (editor strings/initial-editor-text)
   :sidebar       (info strings/info-title strings/info-explanation)
   :below-main    (result strings/result-title)})
