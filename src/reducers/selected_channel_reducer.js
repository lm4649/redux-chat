import { SELECT_CHANNEL } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}
