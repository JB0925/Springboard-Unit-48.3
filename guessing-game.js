function guessingGame() {
  let hasWon = false;
  let winningNumber = Math.floor(Math.random() * 100);
  let numberOfGuesses = 0;
  return (userGuess) => {
    numberOfGuesses++;
    if (hasWon) return "The game is over, you already won!";

    if (userGuess === winningNumber) {
      hasWon = true;
      return `You win! You found ${winningNumber} in ${numberOfGuesses} guesses.`;
    } else if (userGuess < winningNumber) {
      return `${userGuess} is too low!`;
    } else {
      return `${userGuess} is too high!`;
    }
  };
}

module.exports = { guessingGame };
