const router = require("express").Router();
const teamsController = require("../../controllers/teamsController");
// const authController = require("../../controllers/authController");

// Matches with "/api/team"
router.route("/")
  .post(teamsController.create);

// Matches with "/api/team/:id"
router
  .route("/:id")
  .get(teamsController.findById)
  .put(teamsController.update)
  .delete(teamsController.remove);

// Matches with "/api/team/teamPopAll/:id" and populates with players
router
  .route("/teamPopPlayer/:id")
  .get(teamsController.findByIdPop);

// Matches with "/api/team/teamPopAll/:id" and populates with Team stats
router
  .route("/teamPopTeamStats/:id")
  .get(teamsController.findByIdPopTeamStats);

  // Matches with "/api/team/teamPopAll/:id" and populates with players and Team stats
router
  .route("/teamPopAll/:id")
  .get(teamsController.findByIdPop);

router
  .route("/user/:id")
  .put(teamsController.findByUser);

module.exports = router;