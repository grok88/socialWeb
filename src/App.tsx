import React from 'react';
import './App.css';
import News from './components/news/news';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from "./components/header/headerContainer";
import {Navbar} from "./components/nav/Navbar";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {AppRootState} from "./redux/redux-store";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./assets/preloader/Preloader";

type PropsType = MapDispatchToProps & MapStatePropsType;

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
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
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

type MapDispatchToProps = {
    initializeApp: () => void;
}
type MapStatePropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {
            initializeApp
        }
    ))(App);






