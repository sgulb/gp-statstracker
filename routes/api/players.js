const router = require("express").Router();
const playerController = require("../../controllers/playersController");
const authController = require("../../controllers/authController");

// Matches with "/api/player"
router.route("/")
  .post(authController.isLoggedIn, playerController.create);

// Matches with "/api/player/:id"
router
  .route("/:id")
  .get(authController.isLoggedIn,    // checks if the player is logged in
       playerController.findById)    // returns selected player
  .put(authController.isLoggedIn,    // checks if the player is logged in
       playerController.update)      // updates selected player
  .delete(authController.isLoggedIn, // checks if the player is logged in
          playerController.remove);  // removes selected player

//Find by id and Populate teams "/api/playerGames/schoolPop/:id"
router
  .route("/playerPop/:id")
  .get(authController.isLoggedIn,    // checks if the player is logged in
       playerController.findByIdPop) // returns Player with Games populated

module.exports = router;