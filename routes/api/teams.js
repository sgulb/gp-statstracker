const router = require("express").Router();
const teamsController = require("../../controllers/teamsController");
const authController = require("../../controllers/authController");

// Matches with "/api/team"
router.route("/")
  .post(authController.isLoggedIn, teamsController.create);

// Matches with "/api/team/:id"
router
  .route("/:id")
  .get(authController.isLoggedIn,
       teamsController.findById)
  .put(authController.isLoggedIn,
       teamsController.update)
  .delete(authController.isLoggedIn,
          teamsController.remove);

// Matches with "/api/team/teamPopAll/:id" and populates with players
router
  .route("/teamPopPlayer/:id")
  .get(authController.isLoggedIn,
       teamsController.findByIdPop)

// Matches with "/api/team/teamPopAll/:id" and populates with Team stats
router
  .route("/teamPopTeamStats/:id")
  .get(authController.isLoggedIn,
       teamsController.findByIdPopTeamStats)

  // Matches with "/api/team/teamPopAll/:id" and populates with players and Team stats
router
  .route("/teamPopAll/:id")
  .get(authController.isLoggedIn,
       teamsController.findByIdPop)

module.exports = router;