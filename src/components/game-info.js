import React from 'react';

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

const GameInfo = (props) => {
  const displayGuess = props.guess.map((guess, index) => (
    <span className='btn btn-primary' key={index}>
      {guess}
    </span>
  ));

  return (
    <div>
      <h3>Guessed Numbers</h3>
      <div>{displayGuess}</div>
      <h3>Number of Guesses</h3>
      <div className='btn btn-primary'>
        {(props.guess.length > 0) ? props.guess.length : ''}
      </div>
      <div>
        <h3>{props.status}</h3>
      </div>
    </div>
  );
};

export default GameInfo;
