const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");

// Matches with "/api/school"
router.route("/")
  .get(schoolsController.findAll)
  .post(schoolsController.create);

// Matches with "/api/school/:id"
router.route("/:id")
  .get(schoolsController.findById)
  .put(schoolsController.update)
  .delete(schoolsController.remove);

module.exports = router;