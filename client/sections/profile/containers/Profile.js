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
    let descriptionString = '';
    if (profile.description) {
      for (let i = 0; i < profile.description.length; i++) {
        if (profile.description.charAt(i) === "'") {
          descriptionString += '\\\'';
        } else {
          descriptionString += profile.description.charAt(i);
        }
      }
    }
    request('PUT', '/api/profile', {
      json: {
        id: profile.id,
        languages: profile.languages,
        description: profile.description ? descriptionString : 'No description added yet.',
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
