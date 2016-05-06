import { connect } from 'react-redux';
import Profile from '../components/Profile.jsx';
import { completeUpdate } from '../actions/index.js';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (profile) => {
    //send put request to server
    dispatch(completeUpdate());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);