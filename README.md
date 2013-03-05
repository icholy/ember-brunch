# Warning

I've stopped using ember and am no longer maintaining this repository.
If someone is maintaining an up to date ember skeleton, let me know and I'll link to it here.

# Brunch with Ember

This is a simple ember skeleton for [Brunch](http://brunch.io/) with working and up to date **handlebars template pre-compilng** :)

## Getting started

Clone the repo and run `npm install` & `brunch build`.
See more info on the [official site](http://brunch.io)

## Versions (branches)

* `master` contains some demo code to give an understanding of how things should work
* `empty` is a clean version of the skeleton with no examples
* `todomvc` is a port of Addy Osmani's [TodoMVC](http://addyosmani.github.com/todomvc/) by way of [Trek Glowacki grunt-based port](https://github.com/trek/ember-todos-with-build-tools-tests-and-other-modern-conveniences)


## Usage
    
    brunch new myapp -s git://github.com/icholy/ember-brunch.git

if you wanted to use the `empty` skeleton branch

    git clone git://github.com/icholy/ember-brunch.git -b empty
    brunch new myapp -s ./ember-brunch/

Once the project has been created, you can start a server by running

    brunch watch --server
    
Or

    npm start



then visit `localhost:3333`


## Tests (mocha-phantomjs)

Tests can be run via commandline

	npm test
	
*Note: Do not use `brunch test` -- tests require `mocha-phantomjs`*
	
Or in a browser

    brunch watch --server

then visit `localhost:3333/test/`

## Overview

	├── app
	│   ├── app.js
	│   ├── assets
	│   │   ├── img
	│   │   │   ├── bg.png
	│   │   │   ├── glyphicons-halflings-white.png
	│   │   │   └── glyphicons-halflings.png
	│   │   └── index.html
	│   ├── controllers
	│   │   ├── filtered_todos_controller.js
	│   │   └── todos_controller.js
	│   ├── initialize.js
	│   ├── models
	│   │   ├── store.js
	│   │   └── todo.js
	│   ├── routes
	│   │   ├── active_todos_route.js
	│   │   ├── all_todos_route.js
	│   │   ├── completed_todos_route.js
	│   │   ├── router.js
	│   │   └── todos_route.js
	│   ├── styles
	│   │   └── application.css
	│   ├── templates
	│   │   ├── application.hbs
	│   │   ├── todos.hbs
	│   │   └── todos_list.hbs
	│   └── views
	│       ├── create_todo_textfield.js
	│       └── edit_todo_textfield.js
	├── README.md
	├── test
	│   ├── assets
	│   │   └── test
	│   │       ├── index.html
	│   │       └── sinon-1.6.0.js
	│   ├── models
	│   │   └── todo_test.coffee
	│   └── vendor
	│       ├── scripts
	│       │   ├── chai-1.4.0.js
	│       │   ├── mocha-1.7.3.js
	│       │   ├── sinon-chai-2.2.0.js
	│       │   └── test-helper.js
	│       └── styles
	│           └── mocha-1.7.2.css
	└── vendor
	    └── scripts
	        ├── bootstrap.js
	        ├── console-helper.js
	        ├── ember-data-latest.js
	        ├── ember-latest.js
	        ├── handlebars-1.0.rc.2.js
	        └── jquery-1.9.0.min.js* 


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
