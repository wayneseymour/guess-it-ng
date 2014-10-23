(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItCtrl', ['$scope', 'guessItSvc',
      function GuessItCtrl ($scope, guessItSvc) {
        $scope.guessIt = {
          startGame: function startGame () {
            guessItSvc(3);
          }
        };
      }]);
}());
