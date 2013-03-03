var Todos = require('app');

/*
  A Controller for displaying only a subset of all todos.
  The specific subset is determined by the application's
  current state (i.e. route).

  An instance of this controller will be used to back
  a rendered todos_list template.
*/
Todos.FilteredTodosController = Ember.ArrayController.extend({

  /*
    An event for completing a todo. This will delegate to
    the application's current state.

    Additionally, since we're looking at todos filtered
    by their completed property we know they can be 
    removed from this controller's content
    after we toggle them.
  */
  toggleTodo: function(todo){
    this.get('content').removeObject(todo);
    todo.toggleProperty('completed');
  }
});
