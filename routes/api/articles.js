const router = require("express").Router(),
      articlesController = require("../../controllers/articleController");

// Routes for "/api/books"
router.route("/")
	  .get(articlesController.findAll)
	  .post(articlesController.save)
	  .delete(articlesController.remove)

module.exports = router;