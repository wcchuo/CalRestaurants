
//userprofile controller
mainApplicationModule.controller('UserProfileController', function($scope, $location, UserProfileFactory){

	console.log("I am in the CP controller");

	$scope.editdescription = function(id){
		UserProfileFactory.editEmail(id, $scope.new_description);
	};

	$scope.admin_access = true;
});