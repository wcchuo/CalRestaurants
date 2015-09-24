mainApplicationModule.controller('OrderFormController', function($scope){

	$scope.menus = [
		{
			restaurant_name: 'Pizzaria',
			menu: 'Pepperoni Pizza',
			price: 9.95,
			image: 'pepperoni-pizza.png'
		},
		{
			restaurant_name: 'Pizzaria',
			menu: 'Vegetable Pizza',
			price: 9.95,
			image: 'vegetable-pizza.png'
		},
		{
			restaurant_name: 'Pizzaria',
			menu: 'Hawaiian Pizza',
			price: 9.95,
			image: 'hawaiian-pizza.png'
		},
		{
			restaurant_name: 'Pizzaria',
			menu: 'Chicken Pizza',
			price: 9.95,
			image: 'chicken-pizza.png'
		},
			restaurant_name: 'Sandwich Stop',
			menu: 'Carbonara Sandwich',
			price: 9.95,
			image: 'carbonara-sandwich.png'
		},
		{
			restaurant_name: 'Sandwich Stop',
			menu: 'Mesquite Sandwich',
			price: 9.95,
			image: 'mesquite-sandwich.png'
		},
		{
			restaurant_name: 'Sandwich Stop',
			menu: 'Caesar Sandwich',
			price: 9.95,
			image: 'caesar-sandwich.png'
		},
		{
			restaurant_name: 'Sandwich Stop',
			menu: 'Reuben Sandwich',
			price: 9.95,
			image: 'reuben-sandwich.png'
		},
			restaurant_name: 'Taqueria',
			menu: 'Beef Taco',
			price: 9.95,
			image: 'beef-taco.png'
		},
		{
			restaurant_name: 'Taqueria',
			menu: 'Fish Baja Taco',
			price: 9.95,
			image: 'fish-baja-taco.png'
		},
		{
			restaurant_name: 'Taqueria',
			menu: 'Asada Taco',
			price: 9.95,
			image: 'asada-taco.png'
		},
		{
			restaurant_name: 'Taqueria',
			menu: 'Ahi Fish Taco',
			price: 9.95,
			image: 'ahi-fish-taco.png'
		},
			restaurant_name: 'Burger Joint',
			menu: 'Burger',
			price: 9.95,
			image: 'burger.png'
		},
		{
			restaurant_name: 'Burger Joint',
			menu: 'Chicken Burger',
			price: 9.95,
			image: 'chicken-burger.png'
		},
		{
			restaurant_name: 'Burger Joint',
			menu: 'All American Burger',
			price: 9.95,
			image: 'all-american-burger.png'
		},
		{
			restaurant_name: 'Burger Joint',
			menu: 'Double Burger',
			price: 9.95,
			image: 'double-burgers.png'
		}
	];

	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});
		return total;
	};

});

