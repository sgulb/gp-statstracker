var nodemailer = require('nodemailer');

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
      to: req,
      subject: 'Welcome to StatTrack!',
      text: '',
      html: '<h1>Thanks for joining StatTrack!</h1>'
    };

   transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent to ' + req + ' ' + info.response)
      }
    });
  },

 forgot: function(req, res) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'stattrackemail@gmail.com',
        pass: 'stattrack'
      }
    });

   var mailOptions = {
      from: 'stattrackemail@gmail.com',
      to: req.email,
      subject: 'Forgotten Password',
      text: 'Your password is: ' + req.password
    };

   transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent to ' + req.email + ' ' + info.response)
      }
    });
  }
}