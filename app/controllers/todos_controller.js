var Todos = require('app');

/*
  
  A controller for the collection of all todos in the application.

  An instance of this object will be created and set as the rendering
  context of the todos template. 
*/
Todos.TodosController = Ember.ArrayController.extend({
  /*
    a computed property for displaying the length of
    the underlying content.
  */
  total: function() {    
    return this.get( 'length' );
  }.property( '@each.length' ),

  /*
    a computed property for displaying the number of
    todos in the underlying content
  */
  remaining: function() {
    return this.filterProperty( 'completed', false ).get( 'length' );
  }.property( '@each.completed' ),

  /*
    a computed property for displaying the length of
    the underlying content whose 'completed' property is true.
  */
  completed: function() {
    return this.filterProperty( 'completed', true ).get( 'length' );
  }.property( '@each.completed' ),

  /*
    a computed property for synthesizing the question of
    "are there any todos left?" into a boolean answer
    based on the length of the underlying content.
  */
  noneLeft: function() {
    return this.get( 'total' ) === 0;
  }.property( 'total' ),

  /*
    a computed property for synthesizing the question of
    "are all the todos done?" into a boolean answer
    based on the length of the underlying content.

    This can also be used as a setter, which will loop
    through all the todos in the content
    and set their 'completed' property to true or false.
  */
  allAreDone: function( key, value ) {
    if ( value !== undefined ) {
      this.setEach( 'completed', value );
      return value;
    } else {
      return !!this.get( 'length' ) &&
        this.everyProperty( 'completed', true );
    }
  }.property( 'completed' ),

  /*
    a computed property for synthesizing the question of
    "is there just one todo left?" into a boolean answer
    based on number of remaining todos.

    This is used in the todos template to nicely display
    a properly inflected word:
    "1 todo" vs "5 todos"
  */
  oneLeft: function() {
    return this.get( 'remaining' ) === 1;
  }.property( 'remaining' ),
  
  /*
    An event to remove completed todos from the application.
    Will loop through the underlying content filtered by
    a true 'completed' property and trigger the `removeTodo`
    action on the application's current route.
  */
  clearCompleted: function(){
    var target = this.get('target');
    this.filterProperty('completed', true).forEach(function(todo){
      target.send('removeTodo', todo);
    });
  }
});
