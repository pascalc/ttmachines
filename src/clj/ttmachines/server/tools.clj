(ns ttmachines.server.tools
  (:use [cljs.repl :only (repl)]
        [cljs.repl.browser :only (repl-env)]))

;; From one.tools

(defn cljs-repl
  "Start a ClojureScript REPL which can connect to the development
  version of the application. The REPL will not work until the
  development page connects to it, so you will need to either open or
  refresh the development page after calling this function."
  []
  (repl (repl-env)))