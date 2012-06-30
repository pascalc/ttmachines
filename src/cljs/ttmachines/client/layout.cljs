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
  (:use [ttmachines.client.util :only [path-name]])
  (:require [cljs.reader :as reader]
            [one.dispatch :as dispatch]
            [domina.domina :as dom]
            [domina.domina.css :as css]
            [domina.domina.events :as events]
            [ttmachines.client.request :as request]
            [ttmachines.client.history :as history]
            [clojure.browser.repl :as repl]))

;; INITIALISE

(defn init []
  (request/get-page (path-name) :initialize? true))
  ;(repl/connect "http://localhost:9000/repl"))

;; Alter DOM

(defn set-content! [selector content]
  (let [area (css/sel selector)]
    (dom/destroy-children! area)
    (dom/append! area content)))

;; STATE
;; Whenever an atom in layout/state is changed, the dom is updated

(def state 
  {:headline    (atom nil)
   :text        (atom nil)
   :main        (atom nil)
   :below-main  (atom nil)
   :chapter-nav (atom nil)
   :sidebar     (atom nil)})

(def targets
  {:headline    "#headline"
   :text        "#text"
   :main        "#main"
   :below-main  "#below-main"
   :chapter-nav "#chapter-nav"
   :sidebar     "#sidebar"})

(def dom-watchers
  (zipmap (keys state) (map #(partial set-content! %) (vals targets))))

;; Doing this in a doseq doesn't seem to work...
(add-watch (state :headline) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :headline) new-val)))
(add-watch (state :text) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :text) new-val)))
(add-watch (state :main) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :main) new-val)))
(add-watch (state :below-main) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :below-main) new-val)))
(add-watch (state :chapter-nav) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :chapter-nav) new-val)))
(add-watch (state :sidebar) :alter-dom
  (fn [_ _ _ new-val] ((dom-watchers :sidebar) new-val)))

(defn load-state [state-map]
  (doseq [[state-key content] (state-map :layout)]
    (when (contains? state state-key)
      (reset! (state state-key) content))))

(defn set-up-nav-li [route]
  (dom/remove-class! (css/sel "#nav li") "active")
  (doseq [li-node (dom/nodes (css/sel "#nav li"))]
    (let [a-node (first (dom/children li-node))]
      (when (= (dom/attr a-node :href) route)
        (dom/add-class! li-node "active")))))

;; EVENT TRIGGERS

(defn ajax-link [link-nodes]
  (events/listen! link-nodes :click
    (fn [evt]
      (events/prevent-default evt)
      (let [link  (events/target evt)
            url   (dom/attr link :href)]
        (dispatch/fire :link-clicked {:url url})))))

(ajax-link (css/sel "#nav a"))

;; EVENT LISTENERS

;; Push the URL to the browser's history
(dispatch/react-to #{:link-clicked} {:priority 1}
  (fn [_ {:keys [url]}]
    (history/push-state! :url url)))

;; When the browser's history changes, via link navigation, programmatic 
;; get-page or browser forward/back, we fetch the contents of the page
(dispatch/react-to #{:history-state-change} {:priority 1}
  (fn [_ {:keys [url browser-navigation]}]
    (if browser-navigation
      (request/get-page url :initialize? true)
      (request/get-page url))))

;; Handle incoming page content

;; Hide the loading spinner on first load
(dispatch/react-to #{:switch-page} {:max-count 1 :priority 0}
  (fn [_ _]
    (js/hideLoading)
    (dom/destroy! (css/sel "#loading"))))

;; Set up the nav li CSS classes
(dispatch/react-to #{:switch-page} {:priority 0}
  (fn [_ {:keys [data]}]
    (set-up-nav-li (data :route))))

;; Load the new page's layout
(dispatch/react-to #{:switch-page} {:priority 1}
  (fn [_ page-data]
    (load-state (page-data :data))))

;; Set up chapter navigation
(dispatch/react-to #{:switch-page} {:priority 2}
  (fn [_ _]
    (ajax-link (css/sel "#chapter-nav a"))))

;; MAIN

(init)