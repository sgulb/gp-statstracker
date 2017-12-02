const router = require("express").Router();
const teamsController = require("../../controllers/teamsController");
// const authController = require("../../controllers/authController");

// Matches with "/api/team"
router.route("/")
  .post(teamsController.create); // create new Team

// Matches with "/api/team/:id"
router.route("/:id")
  .get(teamsController.findById) // return Team details (select by ID)
  .put(teamsController.update) // update Team details (select by ID)
  .delete(teamsController.remove); // remove Team (select by ID)(TODO: add cascading delete)

// Matches with "/api/team/teamPopAll/:id" and populates with players
router.route("/teamPopPlayer/:id")
  .get(teamsController.findByIdPop); // return player details populated with Players and TeamGames

// Matches with "/api/team/teamPopAll/:id" and populates with Team stats
router.route("/teamPopTeamStats/:id")
  .get(teamsController.findByIdPopTeamStats); // return team details and Team Game Stats

  // Matches with "/api/team/teamPopAll/:id" and populates with players and Team stats
router.route("/teamPopAll/:id")
  .get(teamsController.findByIdPop); // return Team games stats and populate with Player stats

router.route("/user/:id")
  .put(teamsController.findByUser); // return teams associated with a User

module.exports = router;