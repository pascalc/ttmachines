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

(ns ttmachines.client.layout
  (:require [cljs.reader :as reader]
            [one.dispatch :as dispatch]
            [domina.domina :as dom]
            [domina.domina.css :as css]
            [domina.domina.events :as events]
            [ttmachines.client.request :as request]
            [clojure.browser.repl :as repl]))

;; INITIALISE

(js/hideLoading)
(dom/destroy! (css/sel "#loading"))
(repl/connect "http://localhost:9000/repl")

;; Alter DOM

(defn set-content! [selector content]
  (let [area (css/sel selector)]
    (dom/destroy-children! area)
    (dom/append! area content)))

;; STATE
;; Whenever an atom in layout/state is changed, the dom is updated

(def state 
  {:text        (atom nil)
   :main        (atom nil)
   :below-main  (atom nil)
   :sidebar     (atom nil)})

(def targets
  {:text        "#text"
   :main        "#main"
   :below-main  "#below-main"
   :sidebar     "#sidebar"})

(def dom-watchers
  (zipmap (keys state) (map #(partial set-content! %) (vals targets))))

;; Doing this in a doseq doesn't seem to work...
(add-watch (state :text) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :text) new-val)))
(add-watch (state :main) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :main) new-val)))
(add-watch (state :below-main) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :below-main) new-val)))
(add-watch (state :sidebar) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :sidebar) new-val)))

(defn load-state [state-map]
  (doseq [[state-key content] state-map]
    (when (contains? state state-key)
      (reset! (state state-key) content))))

;; EVENT LISTENERS

(dispatch/react-to #{:switch-page} {:priority 0}
  (fn [_ page-data]
    (load-state (page-data :data))))

(dispatch/react-to #{:switch-page} {:priority 1}
  (fn [_ page-data]
    (.log js/console (pr-str page-data))))

;; EVENT TRIGGERS

;; Load page when nav link clicked 
(events/listen! (css/sel "#nav a") :click
  (fn [evt]
    (events/prevent-default evt)
    (let [clicked (events/target evt)
          url     (dom/attr clicked :href)]
      (request/get-page url))))
