import React from 'react';
import Navbar from './Navbar/Navbar';
import FriendsContainer from './Friends/FriendsContainer';
import s from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<div className={s.sidebarItems}>
				<Navbar />
				<FriendsContainer />
			</div>
		</div>
	);
};

export default Sidebar;
