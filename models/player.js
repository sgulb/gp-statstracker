const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const playerSchema = new Schema({
  // First Name, required
  fName: { type: String, required: "Please provide the players First name", trim: true  },
 
  // Last Name, required
  lName: { type: String, required: "Please provide the players Last name", trim: true  },
 
  // Player Jersey Number, required
  jersey: {type: String, required: "Please provide the players postion", trim: true},
  
  // Concatinated Player First and Last name
  fullName: String,
  
  // players position (example "Point Guard")
  position: { type: String, required: "Please provide the players postion", trim: true  },
  
  // Timestamp of last update
  timestamp: { type: Date, default: Date.now },
  
  // Linked playerGameStats
  playerGameStats: [{ type: Schema.Types.ObjectId, ref: "PlayerGameStats"}],
  
  // Linked Users (used in author system)
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});


// concatinates players first and last name prior to save
playerSchema.pre('save', function(next){
	this.fullName = this.fName + " " + this.lName;
	next();
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;