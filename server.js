// dependances
const express    = require("express"),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      routes     = require("./routes"),
      path       = require("path"),
      app        = express(),
      PORT       = process.env.PORT || 8080;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set static folder
app.use(express.static(path.join(__dirname, 'client/build')));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`API Server listening on PORT ${PORT}!`);
}); 