var App = require('app');

App.Router.map(function(match) {
  match("/").to("index");
  match("/home").to("home");
  match("/bob").to("bob");
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('home');
    }
});

App.BobRoute = Ember.Route.extend({
    model: function() {
        return App.BobModel.create().setProperties({
            firstName: 'bob',
            lastName: 'marley',
            lyrics: 'no woman no cry!'
        });
    }
});