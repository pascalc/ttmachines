(ns ttmachines.server.tools
  (:use [cljs.repl :only (repl)]
    [cljs.repl.browser :only (repl-env)])
  (:require [clojure.string :as string]))

; From clojure.contrib
(defn dissoc-in
  "Dissociates an entry from a nested associative structure returning a new
  nested structure. keys is a sequence of keys. Any empty maps that result
  will not be present in the new structure."
  [m [k & ks :as keys]]
  (if ks
    (if-let [nextmap (get m k)]
      (let [newmap (dissoc-in nextmap ks)]
        (if (seq newmap)
          (assoc m k newmap)
          (dissoc m k)))
      m)
    (dissoc m k)))

;; From one.tools

(defn cljs-repl
  "Start a ClojureScript REPL which can connect to the development
  version of the application. The REPL will not work until the
  development page connects to it, so you will need to either open or
  refresh the development page after calling this function."
  []
  (repl (repl-env)))

;; From Himera

(defn generate-response [transformer headers data & [status]]
  (let [ret-val (transformer data)]
    {:status (or status 200)
     :headers headers
     :body ret-val}))

(def generate-clj-response (partial generate-response
                             (fn [data]
                               (pr-str {:data data}))
                               {"Content-Type" "application/clojure; charset=utf-8"}))

;; Other tools

(defn ajax?
  "Was this an ajax request?"
  [req]
  (let [requested-with (get-in req [:headers "x-requested-with"])]
    (= requested-with "XMLHttpRequest")))