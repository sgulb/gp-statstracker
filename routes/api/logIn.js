 const router = require("express").Router();
 const logInController = require("../../controllers/logInController");
 const authController = require("../../controllers/authController");

 //route "/api/login"
 router.route('/login')
 	.post(authController.login)
 
 //route "/api/register"
 router.route("/register/")
 	.post(logInController.validateRegister,
 			logInController.register,
 			authController.login
 	);

 //route "/api/logout"
 router.route('/logout')
 	.get(authController.logout)

 module.exports = router;