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
    (:use [hiccup.core]
          [hiccup.page]
          [hiccup.element]
          [hiccup.def]))

;; HEAD

(def page-title "talking to machines")

(def stylesheets
    #{"codemirror.css"
      "ambiance.css"
      "app.css"})
(def stylesheet-links
    (map #(include-css (str "stylesheets/" %)) stylesheets))

(def javascripts
    #{"javascript/analytics.js"
      "http://code.jquery.com/jquery-1.7.1.min.js"
      "javascript/codemirror.js"
      "javascript/clojure.js"})
(def javascript-links
    (map include-js javascripts))

(def favicon [:link {:rel "icon" 
                     :type "image/x-icon"
                     :href "images/favicon.ico"}])

(def head
    [:head
        [:meta {:http-equiv "Content-Type"
                :content    "text/html; charset=UTF-8"}]
        [:title page-title]
        favicon
        stylesheet-links
        javascript-links])

;; BODY

(def fork-me-github
    (link-to 
        "http://github.com/pascalc/ttmachines"
        [:img { :style  "position: absolute; top: 0; right: 0; border: 0;" 
                :src    "https://a248.e.akamai.net/camo.github.com/71eeaab9d563c2b3c590319b398dd35683265e85/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
                :alt    "Fork me on Github"}]))

(def title "talking to machines")

(def title-header
    [:header#title
        [:h1.fancy title]])

(def ttmachines-js (include-js "javascript/ttmachines.js"))

(def footer
    [:footer#footer
        [:p "&copy; Pascal Chatterjee 2012, all rights reserved"]])

;; LAYOUT

(defn layout [& content]
    (html5
        head
        [:body
            fork-me-github
            [:div.container
                title-header
                content
                footer
                ttmachines-js]]))
