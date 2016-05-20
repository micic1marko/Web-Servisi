angular.module('myApp', ['appRoutes', 'authCtrl', 'authService', 'userService', 'userCtrl'])

.config(function ($httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor');

    })