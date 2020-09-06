import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="app">
      <div className ="messages-container">
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
