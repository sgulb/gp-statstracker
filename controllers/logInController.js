const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const db = require("../models");
const email = require('./emailController.js');

module.exports = {
  authUser: function(req, res) {
    db.Users
      .find({email: req.body.email, password: req.body.password}, '_id')
      .then( dbModel => {
        console.log(dbModel)
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.Users
      .findOne({email: req.body.email})
      .then(dbModel => {
        res.status(200).json(dbModel);
        email.forgot(dbModel);
      })
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then( dbModel => {
          res.status(200).json(dbModel);
        email.welcome(req.body.email);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {

   console.log(req);

   db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
          res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => {
          dbModel.remove();
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};