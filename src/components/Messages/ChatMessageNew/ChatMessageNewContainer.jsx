import { connect } from 'react-redux';
import {addMessageCreator, updateNewMessageTextCreator} from '../../../redux/messages-reducer'
import ChatMessageNew from './ChatMessageNew';

/*const ChatMessageNewContainer = (props) => {
	let newMessage = () => {
		props.store.dispatch(addMessageCreator());
	};
	let onMessageChange = (message) => {
		let action = updateNewMessageTextCreator(message);
		props.store.dispatch(action)
	};
	return <ChatMessageNew updateNewMessageText={onMessageChange} newMessage={newMessage} />
};*/

const mapStateToProps = (state) => {
	return {
		newMessageText: state.messagesPage.newMessageText
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (message) => {
			let action = updateNewMessageTextCreator(message);
			dispatch(action)
		},
		newMessage: () => {
			dispatch(addMessageCreator())
		} 
	};
}

const ChatMessageNewContainer = connect(mapStateToProps, mapDispatchToProps)(ChatMessageNew);

export default ChatMessageNewContainer;