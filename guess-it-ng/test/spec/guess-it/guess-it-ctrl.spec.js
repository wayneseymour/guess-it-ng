describe('guess it ctrl', function () {
  'use strict';

  var scope;
  var guessItCtrl;
  var log;
  var modal;
  var guessItSvc;

  beforeEach(module('guess-it-module'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    guessItCtrl = $controller('GuessItCtrl', {
      $scope: scope,
      guessItSvc: guessItSvc,
      $log: log,
      $modal: modal
    });
  }));

  it('should have a play fn', function () {
    expect(scope.guessIt.play).toBeDefined();
  });

});
