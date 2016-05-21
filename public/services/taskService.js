angular.module('taskService', [])

.factory('Task', function ($http) {

        var taskFactory = {};

        taskFactory.create = function(taskData) {
            return $http.post('/tasks', taskData);
        };

        taskFactory.allTasks = function () {
            return $http.get('/tasks');
        };

        return taskFactory;

    });