const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var db = require('../database');
var fs = require('fs');
var users = require('../../models/users');
fs.readdirSync('./models').forEach(function(filename){
	if(~filename.indexOf('.js')) require('../../models/' + filename)
});

/* GET api listing. */
router.get('/users', (req, res) => {

  db.model('users').find({},function(err,users){
  	//console.log(res === undefined);
  	//console.log("model found");
  	if (!err){
  		console.log(users);
  		res.send(users);
  	}
  	else {
  		console.log(err);

  		res.send(err);
  	}
  	
  });
  });
//var users = require('../../models/users');
module.exports = router;