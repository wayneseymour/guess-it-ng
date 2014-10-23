(function () {
  'use strict';

  angular.module('guess-it-module')
    .controller('GuessItModalCtrl',
    ['$scope', '$modalInstance',
      function GuessItModalCtrl ($scope, $modalInstance) {

        $scope.guessItModal = {
          close: function close () {
            $modalInstance.dismiss('close');
          }

        };

      }])
    .factory('openGuessItModal',
    ['$modal', '$log',
      function openGuessItModalFactory ($modal, $log) {

        return function openGuessItModal () {

          var modalInstance = $modal.open({
            controller: 'GuessItModalCtrl',
            templateUrl: 'src/guess-it-app/guess-it/assets/html/guess-it-modal.html'
            //resolve: {
            //  guessItSvc: function getGuessItSvc () {
            //    return guessItSvc;
            //  }
            //}
          });

          modalInstance.result
            .then(function () {

            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });
        };
      }]);
}());
