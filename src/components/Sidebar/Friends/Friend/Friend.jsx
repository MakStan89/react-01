import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={s.friend}>
			<div className={s.friendPhoto}><img src={props.photo} alt='My friend' /></div>
			<div className={s.friendName}>{props.name}</div>
		</div>
	);
};

export default Friend;
