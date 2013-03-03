var Todos = require('app');

/* 
  These are child routes of the Todos.TodosRoute.

  I find it handy to organize my nested routes 
  by requiring them from within their parent's
  file.

*/
require('./all_todos_route');
require('./active_todos_route');
require('./completed_todos_route');

/*
  The parent Route of all other Todo related routes.
  Entering this route builds the outer dashboard
  parts of the application, but not the 
  list of Todos, which has different data and 
  behaviors based on the child route you enter.

  The list of todos will be populated by the content
  of the all/active/completed todos route
  depending on which state you're in.
*/
Todos.TodosRoute = Ember.Route.extend({
  /* 
    The data used to render the 
    outer dashboard parts of the application.

    This hook should be implemented on all routes,
    where the default model implementation doesn't suffice

    See http://emberjs.com/guides/routing/specifying-a-routes-model/
    for what that behavior is.

    Here, I'm returning an array-like object of all todos in the store 
  */
  model: function(){
    return Todos.Todo.all();
  },

  /*
    Events that can occur in any Todo state.
    If a matching event name is not implemented
    on a controller, it will bubble to here.
  */
  events: {

    /* 
      Create a new Todo. This event is called
      When text is entered in Todo creation
      <input> and enter is hit.
    */
    createTodo: function(text){
      if ( !text.trim() ) { return; }
    
      Todos.Todo.createRecord({
        title: text
      });  
    },

    /*
      Removes a todo. This will get triggered
      when a particular Todo's [ X ] is clicked
      or when a user clicks the 'Clear Completed'
      button. 
    */
    removeTodo: function(todo){
      Todos.Todo.destroy(todo);
    },

    /*
      Updates a Todo into an editing state.
      This will result in a view changing from
      a text display to an editing input.
    */
    editTodo: function(todo){
      todo.set('editing', true); 
    },

    /*
      An event to trigger toggling of a todo.
      This is implemented on the route because
      the meaning of toggleTodo is slightly
      different in each of the application's state.

      Here, it just triggers a call to toggleProperty.

      In other states the controller itself will
      respond to this event to manipulate properties
      of its managed data and then delegate to here.
    */
    toggleTodo: function(todo){
      todo.toggleProperty('completed');
    }
  }
});
