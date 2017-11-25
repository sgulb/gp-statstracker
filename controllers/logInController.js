const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const User = mongoose.model("user");


exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a name!').notEmpty();
    req.checkBody('email','That email is invalid').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        all_lowercase: true,
        gmail_remove_dots: true,
        gmail_remove_subaddress: true,
        gmail_convert_googlemaildotcam: true,
        outlookdotcom_remove_subaddress: true,
        yahoo_remove_subaddress: true,
        icloud_remove_subaddress: true
    });
    req.checkBody('password', 'Password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Confirmed password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Opps your password dose not mach').equals(req.body.password);

    const errors = req.validationErrors();
    if(error) {
        req.flash('error', errors.map(err => err.msg));

      return;
    }
    next();
};

exports.register = async (req, res, next) => {
    const user = new User({email: req.body.email, name: req.body.name});
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    next();
};