var Todos = require('app');

/*
  A route for displaying a list of all 
  todos in the application.

*/
Todos.TodosAllTodosRoute = Ember.Route.extend({
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
    A hook to fill outlets in a template with
    another template bound to a controller and
    some content.

    Below I'm telling the application to find
    {{outlet}} in the todos template and populate
    it with the todos_list template.

    The rendering context for this template will
    be the controller for this route (and instance of
    Todos.TodosController) and the content of that
    controller will be the return value of the model
    function above.

    Fun fact: if I had named the todos_list template
    'all_todos' this would happen for me automatically,
    but I want to reuse the todos_list template in
    other places.
  */
  renderTemplate: function(){
    this.render('todos_list');
  }
});
