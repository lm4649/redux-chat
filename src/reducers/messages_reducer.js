import { SET_MESSAGES } from '../actions';

export default function (state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
}
