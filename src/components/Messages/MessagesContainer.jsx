import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Messages from './Messages';


const mapStateToProps = (state) => {
	return {
		contacts: state.messagesPage.contacts,
		chatMessages: state.messagesPage.chatMessages
	}
};

export default compose(
	connect(mapStateToProps),
	withAuthRedirect
)(Messages);