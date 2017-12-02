// dependances
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// //required for passport user authintification
// const passport = require('passport');
// const flash    = require('connect-flash'); //The flash is a special area of the session used for storing messages
const morgan       = require('morgan'); //HTTP request logger middleware for node.js
// const cookieParser = require('cookie-parser');
// const session      = require('express-session');
// const expressValidator = require("express-validator");
// require('./handlers/passport');


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets
// app.use(express.static("client/build"));
// app.use(session({
//     secret: 'ThisisSomthingThatImadeup', // session secret
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session
// app.use(expressValidator());

// Add routes, both API and view
app.use(routes);

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
//
//
// // Connect to the Mongo DB
// mongoose.connect('mongodb://heroku_j6z6g8md:mdleudr2tbtpabtfomn03qirtg@ds127436.mlab.com:27436/heroku_j6z6g8md')
//
//   // process.env.MONGODB_URI || "mongodb://localhost/playerStatsTracker",
//
//   {
//     useMongoClient: true
//   }
// );

//DB Connections-------------------------------
// Connect to localhost if not a production environment
if(process.env.NODE_ENV == 'production'){
    mongoose.connect('mongodb://heroku_j6z6g8md:mdleudr2tbtpabtfomn03qirtg@ds127436.mlab.com:27436/heroku_j6z6g8md');
}
else{
    mongoose.connect("mongodb://localhost/playerStatsTracker");
    // YOU CAN IGNORE THE CONNECTION URL BELOW (LINE 41) THAT WAS JUST FOR DELETING STUFF ON A RE-DEPLOYMENT
    //mongoose.connect('mongodb://heroku_60zpcwg0:ubn0n27pi2856flqoedo9glvh8@ds119578.mlab.com:19578/heroku_60zpcwg0');
}
var db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
    console.log('Mongoose connection successful.');
});

// Start the API server
app.listen(PORT, function() {

  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
