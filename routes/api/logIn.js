const router = require("express").Router();
const logInController = require("../../controllers/logInController");
// const authController = require("../../controllers/authController");


//route "/api/login"
router.route('/')
	.post(logInController.create)
	.get(logInController.authUser);

//route "/api/register"
router.route("/:id")
    .get(logInController.findById)
    .put(logInController.update)

module.exports = router;