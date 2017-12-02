const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Player
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllPop: function(req, res) {
  //   db.Player
  //     .find(req.query)
  //     .populate("PlayerGameStats")
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // find Player by ID
  findById: function(req, res) {
    db.Player
      .findById(req.params.id)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find Player by ID and Populate with PlayerGameStats
  findByIdPop: function(req, res) {
    db.Player
      .findById(req.params.id)
      .populate("payerGameStats")
      .then(dbModel => {
          res.status(201).json(dbModel);
        })
      .catch(err => res.status(422).json(err));
  },

  // create new Player and add id to Team
  create: function(req, res) {

    let { id } = req.body;
    delete req.body.id;

    db.Player
      .create(req.body)
      .then( (dbModel) => {

          // send response to the server
          res.status(200).json(dbModel);

          // add id to Team
          db.Team.findOneAndUpdate(
            { "_id": id }, { $push: { "player": dbModel._id }}
          );

      })
      .catch(err => res.status(422).json(err));
  },

  // update player 
  update: function(req, res) {
    db.Player
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // remove player
  remove: function(req, res) {
    db.Player
      .findById({ _id: req.params.id })
      .then(dbModel => {
        dbModel.remove();
      })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// const userRights = (player, user) => {
//   if (!player.user.equal(user._id)) {
//     return false;
//   }
//   return true;
// };