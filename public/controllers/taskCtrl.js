angular.module('taskCtrl', ['taskService'])

.controller('TaskController', function(Task) {

        var vm = this;

        Task.allTasks()
            .success(function (data) {
                vm.tasks = data;
            });

        vm.createTast = function () {
            vm.message = '';

            Task.create(vm.taskData)
                .success(function (data) {
                    vm.taskData = '';

                    vm.message = data.message;
                });
        };


    });