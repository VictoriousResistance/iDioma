import { connect } from 'react-redux';
import Matches from '../components/Matches.jsx';
import { unmountMatch, removeMatch, incrementOffset, addMatches } from '../actions/index.js';
import request from 'then-request';

const mapStateToProps = (state) => (
  {
    matches: state.matches.values,
    offset: state.matches.offset,
    self: {
      id: state.profile.id,
      languages: state.profile.languages,
      fbId: state.profile.fbId,
    },
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onConnectClick: (selfId, id, selfFB, otherFB) => {
      request('POST', '/api/relationships', {
        json: {
          newType: 'request',
          selfId,
          matchId: id,
        },
      })
      .done(data => {
        if (data.statusCode === 201) {
          dispatch(unmountMatch(id));
          request('POST', '/service/notifications', {
            json: {
              selfFB,
              otherFB,
            },
          });
          setTimeout(
            () => {
              dispatch(removeMatch(id));
            },
            120
          );
        } else {
          // TODO: handle error
        }
      });
    },
    onHideClick: (selfId, id) => {
      request('POST', '/api/relationships', {
        json: {
          newType: 'reject',
          selfId,
          matchId: id,
        },
      })
      .done(data => {
        if (data.statusCode === 201) {
          dispatch(unmountMatch(id));
          setTimeout(
            () => {
              dispatch(removeMatch(id));
            },
            120
          );
        } else {
          // TODO: handle error
        }
      });
    },
    onLoadMoreClick: (self, offset) => {
      // use the offset to get additional matches from db, then
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
