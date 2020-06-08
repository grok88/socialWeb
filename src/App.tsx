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
import {MessagesType, ObjPostType, actionUpdateTypes} from "./redux/state";
import {FriendsType} from "./components/nav/friends/Friends";

export type propsType = {
    state: {
        profilePage: {
            posts: Array<ObjPostType>,
            newPostText: string
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>,
            messages: Array<MessagesType>,
            newMessageText: string
        },
        sidebar: {
            friends: Array<FriendsType>
        }
    },
    dispatch: (action:actionUpdateTypes) => void
}

function App(props: propsType) {

    const {state: {profilePage, dialogsPage, sidebar}, dispatch} = props;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={sidebar}
                        dispatch={dispatch}/>
                {/*// addFriends={addFriends}*/}
                {/*// addNameToNewFriends={addNameToNewFriends}*/}
                {/*// addUrlToNewFriends={addUrlToNewFriends}/>*/}
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={profilePage} dispatch={dispatch}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs data={dialogsPage} dispatch={dispatch}/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




