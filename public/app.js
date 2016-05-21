angular.module('myApp', ['appRoutes', 'authCtrl', 'authService', 'userService', 'userCtrl', 'taskCtrl', 'taskService'])

.config(function ($httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor');

    });