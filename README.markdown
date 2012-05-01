# talking to machines

A web app inspired by [Himera](https://github.com/fogus/himera) intended to help beginners learn programming through interactive lessons at the ClojureScript REPL.

Right now the REPL functions, a lesson framework is in the works.

<!-- [Try it on Heroku](http://himera.heroku.com) -->

## Build

    lein deps
    lein cljsbuild once

## Usage

To start talking to machines locally using [Leiningen](https://github.com/technomancy/leiningen), type the following from the project directory.

    lein run 8080

## Current limitations

  * The same limitations as [Himera](https://github.com/fogus/himera)

## Plans

  * Create a framework for interactive lessons that react user input and the evaluated results.
  * Lessons could be specified as state-machines in a ClojureScript DSL. 

## Thanks

  * Michael Fogus for his work on [Himera](https://github.com/fogus/himera)
  * [CodeMirror](http://codemirror.net/) for their amazing editor
  * The [Semantic Grid](http://semantic.gs/)

## License

Copyright (C) 2012 Pascal Chatterjee

Distributed under the MIT License
