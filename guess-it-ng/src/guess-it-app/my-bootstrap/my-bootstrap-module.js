(function () {
  'use strict';

  angular.module('my-bootstrap-module', [])
    .controller('AlertDemoCtrl', function AlertDemoCtrl ($scope) {
      $scope.alerter = {
        alerts: [
          {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
          {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
        ],
        addAlert: function addAlert () {
          $scope.alerter.alerts.push({msg: 'Another alert!'});
        },
        closeAlert: function closeAlert (index) {
          $scope.alerter.alerts.splice(index, 1);
        }
      };
    });
}());
