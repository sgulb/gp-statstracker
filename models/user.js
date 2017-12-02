const mongoose = require('mongoose');
      Schema = mongoose.Schema,
      // md5 = require('md5'),
      validator = require('validator'),
      mongodbErrorHandler = require('mongoose-mongodb-errors');
      // passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({

	// Users email, required for welcome email and forgoten password
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: [validator.isEmail, 'Invalid Email Address'],
		required: 'Please provide an email address'
	},
	
	// Users name, required for personlization of communications
	name: {
		type: String,
		required: 'Please supply a name',
		trim: true
	},

	// Password, Used to secure route (up grade to passport hash in the future)
	password: {
		type: String,
		required: 'Please supply a Password',
		trim: true
	},

	// Teams owned by this user
	team: [{ type: Schema.Types.ObjectId, ref: "Team"}]
});

// userSchema.plugin(passportLocalMongoose, { usernameField: 'email'});
// userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);