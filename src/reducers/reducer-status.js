import { USER_STATUS } from '../actions/index';

const INITIAL_STATE = 'New Game';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_STATUS:
      return action.payload;

    default:
      return state;
  }
}
