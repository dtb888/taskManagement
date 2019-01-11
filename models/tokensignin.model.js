const mongoose = require('mongoose');

const TokenSigninSchema = mongoose.Schema({
	idtoken: String,
	name: String,
}, {
	timestamps: true
});

module.exports = mongoose.model('TokenSignin', TokenSigninSchema)