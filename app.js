// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {

  var firebaseBaseUrl = "https://fiery-fire-8189.firebaseio.com";

  // connect to firebase
  var ref = new Firebase(firebaseBaseUrl + "/days");

  var fb = $firebase(ref);

  // sync as object
  var list = fb.$asArray();

  // three way data binding
  // syncObject.$bindTo($scope, 'days');
$scope.days = list;

  // function to set the default data
  $scope.reset = function() {

    fb.$set({
      monday: {
        index: 0,
        name: 'Monday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        index: 1,
        name: 'Tuesday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      },
      wednesday: {
        index: 2,
        name: 'Wednesday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      },
      thursday: {
        index: 3,
        name: 'Thursday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      },
      friday: {
        index: 4,
        name: 'Friday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      },
      saturday: {
        index: 5,
        name: 'Saturday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      },
      sunday: {
        index: 6,
        name: 'Sunday',
        slots: {
          "0900": {
            time: '9:00am',
            booked: false
          },
          "1100": {
            time: '11:00am',
            booked: false
          }
        }
      }
    });
  };

});
