(function () {
  'use strict';

  angular.module('guess-it-module')
    .factory('guessItSvc', ['$log',
      function guessItService ($log) {

        return function guessIt (number, guess, modal) {
          //var guess = +prompt('Guess a number less than 10');

          $log.log(number, guess, close);
          // base case
          if (guess === number) {
            modal.close('close');
            return $log.log('You got it, the number was: %d', number);
          }

          // termination case
          if (guess < 0 || guess > 10) {
            modal.close('close');
            return $log.log('Cant be less than 0, or greater than 10, you entered: %d', guess);
          }


          //// recursive case
          //guessIt(number);
        };

      }]);
}());
