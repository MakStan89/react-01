import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={s.navbar}>
			<div className={s.item}>
				<NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Home
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/profile' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/messages' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Message
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/users' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Users
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/video' style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Video
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to="/settings" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
					Settings
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
