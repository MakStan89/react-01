import Home from './Home';
import { addPostCreator, updateNewPostTextCreator } from '../../redux/home-reducer';
import { connect } from 'react-redux';

/*const HomeContainer = (props) => {
	let state = props.store.getState();
	let newPost = () => {
		props.store.dispatch(addPostCreator());
	};
	let onPostChange = (text) => {
		let action = updateNewPostTextCreator(text);
		props.store.dispatch(action);
	};
	return <Home updateNewPostText={onPostChange} newPost={newPost} posts={state.homePage.posts} newPostText={state.homePage.newPostText} />
}*/

const mapStateToProps = (state) => {
	return {
		posts: state.homePage.posts,
		newPostText: state.homePage.newPostText,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextCreator(text);
			dispatch(action);
		},
		newPost: () => {
			dispatch(addPostCreator());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
