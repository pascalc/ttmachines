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

(ns ttmachines.server.service
  (:use compojure.core)
  (:use ring.middleware.clj-params)
  (:require [clojure.string :as string]
            [clojure.repl :as repl])
  (:require [himera.server.cljs :as cljs]
            [compojure.route :as route]
            [ring.util.response :as resp]
            [cheshire.core :as cheshire])
  (:require [ttmachines.server.views.layout :as view]))

(defn get-meta [fun]
  (meta (ns-resolve 'clojure.core (symbol fun))))

(defn get-doc-for [fun]
  (when-let [fun-meta (get-meta fun)]
    {:name     (str (fun-meta :name))
     :arglists (vec (map str (fun-meta :arglists)))
     :doc      (string/replace (fun-meta :doc) #"\s+" " ")}))

(defn generate-response [transformer headers data & [status]]
  (let [ret-val (transformer data)]
    {:status (or status 200)
     :headers headers
     :body ret-val}))

(def generate-js-response (partial generate-response
                                   (fn [data]
                                     (pr-str {:js (string/trim-newline
                                                   (:result data))}))
                                   {"Content-Type" "application/clojure; charset=utf-8"}))

(def generate-json-response (partial generate-response
                                   cheshire/generate-string
                                   {"Content-Type" "application/json; charset=utf-8"}))

(defroutes handler
  (GET "/" [] (resp/redirect "/index.html"))

  (GET "/layout" [] (view/layout [:p "Content goes here!"]))

  (POST "/compile" [expr]
        (try
          (generate-js-response (cljs/compilation expr :simple false))
          (catch RuntimeException e
            (generate-js-response {:result nil} 400))))

  (GET ["/doc/:sym" :sym #"\S+"] [sym]
        (generate-json-response (get-doc-for sym)))

  (route/resources "/"))

(def app
  (-> handler
      wrap-clj-params))

