import React from 'react';
import s from './ChatMessageNew.module.css';

const ChatMessageNew = (props) => {
	let newMessageElement = React.createRef();
	let newMessage = () => {
		props.newMessage();
		newMessageElement.current.value = ''
	};
	let onMessageChange = () => {
		let message = newMessageElement.current.value;
		props.updateNewMessageText(message);
	};
	return (
		<div className={s.chatMessageNew}>
			<div><textarea onChange={onMessageChange} value={props.newMessageText} ref={newMessageElement}></textarea></div>
			<div><button onClick={newMessage}>Send</button></div>
		</div>
	)
}

export default ChatMessageNew;