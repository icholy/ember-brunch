var App = require('app');

App.Models.MyModel = Em.Object.extend({

    firstName : null,
    lastName  : null,

    fullName: function(){
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')

});