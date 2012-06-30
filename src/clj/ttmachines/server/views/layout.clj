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

(ns ttmachines.server.views.layout
    (:require [clojure.string :as string]
              [noir.request :as request])
    (:use [noir.core :only [defpage defpartial]]
          hiccup.core
          hiccup.page
          hiccup.element
          hiccup.def
          ttmachines.server.tools))

;; HEAD

(def ^:dynamic *page-title* "talking to machines")

(def ^:dynamic *stylesheets*
    #{"codemirror.css"
      "ambiance.css"
      "animate.css"
      "app.css"})
(defpartial stylesheet-links []
    (map #(include-css (str "/stylesheets/" %)) *stylesheets*))

(def ^:dynamic *javascripts*
     ["analytics.js" 
      "jquery.min.js"
      "jquery-ui-1.8.21.custom.min.js"
      "spin.min.js"
      "native.history.js"
      "codemirror.js"
      "clojure.js"
      "runmode.js"])
(defpartial javascript-links []
    (map #(include-js (str "/javascript/" %)) *javascripts*))

(def favicon [:link {:rel "icon" 
                     :type "image/x-icon"
                     :href "/images/favicon.ico"}])

(defpartial head []
    [:head
        [:meta {:http-equiv "Content-Type"
                :content    "text/html; charset=UTF-8"}]
        [:title *page-title*]
        favicon
        (stylesheet-links)
        (javascript-links)])

;; BODY

(def fork-me-github
    (link-to 
        "http://github.com/pascalc/ttmachines"
        [:img { :style  "position: absolute; top: 0; right: 0; border: 0;" 
                :src    "https://a248.e.akamai.net/camo.github.com/71eeaab9d563c2b3c590319b398dd35683265e85/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
                :alt    "Fork me on Github"}]))

(def ^:dynamic *title* "talking to machines")

(defpartial title-header []
    [:header#title
        [:h1.fancy *title*]])

(def ^:dynamic *route*)

(defpartial nav-link-for [route text]
  (let [li-classes (atom ["fancy"])]
    (when (= route *route*)
      (swap! li-classes conj "active"))
    [:li {:class (string/join " " @li-classes)}
      (link-to route text)]))

(defpartial nav []
    [:nav#nav
        [:ul
            (map #(apply nav-link-for %)
                [["/"           "start"]
                 ["/repl"       "repl"]
                 ["#"           "broadcast"]
                 ["#"           "about"]])]])

(def app-js (include-js "/javascript/app.js"))
(def ttmachines-js 
  [:script {:src    "/javascript/ttmachines.js"
            :type   "text/javascript"
            :defer  "defer"}])

(def footer
    [:footer#footer
        [:p "&copy; Pascal Chatterjee 2012, all rights reserved"]])

;; LAYOUT

(def loading
  [:div#loading
    [:h1 "Loading..."]])  

(defn layout [content-map]
  (let [content (content-map :layout)]
    (html5
      (head)
      [:body
        fork-me-github
        [:div.container
          (title-header)
          (nav)
          [:div#headline
            (content :headline)]
          [:div#text 
            (content :text)]
          [:div#main-column
            [:div#main (content :main)]
            [:div#below-main (content :below-main)]
            [:div#chapter-nav
              (when-let [chapter-nav (content :chapter-nav)]
                chapter-nav)]]
          [:div#sidebar
            (content :sidebar)]
          footer
          app-js
          ttmachines-js]])))

(defmacro defcontent [route content-map]
  (let [content       (-> content-map
                        (assoc :route route)
                        (assoc-in [:layout :chapter-nav] nil))
        html-content  (binding [*route* route]
                        (layout {:layout {:main loading}}))]
    
    `(defpage ~route {} 
      (if (ajax? (request/ring-request))
        (generate-clj-response ~content)
        ~html-content))))
