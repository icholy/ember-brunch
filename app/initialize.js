
window.App = require('app');

require('templates');
require('models');
require('controllers');
require('views');

App.reopen({
    ready: function(){

        this._super();

        console.log('initializing ...');

        var dude = App.Models.MyModel.create({
            firstName: 'Bob',
            lastName: 'Marley',
            lyrics: 'No Woman, No Cry!'
        });

        App.myController.set('theMan', dude);

    },

    myController: App.Controllers.MyController.create()
});
