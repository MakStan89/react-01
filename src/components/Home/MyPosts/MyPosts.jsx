import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postElement = props.posts.map( el => {
		return <Post text={el.text} date={el.date} likesCount={el.likesCount} id={el.id} key={el.id} />;
	});

	return (
		<div className={s.myPosts}>
			{postElement}
		</div>
	)
};

export default MyPosts;
