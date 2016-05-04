import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';
import { acceptRequest, declineRequest, unmountRequest } from '../actions/index.js';


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
          dispatch(acceptRequest(id));
        },
        120
      );
    },
    
    onDeclineClick: (id) => {
      dispatch(unmountRequest(id));
      setTimeout(
        () => {
          dispatch(declineRequest(id));
        },
        120
      );
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
