const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const teamSchema = new Schema({
  teamName: { type: String, required: "Please provide the Teams name", trim: true },
  timestamp: { type: Date, default: Date.now },
  coach: { type: String, required: "Please enter the Coach's first and last name", trim: true  },
  player: { type: Schema.Types.ObjectId, ref: "Player"},
  teamGameStats: { type: Schema.Types.ObjectId, ref: "TeamGameStats"}
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;