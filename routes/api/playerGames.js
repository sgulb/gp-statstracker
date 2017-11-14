const router = require("express").Router();
const playerGames = require("../../controllers/playerGamesController");

// Matches with "/api/playerGames"
router.route("/")
  .get(playerGames.findAll)
  .post(playerGames.create);

// Matches with "/api/playerGames/:id"
router
  .route("/:id")
  .get(playerGames.findById)
  .put(playerGames.update)
  .delete(playerGames.remove);

module.exports = router;