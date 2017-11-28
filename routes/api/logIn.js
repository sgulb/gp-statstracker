 const router = require("express").Router();
 const logInController = require("../../controllers/logInController");
 const authController = require("../../controllers/authController");

 router.route('/login')
 	.post(authController.login)

 router.route("/register/")
 	.post(logInController.validateRegister,
 			logInController.register,
 			authController.login
 	);
 router.route('/logout')
 	.get(authController.logout)

 module.exports = router;