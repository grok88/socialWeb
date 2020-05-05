import React from 'react';
import './App.css';

import Header from "./components/header/header";
import Navbar from "./components/nav/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile />*/}
        </div>
    );
}

export default App;
