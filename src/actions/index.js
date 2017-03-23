export const FETCH_RANDOM_NUM = 'FETCH_RANDOM_NUM';
export const USER_GUESS = 'USER_GUESS';
export const USER_STATUS = 'USER_STATUS';

export function fetchRandomNumber() {
  const randomNum = Math.floor(Math.random() * 100);

  return {
    type: FETCH_RANDOM_NUM,
    payload: randomNum,
  };
}

export function userGuess(guess) {
  return {
    type: USER_GUESS,
    payload: guess,
  };
}

export function userStatus(guess, randomNum) {
  const compareDistance = Math.abs(randomNum - guess);
  let evaluation = '';

  if (compareDistance > 25) {
    evaluation = 'ICE COLD';
  } else if (compareDistance >= 15) {
    evaluation = 'CHILLY';
  } else if (compareDistance >= 10) {
    evaluation = 'WARMING UP';
  } else if (compareDistance >= 5) {
    evaluation = 'HOT';
  } else if (compareDistance > 0) {
    evaluation = 'ON FIRE';
  } else if (compareDistance === 0) {
    evaluation = 'WINNER';
  }

  return {
    type: USER_STATUS,
    payload: evaluation,
  };
}

// guessCount, guessStatus, isGuessed, displayGuesses

/*

guess input
guess status
number of guesses
display of previous guesses
display if a guess is correct or incorrect

*/
