import { connect } from 'react-redux';
import Connections from '../components/Connections.jsx';
import { removeConnection } from '../actions/index.js';
import { addRoom, changeCurrentRoom } from '../../conversations/actions/index.js'; // separate concerns somehow?
import request from 'then-request';

const mapStateToProps = (state) => (
  {
    connections: state.connections,
    selfId: state.profile.id,
    rooms: state.rooms,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onNewConvo: (selfId, connection, currentRooms) => {
      request('POST', '/api/relationships', {
        json: {
          newType: 'conversation',
          selfId,
          connectionId: connection.id,
        },
      })
      .done(data => {
        if (data.statusCode === 201) {
          const returnedRoom = JSON.parse(data.body);
          console.log(returnedRoom);
          console.log(currentRooms);
          const dupIndex = currentRooms.reduce((cum, currentRoom, i) =>
            (currentRoom.id === returnedRoom.id) ? i : cum, -1);

          console.log(dupIndex);
          (dupIndex === -1) ?
            dispatch(addRoom(returnedRoom, connection)) :
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
