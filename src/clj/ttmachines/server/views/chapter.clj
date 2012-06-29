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

(ns ttmachines.server.views.chapter
  (:require [noir.request :as request]
            [ttmachines.server.views.layout :as view])
  (:use [noir.core :only [defpartial defpage]]
        hiccup.core
        hiccup.element
        ttmachines.server.tools))

(defpartial chapter-nav [chapter-num chapter-length 
                         & {:keys [chapter-next chapter-previous] 
                            :or   {chapter-next nil chapter-previous nil}}]
  [:hr]
  (when chapter-next
    (link-to 
      {:id    "next"
       :class "btn btn-large btn-success"} 
      chapter-next
      "Next"))
  [:p (str chapter-num " of " chapter-length)]
  (when chapter-previous
    (link-to 
      {:id    "previous"
       :class "btn btn-large"} 
      chapter-previous
      "Previous")))

;; Handle requests

(defmulti handle-request
  (fn [initialize? _]
    (cond 
      (not (ajax? (request/ring-request)))  :http
      initialize?                           :ajax-initialize
      :else                                 :ajax)))

(defmethod handle-request :http [_ content-map]
  (binding [view/*route* (content-map :route)]
    (view/layout {:layout {:main view/loading}})))

(defmethod handle-request :ajax [_ content-map]
  (generate-clj-response content-map))

;; Merge previous chapter content if we're jumping in
;; mid-chapter

(def ^:dynamic *previous-chapter-content*)

(defmethod handle-request :ajax-initialize [_ content-map]
  (let [previous-content-ascending 
          (into (sorted-map-by <) 
                *previous-chapter-content*)]
    (generate-clj-response
      (apply (partial deep-merge-with (fn [l r] r)) 
        (vals previous-content-ascending)))))

;; def-chapter-content expands to defpage that calls handle request

(defn def-chapter-content [route content-map & {:keys [previous-chapters]}]
  `(defpage ~route {:keys [~'initialize] :or {~'initialize false}} 
    (binding [*previous-chapter-content* ~previous-chapters]
      (handle-request ~'initialize ~content-map))))

;; Generate chapter links

(def ^:dynamic *base-url*)

(defn generate-url [chapter-num]
  (str *base-url* "/" chapter-num))

(defn next-link [chapter-num chapter-length]
  (let [target (inc chapter-num)]
    (when (<= target chapter-length)
      (str *base-url* "/" target))))

(defn previous-link [chapter-num]
  (let [target (dec chapter-num)]
    (when (>= target 1)
      (str *base-url* "/" target "?initialize=true"))))  

(defn add-keys [content-map & {:keys[route chapter-num chapter-length]}]
  (-> content-map
    (assoc-in 
      [:layout :chapter-nav]
      (chapter-nav 
        chapter-num
        chapter-length
        :chapter-next (next-link chapter-num chapter-length)
        :chapter-previous (previous-link chapter-num)))
    (assoc :route route)))

(defn expand-def-chapter-content [content-maps & {:keys [chapter-acc]}]
  (let [chapter-length (count content-maps)]
    (doall
      (map 
        (fn [chapter-num content-map]
          (let [route             (generate-url chapter-num)
                full-content-map  (add-keys content-map :route route 
                                                        :chapter-num chapter-num
                                                        :chapter-length chapter-length)]
            (swap! chapter-acc assoc chapter-num full-content-map)
            (def-chapter-content 
              route
              full-content-map
              :previous-chapters @chapter-acc)))
        (range 1 (inc chapter-length))
        content-maps))))

;; defchapter takes a sequence of content-maps and calls def-chapter-content
;; on each in turn, with the appropriate navigation inserted

(defmacro defchapter [base-url & content-maps]
  (binding [*base-url* base-url]
    `(do ~@(expand-def-chapter-content content-maps :chapter-acc (atom {})))))
