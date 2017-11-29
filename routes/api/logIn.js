 const router = require("express").Router();
 const logInController = require("../../controllers/logInController");
 const authController = require("../../controllers/authController");

 //route "/api/login"
 router.route('/login')
 	.post(authController.login); // logs already registered User In
 
 //route "/api/register"
 router.route("/register/")
 	.post(logInController.validateRegister, // validates User details prior to registration
 			logInController.register, // Registers new User
 			authController.login); // Logs User in

 //route "/api/logout"
 router.route('/logout')
 	.get(authController.logout); // Logs User out

 module.exports = router;