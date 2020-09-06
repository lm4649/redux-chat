import React from 'react';

const Message = ({ message }) => {
  const messageTime = message.created_at.match(/(\d{2}:){2}\d{2}/)[0];
  return (
    <div className="message">
      <div>
        <strong className="colored-name">{message.author}</strong> - {messageTime}
      </div>
      <div>{message.content}</div>
    </div>
  );
};

export default Message;
