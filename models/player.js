const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const playerSchema = new Schema({
  fName: { type: String, required: "Please provide the players First name", trim: true  },
  lName: { type: String, required: "Please provide the players Last name", trim: true  },
  jersey: {type: String, required: "Please provide the players postion", trim: true},
  fullName: String,
  position: { type: String, required: "Please provide the players postion", trim: true  },
  timestamp: { type: Date, default: Date.now },
  playerGameStats: [{ type: Schema.Types.ObjectId, ref: "PlayerGameStats"}],
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

playerSchema.pre('save', function(next){
	this.fullName = this.fName + " " + this.lName;
	next();
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;