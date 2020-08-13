import React from 'react';
import './App.css';
import News from './components/news/news';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from './components/users/UsersContainer';
import UsersTempContainer from './components/users/UsersTempContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from "./components/header/headerContainer";
import {Navbar} from "./components/nav/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/usersTemp'} render={() => <UsersTempContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




