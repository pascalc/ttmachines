(defproject ttmachines "0.1.0-SNAPSHOT"
  :description "Teaching beginners to program using a ClojureScript REPL."
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring "1.0.2"]
                 [compojure "1.0.1"]
                 [ring-clj-params "0.1.0"]
                 [org.clojure/clojurescript "0.0-971"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [org.mozilla/rhino "1.7R3"]
                 [cheshire "4.0.0"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :dev-dependencies [[jline "0.9.94"]
                     [lein-marginalia "0.7.0-SNAPSHOT"]]
  :cljsbuild {
              :builds
              [{:source-path "src/cljs",
               :jar true,
               :compiler
               {:output-dir "resources/public/javascript/cljs",
                :output-to "resources/public/javascript/repl.js",
                :optimizations :simple,
                :pretty-print true}}]}
  :jvm-opts ["-Djava.security.policy=heroku.policy" "-Xmx80M"]
  :source-path "src/clj"
  :main ttmachines.server.app)

