import { connect } from 'react-redux';
import Matches from '../components/Matches.jsx';
import { unmountMatch, removeMatch, incrementOffset, addMatches } from '../actions/index.js';


const mapStateToProps = (state) => (
  {
    matches: state.matches.values,
    offset: state.matches.offset,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onConnectClick: (id) => {
      dispatch(unmountMatch(id));
      setTimeout(
        () => {
          dispatch(removeMatch(id));
        },
        120
      );
    },
    onHideClick: (id) => {
      dispatch(unmountMatch(id));
      setTimeout(
        () => {
          dispatch(removeMatch(id));
        },
        120
      );
    },
    onLoadMoreClick: (offset) => {
      //use the offset to get additional matches from db, then
      dispatch(addMatches([]));
      dispatch(incrementOffset(20));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
