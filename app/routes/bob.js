var App = require('app');

App.BobRoute = Ember.Route.extend({
    model: function() { 
        return App.Bob.find(0);
    }
});

