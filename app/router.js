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

            connectOutlets: function(router, context){
                router.get('applicationController').connectOutlet('home');
            }
        })
    })
})