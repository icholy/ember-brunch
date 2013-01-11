var App = require('app');

App.BobRoute = Ember.Route.extend({
    model: function() {
        return App.BobModel.create().setProperties({
            firstName: 'bob',
            lastName: 'marley',
            lyrics: 'no woman no cry!'
        });
    }
});