var App = require('app');

App.BobRoute = Ember.Route.extend({
	model: function() { 
		return App.Bob.find();
	}
});

// App.BobRoute.FIXTURE = [{
	// 	firstName: 'bob',
	//     lastName: 'marley',
	//     lyrics: 'no woman no cry!'
	// }],