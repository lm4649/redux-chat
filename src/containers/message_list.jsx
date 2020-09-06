import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  componentDidMount() {
    this.refresh = setInterval(this.props.fetchMessages, 5000);
  }


  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componenWillUnmount() {
    clearInterval(this.refresh);
  }

  render() {
    return (
      <div className="messages" ref={(list) => { this.list = list; }} >
        <div className="list-header">Channel#{this.props.channel}</div>
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
  return { messages: state.messages, channel: state.selectedChannel };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
