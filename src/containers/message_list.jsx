import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresh = setInterval(this.fetchMessages, 5000);
  }


  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componenWillUnmount() {
    clearInterval(this.refresh);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    return (
      <div className="messages-container">
        <div className="list-header">Channel#{this.props.channel}</div>
        <div className="messages" ref={(list) => { this.list = list; }} >
          { this.props.messages.map(message => <Message message={message} key={message.id} />)}
        </div>
        <MessageForm />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return { messages: state.messages, channel: state.selectedChannel };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
