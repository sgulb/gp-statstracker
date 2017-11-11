const router = require("express").Router();
const playerController = require("../../controllers/playersController");

// Matches with "/api/books"
router.route("/")
  .get(playerController.findAll)
  .post(playerController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(playerController.findById)
  .put(playerController.update)
  .delete(playerController.remove);

module.exports = router;