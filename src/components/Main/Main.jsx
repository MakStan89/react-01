import React from 'react';
import s from './Main.module.css';

const Main = () => {
	return <div className={s.main}>
		<div className={s.mainPhoto}>
			<img src='https://cdn1.flamp.ru/d58b294425219f7a85fea9dae4750d7f.jpg' alt='This is me' />
		</div>
	</div>
}

export default Main;