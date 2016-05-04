import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';
import { acceptRequest, declineRequest } from '../actions/index.js';


const mapStateToProps = (state) => (
  {
    connectionRequests: state.connectionRequests,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onAcceptClick: (id) => {
      dispatch(acceptRequest(id));
    },
    onDeclineClick: (id) => {
      dispatch(declineRequest(id));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
