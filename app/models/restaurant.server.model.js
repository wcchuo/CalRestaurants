//Set schema for restaurant name, menu & price

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RestaurantSchema = new mongoose.Schema({
	restaurant_name: String,
	menu: String,
	description: String,
	image: String,
	price: Number,
	created_at: { type: Date, default: Date.now }
});

mongoose.model('Restaurant', RestaurantSchema);