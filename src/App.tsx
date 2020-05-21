import React from 'react';
import './App.css';

import Header from './components/header/header';
import Navbar from './components/nav/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import News from './components/news/news';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import {BrowserRouter, Route} from 'react-router-dom';
import {DialogItemType} from "./components/dialogs/dialogItem/dialogItem";
import {messagesType, ObjType} from "./redux/state";
import {friendsType} from "./components/nav/friends/Friends";

export type propsType = {
    state: {
        profilePage: {
            posts: Array<ObjType>
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>,
            messages: Array<messagesType>,
        },
        sidebar: {
            friends: Array<friendsType>
        }
    },
    addPost : (message:string) => void
}

function App(props: propsType) {

    const {state:{profilePage, dialogsPage, sidebar}, addPost} = props;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={profilePage.posts} addPost={addPost}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs data={dialogsPage}/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




