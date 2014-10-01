angular.module('devoir1')
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/events', {
                templateUrl: 'templates/eventList.html',
                controller: 'EventListCtrl'
            })
            .when('/event/:id/edit', {
                templateUrl: 'templates/eventUpdate.html',
                controller: 'EventEditCtrl'
            })
            .when('/create', {
                templateUrl: 'templates/eventUpdate.html',
                controller: 'EventCreateCtrl'
            });
    })