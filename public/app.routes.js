angular.module('appRoutes', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/login.html'
            })
            .when('/dashboard', {
                templateUrl: 'views/pages/dashboard.html',
                controller: 'TaskController',
                controllerAs: 'task'
            })
            .when('/signup', {
                templateUrl: 'views/pages/signup.html'
            })

        $locationProvider.html5Mode(true);

    });