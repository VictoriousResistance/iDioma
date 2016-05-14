import { connect } from 'react-redux';
import Connections from '../components/Connections.jsx';
import { removeConnection } from '../actions/index.js';
import request from 'then-request';

const mapStateToProps = (state) => (
  {
    connections: state.connections,
    selfId: state.profile.id,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onRemoveClick: (selfId, connectionId) => {
      request('PUT', '/api/relationships', {
        json: {
          oldType: 'connection',
          selfId,
          connectionId,
        },
      })
      .done(data => {
        if (data.statusCode === 200) {
          dispatch(removeConnection(connectionId));
        } else {
          // TODO: handle error
        }
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
