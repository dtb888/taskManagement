module.exports = function(app) {

	let task = require( '../controllers/task.controller.js' );
	// Google-login
	app.post('/tokensignin', task.createToken)
	// Add Task - Create a new Task
	app.post('/createtask', task.create);
	// Retrieve all Tasks
	app.get('/task', task.findAll);
	// Retrieve a single Task with taskId
	app.get('/task/:taskId', task.findOne);
	// Edit Task - Update a Task with taskId
	app.put('/task/:taskId', task.update);
	// Delete a Task with taskId
	app.delete('/task/:taskId', task.delete);


}