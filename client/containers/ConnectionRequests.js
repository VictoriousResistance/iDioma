import { connect } from 'react-redux';
import ConnectionRequests from '../components/ConnectionRequests.jsx';


const mapStateToProps = (state) => (
  {
    connectionRequestss: state.connectionsRequests,
  }
);

const mapDispatchToProps = (dispatch) = (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionRequests);
