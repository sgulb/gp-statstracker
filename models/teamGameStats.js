const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const teamGameStatsSchema = new Schema({
  location: { type: String, default: `Home`, trim: true  },
  datePlayed:{ type: Date, default: Date.now },
  opposingTeam: { type: String, required: "Please provide the name of the Opposing Team", trim: true },
  opposingTeamsSchool: { type: String, trim: true  },
  opposingTeamsCoach: { type: String, trim: true  },
  yourScore: { type: Number, required: "Please provide your Teams Score" },
  otherTeamsScore: { type: Number, required: "Please provide the other Teams Score" },
  timestamp: { type: Date, default: Date.now }
});

const TeamGameStats = mongoose.model("TeamGameStats", teamGameStatsSchema);

module.exports = TeamGameStats;