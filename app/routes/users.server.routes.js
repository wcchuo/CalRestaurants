var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	// Setting up the local authentication
	app.route('/auth/signup').post(users.signup);
	app.route('/auth/signin').post(users.signin);
	app.route('/auth/signout').get(users.signout);

	// app.get('/get_chapter/:chapter', function(req, res){
	// 	// console.log(req.params.chapter);
 //    	users.get_chapter(req.params.chapter, res);
 // });

	// Setting the facebook oauth routes
	app.route('/auth/facebook').get(passport.authenticate('facebook', {
		scope: ['email']
	}));
	app.route('/auth/facebook/callback').get(users.oauthCallback('facebook'));
};