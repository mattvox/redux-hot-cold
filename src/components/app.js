/*

App - main container
Game - game container
GameForm - component which takes user's guess
GameInfo - dumb component showing number of guesses, numbers guessed AND status

*/

import React from 'react';

const App = (props) => (
  <div className='row'>
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

App.defaultProps = {
  children: undefined,
};

export default App;
