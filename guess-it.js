function guessIt (number) {
  var guess = +prompt('Guess a number less than 10');

  // base case
  if (guess === number)
    return console.log('You got it, the number was: %d', number);


  // termination case
  if (guess < 0 || guess > 10)
    return console.log('Cant be less than 0, or greater than 10, you entered: %d', guess);

  // recursive case
  guessIt(number);
}
guessIt(3);
