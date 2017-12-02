const router = require("express").Router();
const playerController = require("../../controllers/playersController");
// const authController = require("../../controllers/authController");

// Matches with "/api/player"
router.route("/")
  .post(playerController.create); // Crate new Player

// Matches with "/api/player/:id"
router.route("/:id")
  .get(playerController.findById) // Find Player by ID
  .put(playerController.update) // Player update
  .delete(playerController.remove); // Remove Player

//Find by id and Populate teams "/api/playerGames/schoolPop/:id"
router.route("/playerPop/:id")
  .get(playerController.findByIdPop) // Find player and the players stats

module.exports = router;