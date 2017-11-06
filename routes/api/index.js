const router = require("express").Router(),
      articleRoutes = require("./articles");

// Article Routes
router.use("articles", articleRoutes);

module.exports = router;