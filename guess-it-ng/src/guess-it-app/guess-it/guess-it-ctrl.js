(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItCtrl',
    ['$scope', 'openGuessItModal',
      function GuessItCtrl ($scope, openGuessItModal) {
        $scope.guessIt = {
          play: function play () {
            //guessItSvc(3);

            openGuessItModal(3);

          }
        };
      }]);

}());
