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

(ns ttmachines.client.index
  (:require [one.dispatch :as dispatch]
            [domina.domina :as dom]
            [domina.domina.css :as css]
            [domina.domina.events :as events]
            [ttmachines.client.util :as util]))

(defn highlight-enter-name [text]
  (util/code-highlight text "enter-name"))

(defn setup-enter-name []
  (when-let [enter-name (css/sel "#enter-name")]
    (highlight-enter-name (dom/text enter-name))
    (dom/set-attr! enter-name :contenteditable true)
    (events/listen! enter-name :blur 
      (fn [evt]
        (highlight-enter-name (dom/text enter-name))))))

(dispatch/react-to #{:switch-page} {:priority 3}
  (fn [_ _]
    (setup-enter-name)))