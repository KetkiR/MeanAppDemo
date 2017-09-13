var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = mongoose.createConnection('mongodb://127.0.0.1/cafe_store');

db.on('error',function (err) {
	console.log('error' + err);
})
db.once('open',function (res) {
	console.log('db connection openeed');
});


module.exports = db;