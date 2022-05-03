import userPhoto from "../assets/images/user.png";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	contacts: [
		{ id: 1, name: 'John', photo: userPhoto },
		{ id: 2, name: 'Mary', photo: userPhoto },
		{ id: 3, name: 'Dave', photo: userPhoto },
		{ id: 4, name: 'Emmy', photo: userPhoto },
		{ id: 5, name: 'Steven', photo: userPhoto }
	],
	chatMessages: [
		{ id: 1, message: 'Hello', author: "John", date: '12:30' },
		{ id: 2, message: 'Hi!', author: "Me", date: '12:31' },
		{ id: 3, message: 'How are you?', author: "John", date: '12:32' },
		{ id: 4, message: 'I\'am fine. Thanks!', author: "Me", date: '12:33' }
	],
	newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText,
				author: 'Me',
				date: 'this time',
			};
			return {
				...state,
				chatMessages: [...state.chatMessages, newMessage],
				newMessageText: ''
			};
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newMessage
			};
		default:
			return state;
	}
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message });
export default messagesReducer;