import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div className="messages">
        <div className="list-header">Channel#general</div>
        { this.props.messages.map(message => <Message message={message} />)}
      </div>
    );
  }
}

function mapStateToProps(initialState) {
  return { messages: initialState.messages };
}


export default connect(mapStateToProps)(MessageList);
