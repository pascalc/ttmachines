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

(ns ttmachines.client.history
  (:use [ttmachines.client.util :only [map->js current-time-millis parse-float]])
  (:require [one.dispatch :as dispatch]))

(def History (.-History js/window))

(defn browser-navigation? [push-timestamp pop-timestamp]
  (let [elapsed-ms (- pop-timestamp push-timestamp)]
    (> elapsed-ms 500)))

;; Bind to StateChange Event
(.bind (.-Adapter History)
  js/window
  "statechange"
  (fn []
    (let [state           (.getState History)
          state-info      (atom 
                            {:data  (js->clj (.-data state))
                             :title (.-title state)
                             :url   (.-url state)})
          pushed          (parse-float (get-in @state-info [:data "timestamp"]))
          popped          (current-time-millis)]
      (swap! 
        state-info 
        assoc :browser-navigation (browser-navigation? pushed popped))
      (dispatch/fire :history-state-change @state-info))))

(defn push-state! [& {:keys [data title url]}]
  (let [js-data (-> data
                  (assoc :timestamp (current-time-millis))
                  (map->js))]
    (.pushState History
      js-data
      title
      url)))
