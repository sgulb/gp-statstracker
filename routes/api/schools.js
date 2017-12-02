const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");
// const authController = require("../../controllers/authController");

// Matches with "/api/school"
router.route("/")
  .post(schoolsController.create); // crate new School

// Matches with "/api/school/:id"
router.route("/:id")
  .get(schoolsController.findById) // return School Details (select by ID)
  .put(schoolsController.update) // update school details (select by ID)
  .delete(schoolsController.remove); // remove School (select by ID)

module.exports = router;