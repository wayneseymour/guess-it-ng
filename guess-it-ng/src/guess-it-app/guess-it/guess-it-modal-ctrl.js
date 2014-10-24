(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItModalCtrl',
    ['$scope', '$modalInstance', '$log', 'numberToGuess', 'guessItSvc',
      function GuessItModalCtrl ($scope, $modalInstance, $log, numberToGuess, guessItSvc) {

        $scope.guessItModal = {
          close: function close () {
            $modalInstance.close('close');
          },
          takeAGuess: function takeAGuess () {

            guessItSvc(numberToGuess, +$scope.guessItModal.guess, $modalInstance);

          },
          guessRangeMsg: 'Guess a number less than 10 and greater than 0'

        };

      }])
    .factory('openGuessItModal',
    ['$modal', '$log',
      function openGuessItModalFactory ($modal) {

        return function openGuessItModal (numberToGuess) {
          console.log('\n### numberToGuess: ', numberToGuess);

          $modal.open({
            controller: 'GuessItModalCtrl',
            templateUrl: 'src/guess-it-app/guess-it/assets/html/guess-it-modal.html',
            resolve: {
              numberToGuess: function getNumberToGuess () {
                return numberToGuess;
              }
            }
          });

          //modalInstance.result
          //  .then(function closed () {
          //    $log.info('modal CLOSED at: ' + new Date());
          //  }, function dismissed () {
          //    $log.info('modal DISMISSED at: ' + new Date());
          //  });
        };
      }]);
}());
