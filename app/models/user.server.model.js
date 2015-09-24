//Set schema for users

var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: {
		type: String,
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
	},
	role: String,
	phone: String,
	address_1: String,
	address_2: String,
	city: String,
	zipcode: String,
	State: String,
	facebook_token: String,
	role: String,
	profile_pic: String,
	password: {
		type: String,
		validate: [
			function(password) {
				return password && password.length > 6;
			}, 'Password should be longer than 8 characters'
		]
	},
	salt: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

// Hook a pre save method to hash the password
UserSchema.pre('save', function(next) {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

// Create instance method for hashing a password
UserSchema.methods.hashPassword = function(password) {
	if(password && this.salt) {
		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
	}
};

// Create instance method for authenticating user
UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

mongoose.model('User', UserSchema);
