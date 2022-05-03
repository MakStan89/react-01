import React from 'react';
import s from './Messages.module.css';
import Contact from './Contact/Contact';
import ChatMessage from './ChatMessage/ChatMessage';
import ChatMessageNewContainer from './ChatMessageNew/ChatMessageNewContainer';


const Messages = (props) => {

	let contactElement = props.contacts.map(el => <Contact name={el.name} photo={el.photo} id={el.id} key={el.id} />)
	let chatMessageElement = props.chatMessages.map(el => <ChatMessage message={el.message} author={el.author} id={el.id} key={el.id} />)

	return (
		<div className={s.messages}>
			<div className={s.contact}>
				{contactElement}
			</div>
			<div className={s.chat}>
				{chatMessageElement}
			</div >
			<div className={s.newMessage}>
				<ChatMessageNewContainer />
			</div>
		</div >
	)
}

export default Messages;