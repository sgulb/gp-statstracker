const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const playerSchema = new Schema({
  fName: { type: String, required: "Please provide the players First name", trim: true  },
  lName: { type: String, required: "Please provide the players Last name", trim: true  },
  fullName: String,
  position: { type: String, required: "Please provide the players postion", trim: true  },
  height: { type: String, default: `Unknown`, trim: true },
  weight: { type: String, default: `Unknown`, trim: true },
  timestamp: { type: Date, default: Date.now },
  playerGameStats: { type: Schema.Types.ObjectId, ref: "PlayerGameStats"}
});

playerSchema.pre('save', function(next){
	this.fullName = this.fName + " " + this.lName;
	next();
});

playerSchema.pre('remove', function(next) {
    Team.update({player: this._id}, { $pull: {player: this._id } }).exec();
    next();
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;