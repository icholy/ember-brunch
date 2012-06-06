require('templates');
require('models');
require('controllers');
require('views');


window.App = require('app');

// ENV.VIEW_PRESERVES_CONTEXT = true;
// ENV.CP_DEFAULT_CACHEABLE = true;

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

    }
});
