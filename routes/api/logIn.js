 const router = require("express").Router();
 const signIn = require("../../controllers/logInController");
//Im not sure if these are needed???
 // router.route("/")
 //   .post(user.create);

 // router.route("/:id")
 //   .get(user.findById)

 router.route('/login')
 	.get(userController.loginForm);
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