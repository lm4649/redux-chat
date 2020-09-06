import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.MessageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channel, this.props.author, this.state.value);
    this.setState({ value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="message-form">
        <input type="text" ref={(input) => { this.MessageBox = input; }} className="form-control" value={this.state.value} onChange={this.handleChange} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-warning" value="Submit">Send</button>
        </div>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch);
}

function mapStateToProps(state) {
  return { channel: state.selectedChannel, author: state.currentUser };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
