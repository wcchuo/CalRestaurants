//Set schema for all orders

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var OrderSchema = new Schema({
	customer_name: String,
	customer_phone: String,
	customer_email: String,
	order_number: String,
	order_items: String,
	total: Number,
	pick_up_time: Date,
	pick_up_status: String,
	picked_up_time: Date,
	created_at: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Order', OrderSchema);