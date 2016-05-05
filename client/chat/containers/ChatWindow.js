import { connect } from 'react-redux';
import ChatWindow from '../components/ChatWindow.jsx';


const mapStateToProps = (state) => (
  {
    conversations: state.conversations,
    messages: state.activeRoomMsgs,
  }
);

const mapDispatchToProps = (dispatch) => (
  {

  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
