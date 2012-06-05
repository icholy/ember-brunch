
require('models');
require('controllers');
require('views');

var App = require('app');

// ENV.VIEW_PRESERVES_CONTEXT = true;
// ENV.CP_DEFAULT_CACHEABLE = true;

App.reopen({
    ready: function(){
        this._super();
        console.log('initializing ...');
    }
});
