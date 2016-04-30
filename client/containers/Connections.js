import { connect } from 'react-redux';
import Connections from '../components/Connections.jsx';


const mapStateToProps = (state) => (
  {
    connections: state.connections,
  }
);

const mapDispatchToProps = (dispatch) => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
