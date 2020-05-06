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



function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




