var mongoose = require('mongoose');
var schema = mongoose.Schema;

var db = require('../server/database');
var usersSchema = new schema({
	first_name:{
		type:String,
		required: true
	},
	last_name:{
		type: String,
		required: true
	},
	
});

var users = db.model('users',usersSchema);
module.exports = users;

// err, here db where is db variable here? you need to use it as result/return  from connection