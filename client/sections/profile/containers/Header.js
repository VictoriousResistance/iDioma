import { connect } from 'react-redux';
import Header from '../components/Header.jsx';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Header);