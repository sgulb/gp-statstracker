const router = require("express").Router();
const playerGames = require("../../controllers/playerGamesController");
const authController = require("../../controllers/authController");

// Matches with "/api/playerGames"
router.route("/")
  .post(playerGames.create);

// Matches with "/api/playerGames/:id"
router
  .route("/:id")
  .get(authController.isLoggedIn, playerGames.findById)
  .put(authController.isLoggedIn, playerGames.update)
  .delete(authController.isLoggedIn, playerGames.remove);

module.exports = router;