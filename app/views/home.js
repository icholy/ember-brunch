var App = require('app');

App.Views.MyView = Em.View.extend({

    templateName: require('templates/home'),
    contentBinding: 'App.myController.theMan',

    click: function(e){
        var lyrics = this.get('content').get('lyrics');
        alert(lyrics);
    }
});
