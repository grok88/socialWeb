import React from 'react';
import './App.css';

import Header from './components/header/header';
import Profile from './components/profile/profile';
import News from './components/news/news';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import {SidebarContainer} from './components/nav/SidebarContainer';
import UsersContainer from './components/users/UsersContainer';
import UsersTempContainer from './components/users/UsersTempContainer';

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <SidebarContainer/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/music'} component={Music}/>
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




