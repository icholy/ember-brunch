var Todos = require('app');

require('./store');

/* A wrapper around localStorage,
   which is what TodoMVC uses. This is scoped
   locally to this file.
*/
var store = Todos.Store.create({
  name: 'todomvc-ember-example'
});

/*
  A Simple Todo prototype.

  It has properties of 
    `id`, and `title` although
    it's not necessary to define them on the prototype.
    They'll get set through user interaction and default to `null` until then.

    It also has a property of `completed` which defaults
    to false
*/
Todos.Todo = Ember.Object.extend({
  completed: false,
  /*
    A reference to the singleton instance of the 
    localStorage wrapper.

    Used to auto-save Todo instances when they change. 
  */
  store: store,

  /*
    Observer that will react on item change and will update the storage.
  */
  todoChanged: function() {
    store.update( this );
  }.observes( 'title', 'completed' )
});


/* 
  Constructor/Class/Static/Whatever properties of Todo.
*/
Todos.Todo.reopenClass({
  /*
    A reference to the singleton instance of the 
    localStorage wrapper.

    Used to load existing Todos and store newly
    created Todos. 
  */
  store: store,

  /*
    Create a new instance of a Todo object with
    the passed properties and then
    passes it to the store for persistence.

  */
  createRecord: function(properties){
    return this.store.createRecord(this.create( properties ));
  },

  /*
    Removes a model from the store.
  */
  destroy: function(model){
    this.store.destroy(model);
  },

  /*
    Find all the models in the store. This is a computed
    property on the store, so feel free to call it
    as often as you like: until todos are added or removed
    it will always return the cached value.
  */
  all: function(){
    return this.store.all();
  }
});
