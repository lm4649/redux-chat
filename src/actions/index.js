export const SET_MESSAGES = 'SET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export function fetchMessages () {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages').then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage (channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, channel, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: POST_MESSAGE,
    payload: promise
  };
}
