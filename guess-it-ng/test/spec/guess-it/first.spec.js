describe('first test', function () {
  'use strict';

  var scope;

  beforeEach(angular.mock.module('guess-it'));

  beforeEach(angular.mock.inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('...');
});
