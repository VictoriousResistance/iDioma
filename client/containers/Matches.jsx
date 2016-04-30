import { connect } from 'react-redux';
import Matches from '../components/Matches.jsx';


const mapStateToProps = (state) => (
  {
    matches: state.matches,
  }
);

const mapDispatchToProps = (dispatch) = (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
