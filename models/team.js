const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const teamSchema = new Schema({

  // Team name, required
  teamName: { type: String, required: "Please provide the Teams name", trim: true },

  // Time of last update (update to Array in the future)
  timestamp: { type: Date, default: Date.now },

  // Name of the coach
  coach: { type: String, trim: true  },

  // Players in this team
  player: [{ type: Schema.Types.ObjectId, ref: "Player"}],

  // Games played by this team
  teamGameStats: [{ type: Schema.Types.ObjectId, ref: "TeamGameStats"}],

  // link to User (used in auth system)
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;