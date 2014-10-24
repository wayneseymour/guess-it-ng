(function () {
  'use strict';

  angular.module('alerts-module', [])
    .controller('AlertsCtrl', ['$scope',
      function AlertsCtrl ($scope) {
      $scope.alerter = {
        alerts: [
          //{type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
          //{type: 'success', msg: 'Well done! You successfully read this important alert message.'}
        ],
        addAlert: function addAlert (msg) {
          $scope.alerter.alerts.push({msg: msg || 'Default message'});
        },
        closeAlert: function closeAlert (index) {
          $scope.alerter.alerts.splice(index, 1);
        }
      };
    }]);
}());
