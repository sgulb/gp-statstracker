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
  findById: function(req, res) {
    db.Player
      .findById(req.params.id)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findByIdPop: function(req, res) {
    db.Player
      .findById(req.params.id)
      .populate("PlayerGameStats")
      .then(dbModel => {
          res.status(201).json(dbModel);
        })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {

    let { id } = req.body;
    delete req.body.id;

    db.Player
      .create(req.body)
      .then( (dbModel) => {
          res.status(200).json(dbModel);

          db.Team.findByIdAndUpdate(
            id, { $push: { "player": dbModel._id }}
          )
              .then(res => console.log(res));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
      console.log(req.body)
    db.Player
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
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