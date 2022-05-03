import React from 'react';
import Preloader from './../common/Preloader/Preloader';
import s from './Profile.module.css';
import MyStatus from './MyStatus/MyStatus';


const Profile = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}

		return (
			<div>
				<h1>User name</h1>
				<h3>User location</h3>
				<MyStatus status={props.status} updateStatus={props.updateStatus}/>
				<div>
					<img src={props.profile.photos.large} />
				</div>
				<div>discription</div>
			</div>
	)
}

export default Profile;
