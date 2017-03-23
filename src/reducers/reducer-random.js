import { FETCH_RANDOM_NUM } from '../actions/index';

const INITIAL_STATE = Math.floor(Math.random() * 100);

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RANDOM_NUM:
      return action.payload;

    default:
      return state;
  }
}
