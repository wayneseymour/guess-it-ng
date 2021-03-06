(function () {
  'use strict';

  angular.module('guess-it-module')
    .factory('guessItSvc', ['$log',
      function guessItService ($log) {

        return function guessIt (number, guess, modal) {
          //var guess = +prompt('Guess a number less than 10');

          // base case
          if (guess === number) {
            modal.close('close');
            return $log.log('You got it, the number was: %d', number);
          }

          // termination case
          if (guess < 0 || guess > 10) {
            modal.close('close');
            var msg = 'Cant be less than 0, or greater than 10, you entered: ' + guess;
            return $log.log(msg);
          }


          //// recursive case
          //guessIt(number);
        };

      }]);
}());
