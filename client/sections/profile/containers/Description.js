import { connect } from 'react-redux';
import Description from '../components/Description.jsx';
import { updateDescription, updateCanNotSubmit } from '../actions/index.js';

const mapStateToProps = (state) => ({
  description: state.profile.description,
});

const mapDispatchToProps = (dispatch) => ({
  updateDescription: (description) => { dispatch(updateDescription(description)); },
  updateCanNotSubmit: (canNotSubmit) => { dispatch(updateCanNotSubmit(canNotSubmit)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Description);
