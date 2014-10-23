(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItCtrl', ['$scope', 'guessItSvc', '$log', '$modal',
      function GuessItCtrl ($scope, guessItSvc, $log, $modal) {
        $scope.guessIt = {
          play: function play () {
            //guessItSvc(3);

            var modalInstance = $modal.open({
              controller: 'GuessItModalCtrl',
              templateUrl: 'src/guess-it-app/guess-it/assets/guess-it-modal.html',
              resolve: {
                guessItSvc: function getGuessItSvc () {
                  return guessItSvc;
                }
              }
            });

            modalInstance.result
              .then(function () {

              }, function () {
                $log.info('Modal dismissed at: ' + new Date());
              });

          }
        };
      }]);
}());
