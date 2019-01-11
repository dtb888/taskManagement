const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
	title: String,
	content: String,
	deadline: Date,
	owner: String,
	createdBy: String,
	complete: {type: String, required: true, default: "No"},
}, {
	timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema)