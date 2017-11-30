const router = require("express").Router();
const teamGamesController = require("../../controllers/teamGamesController");
// const authController = require("../../controllers/authController");

// Matches with "/api/teamGames"
router.route("/")
  .post(teamGamesController.create);

// Matches with "/api/teamGames/:id"
router
  .route("/:id")
  .get(teamGamesController.findById)
  .put(teamGamesController.update)
  .delete(teamGamesController.remove);

module.exports = router;