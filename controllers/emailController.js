var nodemailer = require('nodemailer');
const db = require("../models");

module.exports = {
  welcome: function(req, res) {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'stattrackemail@gmail.com',
        pass: 'stattrack'
      }
    });

    var mailOptions = {
      from: 'stattrackemail@gmail.com',
      to: req.body.email,
      subject: 'Welcome to StatTrack!',
      text: '',
      html: ''
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent ' + info.response)
      }
    });
  },


}