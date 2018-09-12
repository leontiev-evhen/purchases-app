var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Purchase = require('./Purchase');

// CREATES A NEW PURCHASE
router.post('/', function (req, res) {
	Purchase.create({
		user : req.body.user,
		message : req.body.message
	},
	function (err, purchase) {
		if (err) return res.status(500).send('There was a problem adding the information to the database.');
		res.status(200).send('New purchase was created successfully');
		req.io.emit('CREATE', JSON.stringify(purchase));
	});
});

// RETURNS ALL THE PURCHASES IN THE DATABASE
router.get('/', function (req, res) {
	Purchase.find({}, function (err, purchases) {
		if (err) return res.status(500).send('There was a problem finding the purchases.');
		res.status(200).send(purchases);
	}).sort({create_at: -1});
});

// GETS A SINGLE PURCHASE FROM THE DATABASE
router.get('/:id', function (req, res) {
	Purchase.findById(req.params.id, function (err, purchase) {
		if (err) return res.status(500).send('There was a problem finding the purchase.');
		if (!user) return res.status(404).send('No purchase found.');
		res.status(200).send(purchase);
	});
});

// DELETES A PURCHASE FROM THE DATABASE
router.delete('/:id', function (req, res) {
	Purchase.findByIdAndRemove(req.params.id, function (err, purchase) {
		if (err) return res.status(500).send('There was a problem deleting the purchase.');
		req.io.emit('DELETE', req.params.id);
		res.status(200).send('Purchase  was deleted.');
	});
});

// UPDATES A SINGLE PURCHASE IN THE DATABASE
router.put('/:id', function (req, res) {
	Purchase.findByIdAndUpdate(req.params.id, {
		message: req.body.message
	}, {new: true}, function (err, purchase) {
		if (err) return res.status(500).send('There was a problem updating the purchase.');
		req.io.emit('UPDATE', {
			message: req.body.message,
			id: req.params.id
		});
		res.status(200).send('Purchase was updated successfully');
	});
});


module.exports = router;