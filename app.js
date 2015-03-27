// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {

  var firebaseBaseUrl = "https://fiery-fire-8189.firebaseio.com";

  // connect to firebase
  var ref = new Firebase(firebaseBaseUrl + "/days");

  var fb = $firebase(ref);


});
