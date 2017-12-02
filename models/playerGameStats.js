const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const playerGameStatsSchema = new Schema({
  isGoal: { type: Boolean },
  gameDate: { type: Date, default: Date.now },
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
  teamGameStats: [{ type: Schema.Types.ObjectId, ref: "TeamGameStats"}],
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const PlayerGameStats = mongoose.model("PlayerGameStats", playerGameStatsSchema);

module.exports = PlayerGameStats;