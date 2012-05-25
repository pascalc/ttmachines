(defproject ttmachines "0.1.0-SNAPSHOT"
  :description "Teaching beginners to program using a ClojureScript REPL."
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir "1.3.0-beta7"]
                 [ring-clj-params "0.1.0"]
                 [org.clojure/clojurescript "0.0-971"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [goog-jar "1.0.0"]
                 [org.mozilla/rhino "1.7R3"]
                 [hiccup "1.0.0"]
                 [markdown-clj "0.8"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :dev-dependencies [[jline "0.9.94"]
                     [lein-marginalia "0.7.0-SNAPSHOT"]
                     [lein-git-deps "0.0.1-SNAPSHOT"]]
  :cljsbuild {
              :builds
              [{:source-path "src/cljs",
               :jar true,
               :compiler
               {:output-dir "resources/public/javascript/cljs",
                :output-to "resources/public/javascript/ttmachines.js",
                :optimizations :simple,
                :repl-listen-port 9000,
                :pretty-print true
                :libs ["goog/dom/query.js"]}}]}
  :jvm-opts ["-Djava.security.policy=heroku.policy" "-Xmx80M"]
  :source-path "src/clj"
  :extra-classpath-dirs ["src/clj"
                         "src/cljs"]
  :main ttmachines.server.app
  :repl-init ttmachines.server.tools)