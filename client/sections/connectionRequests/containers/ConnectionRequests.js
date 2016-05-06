import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';
import { unmountRequest, removeRequest } from '../actions/index.js';
import { addConnection } from '../../connections/actions/index.js';


const mapStateToProps = (state) => (
  {
    connectionRequests: state.connectionRequests,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onAcceptClick: (person) => {
      dispatch(unmountRequest(person.id));
      setTimeout(
        () => {
          dispatch(removeRequest(person.id));
          dispatch(addConnection(person));
        },
        120
      );
    },

    onDeclineClick: (id) => {
      dispatch(unmountRequest(id));
      setTimeout(
        () => {
          dispatch(removeRequest(id));
        },
        120
      );
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
