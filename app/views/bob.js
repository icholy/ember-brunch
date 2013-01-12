var App = require('app');

App.BobView = Em.View.extend({

    templateName: 'templates/bob',

    doClick: function(router, event){
        alert(this.get('controller.lyrics'));
    }
});