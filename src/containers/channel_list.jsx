import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions';


class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  render() {
    return (
      <div className="channels">
        <div className="list-header">Redux chat</div>
        { this.props.channels.map((channel) => {
          return <div className={channel === this.props.selectedChannel ? 'channel active' : 'channel'} key={channel} onClick={() => this.props.selectChannel(channel)} role="presentation">#{channel}</div>;
        })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { channels: state.channels, selectedChannel: state.selectedChannel };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
