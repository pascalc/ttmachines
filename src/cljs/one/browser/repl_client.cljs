(ns
  one.browser.repl-client
  (:require [goog.uri.utils :as uri]
            [clojure.browser.repl :as repl]))

(defn- server
  []
  (let [location (.toString window.location ())]
    (str (uri/getScheme location) "://" (uri/getDomain location))))

(defn ^:export repl
  []
  (repl/connect (str (server) ":9000/repl")))