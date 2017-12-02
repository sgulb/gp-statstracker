const router = require("express").Router();
const teamGamesController = require("../../controllers/teamGamesController");
// const authController = require("../../controllers/authController");

// Matches with "/api/teamGames"
router.route("/") 
  .post(teamGamesController.create); // create new Team Game

// Matches with "/api/teamGames/:id"
router.route("/:id")
  .get(teamGamesController.findById) // Return Team Game Details
  .put(teamGamesController.update) // Update Team Game
  .delete(teamGamesController.remove); // Remove Team Game

module.exports = router;