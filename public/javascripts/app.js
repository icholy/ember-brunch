(function(/*! Brunch !*/) {
  'use strict';

  if (!this.require) {
    var modules = {};
    var cache = {};
    var __hasProp = ({}).hasOwnProperty;

    var expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var getFullPath = function(path, fromCache) {
      var store = fromCache ? cache : modules;
      var dirIndex;
      if (__hasProp.call(store, path)) return path;
      dirIndex = expand(path, './index');
      if (__hasProp.call(store, dirIndex)) return dirIndex;
    };
    
    var cacheModule = function(name, path, contentFn) {
      var module = {id: path, exports: {}};
      try {
        cache[path] = module.exports;
        contentFn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        cache[path] = module.exports;
      } catch (err) {
        delete cache[path];
        throw err;
      }
      return cache[path];
    };

    var require = function(name, root) {
      var path = expand(root, name);
      var fullPath;

      if (fullPath = getFullPath(path, true)) {
        return cache[fullPath];
      } else if (fullPath = getFullPath(path, false)) {
        return cacheModule(name, fullPath, modules[fullPath]);
      } else {
        throw new Error("Cannot find module '" + name + "'");
      }
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    this.require = function(name) {
      return require(name, '');
    };

    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle) {
        if (__hasProp.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    };
  }
}).call(this);
(this.require.define({
  "app": function(exports, require, module) {
    
// Application bootstrapper.

var App = Em.Application.create({
    Views       : Em.Namespace.create(),
    Models      : Em.Namespace.create(),
    Controllers : Em.Namespace.create()
});

module.exports = App;

  }
}));
(this.require.define({
  "controllers": function(exports, require, module) {
    // Load all your controllers here

require('controllers/my_controller')

  }
}));
(this.require.define({
  "controllers/my_controller": function(exports, require, module) {
    
require('models/my_model');

var App = require('app');

App.myController = Em.Object.create({
    theMan: App.Models.MyModel.create({
        firstName: 'Bob',
        lastName: 'Marley'
    })
});
  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    
require('models');
require('controllers');
require('views');

var App = require('app');

// ENV.VIEW_PRESERVES_CONTEXT = true;
// ENV.CP_DEFAULT_CACHEABLE = true;

$(function() {

    alert('herer');

    // ... initialize here ... //

});

  }
}));
(this.require.define({
  "lib/view_helper": function(exports, require, module) {
    // Put your handlebars.js helpers here.

  }
}));
(this.require.define({
  "models": function(exports, require, module) {
    require('models/my_model');
  }
}));
(this.require.define({
  "models/my_model": function(exports, require, module) {
    var App = require('app');

App.Models.MyModel = Em.Object.extend({

    firstName : null,
    lastName  : null,

    fullName: function(){
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')

});
  }
}));
(this.require.define({
  "views": function(exports, require, module) {
    require('views/my_view');
  }
}));
(this.require.define({
  "views/my_view": function(exports, require, module) {
    require('controllers/my_controller');

var App = require('app');

App.Views.MyView = Em.View.extend({

    stuffBinding: 'App.myController',

    click: function(e){
        console.log('I was clicked ', e);
    }
});

  }
}));
