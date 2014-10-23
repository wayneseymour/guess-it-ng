describe('guess it ctrl', function () {
  var scope;
  var guessItCtrl;

  beforeEach(module('guess-it'));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    guessItCtrl = $controller('GuessItCtrl', { $scope: scope });
  }));

  it('should have a start game fn', function () {
      expect(scope.guessIt.play).toBeDefined();
  });

});
