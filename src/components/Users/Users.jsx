import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";


let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		
		let pages = [];
		for (let i = 1; i <= pagesCount/100; i++) {
			pages.push(i);
	};
	
	return <div>
		<div className={s.pages}>
			{pages.map(el => {
				return <span className={props.currentPage === el && s.selectedPage}
				onClick={(e) => { props.onPageChanged(el) }}>{el}</span>
		})}
		</div>
	{
		props.users.map(el => <div key={el.id}>
			<span>
				<div>
					<NavLink to={'/profile/' + el.id}>
						<img src={el.photos.small != null ? el.photos.small : userPhoto} className={s.usersPhoto} />
					</NavLink>
				</div>
				<div>
					{el.followed
						? <button disabled={props.isFollowing.includes(el.id)} onClick={() => {props.unfollow(el.id)}}>UNFOLLOW</button>
						: <button disabled={props.isFollowing.includes(el.id)} onClick={() => {props.follow(el.id)}}>FOLLOW</button>
					}
				</div>
			</span>
			<span>
				<span>
					<div>{el.name}</div>
					<div>{el.status}</div>
				</span>
				<span>
					<div>{"el.location.city"}</div>
					<div>{"el.location.country"}</div>
				</span>
			</span>
		</div>
		)
	}
	</div>
}

export default Users;