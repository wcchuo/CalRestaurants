
//userprofile controller
mainApplicationModule.controller('RestaurantController', function($scope, $location, RestaurantFactory){

	console.log("Data in controller");
	console.log($scope.restaurant);

	$scope.addMenu = function(){
		RestaurantFactory.addMenu($scope.restaurant);
		$location.path('/')
	};

	$scope.admin_access = true;
});