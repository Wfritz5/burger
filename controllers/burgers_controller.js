var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

//root
router.get('/', function(req, res) {
	res.redirect('/burgers');
});

//route for /burgers
router.get('/burgers', function(req, res) {
	burgers.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render('index', hbsObject);
	});
});

//post a burger name
router.post('/burgers/create', function(req, res) {
	console.log(req.body.name);
	console.log(req.body.devoured);
	burgers.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
		res.redirect('/burgers');
	});
});

//put
router.put('/burgers/devour/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('burgers', condition);

	burgers.devour({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect('/burgers');
	});
});

//delete
router.delete('/burgers/clear/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('burgers', condition);

	burgers.clear(condition, function() {
		res.redirect('/burgers');
	});
});

module.exports = router;