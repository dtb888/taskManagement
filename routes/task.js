module.exports = function(app) {

	let task = require( '../controllers/task.controller.js' );
	// Google-login
	app.post('/tokensignin', task.createToken)
	// Add Task - Create a new Task
	app.post('/create', task.create);
	// Retrieve all Tasks
	app.get('/task', task.findAll);
	
	app.get('/edit/:id', task.edit);

	app.post('/edit/:id', task.update)
	// Delete a Task with taskId
	app.get('/delete/:id', task.delete);


}