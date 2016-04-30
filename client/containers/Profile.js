import { connect } from 'react-redux';
import Profile from '../components/Profile.jsx';


const mapStateToProps = (state) => (
  {
    profile: state.profile,
  }
);

const mapDispatchToProps = (dispatch) = (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
