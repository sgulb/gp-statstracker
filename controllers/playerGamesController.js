const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.PlayerGameStats
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => {
  //       if(userRights) {
  //         res.json(dbModel);
  //       }
  //       else {
  //         res.status(401);
  //       }
  //     })
  //     .catch(err => res.status(422).json(err));
  // },

  // Find PlayerGame by ID
  findById: function(req, res) {
    db.PlayerGameStats
      .findById(req.params.id)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // Create new PlayerGame and add ID to Player and PlayerGameStats
  create: function(req, res) {
    let { id } = req.body;
    delete req.body.id;

    db.PlayerGameStats
      .create(req.body)
      .then( (result) => {

          // send response to the server
          res.status(201).json(result);
          
          // Add ID to Player
          db.Player.findOneAndUpdate(
            { "_id": id }, { $push: { "playerGameStats": result._id }}
          );

          // Add ID to TeamGameStats
          db.TeamGameStats.findOneAndUpdate(
            { "_id": id }, { $push: { "playerGameStats": result._id }}
          );
        })
      .catch(err => res.status(422).json(err));
  },

  // Update PlayerGame
  update: function(req, res) {
    db.PlayerGameStats
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // remove PlayerGame
  remove: function(req, res) {
    db.PlayerGameStats
      .findById({ _id: req.params.id })
      .then(dbModel => {
          dbModel.remove();
      })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// const userRights = (playerGameStats, user) => {
//   if (!playerGameStats.user.equal(user._id)) {
//     return false;
//   }
//   return true;
// };