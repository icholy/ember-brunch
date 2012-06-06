// Application bootstrapper

var App = Em.Application.create({
    Views       : Em.Namespace.create(),
    Models      : Em.Namespace.create(),
    Controllers : Em.Namespace.create(),
});

module.exports = App;
