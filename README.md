# Warning

I've stopped using ember and am no longer maintaining this repository.
If someone is maintaining an up to date ember skeleton, let me know and I'll link to it here.

# Alternatives
**[Cinder Plate](https://github.com/edgycircle/cinder-plate)**  
It uses CoffeeScript and SASS. Handlebars templates live in separate files (unlike the usual approach of putting everthing in the `index.html`) and get pre-compiled. Cinder Plate is also able to generate a production build where JS and CSS files are minified. In addition the appropriate version of Ember.js (debug or production) is included.

**[Brunch with Ember Reloaded](https://github.com/gcollazo/brunch-with-ember-reloaded)**  
An updated version of the Brunch with Ember skeleton that uses: **CoffeeScrip**, **Stylus**, **Auto Reload**, and **UglifyJS**. The skeleton also has a script to download, build and copy the latest version of *ember-data.js*, generators for common types of files and tests templates.
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

    ├── app
    │   ├── app.js
    │   ├── assets
    │   │   ├── img
    │   │   │   ├── glyphicons-halflings.png
    │   │   │   └── glyphicons-halflings-white.png
    │   │   └── index.html
    │   ├── controllers
    │   ├── initialize.js
    │   ├── models
    │   ├── routes
    │   ├── styles
    │   │   └── application.css
    │   ├── templates
    │   │   ├── application.hbs
    │   │   └── index.hbs
    │   └── views
    │       └── index.js
    ├── config.coffee
    ├── package.json
    ├── README.md
    ├── test
    │   └── spec.coffee
    └── vendor
        ├── scripts
        │   ├── bootstrap.js
        │   ├── console-helper.js
        │   ├── ember-data-latest.js
        │   ├── ember-latest.js
        │   ├── handlebars-1.0.rc.2.js
        │   └── jquery-1.9.0.min.js
        └── styles
            └── bootstrap.css



* `config.coffee` contains your app configuration. This is where you configure what Plugins / Languages to use and what rules are applied to them.
* `app/` and subdirectories (excluding `app/assets`) contains files that are to be compiled. Javascript files, or files that compile to JS (coffeescript, roy etc.), are automatically wrapped as commonjs style modules so they can be loaded via `require('module/location')`.
* `app/assets` contains images / static files. The contents of the directory are copied to `public/` without any modification.
* `app/initialize.js`is responsible for loading all the `controllers`/`views`/etc.. classes.
* `test/` contains unit tests.
* `vendor/` contains all third-party code. The code wouldn’t be wrapped in
modules, it would be loaded instantly instead.

The generated output is placed in the `public/` (by default) directory when `brunch build` or `brunch watch` is executed.

## Other
Software Versions used:

* jQuery 1.9.0
* Ember 1.0.0-pre.4
* Handlebars 1.0 rc2
