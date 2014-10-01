angular.module('devoir1')
    .factory('events', function () {
        var events = [{
            id: 1,
            title: 'Thomas\' birthday',
            content: 'Come to join thomas\' 12\'s birthday.',
            maxAttendant: 5,
            attendant: 2
        }, {
            id: 2,
            title: 'Jefferson Airplane',
            content: 'Today is the Jefferson airplane fan meeting. The event will take place in Dove Dome in Bulgaria.',
            maxAttendant: 10000,
            attendant: 3009
        }];

        function findById(id) {
            var result = false;
            id = parseInt(id, 10);
            angular.forEach(events, function (event) {
                if (event.id === id) {
                    result = event;
                    return false;
                }
            });
            return result;
        }

        function saveById(id, event) {
            var saved = false;
            angular.forEach(events, function (key, event) {
                if (event.id === id) {
                    events[key] = event;
                    saved = true;
                    return false;
                }
            });

            return saved;
        }

        return {
            all: events,
            findById: findById,
            saveById: saveById
        };
    });