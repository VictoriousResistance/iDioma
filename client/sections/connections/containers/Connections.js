import { connect } from 'react-redux';
import Connections from '../components/Connections.jsx';
import { removeConnection } from '../actions/index.js';


const mapStateToProps = (state) => (
  {
    connections: state.connections,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onRemoveClick: (id) => {
      dispatch(removeConnection(id));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Connections);
