const router = require("express").Router();
const playerGames = require("../../controllers/playerGamesController");
// const authController = require("../../controllers/authController");

// Matches with "/api/playerGames"
router.route("/")
  .post(playerGames.create); // add new player game stats/goal

// Matches with "/api/playerGames/:id"
router.route("/:id")
  .get(playerGames.findById) // Find playerGame by ID
  .put(playerGames.update) // update playerGameStats
  .delete(playerGames.remove); // Remove Player Game

module.exports = router;