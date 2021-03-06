import { USER_GUESS } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_GUESS:
      return [...state, action.payload];

    default:
      return state;
  }
}
