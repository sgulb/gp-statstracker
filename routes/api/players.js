const router = require("express").Router();
const playerController = require("../../controllers/playersController");
// const authController = require("../../controllers/authController");

// Matches with "/api/player"
router.route("/")
  .post(playerController.create);

// Matches with "/api/player/:id"
router
  .route("/:id")
  .get(playerController.findById)
  .put(playerController.update)
  .delete(playerController.remove);

//Find by id and Populate teams "/api/playerGames/schoolPop/:id"
router
  .route("/playerPop/:id")
  .get(playerController.findByIdPop)

module.exports = router;