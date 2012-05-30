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

(ns ttmachines.server.views.repl-service
    (:use [noir.core]
          [ttmachines.server.tools])
    (:require [clojure.string :as string]
              [noir.response :as resp] 
              [himera.server.cljs :as cljs]))

;; Compile incoming ClojureScript expressions to JavaScript

(def generate-repl-response (partial generate-response
                             (fn [data]
                               (pr-str {:js (string/trim-newline (:result data))}))
                               {"Content-Type" "application/clojure; charset=utf-8"}))

(defpage [:post "/compile"] {:keys [expr]}
    (try
        (generate-repl-response (cljs/compilation expr :simple false))
        (catch Exception e
            (generate-repl-response {:result nil} 400))))

;; Get doc info for the given Clojure function

(defn get-meta [fun]
  (meta (ns-resolve 'clojure.core (symbol fun))))

(defn get-doc-for [fun]
  (when-let [fun-meta (get-meta fun)]
    {:name     (str (fun-meta :name))
     :arglists (vec (map str (fun-meta :arglists)))
     :doc      (string/replace (fun-meta :doc) #"\s+" " ")}))

(defpage [:get ["/doc/:sym" :sym #"\S+"]] {:keys [sym]}
    (resp/json (get-doc-for sym)))
