const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const playerGameStatsSchema = new Schema({
  points: { type: Number },
  rebounds: { type: Number },
  assists: { type: Number },
  blocks: { type: Number },
  steals: { type: Number },
  turnovers: { type: Number },
  fieldGoalsMade: { type: Number },
  fieldGoalsAttempted: { type: Number },
  threePointersMade: { type: Number },
  threePointersAttempted: { type: Number },
  freeThrowsMade: { type: Number },
  freeThrowsAttempted: { type: Number },
  minutesPlayed: { type: Number },
  teamGameStats: { type: Schema.Types.ObjectId, ref: "TeamGameStats"}
});

playerGameStatsSchema.pre('remove', function(next) {
    Player.update({playerGameStats: this._id}, { $pull: {playerGameStats: this._id } }).exec();
    TeamGameStats.update({playerGameStats: this._id}, { $pull: {playerGameStats: this._id } }).exec();
    next();
});

const PlayerGameStats = mongoose.model("PlayerGameStats", playerGameStatsSchema);

module.exports = PlayerGameStats;