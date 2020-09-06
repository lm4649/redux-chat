export const SET_MESSAGES = 'SET_MESSAGES';

export function fetchMessages () {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages').then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}
