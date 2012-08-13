var App = require('app');

App.BobView = Em.View.extend({

    templateName: require('templates/bob'),

    doClick: function(router, event){
        alert(this.get('controller.lyrics'));
    }
});