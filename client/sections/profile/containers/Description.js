import { connect } from 'react-redux';
import Description from '../components/Description.jsx';
import { updateDescription } from '../actions/index.js';

const mapStateToProps = (state) => ({
  description: state.profile.description,
});

const mapDispatchToProps = (dispatch) => ({
  updateDescription: (description) => { dispatch(updateDescription(description)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);