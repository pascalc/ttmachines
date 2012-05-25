(defproject ttmachines "0.1.0-SNAPSHOT"
  :description "Teaching beginners to program using a ClojureScript REPL."
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir "1.3.0-beta7"]
                 [ring-clj-params "0.1.0"]
                 [org.clojure/clojurescript "0.0-971"]
                 [com.google.javascript/closure-compiler "r1592"]
                 [org.clojure/google-closure-library "0.0-790"]
                 [org.mozilla/rhino "1.7R3"]
                 [hiccup "1.0.0"]
                 [markdown-clj "0.8"]]
  :plugins [[lein-cljsbuild "0.1.2"]]
  :dev-dependencies [[jline "0.9.94"]
                     [lein-marginalia "0.7.0-SNAPSHOT"]
                     [lein-git-deps "0.0.1-SNAPSHOT"]]
  :git-dependencies [["https://github.com/levand/domina.git"
                      "8933b2d12c44832c9bfaecf457a1bc5db251a774"]]
  :extra-classpath-dirs [".lein-git-deps/domina/src/cljs"
                         "src/clj"
                         "src/cljs"]
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
                :libs [".lein-git-deps/domina/src/cljs"]}}]}
  :jvm-opts ["-Djava.security.policy=heroku.policy" "-Xmx80M"]
  :source-path "src/clj"
  :main ttmachines.server.app)

