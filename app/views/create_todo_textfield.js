var Todos = require('app');

/*
  A view for creating new todos. It synthesizes the
  basic user-generated events (like hitting the enter key)
  into meaningful application events like 'createTodo'
*/
Todos.CreateTodoTextField = Ember.TextField.extend({
  elementId: 'new-todo',
  placeholder: 'What needs to be done?',

  /* 
    When a user hits the return/enter key,
    grab the view's current text value
    and trigger the createTodo event
    on the controller of the template 
    where this view is rendered.

    If not implemented there,
    it will bubble up to the application's current
    state (i.e. route).

    Then, blank out the view's value.
  */
  insertNewline: function() {
    var value = this.get( 'value' );

    if ( value ) {
      this.get( 'controller' ).send('createTodo', value );
      this.set( 'value', '' );
    }
  }
});
