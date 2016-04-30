import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';


const mapStateToProps = (state) => (
  {
    connectionRequests: state.connectionRequests,
  }
);

const mapDispatchToProps = (dispatch) => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
