const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.PlayerGameStats
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.PlayerGameStats
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.PlayerGameStats
      .create(req.body)

      .then( (err, result) => {
        if (err) {
          console.log(err);
        } else {

          db.Player.findOneAndUpdate(
            { "_id": req.body._id }, { $push: { "playerGameStats": result.id }}
          );

          db.PlayerGameStats.findOneAndUpdate(
            { "_id": req.body._id }, { $push: { "playerGameStats": result.id }}
          );
          
          dbModel => res.json(dbModel)
        }
      })

      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.PlayerGameStats
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.PlayerGameStats
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};