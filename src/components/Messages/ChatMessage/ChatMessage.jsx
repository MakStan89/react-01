import React from 'react';
import s from './ChatMessage.module.css';

const ChatMessage = (props) => {
	return (
		<div className={s.chatMessages}>
			{props.author}: {props.message}
		</div>
	)
}

export default ChatMessage;