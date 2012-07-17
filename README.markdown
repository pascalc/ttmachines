# talking to machines

*Helping beginners learn programming through interactive lessons at the ClojureScript REPL.*

[Try it online](http://talkingtomachines.org)

## Project Aim

###To show people that programming is an intensely creative way of building things through a dialogue with a machine.

I think programming is incredibly fun, and I think a lot more people would agree if only they were given the chance to write some code and make something happen.

But there are usually a few barriers for beginners, such as:

* Having to brave the terminal to start a REPL.
* Figuring out how to load their own code from files.
* Becoming intimidated by theory before they've had any practical experience.

I've tried to avoid these issues by designing an interactive environment in which beginners can jump right into writing and editing code, prompted by textual cues, with the results evaluated in their browser before their eyes.

## Collaborators welcomed!

I'm far from an expert in teaching people to program, and this is my first non-trivial project in Clojure/ClojureScript, so if anyone has suggestions for improvements to the site itself or for specific chapters, feel free to contact me or send me a pull request :)

## How can I add and edit chapters?

If you have an improvement to an existing chapter or an idea for a new one, you'll need to change (or create) the corresponding files for the chapter. Taking chapter one as an example, these are:

### HTML Content 

*src/clj/ttmachines/server/views/chapter/* **one.clj**

HTML elements used in the chapter are created here, using Hiccup and `defpartial`. Chapters themselves are defined as 
a list of "content maps" that form the arguments to `defchapter`, together with a base url and associated metadata.

### Text Content 

*src/clj/ttmachines/server/views/strings/chapter/* **one.clj**

All texts used in the chapter should be declared here, using `defstring` if preprocessing is required, and `def` otherwise.
Check out strings/core.clj to see what preprocessing is available.

### Interactivity

*src/cljs/ttmachines/client/chapter/* **one.cljs**

Event handlers, dynamic text etc can be declared here using `set-up-element` for specific DOM elements and `set-up-route` for actions specific to a certain page. Look at one.cljs for reference. 

### Styling

*resources/public/stylesheets/chapter/* **one.less**

Styling for the HTML elements defined in chapter/one.clj should be specified here. Don't forget to add an import for this file in stylesheets/app.less.

## Running it locally

### Build

    lein deps
    lein cljsbuild once

### Usage

To start talking to machines locally using [Leiningen](https://github.com/technomancy/leiningen), type the following from the project directory:

    lein run
    
and then hit http://localhost:1337.

If you're using Leiningen 2 don't forget to change `:source-path "src/clj"` to `:source-paths ["src/clj"]` in project.clj.

## Plans

* Glossary - the texts in the chapters use a lot of specialist terms (*string*, *argument* etc). Explanations for these terms should appear in a pop-over on hover, and be collected in a searchable glossary page.
                                                                                         
* More chapters!

## License

Copyright (C) 2012 Pascal Chatterjee

Distributed under the MIT License
