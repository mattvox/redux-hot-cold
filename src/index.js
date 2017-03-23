/*

- create a new random number
- user inputs a guess
- guess is compared to random number, output result

*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import promise from 'redux-promise';
import reducers from './reducers';

import App from './components/app';
import GameContainer from './components/game-container';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(promise),
));
/* eslint-enable */


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={reduxStore}>
      <App>
        <GameContainer />
      </App>
    </Provider>
  , document.querySelector('#app-container'));
});
