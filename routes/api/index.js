const router = require("express").Router(),
      playerRoutes = require("./players.js"),
      playerGameRoutes = require("./playerGames.js"),
      teamRoutes = require("./teams.js"),
      teamGameRoutes = require("./teamGames.js"),
      schoolRoutes = require("./schools.js");

// Article Routes
router.use("/player", playerRoutes);
router.use("/playerGames", playerGameRoutes);
router.use("/team", teamRoutes);
router.use("/teamGames", teamGameRoutes);
router.use("/school", schoolRoutes);

module.exports = router;