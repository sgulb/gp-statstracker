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

//Find by id and Populate teams "/api/playerGames/schoolPop/:id"
router
  .route("/schoolPop/:id")
  .get(playerGames.findByIdPop)

module.exports = router;