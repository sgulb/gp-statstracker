const mongoose = require("mongoose");
      Schema   = mongoose.Schema,
      db       = require("../models");

const playerGameStatsSchema = new Schema({

  // Is this a Goal? if not it must be a game.
  isGoal: { type: Boolean },

  // Game Date. If not provided the game must have been today
  gameDate: { type: Date, default: Date.now },

  // Number of points made by this player this game
  points: { type: Number },

  // Number of rebounds this player made this game
  rebounds: { type: Number },

  // number of Assists this player made this game
  assists: { type: Number },

  // Number of blocks made by this player this game
  blocks: { type: Number },

  // Number of steals made by this player this game
  steals: { type: Number },

  // Number of turnovers made by this player this game
  turnovers: { type: Number },

  // Number of fieldgoals made by this player this game
  fieldGoalsMade: { type: Number },

  // Number of fieldgoals attempted by this player this game
  fieldGoalsAttempted: { type: Number },

  // Number of three pointers made by this player this game
  threePointersMade: { type: Number },

  // Number of three pointers attempte by this player this game
  threePointersAttempted: { type: Number },

  // Number of free Throws made by this player this game
  freeThrowsMade: { type: Number },

  // Number of free Throws attempted by this player this game
  freeThrowsAttempted: { type: Number },

  // minutes played by this player this game
  minutesPlayed: { type: Number },

  // link to Team Game (This Game)
  teamGameStats: [{ type: Schema.Types.ObjectId, ref: "TeamGameStats"}],

  // Linkn to User (used in auth system)
  user: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

const PlayerGameStats = mongoose.model("PlayerGameStats", playerGameStatsSchema);

module.exports = PlayerGameStats;