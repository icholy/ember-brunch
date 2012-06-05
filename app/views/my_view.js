require('controllers/my_controller');

var App = require('app');

App.Views.MyView = Em.View.extend({

    stuffBinding: 'App.myController',

    click: function(e){
        console.log('I was clicked ', e);
    }
});
