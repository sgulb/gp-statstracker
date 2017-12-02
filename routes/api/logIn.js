const router = require("express").Router();
const logInController = require("../../controllers/logInController");
// const authController = require("../../controllers/authController");


//route "/api/register"
router.route('/')
	.post(logInController.create);

//route "/api/login"
router.route("/:id")
    .get(logInController.findById)
    .put(logInController.update);

//route "/api/login"
router.route('/auth/')
    .post(logInController.authUser);

//route "/api/login/forgot"
router.route('/forgot')
    .post(logInController.findByEmail);

module.exports = router;
