# Brunch with Ember
This is a simple ember skeleton for [Brunch](http://brunch.io/) with working and up to date **handlebars template pre-compilng** :)

## Getting started

Clone the repo and run `npm install` & `brunch build`.
See more info on the [official site](http://brunch.io)

## Versions (branches)

* `master` contains some demo code to give an understanding of how things should work
* `empty` is a clean version of the skeleton with no examples

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
      router.js
      initialize.js
    /vendor/
      scripts/
        jquery-1.8.0.js
        console-helper.js
        ember-latest.js
        ember-data-latest.js
        handlebars-1.0.0.beta.6.js
      styles/
        bootstrap.css
    /public/
      img/
      stylesheets/
      javascripts/
    /test/
      spec.coffee

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

* jQuery 1.8.0
* Ember latest
