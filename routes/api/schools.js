const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");
const authController = require("../../controllers/authController");

// Matches with "/api/school"
router.route("/")
  // .get(authController.isLoggedIn,
  // 	   schoolsController.findAll)
  .post(authController.isLoggedIn, 
  	    schoolsController.create);

// Matches with "/api/school/:id"
router
  .route("/:id")
  .get(schoolsController.findById)
  .put(schoolsController.update)
  .delete(schoolsController.remove);

module.exports = router;