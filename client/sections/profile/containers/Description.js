import { connect } from 'react-redux';
import Description from '../components/Description.jsx';

const mapStateToProps = (state) => ({
  description: state.profile.description,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Description);