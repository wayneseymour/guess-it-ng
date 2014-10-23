(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItCtrl', ['$scope', 'guessItSvc',
      function GuessItCtrl ($scope, guessItSvc) {
        $scope.guessIt = {
          play: function play () {
            guessItSvc(3);
          }
        };
      }]);
}());
