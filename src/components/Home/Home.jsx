import React from 'react';
import s from './Home.module.css';
import MyPosts from './MyPosts/MyPosts';


const Home = (props) => {
	let newPostElement = React.createRef();
	let newPost = () => {
		props.newPost();
		newPostElement.current.value = ''
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div className={s.home}>
			<h1>John Nash</h1>
			
			<h3>Add new post</h3>
			<div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
			<div><button onClick={newPost}>New post</button></div>
			<MyPosts posts={props.posts} />
		</div>
	);
};

export default Home;
