const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.TeamGameStats
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.TeamGameStats
      .findById(req.params.id)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.TeamGameStats
      .create(req.body)
      .then( (result) => {
          res.status(201).json(result);

          db.Team.findOneAndUpdate(
            { "_id": req.body._id }, { $push: { "teamGameStats": result.id }}
          );

          db.PlayerGameStats.findOneAndUpdate(
            { "_id": req.body._id }, { $push: { "teamGameStats": result.id }}
          );
        })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.TeamGameStats
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.TeamGameStats
      .findById({ _id: req.params.id })
      .then(dbModel => {
        dbModel.remove();
      })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// const userRights = (TeamGameStats, user) => {
//   if (!TeamGameStats.user.equal(user._id)) {
//     return false;
//   }
//   return true;
// };