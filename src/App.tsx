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

export type propsType = {
    state: {
        profilePage: {
            posts: Array<ObjType>
        },
        dialogsPage: {
            dialogs: Array<DialogItemType>,
            messages: Array<messagesType>,
        }
    }
}

function App(props: propsType) {
    const {posts} = props.state.profilePage;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




