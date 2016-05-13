import { connect } from 'react-redux';
import Profile from '../components/Profile.jsx';
import { completeUpdate } from '../actions/index.js';
import request from 'then-request';

const mapStateToProps = (state) => ({
  profile: {
    id: state.profile.id,
    languages: state.profile.languages,
    description: state.profile.description,
  },
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (profile) => {
    // send put request to server
    request('PUT', '/api/profile', {
      json: profile,
    })
    .done(data => {
      if (data.statusCode === 200) {
        dispatch(completeUpdate());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
