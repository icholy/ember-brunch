var App = require('app');

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('home');
    }
});