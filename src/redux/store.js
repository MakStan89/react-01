import homeReducer from "./home-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import userPhoto from "../assets/images/user.png";

let store = {
	state: {
		homePage: {
			posts: [
				{ id: 1, text: 'My first post', date: '01.01.2021', likesCount: 20 },
				{ id: 2, text: 'My second post', date: '02.01.2021', likesCount: 10 },
				{ id: 3, text: 'My third post', date: '03.01.2021', likesCount: 15 }
			],
			newPostText: ''
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'John', photo: userPhoto },
				{ id: 2, name: 'Mary', photo: userPhoto },
				{ id: 3, name: 'Dave', photo: userPhoto },
			]
		},
		messagesPage: {
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
		}
	},
	_renderingAll() {
		console.log('');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._renderingAll = observer;
	},

	dispatch(action) {

		this._state.homePage = homeReducer(this._state.homePage, action);
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._renderingAll(this._state);
	}
}


export default store;
window.store = store;