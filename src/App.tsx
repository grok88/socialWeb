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
import {changeNewPostText, MessagesType, ObjPostType} from "./redux/state";
import {FriendsType} from "./components/nav/friends/Friends";

export type propsType = {
    state: {
        profilePage: {
            posts: Array<ObjPostType>,
            newPostText:string
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
    addPost : () => void,
    addMessage:() => void,
    addFriends:() => void,
    addNameToNewFriends:(name:string) => void,
    addUrlToNewFriends:(url:string) => void,
    changeNewPostText:(text:string) => void,
    changeNewMessageText:(text:string) => void,
}

function App(props: propsType) {

    const {state:{profilePage, dialogsPage, sidebar}, addPost, addMessage, addFriends, addNameToNewFriends, addUrlToNewFriends, changeNewPostText,changeNewMessageText} = props;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={sidebar}
                        addFriends={addFriends}
                        addNameToNewFriends={addNameToNewFriends}
                        addUrlToNewFriends={addUrlToNewFriends}/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={profilePage} addPost={addPost} changeNewPostText={changeNewPostText}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs data={dialogsPage} addMessage={addMessage} changeNewMessageText={changeNewMessageText}/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




