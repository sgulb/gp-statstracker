const router = require("express").Router();
const teamsController = require("../../controllers/teamsController");

<<<<<<< HEAD
// Matches with "/api/books"
=======
// Matches with "/api/team"
>>>>>>> af57913243d987767ac893f91580a5797fd13d6a
router.route("/")
  .get(teamsController.findAll)
  .post(teamsController.create);

<<<<<<< HEAD
// Matches with "/api/books/:id"
=======
// Matches with "/api/team/:id"
>>>>>>> af57913243d987767ac893f91580a5797fd13d6a
router
  .route("/:id")
  .get(teamsController.findById)
  .put(teamsController.update)
  .delete(teamsController.remove);

module.exports = router;