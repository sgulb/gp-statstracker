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

// Matches with "/api/team/teamPopAll/:id" and populates with players
router
  .route("/teamPopPlayer/:id")
  .get(teamsController.findByIdPop)

// Matches with "/api/team/teamPopAll/:id" and populates with Team stats
router
  .route("/teamPopTeamStats/:id")
  .get(teamsController.findByIdPopTeamStats)

  // Matches with "/api/team/teamPopAll/:id" and populates with players and Team stats
router
  .route("/teamPopAll/:id")
  .get(teamsController.findByIdPop)

module.exports = router;