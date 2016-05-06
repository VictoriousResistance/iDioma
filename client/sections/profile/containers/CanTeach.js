import { connect } from 'react-redux';
import CanTeach from '../components/CanTeach.jsx';
import { addTeach } from '../actions/index.js';

const mapStateToProps = (state) => ({
  canTeach: state.profile.canTeach,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTeachClick: (language) => { dispatch(addTeach(language)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CanTeach);