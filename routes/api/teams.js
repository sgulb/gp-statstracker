const router = require("express").Router();
const teamsController = require("../../controllers/teamsController");

// Matches with "/api/team"
router.route("/")
  .get(teamsController.findAll)
  .post(teamsController.create);


// Matches with "/api/team/:id"
router
  .route("/:id")
  .get(teamsController.findById)
  .put(teamsController.update)
  .delete(teamsController.remove);

module.exports = router;