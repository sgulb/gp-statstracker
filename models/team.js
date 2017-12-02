const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const teamSchema = new Schema({
  teamName: { type: String, required: "Please provide the Teams name", trim: true },
  timestamp: { type: Date, default: Date.now },
  coach: { type: String, trim: true  },
  player: [{ type: Schema.Types.ObjectId, ref: "Player"}],
  teamGameStats: [{ type: Schema.Types.ObjectId, ref: "TeamGameStats"}],
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;