
window.Todos = require('app');

if (window.TESTING) {
  window.Todos.deferReadiness();
}

//////////////////////////////////
// Templates
//////////////////////////////////
require('templates/application');
require('templates/todos');
require('templates/todos_list');

//////////////////////////////////
// Models
//////////////////////////////////
/* 
 * Model layer. 
 * Ember.Object itself provides most of what
 * model layers elsewhere provide. Since TodoMVC
 * doesn't communicate with a server, plain
 * Ember.Objects will do.
*/
require('models/todo');


/////////////////////////////////
// Controllers
/////////////////////////////////
/*
 * Controller layer.
 * Controllers wrap objects and provide a place
 * to implement properties for display
 * whose value is computed from the content of the
 * controllers wrapped objects.
*/
require('controllers/todos_controller');
require('controllers/filtered_todos_controller');


/////////////////////////////////
// Views
/////////////////////////////////
/*
 * Views layer.
 * You'll notice that there are only a few views.
 * Ember accomplishes a lot in its templates and 
 * Views are only necessary if you have view-specific
 * programming to do. 
*/
require('views/edit_todo_textfield');
require('views/create_todo_textfield');


/////////////////////////////////
// Store
/////////////////////////////////


/////////////////////////////////
// Router
/////////////////////////////////
/* 
 * States (i.e. Routes)
 * Handles serialization of the application's current state
 * which results in view hierarchy updates. Responds to
 * actions.
*/
// router requires its own routes
require('routes/router');


Todos.initialize();
