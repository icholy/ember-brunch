var Todos = require('app');

Todos.EditTodoTextField = Ember.TextField.extend({
  classNames: ['edit'],

  /* 
    When a view loses focus, grab the view's current text value.
    if it's blank, delete the todo associated with this view
    by sending the removeTodo event to the controller of the template 
    where this view is rendered.

    If not implemented there, it will bubble up to the application's
    current state (i.e. route).

  */
  change: function(){
    if (Ember.isEmpty(this.get('value'))) {
      var todo = this.get('controller.content');
      this.get('controller.target').send('removeTodo', todo);
    }
  },

  /* 
    When rendered this view will a todo set on it
    in the template where it is being used.

    The text value of this input is bound to the 
    title for that todo.
  */
  valueBinding: 'todo.title',

  /*
    Give this element focus when it is inserted
    into the DOM.
  */
  didInsertElement: function(){
    this.$().focus();
  },

  /*
    synthesizes the basic user-generated event
    of pressing the enter key into a meaningful view event
  */
  insertNewline: function() {
    this.editingComplete();
  },

  /*
    synthesizes the basic user-generated event
    of changing element focus into a meaningful view event
  */
  focusOut: function(){
    this.editingComplete();
  },

  /*
    Set the view's todo to no longer be editing.
    This will have the side effect of re-rendering
    a portion of the template where this view is
    used and result in this view being removed from the DOM.
  */
  editingComplete: function(){
    this.set('todo.editing', false);
  }
});
