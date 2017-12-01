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
  findById: function(req, res) {
    db.PlayerGameStats
      .findById(req.params.id)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.PlayerGameStats
      .create(req.body)
      .then( (result) => {
          res.status(201).json(result);
          
          db.Player.findOneAndUpdate(
            { "_id": result._id }, { $push: { "playerGameStats": result.id }}
          );

          db.PlayerGameStats.findOneAndUpdate(
            { "_id": result._id }, { $push: { "playerGameStats": result.id }}
          );
        })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.PlayerGameStats
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
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