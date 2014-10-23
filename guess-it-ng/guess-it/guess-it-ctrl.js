(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItCtrl', ['$scope',
      function GuessItCtrl ($scope) {
        $scope.guessIt = {
          startGame: function startGame () {
            console.log('\n### start the game');
          }
        };
      }]);
}());
