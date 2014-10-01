angular.module('devoir1', ['mgcrea.ngStrap', 'ngRoute', 'devoir1'])

    .controller('EventListCtrl', function (events, $scope) {
        $scope.events = events.all;
    })
    .controller('EventEditCtrl', function (events, $scope, $routeParams) {
        $scope.event = events.findById($routeParams.id);

        $scope.save = events.saveById.bind(events, $scope.event.id, $scope.event);
    })
    .controller('EventCreateCtrl', function ($scope, events) {
        $scope.save = function (event) {
            if (event && event.title && event.content && event.maxAttendant) {
                var id = events.all.length + 1;
                event.id = id;
                event.attendant = 0;
                events.all.push(event);
                $scope.success = true;
                $scope.failed = false;
            } else {
                $scope.failed = true;
                $scope.success = false;
            }
        };
    });
