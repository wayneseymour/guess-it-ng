describe('guess it ctrl', function () {
  'use strict';

  var scope;
  var guessItCtrl;
  var openGuessItModal;

  beforeEach(module('guess-it-module'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    guessItCtrl = $controller('GuessItCtrl', {
      $scope: scope,
      openGuessItModal: openGuessItModal
    });
  }));

  it('should have a play fn', function () {
    expect(scope.guessIt.play).toBeDefined();
  });

});
