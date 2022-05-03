const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, text: 'My first post', date: '01.01.2021', likesCount: 20 },
		{ id: 2, text: 'My second post', date: '02.01.2021', likesCount: 10 },
		{ id: 3, text: 'My third post', date: '03.01.2021', likesCount: 15 }
	],
	newPostText: '',
};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				text: state.newPostText,
				date: 'this time',
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		default:
			return state;
	}
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default homeReducer;