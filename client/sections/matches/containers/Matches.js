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

        dispatch(addMatches([{firstName: 'Velvet', lastName: 'Underground', languages: { canTeach: [['English', 'native']], willLearn: [['German', 'advanced']] }, description: 'hi there', photoUrl: 'http://watchmojo.com/uploads/blipthumbs/M-RR-Top10-Velvet-Underground-Songs-480p30_480.jpg'}]));
        dispatch(incrementOffset(20));
      });
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
