import { connect } from 'react-redux';
import Connections from '../components/Connections.jsx';
import { removeConnection } from '../actions/index.js';
import { addNewRoom, changeCurrentRoom } from '../../conversations/actions/index.js'; // separate concerns somehow?
import request from 'then-request';

const mapStateToProps = (state) => (
  {
    connections: state.connections,
    self: state.profile,
    rooms: state.rooms,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onNewConvo: (self, connection, currentRooms) => {
      request('POST', '/api/rooms', {
        json: {
          selfId: self.id,
          connectionId: connection.id,
        },
      })
      .done(data => {
        if (data.statusCode === 201) {
          const returnedRoom = JSON.parse(data.body);
          const dupIndex = currentRooms.reduce((cum, currentRoom, i) =>
            (currentRoom.id === returnedRoom.id) ? i : cum, -1);

          (dupIndex === -1) ?
            dispatch(addNewRoom(returnedRoom, self, [connection])) :
            dispatch(changeCurrentRoom(dupIndex));
        } else {
          // TODO: handle error
        }
      });
    },

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
