var App = require('app');

App.Router.map(function(match) {
  match('/').to('index');
  match('/home').to('home');
  match('/bob').to('bob');
});