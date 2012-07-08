# talking to machines

A website intended to help beginners learn programming through interactive lessons at the ClojureScript REPL.

[Try it online](http://talkingtomachines.org)

## Project Aim

**To show people that programming is an intensely creative way of building things through a dialogue with a machine.**

A lot of introductory texts about programming treat it as a purely theoretical pursuit - an extension of mathematics and logic. There is a lot of merit to this approach, but for many people this is something they come to realise later. 

For me and a lot of programmers I know, the thing that really *hooked* me about programming is the fact that I can come up with an idea, describe it to a computer in a language it understands and then see it create something real from it, right before my eyes.

I think we need to emphasise this feeling when we teach people what programming is, and that is what I would to do with this website. 

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
