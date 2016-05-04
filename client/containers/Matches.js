import { connect } from 'react-redux';
import Matches from '../components/Matches.jsx';
import { unmountMatch, connectMatch } from '../actions/index.js';


const mapStateToProps = (state) => (
  {
    matches: state.matches,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onConnectClick: (id) => {
      dispatch(unmountMatch(id));
      setTimeout(
        () => {
          dispatch(connectMatch(id));
        },
        120
      );
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
