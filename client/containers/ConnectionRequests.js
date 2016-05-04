import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';
import { acceptRequest } from '../actions/index.js';


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
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
