import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';
import { unmountRequest, removeRequest } from '../actions/index.js';
import { addConnection } from '../../connections/actions/index.js';
import request from 'then-request';


const mapStateToProps = (state) => (
  {
    connectionRequests: state.connectionRequests,
    selfId: state.profile.id,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onAcceptClick: (selfId, person) => {
      request('PUT', '/api/relationships', {
        json: {
          oldType: 'request',
          newType: 'connection',
          selfId,
          requestId: person.id,
        },
      })
      .done(data => {
        if (data.statusCode === 200) {
          dispatch(unmountRequest(person.id));
          setTimeout(
            () => {
              dispatch(removeRequest(person.id));
              dispatch(addConnection(person));
            },
            120
          );
        } else {
          // TODO: handle error
        }
      });
    },

    onDeclineClick: (selfId, id) => {
      request('PUT', '/api/relationships', {
        json: {
          oldType: 'request',
          newType: 'reject',
          selfId,
          requestId: id,
        },
      })
      .done(data => {
        if (data.statusCode === 200) {
          dispatch(unmountRequest(id));
          setTimeout(
            () => {
              dispatch(removeRequest(id));
            },
            120
          );
        } else {
          // TODO: handle error
        }
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
