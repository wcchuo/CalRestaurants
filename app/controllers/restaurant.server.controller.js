var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var User = mongoose.model('User');

module.exports = (function() {
	return {

	add_menu: function(req, res) {
    	console.log(req.body);
        var newmenu = new Restaurant(req.body);
        newmenu.save(function(err) {
        if(err) {
          console.log(err);
          } else {
          console.log(newmenu.menu + ' has been added!');
          }
    })}
	
  }
})();

