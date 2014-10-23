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
              template: '<div>a modal</div>'
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
