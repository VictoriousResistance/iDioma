import { connect } from 'react-redux';
import Matches from '../components/Matches.jsx';
import { unmountMatch, removeMatch, incrementOffset, addMatches } from '../actions/index.js';
import request from 'then-request';


const mapStateToProps = (state) => (
  {
    matches: state.matches.values,
    offset: state.matches.offset,
    self: state.profile,
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
    onLoadMoreClick: (self, offset) => {
      //use the offset to get additional matches from db, then
      request('GET', '/api/matches', {
        qs: {
          self,
          offset,
        },
      })
      .done((matches) => {
        if (matches.statusCode === 200) {
          dispatch(addMatches(JSON.parse(matches.body)));
          dispatch(incrementOffset(20));
        } else {
          // TODO: handle error
        }
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
