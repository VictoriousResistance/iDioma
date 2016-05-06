import { connect } from 'react-redux';
import WillLearn from '../components/WillLearn.jsx';
import { addLearn, removeLearn } from '../actions/index.js';

const mapStateToProps = (state) => ({
  willLearn: state.profile.willLearn,
});

const mapDispatchToProps = (dispatch) => ({
  onAddLearnClick: (language) => { dispatch(addLearn(language)); },
  onRemoveLearnClick: (language) => { dispatch(removeLearn(language)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(WillLearn);