import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import MessagesContainer from './components/Messages/MessagesContainer';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<Main />
				<Sidebar />
				<div className='content'>
					<Routes>
						<Route exact path='/' element={<HomeContainer />} />
						<Route exact path='/news' element={<News />} />
						<Route exact path='/messages' element={<MessagesContainer />} />
						<Route exact path='/music' element={<Music />} />
						<Route exact path='/video' element={<Video />} />
						<Route exact path='/users' element={<UsersContainer />} />
						<Route exact path='/profile/*' element={<ProfileContainer />} />
						<Route exact path='/settings' element={<Settings />} />
						<Route exact path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
