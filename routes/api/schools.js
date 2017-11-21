const router = require("express").Router();
const schoolsController = require("../../controllers/schoolsController");

<<<<<<< HEAD
// Matches with "/api/books"
=======
// Matches with "/api/school"
>>>>>>> af57913243d987767ac893f91580a5797fd13d6a
router.route("/")
  .get(schoolsController.findAll)
  .post(schoolsController.create);

<<<<<<< HEAD
// Matches with "/api/books/:id"
=======
// Matches with "/api/school/:id"
>>>>>>> af57913243d987767ac893f91580a5797fd13d6a
router
  .route("/:id")
  .get(schoolsController.findById)
  .put(schoolsController.update)
  .delete(schoolsController.remove);

module.exports = router;