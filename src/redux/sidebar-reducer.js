import userPhoto from "../assets/images/user.png";

let initialState = {
	friends: [
		{ id: 1, name: 'John', photo: userPhoto },
		{ id: 2, name: 'Mary', photo: userPhoto },
		{ id: 3, name: 'Dave', photo: userPhoto },
	]
};

const sidebarReducer = (state = initialState) => {

	return state;
}

export default sidebarReducer;