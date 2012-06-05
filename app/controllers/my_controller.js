
require('models/my_model');

var App = require('app');

App.myController = Em.Object.create({
    theMan: App.Models.MyModel.create({
        firstName: 'Bob',
        lastName: 'Marley'
    })
});