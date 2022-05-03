import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

	let friendElement = props.friends.map(el => <Friend name={el.name} photo={el.photo} id={el.id} key={el.id} />);

	return (
		<div className={s.friends}>
			<div className={s.friendsTitle}>Friends</div>
			<div className={s.friendsItem}>
				{friendElement}
			</div>
		</div>
	);
};

export default Friends;
