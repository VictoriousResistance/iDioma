import React, { Component } from 'react';

class Video extends Component {

  componentDidMount() {
    const conversation = this.props.conversation;
    conversation.localMedia.attach(this.refs.localMedia);

    conversation.on('participantConnected', participant => {
      participant.media.attach(this.refs.remoteMedia);
    });
  }

  componentWillUnmount() {
    const conversation = this.props.conversation;
    conversation.localMedia.stop();
    conversation.disconnect();
  }

  render() {
    const { handleVideoDisconnectClick } = this.props;
    return (
      <div>
        <div ref='remoteMedia' className='media-container'></div>
        <div ref='localMedia' className='media-container'></div>
        <button className="action" onClick={() => { handleVideoDisconnectClick(); }}>Disconnect</button>
      </div>
    );
  }
};

export default Video;
