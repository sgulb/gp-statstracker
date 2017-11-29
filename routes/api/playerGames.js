const router = require("express").Router();
const playerGames = require("../../controllers/playerGamesController");
const authController = require("../../controllers/authController");

// Matches with "/api/playerGames"
router.route("/")
  .post(authController.isLoggedIn, // checks if the player is logged in
        playerGames.create); // Adds a game to playerGames, associates game with the Player and the Team games

// Matches with "/api/playerGames/:id"
router
  .route("/:id")
  .get(authController.isLoggedIn, // checks if the player is logged in
       playerGames.findById) // returns playerGame by playerGame ID
  .put(authController.isLoggedIn, // checks if the player is logged in
       playerGames.update) // updates existing playerGame details 
  .delete(authController.isLoggedIn, // checks if the player is logged in
          playerGames.remove); // removes selected playerGame

module.exports = router;