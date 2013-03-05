var Todos = require('app');

Todos.TodosActiveTodosRoute = Ember.Route.extend({
  /* 
    The data used to render the 
    inner list area of the application.

    This hook should be implemented on all routes,
    where the default model implementation doesn't suffice

    See http://emberjs.com/guides/routing/specifying-a-routes-model/
    for what that behavior is.

    Here, I'm returning an array-like object of all todos in the store
    filtered to show only those which are not completed.
  */
  model: function(){
    return  Todos.Todo.all().filterProperty('completed', false);
  },

  /* 
    A hook to fill outlets in a template with
    another template bound to a controller and
    some content.

    Below I'm telling the application to find
    {{outlet}} in the template of its parent route
    and populate it with the todos_list template.

    The rendering context for this template will
    be the controller I've specified (filteredTodos)
    which gets reused in other states that show filtered
    todo.
    
    The content of that controller will be the 
    return value of the model function above.    
  */
  renderTemplate: function(){
    this.render('todos_list', {
      controller: 'filteredTodos'
    });
  },

  /*
    One weird side effect of using custom controllers
    right now is a route's default controller gets
    automatically populated with the result of
    the model hook, but custom controllers don't.

    In this route the application will attempt to
    associate the return value of the model function with
    an instance of ActiveTodosController.

    Since I didn't implement an ActiveTodosController
    on my application, it will fall back to using
    a generic controller appropriate for the model.

    Since model returns an Array-like object, an
    instance of ArrayController is created for me
    and has its content set to the model.

    However, I want to render with an instance of
    FilteredTodosController (see the render call) above.

    This custom behavior won't get the model automatically
    connected, so I need to associate them myself.

    There's an issue for this
    https://github.com/emberjs/ember.js/issues/1635
    you should comment if this feels wonky. 
  */
  setupController: function(controller, model) {
    this.controllerFor('filteredTodos').set('content', model);
  }
});
