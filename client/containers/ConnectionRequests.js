import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';
import { unmountRequest, removeRequest } from '../actions/index.js';


const mapStateToProps = (state) => (
  {
    connectionRequests: state.connectionRequests,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onAcceptClick: (id) => {
      dispatch(unmountRequest(id));
      setTimeout(
        () => {
          dispatch(removeRequest(id));
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
