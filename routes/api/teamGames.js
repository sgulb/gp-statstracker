const router = require("express").Router();
const teamGamesController = require("../../controllers/teamGamesController");

// Matches with "/api/teamGames"
router.route("/")
  .get(teamGamesController.findAll)
  .post(teamGamesController.create);

// Matches with "/api/teamGames/:id"
router.route("/:id")
  .get(teamGamesController.findById)
  .put(teamGamesController.update)
  .delete(teamGamesController.remove);

module.exports = router;