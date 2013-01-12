var App = require('app'),
	attr = DS.attr;

App.Bob = DS.Model.extend({
    firstName : attr('string'),
    lastName  : attr('string'),
    lyrics    : attr('string'),

    fullName: function(){
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')

});

App.Bob.FIXTURES = [{
    id: '0',
    firstName: 'bob',
    lastName: 'marley',
    lyrics: 'no woman no cry!'
}];