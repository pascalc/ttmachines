# talking to machines

A website intended to help beginners learn programming through interactive lessons at the ClojureScript REPL.

[Try it online](http://talkingtomachines.org)

## Project Aim

###To show people that programming is an intensely creative way of building things through a dialogue with a machine.

A lot of introductory texts about programming treat it as a purely theoretical pursuit - an extension of mathematics and logic. There is a lot of merit to this approach, but for many people this is something they come to realise later. 

For me and a lot of programmers I know, the thing that really *hooked* me about programming is the fact that I can come up with an idea, describe it to a computer in a language it understands and then see it create something real from it, right before my eyes.

I think we need to emphasise this feeling when we teach people what programming is, and that is what I would like to do with this website. 

### How can we achieve this?

By being as interactive as possible. Thanks to Javascript, everyone who browses the web has access to an environment in which they can evaluate arbitrary code. Thanks to ClojureScript, we have an extremely powerful language that can make the most of that environment. We just need to guide people through how to use it, and the quicker we can get them typing code the quicker we can show them all the fun things they can do.

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

## Plans

* Glossary
* More chapters!

## Run it locally

### Build

    lein deps
    lein cljsbuild once

### Usage

To start talking to machines locally using [Leiningen](https://github.com/technomancy/leiningen), type the following from the project directory:

    lein run
    
and then hit http://localhost:1337

## License

Copyright (C) 2012 Pascal Chatterjee

Distributed under the MIT License
