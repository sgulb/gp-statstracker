const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const playerSchema = new Schema({
  fName: { type: String, required: "Please provide the players First name", trim: true  },
  lName: { type: String, required: "Please provide the players Last name", trim: true  },
  fullName: { type: String, required: true },
  position: { type: String, required: "Please provide the players postion", trim: true  },
  hight: { type: String, default: `Unknown`, trim: true },
  weight: { type: String, default: `Unknown`, trim: true },
  timestamp: { type: Date, default: Date.now },
  playerGameStats: { type: Schema.Types.ObjectId, ref: "PlayerGameStats"}
});

ArticleSchema.pre('save', function(next){
	this.fullName: this.fName + " " this.lName;
	next();
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;