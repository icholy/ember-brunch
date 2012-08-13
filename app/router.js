var App = require('app');

App.Router = Em.Router.extend({
    
    enableLogging: true,

    root: Em.Route.extend({
        
        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'home'
        }),

        home: Em.Route.extend({
            route: '/home',
            
            doBob: function(router, event){
                router.transitionTo('bob');
            },

            connectOutlets: function(router, context){
                router.get('applicationController').connectOutlet('home');
            }
        }),

        bob: Em.Route.extend({
            route: '/bob',

            doHome: function(router, event){
                router.transitionTo('home');
            },

            connectOutlets: function(router, context){

                var theMan = App.BobModel.create().setProperties({
                    firstName: 'bob',
                    lastName: 'marley',
                    lyrics: 'no woman no cry!'
                });

                router.get('applicationController').connectOutlet('bob', theMan);
            }
        })
    })
})