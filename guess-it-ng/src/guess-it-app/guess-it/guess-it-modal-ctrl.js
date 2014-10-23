(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItModalCtrl',
    ['$scope', '$modalInstance', '$log', 'numberToGuess',
      function GuessItModalCtrl ($scope, $modalInstance, $log, numberToGuess) {

        $scope.guessItModal = {
          close: function close () {
            $modalInstance.close('close');
          },
          takeAGuess: function takeAGuess () {
            $log.info('TAKE A GUESS: ', $scope.guessItModal.guess);

            $log.info('number: ', numberToGuess);
          }

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
