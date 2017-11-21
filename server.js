// dependances

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
//required for passport user authintification
const passport = require('passport');
const flash    = require('connect-flash'); //The flash is a special area of the session used for storing messages
const morgan       = require('morgan'); //HTTP request logger middleware for node.js
const cookieParser = require('cookie-parser');  
const session      = require('express-session');
const expressValidator = require("express-validator");
require('./handlers/passport');

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));
app.use(session({
    secret: 'ThisisSomthingThatImadeup', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(expressValidator());
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(

  process.env.MONGODB_URI || "mongodb://localhost/playerStatsTracker",

  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {

  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});