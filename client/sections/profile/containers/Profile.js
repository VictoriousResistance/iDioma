import { connect } from 'react-redux';
import Profile from '../components/Profile.jsx';
import { completeUpdate } from '../actions/index.js';
import request from 'then-request';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (profile) => {
    // send put request to server
    request('PUT', '/api/profile', {
      json: {
        id: profile.id,
        languages: profile.languages,
        description: profile.description,
      },
    })
    .done(data => {
      if (data.statusCode === 200) {
        dispatch(completeUpdate());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
