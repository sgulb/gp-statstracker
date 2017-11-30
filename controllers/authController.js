// const passport = require ('passport');

// exports.login = passport.authenticate('local',{
// 	failureRedirect: '/main',
// 	failureFlash: 'Failed Login',
// 	successRedrirect: '/',
// 	successFlash: 'Yay!'
// });

// exports.logout = (req, res) => {
// 	req.logout();
// 	req.flash('success', 'You have been loged out. ');
// 	res.redrirect('/');
// };

// exports.isLoggedIn = (req, res, next) => {
//   // first check if the user is authenticated
//   if (req.isAuthenticated()) {
//     next(); // carry on! They are logged in!
//     return;
//   }
//   req.flash('error', 'Oops you must be logged in to do that!');
//   res.redirect('/main');
// };