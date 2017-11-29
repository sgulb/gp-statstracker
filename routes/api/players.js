const router = require("express").Router();
const playerController = require("../../controllers/playersController");
const authController = require("../../controllers/authController");

// Matches with "/api/player"
router.route("/")
  .post(authController.isLoggedIn, playerController.create);

// Matches with "/api/player/:id"
router
  .route("/:id")
  .get(authController.isLoggedIn, // Checks if the User is logged in
       playerController.findById)
  .put(authController.isLoggedIn, // Checks if the User is logged in
       playerController.update)
  .delete(authController.isLoggedIn, // Checks if the User is logged in
          playerController.remove);

//Find by id and Populate teams "/api/playerGames/schoolPop/:id"
router
  .route("/playerPop/:id")
  .get(authController.isLoggedIn, // Checks if the User is logged in
       playerController.findByIdPop)

module.exports = router;