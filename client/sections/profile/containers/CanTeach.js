import { connect } from 'react-redux';
import CanTeach from '../components/CanTeach.jsx';

const mapStateToProps = (state) => ({
  canTeach: state.profile.canTeach,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CanTeach);