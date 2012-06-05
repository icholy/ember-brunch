# Brunch with js
This is a simple ember skeleton for [Brunch](http://brunch.io/).

## Getting started

Clone the repo and run `npm install` & `brunch build`.
See more info on the [official site](http://brunch.io)

## Overview

	config.coffee
	README.md
	/app/
	/assets/
		index.html
        images/
	models/
    styles/
    views/
      	templates/
	controllers.js
 	models.js
	views.js
	app.js
    initialize.js
    /test/
		spec.coffee
    /vendor/
      scripts/
        jquery.js
        console-helper.js
        ember-0.9.8.1.js
        bootstrap.js
      styles/
        bootstrap.css

* `config.coffee` contains configuration of your app. You can set plugins /
languages that would be used here.
* `app/assets` contains images / static files. Contents of the directory would
be copied to `public/` without change.
Other `app/` directories could contain files that would be compiled. Languages,
that compile to JS (coffeescript, roy etc.) or js files and located in app are 
automatically wrapped in module closure so they can be loaded by 
`require('module/location')`.
* `app/models.js`, `app/views.js`, and `app/controllers.js` are responsible for loading classes.
* `test/` contains unit tests.
* `vendor/` contains all third-party code. The code wouldn’t be wrapped in
modules, it would be loaded instantly instead.

This all will generate `public/` (by default) directory when `brunch build` or `brunch watch` is executed.

## Other
Versions of software the skeleton uses:

* jQuery 1.7.2
* Ember 0.9.8.1
* Bootstrap 2.0.4
