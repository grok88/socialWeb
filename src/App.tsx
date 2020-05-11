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
import {messagesType, ObjType} from "./index";

export type propsType = {
    dialogs: Array<DialogItemType>,
    messages: Array<messagesType>,
    posts: Array<ObjType>
}

function App(props: propsType) {
    const {dialogs, messages, posts} = props;
    console.log( posts)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




