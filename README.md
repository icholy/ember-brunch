# Brunch with Ember
This is a simple ember skeleton for [Brunch](http://brunch.io/) with working and up to date handlebars pre-compilng :)

## Getting started

Clone the repo and run `npm install` & `brunch build`.
See more info on the [official site](http://brunch.io)

## Versions (branches)

* `master` contains some demo code to give an understanding of how things should work
* `empty` is a clean version of the skeleton with no examples
* `no-bootstrap` this is the same as `empty` but with bootstrap removed
* `coffee` is the same as `empty` but uses coffeescript

## Usage
    
    brunch new myapp -s git://github.com/icholy/ember-brunch.git

if you wanted to use the `empty` skeleton branch

    git clone git://github.com/icholy/ember-brunch.git -b empty
    brunch new myapp -s ./ember-brunch/

Once the project has been created, you can start a server by running

    brunch watch --server

then visit `localhost:3333`

## Overview

    config.coffee
    server.coffee
    package.json
    README.md
    /app/
      assets/
        index.html
        img/
          glyphicons-halflings-white.png
          glyphicons-halflings.png
      styles/
      templates/
      models/
      views/
      controllers/
      templates.js
      models.js
      views.js
      controllers.js
      app.js
      initialize.js
    /vendor/
      scripts/
        jquery.js
        console-helper.js
        ember-latest.js
        ember-data-latest.js
        handlebars-1.0.0.beta.6.js
        bootstrap.js
      styles/
        bootstrap.css
    /public/
      img/
      stylesheets/
      javascripts/
    /test/
      spec.coffee
    /generators/
      model.js
      view.js
      controller.js

* `config.coffee` contains your app configuration. This is where you configure what Plugins / Languages to use and what rules are applied to them.
* `app/` and subdirectories (excluding `app/assets`) contains files that are to be compiled. Javascript files, or files that compile to JS (coffeescript, roy etc.), are automatically wrapped as commonjs style modules so they can be loaded via `require('module/location')`.
* `app/assets` contains images / static files. The contents of the directory are copied to `public/` without any modification.
* `app/templates.js`, `app/models.js`, `app/views.js`, and `app/controllers.js` are loaded in `initialize.js` and are responsible for loading their respective classes.
* `test/` contains unit tests.
* `vendor/` contains all third-party code. The code wouldn’t be wrapped in
modules, it would be loaded instantly instead.

The generated output is placed in the `public/` (by default) directory when `brunch build` or `brunch watch` is executed.

## Other
Software Versions used:

* jQuery 1.7.2
* Ember latest (master)
* Bootstrap 2.0.4
