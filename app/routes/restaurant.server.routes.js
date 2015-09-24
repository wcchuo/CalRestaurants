var Restaurant = require('../controllers/restaurant.server.controller');
	passport = require('passport');

module.exports = function(app, upload){

	app.get('/add_menu', function(req, res){
		Restaurant.add_menu(req, res);
	})

}