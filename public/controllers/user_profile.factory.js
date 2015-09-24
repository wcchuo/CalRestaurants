//user_profile factory
mainApplicationModule.factory('UserProfileFactory', function($http){
	var factory = {};

	factory.editEmail = function(info) {
		var email = info.email;
		console.log(info);
	};

	console.log("I am in the UP factory");
	return factory;
});