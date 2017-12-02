const router = require("express").Router();
const logInController = require("../../controllers/logInController");
// const authController = require("../../controllers/authController");


//route "/api/login"
router.route('/')
	.post(logInController.create);

//route "/api/register"
router.route("/:id")
    .get(logInController.findById)
    .put(logInController.update);

//route "/api/login"
router.route('/auth')
    .post(logInController.authUser);

router.route('/forgot')
			.post(logInController.findByEmail);

module.exports = router;