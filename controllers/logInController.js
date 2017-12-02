const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const db = require("../models");

module.exports = {

  // Check for email and password in DB. If found return user._ID
  authUser: function(req, res) {
    db.Users
      .find({email: req.body.email, password: req.body.password}, '_id')
      .then( dbModel => {
        console.log(dbModel)
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find user by ID
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => {
          res.status(200).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // find user by email
  findByEmail: function(req, res) {
    db.Users
      .findOne({email: req.body.email})
      .then(dbModel => {
        res.status(200).json(dbModel);
        email.forgot(dbModel);
      })
  },

  // Crate New User
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then( dbModel => {
      	res.status(201).json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // Update existing User
  update: function(req, res) {

    console.log(req);

    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
          res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // Remove User
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


// exports.validateRegister = (req, res, next) => {
//     req.sanitizeBody('name');
//     req.checkBody('name', 'You must supply a name!').notEmpty();
//     req.checkBody('email','That email is invalid').isEmail();
//     req.sanitizeBody('email').normalizeEmail({
//         all_lowercase: true,
//         gmail_remove_dots: true,
//         gmail_remove_subaddress: true,
//         gmail_convert_googlemaildotcam: true,
//         outlookdotcom_remove_subaddress: true,
//         yahoo_remove_subaddress: true,
//         icloud_remove_subaddress: true
//     });
//     req.checkBody('password', 'Password cannot be blank!').notEmpty();
//     req.checkBody('password-confirm', 'Confirmed password cannot be blank!').notEmpty();
//     req.checkBody('password-confirm', 'Opps your password dose not mach').equals(req.body.password);

//     const errors = req.validationErrors();
//     if(error) {
//         req.flash('error', errors.map(err => err.msg));

//       return;
//     }
//     next();
// };

// exports.register = async (req, res, next) => {
//     const user = new User({email: req.body.email, name: req.body.name});
//     const register = promisify(User.register, User);
//     await register(user, req.body.password);
//     next();
// };