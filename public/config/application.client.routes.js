'use strict';

// Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        }).
        when('/user_profile/:id', {
            templateUrl: 'views/user_profile.html',
            controller: 'IndexController'
        }).
        when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'IndexController'
        }).
        when('/order', {
            templateUrl: 'views/order.html',
            controller: 'IndexController'
        }).
        when('/menu_update', {
            templateUrl: 'views/menu_update.html',
            controller: 'IndexController'
        }).
        when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'AuthenticationController'
        }).
        when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'AuthenticationController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);