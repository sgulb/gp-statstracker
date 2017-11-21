const mongoose = require("mongoose");
<<<<<<< HEAD
      Schema   = mongoose.Schema,
      db       = require("../models");
=======

      Schema   = mongoose.Schema,
      db       = require("../models");

>>>>>>> 94b5f079e05f1e82bb6a0d29e6811352cf90f8c1

const teamGameStatsSchema = new Schema({
  location: { type: String, default: `Home`, trim: true  },
  datePlayed:{ type: Date, default: Date.now },
  opposingTeam: { type: String, required: "Please provide the name of the Opposing Team", trim: true },
  opposingSchool: { type: String, trim: true  },
  opposingCoach: { type: String, trim: true  },
  yourScore: { type: Number, required: "Please provide your Teams Score" },
  opposingScore: { type: Number, required: "Please provide the other Teams Score" },
  timestamp: { type: Date, default: Date.now },
  playerGameStats: { type: Schema.Types.ObjectId, ref: "PlayerGameStats"}
});

teamGameStatsSchema.pre('remove', function(next) {
    PlayerGameStats.update({teamGameStats: this._id}, { $pull: {teamGameStats: this._id } }).exec();
    Team.update({teamGameStats: this._id}, { $pull: {teamGameStats: this._id } }).exec();
    next();
<<<<<<< HEAD
=======

>>>>>>> 94b5f079e05f1e82bb6a0d29e6811352cf90f8c1
});

const TeamGameStats = mongoose.model("TeamGameStats", teamGameStatsSchema);

module.exports = TeamGameStats;