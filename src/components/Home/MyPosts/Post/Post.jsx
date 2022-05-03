import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<img src='https://cdn1.flamp.ru/d58b294425219f7a85fea9dae4750d7f.jpg' alt='This is me' />
			<div className={s.postText}>{props.text}</div>
			<div className={s.postDate}>{props.date}</div>
			<div className={s.postLikes}>{props.likesCount} Likes</div>
		</div>
	);
};

export default Post;
