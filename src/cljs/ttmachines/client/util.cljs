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

(ns ttmachines.client.util
  (:require [one.dispatch :as dispatch]
            [domina.domina :as dom]
            [domina.domina.css :as css]))

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

; From himera.client.repl

(defn map->js [m]
  (let [out (js-obj)]
    (doseq [[k v] m]
      (aset out (name k) v))
    out))

;; Custom

(defn path-name []
  (.-pathname (.-location js/window)))

(defn after [period fun]
  (js/setTimeout fun period))

(defn current-time-millis []
  (js* "new Date().getTime()"))

(defn parse-int [int-str]
  (js/parseInt int-str))

(defn parse-float [float-str]
  (js/parseFloat float-str))

;; Code highlighting

(defn code-highlight [code-str target-id]
  (when-let [element (.getElementById js/document target-id)]
    (.runMode js/CodeMirror 
      code-str "clojure" element)))

(defn highlight-code-nodes []
  (doseq [code-node (dom/nodes (css/sel ".clojure"))]
    (dom/set-attr! code-node :id "_clojure_code_")  
    (code-highlight 
      (dom/text code-node) 
      "_clojure_code_")
    (dom/remove-attr! code-node :id)))

(dispatch/react-to #{:switch-page} {:priority 5}
  (fn [_ _] 
    (highlight-code-nodes)))

;; Truncate lazy-seqs when printng if they exceed LAZY-SEQ-LIMIT

(def LAZY-SEQ-LIMIT 100)

(defn append-and-more [s]
  (let [beginning (subs s 0 (- (count s) 1))
        end       "... & more)"]
    (str beginning end)))

(defn finite-pr-str [x]
  (if (and 
        (not (nil? x)) 
        (satisfies? ISeq x) 
        (> (count x) LAZY-SEQ-LIMIT))
    (append-and-more (pr-str (take LAZY-SEQ-LIMIT x)))
    (pr-str x)))
