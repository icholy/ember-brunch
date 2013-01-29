var App = require('app');

App.BobView = Em.View.extend({
    doClick: function(router, event){
        alert(this.get('controller.lyrics'));
    }
});