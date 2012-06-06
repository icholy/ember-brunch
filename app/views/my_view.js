var App = require('app');

App.Views.MyView = Em.View.extend({

    contentBinding: 'App.myController.theMan',

    click: function(e){
        var lyrics = this.get('content').get('lyrics');
        alert(lyrics);
    }
});
