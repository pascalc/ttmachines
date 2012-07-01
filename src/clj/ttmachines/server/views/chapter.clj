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
            [noir.response :as response]
            [ttmachines.server.views.layout :as view])
  (:use [noir.core :only [defpartial defpage]]
        hiccup.core
        hiccup.element
        ttmachines.server.tools))

;; Every time a chapter is defined, store it here
(def chapters (atom {}))

(defpartial chapter-nav [page-num chapter-length 
                         & {:keys [chapter-next chapter-previous] 
                            :or   {chapter-next nil chapter-previous nil}}]
  [:hr]
  (when chapter-next
    (link-to 
      {:id    "next"
       :class "btn btn-large btn-success"} 
      chapter-next
      "Next"))
  [:p (str page-num " of " chapter-length)]
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

(defn def-chapter-content [route content-map & {:keys [previous-pages]}]
  `(defpage ~route {:keys [~'initialize] :or {~'initialize false}} 
    (binding [*previous-chapter-content* ~previous-pages]
      (handle-request ~'initialize ~content-map))))

;; Generate chapter links

(def ^:dynamic *base-url*)

(defn redirect-base-url [base-url]
  `(defpage ~base-url {}
      (response/redirect ~(str base-url "/1"))))

(defn generate-url [page-num]
  (str *base-url* "/" page-num))

(defn next-link [page-num chapter-length]
  (let [target (inc page-num)]
    (when (<= target chapter-length)
      (str *base-url* "/" target))))

(defn previous-link [page-num]
  (let [target (dec page-num)]
    (when (>= target 1)
      (str *base-url* "/" target "?initialize=true"))))  

(defn add-keys [content-map & {:keys[route page-num chapter-length]}]
  (-> content-map
    (assoc-in 
      [:layout :chapter-nav]
      (chapter-nav 
        page-num
        chapter-length
        :chapter-next (next-link page-num chapter-length)
        :chapter-previous (previous-link page-num)))
    (assoc :route route)))

(defn expand-def-chapter-content [content-maps & {:keys [page-acc]}]
  (let [chapter-length (count content-maps)]
    (doall
      (map 
        (fn [page-num content-map]
          (let [route             (generate-url page-num)
                full-content-map  (add-keys content-map :route route 
                                                        :page-num page-num
                                                        :chapter-length chapter-length)]
            (swap! page-acc assoc page-num full-content-map)
            (def-chapter-content 
              route
              full-content-map
              :previous-pages @page-acc)))
        (range 1 (inc chapter-length))
        content-maps))))

;; defchapter takes a sequence of content-maps and calls def-chapter-content
;; on each in turn, with the appropriate navigation inserted

(defmacro defchapter [{:keys [url number] :as info} & content-maps]
  (binding [*base-url* url]
    `(do
        (swap! chapters assoc ~number ~info)
        ~(redirect-base-url url) 
        ~@(expand-def-chapter-content content-maps :page-acc (atom {})))))
