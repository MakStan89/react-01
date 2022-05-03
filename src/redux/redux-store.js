import { applyMiddleware, combineReducers, createStore } from "redux";
import homeReducer from "./home-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
	homePage: homeReducer,
	sidebar: sidebarReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
	profilePage: profileReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;