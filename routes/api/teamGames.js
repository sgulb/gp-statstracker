const router = require("express").Router();
const teamGamesController = require("../../controllers/teamGamesController");

<<<<<<< HEAD
// Matches with "/api/books"
=======
// Matches with "/api/teamGames"
>>>>>>> af57913243d987767ac893f91580a5797fd13d6a
router.route("/")
  .get(teamGamesController.findAll)
  .post(teamGamesController.create);

<<<<<<< HEAD
// Matches with "/api/books/:id"
=======
// Matches with "/api/teamGames/:id"
>>>>>>> af57913243d987767ac893f91580a5797fd13d6a
router
  .route("/:id")
  .get(teamGamesController.findById)
  .put(teamGamesController.update)
  .delete(teamGamesController.remove);

module.exports = router;