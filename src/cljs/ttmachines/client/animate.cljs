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

(ns ttmachines.client.animate
  (:use [ttmachines.client.util :only [after map->js]])
  (:require [one.dispatch :as dispatch]
            [domina.domina :as dom]
            [domina.domina.css :as css]
            [ttmachines.client.layout :as layout]))

(def ANIMATION-DURATION-MS 400)

(def opposite-direction
  {:left :right
   :right :left})

(defn slide-in! [{:keys [direction] :or {direction :left}} selector]
  (let [element         (css/sel selector)
        opp-direction   (name (opposite-direction direction))
        original-pos    (or (dom/style element opp-direction) 0)]
    (dom/set-styles! element 
      {"position"     "relative"
       opp-direction  "750px"})
    (.animate (js/$ selector)
      (map->js 
        {opp-direction  original-pos})
      ANIMATION-DURATION-MS
      "easeOutQuint")))

(def slide-in-left! (partial slide-in! {}))
(def slide-in-right! (partial slide-in! {:direction :right}))

;; Animate layout transitions

(def entrances {:headline   slide-in-left!
                :text       slide-in-left!
                :main       slide-in-left!
                :below-main slide-in-left!
                :sidebar    slide-in-right!})

(defn incoming-keys [layout-map]
  (keys (filter (fn [k v] (not (nil? v))) layout-map)))

(defn slide-in-layout-elements! [layout-map]
  (doseq [k (incoming-keys layout-map)]
    (when (contains? entrances k)
      (let [animation   (entrances k)
            selector  (layout/targets k)]
        (animation selector)))))

(defn scroll-window-to-top! []
  (.animate (js/$ "body, html")
      (map->js {:scrollTop 0})
      500
      "easeOutQuint"))

;; Triggers

(dispatch/react-to #{:switch-page} {:priority 0}
  (fn [_ _]
    (scroll-window-to-top!)))

(dispatch/react-to #{:switch-page} {:priority 2}
  (fn [_ page-data]
    (let [layout-map (get-in page-data [:data :layout])]
      (slide-in-layout-elements! layout-map))))
