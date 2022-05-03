import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Contact.module.css';

const Contact = (props) => {

	let path = '/messages/' + props.id;

	return (
		<div className={s.contacts}>
			<NavLink to={path} style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
				<div className={s.contactsBlock}>
					<div className={s.contactsBlockPhoto}>
						<img src={props.photo} alt={props.name} />
					</div>
					<div className={s.contactsBlockName}>
						{props.name}
					</div>
				</div>
			</NavLink >
		</div >
	)
}

export default Contact;