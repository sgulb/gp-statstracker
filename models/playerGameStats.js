const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const playerGameStatsSchema = new Schema({
  points: { type: Number default: 0 },
  rebounds: { type: Number default: 0 },
  assists: { type: Number default: 0 },
  blocks: { type: Number default: 0 },
  steals: { type: Number default: 0 },
  turnovers: { type: Number default: 0 },
  fieldGoalsMade: { type: Number default: 0},
  fieldGoalsAttempted: { type: Number default: 0}
  threePointersMade: { type: Number default: 0 },
  threePointersAttempted: { type: Number default: 0 },
  freeThrowsMade: { type: Number default: 0 },
  freeThrowsAttempted: { type: Number default: 0 },
  minutesPlayed: { type: Number default: 0 },
  teamGameStats: { type: Schema.Types.ObjectId, ref: "TeamGameStats"}
});

const PlayerGameStats = mongoose.model("PlayerGameStats", playerGameStatsSchema);

module.exports = PlayerGameStats;