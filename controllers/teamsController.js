const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Team
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllPop: function(req, res) {
  //   db.Team
  //     .find(req.query)
  //     .populate('Player')
  //     .populate('TeamGameStats')
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllPopPlayer: function(req, res) {
  //   db.Team
  //     .find(req.query)
  //     .populate('Player')
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllPopTeamStats: function(req, res) {
  //   db.Team
  //     .find(req.query)
  //     .populate('TeamGameStats')
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  // find teams by User ID return populated results
  findByUser: function(req, res) {
    db.Users
      .findById(req.params.id)
      .populate("team")
      .then( dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find team by id
  findById: function(req, res) {
    db.Team
      .findById(req.params.id)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find team by id and populate results with player and team
  findByIdPop: function(req, res) {
    db.Team
      .findById(req.params.id)
      .populate('team')
      .populate('player')
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find team by id and populate with player
  findByIdPopPlayer: function(req, res) {
    db.Team
      .findById(req.params.id)
      .populate('player')
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find team by id and populate with team
  findByIdPopTeamStats: function(req, res) {
    db.Team
      .findById(req.params.id)
      .populate('team')
      .then(dbModel => {
         res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // create new team and link to User 
  create: function(req, res) {

    let { id } = req.body;
    delete req.body.id;

    // let teamName = req.body.teamName,
    //     cId = req.body.id,
    //     id = "";

    db.Team
      .create(req.body)
      .then( (result) => {
          res.status(200).json(result);
          // db.School.findOneAndUpdate(
          //   { "_id": req.body._id }, { $push: { "team": result.id }}
          // );
          console.log("ID= ", result._id);

          db.Users
            .findByIdAndUpdate(id, { $push: { "team": result._id }}) 
            .then(res => console.log(res))
            .catch(err => console.log(err));
        })
      .catch(err => res.status(422).json(err));
  },

  // update Team
  update: function(req, res) {
    db.Team
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // remove team
  remove: function(req, res) {
    db.Team
      .findById({ _id: req.params.id })
      .then(dbModel => {
          dbModel.remove()
      })
      .then(dbModel => res.status(200).json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// const userRights = (Team, user) => {
//   if (!Team.user.equal(user._id)) {
//     return false;
//   }
//   return true;
// };