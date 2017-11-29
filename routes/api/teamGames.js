const router = require("express").Router();
const teamGamesController = require("../../controllers/teamGamesController");
const authController = require("../../controllers/authController");

// Matches with "/api/teamGames"
router.route("/")
  .post(authController.isLoggedIn, teamGamesController.create);

// Matches with "/api/teamGames/:id"
router
  .route("/:id")
  .get(authController.isLoggedIn, teamGamesController.findById)
  .put(authController.isLoggedIn, teamGamesController.update)
  .delete(authController.isLoggedIn, teamGamesController.remove);

module.exports = router;