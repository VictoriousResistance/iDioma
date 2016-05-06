import { connect } from 'react-redux';
import WillLearn from '../components/WillLearn.jsx';

const mapStateToProps = (state) => {
  willLearn: state.profile.willLearn,
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(WillLearn);