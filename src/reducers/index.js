import { combineReducers } from 'redux';

import RandomReducer from './reducer-random';
import GuessReducer from './reducer-guess';
import StatusReducer from './reducer-status';

const rootReducer = combineReducers({
  randomNum: RandomReducer,
  guess: GuessReducer,
  status: StatusReducer,
});

export default rootReducer;
