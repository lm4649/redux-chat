import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div className="messages">
        <div className="list-header">Channel#general</div>
        { this.props.messages.map(message => <Message message={message} />)}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch);
}

function mapStateToProps(state) {
  return { messages: state.messages };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
