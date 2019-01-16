const Task = require('../models/task.model.js');
const TokenSignin = require('../models/tokensignin.model.js');
const mongoose = require('mongoose');
const session = require('express-session');

exports.create = function(req, res) {
	if (!req.body.content){
		res.status(400).send({message: 'Task cannot be empty'})
	}

	let task = new Task({title: req.body.title || 'Untitled Task', content: req.body.content, deadline: req.body.deadline, owner: req.body.owner, createdBy: req.session.userName, complete: req.body.complete || 'No'});

	task.save(function(err, data) {
		if (err) {
			console.log(err);
			res.status(500).send({message: 'Some error occurred while creating the Task.'});
		} else {
			console.log('Task Saved');
		}
	});
};

exports.findAll = function(req, res) {
	query = {createdBy: req.session.userName}
	Task.find(query, function(err, tasks) {
		if (err) {
			res.status(500).send({message: 'Some error occurred while retrieving tasks.'});
		} else {
			res.json(tasks);
			console.log(req.session.userName)
		}
	});
};

exports.findOne = function(req, res) {
	let query = {title: req.body.content}
	Task.findOne(query, function(err, task) {
		if (err) {
			res.status(500).send({message: 'Some error occurred while retrieving task.'});
		} else {
			res.send(task);
		}
	});
};


exports.edit = function(req, res) {
	let id = req.params.id;
	Task.findById(id, function (err, task){
		res.json(task)
	})
}

exports.update = function(req, res) {
	let query = {title: req.body.title}
	Task.updateOne(query, {title: req.body.title, content: req.body.content, deadline: req.body.deadline, owner: req.body.owner, complete: req.body.complete}, function(err, task) {
		if (err) {
			res.status(500).send({message: 'Some error occurred while updating task.'});
		} else {
			res.send(task);
		}
	});
};

exports.delete = function(req, res) {
	let id = req.params.id;
	Task.deleteOne({_id: id}, function(err) {
		if (err) {
			res.status(500).send({message: 'Some error occurred while deleting task.'});
		} else {
			res.send('Task deleted');
		}
	})
};

exports.findCompletedTasks = function(req, res) {     // Retrieve and return all completed tasks from the database.
			let query = {complete: "Yes", createdBy: req.session.userName};
      Task.find(query, function (err, tasks) {
          if (err) {
              res.status(500).send({message: "Some error occurred while retrieving completed tasks."});
          } else {
              res.send(tasks);
          }
      });

};

exports.findUncompletedTasks = function(req, res) {     // Retrieve and return all completed tasks from the database.
			let query = {complete: "No", createdBy: req.session.userName};
      Task.find(query, function (err, tasks) {
          if (err) {
              res.status(500).send({message: "Some error occurred while retrieving completed tasks."});
          } else {
              res.send(tasks);
          }
      });

};

exports.findDeadlineTasks = function(req, res) {     // Retrieve and return all completed tasks from the database.
			let query = {deadline: { $gte : Date()}, complete: "No", createdBy: req.session.userName };
      Task.find(query, function (err, tasks) {
          if (err) {
              res.status(500).send({message: "Some error occurred while retrieving completed tasks."});
          } else {
              res.send(tasks);
          }
      });

};

exports.findOverdueTasks = function(req, res) {     // Retrieve and return all completed tasks from the database.
			let query = {deadline: { $lte : Date()}, complete: "No", createdBy: req.session.userName };
      Task.find(query, function (err, tasks) {
          if (err) {
              res.status(500).send({message: "Some error occurred while retrieving completed tasks."});
          } else {
              res.send(tasks);
          }
      });

};

exports.createToken = function(req, res) {
	if (!req.body.idtoken){
		res.status(400).send({message: 'Token cannot be empty'})
	}

	const CLIENT_ID = '1056929103029-2hm2370o3rg26olnisvvk27l7d13ar56.apps.googleusercontent.com'

	const {OAuth2Client} = require('google-auth-library');
	const client = new OAuth2Client(CLIENT_ID);
	async function verify() {
	  const ticket = await client.verifyIdToken({
	      idToken: req.body.idtoken,
	      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
	      // Or, if multiple clients access the backend:
	      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
	  });
	  const payload = ticket.getPayload();
	  const userid = payload['sub'];
	  const name = payload['name'];
	  // If request specified a G Suite domain:
	  //const domain = payload['hd'];



		let token = new TokenSignin({idtoken: req.body.idtoken, name: name});

		let query = {name: name}

		TokenSignin.find(query, function(err, namer){
			if (namer == 0) {
				token.save(function(err, data) {
					if (err) {
						console.log(err);
						res.status(500).send({message: 'Some error occurred while creating the Token.'});
					} else {
						req.session.userName = data.name
						console.log('Token Saved');
						res.send(req.session.userName)
						console.log(req.session.userName)
					}
				});
			} else {
				console.log("Person named " + name + " already saved")

				req.session.userName = name
				res.send(req.session.userName)
			}

		})


	}
	verify().catch(console.error);

};