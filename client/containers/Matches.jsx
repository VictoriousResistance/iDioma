import { connect } from 'react-redux';
import Persons from '../components/Persons.jsx';


const mapStateToProps = (state) => (
  {
    persons: state.matches,
  }
);

const Matches = connect(mapStateToProps)(Persons);

export default Matches;

