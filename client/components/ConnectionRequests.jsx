import React from 'react';

class ConnectionRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "person",
    };
  }
  render() {

    const { connectionRequest, onAcceptClick, onDeclineClick } = this.props;

    return (
      <div className={this.state.className}>
        <div>{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
        <div>{connectionRequest.canTeach}</div>
        <div>{connectionRequest.willLearn}</div>
        <div>{connectionRequest.description}</div>
        <a href="#" className="action"
          onClick={() => {
            this.setState({
              className: "animated fadeOut person",
            });
            setTimeout(() => { onAcceptClick(connectionRequest.id); }, 120);
          }}
        >Accept</a>
        <a href="#" className="action" onClick={() => { onDeclineClick(connectionRequest.id); }}>Decline</a>
      </div>
    );
  }
}

const ConnectionRequests = ({ connectionRequests, onAcceptClick, onDeclineClick }) => (
  <div>
    {connectionRequests.map((connectionRequest) => (
      <ConnectionRequest key={connectionRequest.id} connectionRequest={connectionRequest} onAcceptClick={onAcceptClick} onDeclineClick={onDeclineClick}/>
    ))}
  </div>
);

export default ConnectionRequests;
