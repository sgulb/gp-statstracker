const router = require("express").Router(),
      playerRoutes = require("./players.js"),
      playerGameRoutes = require("./playerGames.js"),
      teamRoutes = require("./teams.js"),
      teamGameRoutes = require("./teamGames.js"),
      schoolRoutes = require("./schools.js"),
      loginRoutes = require("./login.js");


// API Routes
router.use("/player", playerRoutes); // Player Routes "/api/player"
router.use("/playerGames", playerGameRoutes); // Player Game Stats Routes "/api/playerGames"
router.use("/team", teamRoutes); // Team Routes "/api/team"
router.use("/teamGames", teamGameRoutes); // Team Game Stats Routes "/api/teamGames"
router.use("/school", schoolRoutes); // School Routes "/api/school"
router.use("/login", loginRoutes); // Login Routes "/api/login"

// Export the Router
module.exports = router;