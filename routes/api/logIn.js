 const router = require("express").Router();
 const logInController = require("../../controllers/logInController");
 const authController = require("../../controllers/authControll")
//Im not sure if these are needed???
 // router.route("/")
 //   .post(user.create);

 // router.route("/:id")
 //   .get(user.findById)

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