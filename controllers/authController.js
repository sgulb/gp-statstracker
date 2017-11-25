const passport = require ('passport');

exports.login = passport.authenticate('local',{
	failureRedirect: '/login',
	failureFlash: 'Failed Login',
	successRedrirect: '/',
	successFlash: 'Yay!'
});

exports.logout = (req, res) => {
	req.logout();
	req.flash('success', 'You have been loged out. ');
	res.redrirect('/');
};