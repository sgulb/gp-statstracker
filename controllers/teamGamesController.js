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

  // find teamGame by ID
  findById: function(req, res) {
    db.TeamGameStats
      .findById(req.params.id)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // create Team Game and add referance to team and player GameStats
  create: function(req, res) {

    let { id } = req.body;
    delete req.body.id;

    db.TeamGameStats
      .create(req.body)
      .then( (result) => {

          // send Response to the front end
          res.status(201).json(result);

          // add new id to Team
          db.Team.findOneAndUpdate(
            { "_id": id }, { $push: { "teamGameStats": result._id }}
          );

          // add new id to PlayerGameStats
          db.PlayerGameStats.findOneAndUpdate(
            { "_id": id }, { $push: { "teamGameStats": result._id }}
          );
        })
      .catch(err => res.status(422).json(err));
  },

  // update teamGame Stats
  update: function(req, res) {
    db.TeamGameStats
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // remove teamGameStats
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