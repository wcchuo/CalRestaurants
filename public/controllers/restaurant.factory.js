//user_profile factory
mainApplicationModule.factory('RestaurantFactory', function($http){
	var factory = {};

	factory.addMenu = function(data) {
		console.log("Data in factory");
        var data = {restaurant_name: data.restaurant_name, menu: data.menu, description:data.description, image:data.image, price:data.price};
        console.log(data);
        $http.post('/add_menu', data).success(function(output) { data = output; })
	};

	return factory;
});