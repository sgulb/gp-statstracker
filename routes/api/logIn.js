const router = require("express").Router();
const logInController = require("../../controllers/logInController");
// const authController = require("../../controllers/authController");


//route "/api/login"
router.route('/')
	.post(logInController.create); // add User

//route "/api/register"
router.route("/:id")
    .get(logInController.findById) // find user
    .put(logInController.update); // update user

//route "/api/login"
router.route('/auth')
    .post(logInController.authUser); // authenticate user

//route "/api/login"
router.route('/forgot')
    .post(logInController.findByEmail);

module.exports = router;