const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const teamGameStatsSchema = new Schema({

  // Location of the game, default Home 
  location: { type: String, default: `Home`, trim: true  },

  // Date the game was played, Default Now
  datePlayed:{ type: Date, default: Date.now },

  // Name of the Opposing Team, Required
  opposingTeam: { type: String, required: "Please provide the name of the Opposing Team", trim: true },

  // Name of the Opposing School
  opposingSchool: { type: String, trim: true  },

  // Name of the Opposing Coach
  opposingCoach: { type: String, trim: true  },

  // Your Teams Score
  yourScore: { type: Number, required: "Please provide your Teams Score" },

  // Other Teams Score
  opposingScore: { type: Number, required: "Please provide the other Teams Score" },

  // Time of the last Update (Upgade to Array in the future)
  timestamp: [{ type: Date, default: Date.now }],

  // Stats of players in the game
  playerGameStats: [{ type: Schema.Types.ObjectId, ref: "PlayerGameStats"}],

  // Link to User (Used in Auth System)
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const TeamGameStats = mongoose.model("TeamGameStats", teamGameStatsSchema);

module.exports = TeamGameStats;