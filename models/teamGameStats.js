const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const teamGameStatsSchema = new Schema({
  location: { type: String, default: `Home`, trim: true  },
  datePlayed:{ type: Date, default: Date.now },
  opposingTeam: { type: String, required: "Please provide the name of the Opposing Team", trim: true },
  opposingSchool: { type: String, trim: true  },
  opposingCoach: { type: String, trim: true  },
  yourScore: { type: Number, required: "Please provide your Teams Score" },
  opposingScore: { type: Number, required: "Please provide the other Teams Score" },
  timestamp: { type: Date, default: Date.now }
});

const TeamGameStats = mongoose.model("TeamGameStats", teamGameStatsSchema);

module.exports = TeamGameStats;