import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"
                     height='60'/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#1'>Profile</a>
                </div>
                <div>
                    <a href='#1'>Messages</a>
                </div>
                <div>
                    <a href='#1'>News</a>
                </div>
                <div>
                    <a href='#1'>Music</a>
                </div>
                <div>
                    <a href='#1'>Settings</a>
                </div>
            </nav>
            <section className='content'>
                <div>
                    <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="main-fon"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        new Posts
                    </div>
                    <div>
                        <div>
                            Post1
                        </div>
                        <div>
                            Post
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
