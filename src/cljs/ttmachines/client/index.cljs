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
  (:require [clojure.string :as string]
            [one.dispatch :as dispatch]
            [domina.domina :as dom]
            [domina.domina.css :as css]
            [domina.domina.events :as events]))

(defn trim-element-text [el]
  (let [current-text (dom/text el)]
    (dom/set-text! el (string/trim current-text))))

(defn enable-introduce-me! []
  (dom/remove-class! (css/sel "#introduce-me") "disabled"))

(defn setup-my-name []
  (when-let [my-name (css/sel "#my-name")]
    (events/listen! my-name :blur
      (fn [evt]
        (when-not (= "" (string/trim (dom/text my-name)))
          (trim-element-text my-name)
          (enable-introduce-me!))))
    (.focus (.getElementById js/document "my-name"))))

(dispatch/react-to #{:switch-page} {:priority 3}
  (fn [_ _]
    (setup-my-name)))