const mongoose = require('mongoose');
      Schema = mongoose.Schema,
      // md5 = require('md5'),
      validator = require('validator'),
      mongodbErrorHandler = require('mongoose-mongodb-errors');
      // passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please provide an email address'
	},
	name: {
		type: String,
		required: 'Please supply a name',
		trim: true
	},
	password: {
		type: String,
		required: 'Please supply a Password',
		trim: true
	},
	team: [{ type: Schema.Types.ObjectId, ref: "Team"}]
});

// userSchema.plugin(passportLocalMongoose, { usernameField: 'email'});
// userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);