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
            [clojure.zip :as zip]
            [one.dispatch :as dispatch]
            [domina.domina :as dom])
  (:use [ttmachines.client.util :only [map->js dissoc finite-pr-str]]))

;; Codemirror integration

(defn- codemirrorify! [textarea options atm]
  (when-not (dom/get-data textarea :codemirrorified)
    (dom/set-data! textarea :codemirrorified true)
    (reset! atm
      (.fromTextArea js/CodeMirror
        textarea,
        (map->js options)))))

(defn- set-option [codemirror k value]
  (.setOption codemirror (name k) value))

;; Exported vars

(def editor-textarea "editor-textarea")
(def editor (atom nil))
(def editor-settings
  {:theme "ambiance"
   :lineNumbers true
   :matchBrackets true})

(def result-textarea "result-textarea")
(def result (atom nil))
(def result-settings
  {:theme "ambiance"
   :readOnly true
   :lineWrapping true})

(def code (atom ""))
(set-validator! code valid-code) ; This seems to stop working??
(add-watch code :process
  (fn [key a old new]
    (process new)))

;; Codemirror callbacks

(defn- update-code [e _]
  (let [editor-val (.getValue e)]
    (js/setTimeout
      (fn []
        (when (= (.getValue e) editor-val)
          (.setValue @result "")
          (reset! code editor-val)))
      200)))

(defn- get-selection-doc [e]
  (let [selection (.getSelection e)]
      (when-not (= "" selection)
        (get-doc selection))))

(def change-listeners 
  (atom {:editor {:update-code update-code}
         :result {}}))

(def activity-listeners
  (atom {:editor {:get-selection-doc get-selection-doc}
         :result {}}))

;; Instantiate vars

(defn- init-editor! [textarea]
  (codemirrorify! textarea editor-settings editor)
  (set-option @editor
    :onChange
    (fn [e info]
      (doseq [[k fun] (@change-listeners :editor)]
        (fun e info))))
  (set-option @editor
    :onCursorActivity
    (fn [e]
      (doseq [[k fun] (@activity-listeners :editor)]
        (fun e)))))

(defn- init-result! [textarea]
  (codemirrorify! textarea result-settings result)
  (set-option @result
    :onChange
    (fn [e info]
      (doseq [[k fun] (@change-listeners :result)]
        (fun e info))))
  (set-option @result
    :onCursorActivity
    (fn [e]
      (doseq [[k fun] (@activity-listeners :result)]
        (fun e)))))


;; Add callbacks

(defn- add-change-listener [codemirror-name new-listener-name new-listener-fun]
  (swap! change-listeners assoc-in [codemirror-name new-listener-name] new-listener-fun))

(defn- add-activity-listener [codemirror-name new-listener-name new-listener-fun]
  (swap! activity-listeners assoc-in [codemirror-name new-listener-name] new-listener-fun))

;; Remove callbacks

(defn- remove-change-listener [codemirror-name listener-name]
  (swap! change-listeners dissoc-in [codemirror-name listener-name]))

(defn- remove-activity-listener [codemirror-name listener-name]
  (swap! activity-listeners dissoc-in [codemirror-name listener-name]))

;; Exported functions

(def add-editor-change-listener (partial add-change-listener :editor))
(def add-result-change-listener (partial add-change-listener :result))
(def add-editor-activity-listener (partial add-activity-listener :editor))
(def add-result-activity-listener (partial add-activity-listener :result))

(def remove-editor-change-listener (partial remove-change-listener :editor))
(def remove-result-change-listener (partial remove-change-listener :result))
(def remove-editor-activity-listener (partial remove-activity-listener :editor))
(def remove-result-activity-listener (partial remove-activity-listener :result))

(defn ^:export editor-text []
  (.getValue @editor))

(defn ^:export set-editor-text! [text]
  (.setValue @editor text))

(defn ^:export result-text []
  (.getValue @result))    

;; Himera integration

;; Code-str validation

(defn- char-count [s ch] 
  (count (filter #(= % ch) s)))

(defn valid-code [code]
  (let [code-char-count (partial char-count code)]
    (and
      (= (code-char-count \() (code-char-count \)))
      (= (code-char-count \{) (code-char-count \}))
      (= (code-char-count \[) (code-char-count \]))
      (even? (code-char-count \")))))

;; Pre compilation

(def ns-alias-expansions
  { "string"  "clojure.string"
    "dom"     "domina.domina"
    "css"     "domina.domina.css" })

(defn ns-from-str [s]
  (when-let [match (re-find #"^([\w.\-\?\!]+)/[\w.\-\?\!]+$" s)]
    (match 1)))

(defn expand-ns-aliases [sym]
  (let [sym-str (str sym)
        ns-str  (ns-from-str sym-str)
        alias   (ns-alias-expansions ns-str)]
    (if (and ns-str alias)
    (-> sym-str
        (str/replace ns-str alias)
        (symbol))
      sym)))

(defn- pre-compile [code-str]
  (->> (str "(do " code-str ")")
    (reader/read-string)
    (walk/postwalk expand-ns-aliases)
    (pr-str)))

;; Compilation

(def *cljs-ns* (atom "ttmachines.client.user"))

(defn- go-compile [code]
  (let [data (atom nil)
        params (map->js {:url "/compile"
                         :data (str "{:expr " code " :cljs-ns " @*cljs-ns* "}")
                         :contentType "application/clojure; charset=utf-8"
                         :async false
                         :type "POST"
                         :dataType "text"
                         :success #(reset! data (reader/read-string %))})]
    (.ajax js/jQuery params)
    @data))

;; Evaluation

(defn- evaluate [code]
  (let [compiled (go-compile code)]
    (if-let [err (and compiled (:error compiled))]
      (str "Compilation error: " err))
    (try
      (js/eval (:js compiled))
      (catch js/Error e
        (str "Compilation error: " e)))))

(defn- show-result [res]
  (.setValue @result (finite-pr-str res)))

;; Precompile -> evaluate -> display

(defn- process [code]
  (let [precompiled (pre-compile code)
        evaluated (evaluate precompiled)]
    (show-result evaluated)))

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

; EVENT LISTENERS

(dispatch/react-to #{:switch-page} {:priority 1}
  (fn [_ {:keys [data]}]
    (when-let [cljs-eval-ns (data :cljs-ns)]
      (reset! *cljs-ns* cljs-eval-ns))))

(dispatch/react-to #{:switch-page} {:priority 2}
  (fn [_ {:keys [data]}]
    (when (and 
            (dom/by-id editor-textarea)
            (dom/by-id result-textarea))
      (do
        (init-editor! (dom/by-id editor-textarea))
        (init-result! (dom/by-id result-textarea))
        (set-validator! code valid-code) ; I don't know why this needs to be reset, but it does
        (reset! code (editor-text))))))

(dispatch/react-to #{:switch-page} {:priority 3}
  (fn [_ {:keys[data]}]
    (when-let [text (data :repl-text)]
      (set-editor-text! text))))
