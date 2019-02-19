module.exports = function (app) {
  let task = require('../controllers/task.controller.js')
 
  // Google-login
  app.post('/tokensignin', task.createToken)
  // Google-signout
  app.get('/signout', task.signOut)
  // Add Task - Create a new Task
  app.post('/create', task.create)
  // Retrieve all Tasks
  app.get('/task', task.findAll)
  // Load tasks for editing
  app.get('/edit/:id', task.edit)
  // update edited tasks
  app.post('/edit/:id', task.update)
  // Delete a Task with id
  app.get('/delete/:id', task.delete)

  app.get('/completed', task.findCompletedTasks)

  app.get('/uncompleted', task.findUncompletedTasks)

  app.get('/overdue', task.findOverdueTasks)

  app.get('/deadline', task.findDeadlineTasks)
}
