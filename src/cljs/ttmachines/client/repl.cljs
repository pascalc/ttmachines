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

(ns ttmachines.client.repl
  (:require [cljs.reader :as reader]
            [clojure.string :as str]
            [clojure.set :as set]
            [clojure.walk :as walk]
            [clojure.zip :as zip]))

;; From himera.client.repl

(defn- map->js [m]
  (let [out (js-obj)]
    (doseq [[k v] m]
      (aset out (name k) v))
    out))

(defn- go-compile [code]
  (let [data (atom nil)
        params (map->js {:url "/compile"
                         :data (str "{:expr " code "}")
                         :contentType "application/clojure; charset=utf-8"
                         :async false
                         :type "POST"
                         :dataType "text"
                         :success #(reset! data (reader/read-string %))})]
    (.ajax js/jQuery params)
    @data))

;; Codemirror integration

(defn- codemirrorify [textarea-id options]
  (.fromTextArea js/CodeMirror
    (.getElementById js/document textarea-id),
    (map->js options)))

(defn- make-editor []
  (codemirrorify 
    "editor-textarea"
    {:theme "ambiance"
     :lineNumbers true
     :matchBrackets true}))

(defn- make-result []
  (codemirrorify 
    "result-textarea"
    {:theme "ambiance"
     :readOnly true
     :lineWrapping true}))

;; Himera integration

(defn- char-count [s ch] 
  (count (filter #(= % ch) s)))

(defn- valid-code [code]
  (let [code-char-count (partial char-count code)]
    (and
      (= (code-char-count \() (code-char-count \)))
      (= (code-char-count \{) (code-char-count \}))
      (= (code-char-count \[) (code-char-count \]))
      (even? (code-char-count \")))))

(defn- pre-compile [code]
  (str "(do " code ")"))

(defn- evaluate [code]
  (let [compiled (go-compile code)]
    (if-let [err (and compiled (:error compiled))]
      (str "Compilation error: " err))
    (try
      (js/eval (:js compiled))
      (catch js/Error e
        (str "Compilation error: " e)))))

(defn- show-result [result res]
  (.setValue result (pr-str res)))

;; Precompile -> evaluate -> display
(defn- process [code result]
  (let [precompiled (pre-compile code)
        evaluated (evaluate precompiled)]
    (show-result result evaluated)))

;; Doc

(defn- get-doc [sym]
  (let [data (atom nil)
        params (map->js {:url (str "/doc/" sym)
                         :async true
                         :type "GET"
                         :success #(show-doc %)})]
    (.ajax js/jQuery params))
    nil)

(defn- show-doc [fun-doc]
  (let [doc-name (js/jQuery "#doc-name")
        doc-args (js/jQuery "#doc-args")
        doc-body (js/jQuery "#doc-body")]
    (.text doc-name (.-name fun-doc))
    (.html doc-args 
      (str/join (map #(str "<li>" % "</li>") (.-arglists fun-doc))))
    (.text doc-body (.-doc fun-doc))))

;; Main

(defn ^:export setup []
  (let [editor (make-editor)
        result (make-result)
        code (atom (.getValue editor))]

    ;; Set up code
    (set-validator! code valid-code)
    (add-watch code :process
      (fn [key a old new]
        (process new result)))

    ;; Editor updates code on change, if the code has not changed for 200 ms
    (.setOption editor 
      "onChange" 
      (fn [e info]
        (let [editor-val (.getValue e)]
          (js/setTimeout
            (fn []
              (when (= (.getValue e) editor-val)
                (.setValue result "")
                (reset! code editor-val)))
            300))))

    ;; Editor updates info when token selected
    (.setOption editor
      "onCursorActivity"
      (fn [e]
        (let [selection (.getSelection e)]
          (when-not (= "" selection)
            (get-doc selection)))))

    ;; Initialize
    (reset! code (.getValue editor))))