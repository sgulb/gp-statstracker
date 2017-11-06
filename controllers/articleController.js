const db = require("../models");

module.exports = {
	findAll: function(req, res) {
		db.Articles
		  .find(req.query)
		  .sort({ date: -1 })
		  .then(data => res.json(data))
		  .catch(err => res.status(422).json(err));
	},
	save: function(req,res) {
		db.Articles(req, res) 
			.save(req.body)
			.then(data => res.json(data))
		    .catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Articles
		  .findByID({ _id: req.params.id })
		  .then(data => data.remove())
		  .then(data => res.json(data))
		  .catch(err => res.status(422).json(err));
	}
};