/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
module.exports = Ember.Application.create({
  rootElement: window.TESTING ? '#mocha' : '#todoapp'
});
