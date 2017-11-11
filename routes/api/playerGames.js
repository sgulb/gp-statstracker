const router = require("express").Router();
const playerGames = require("../../controllers/playerGamesController");

// Matches with "/api/books"
router.route("/")
  .get(playerGames.findAll)
  .post(playerGames.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(playerGames.findById)
  .put(playerGames.update)
  .delete(playerGames.remove);

module.exports = router;