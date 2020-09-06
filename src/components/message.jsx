import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div>{message.author} - {message.created_at}</div>
      <div>{message.content}</div>
    </div>
  );
};

export default Message;
