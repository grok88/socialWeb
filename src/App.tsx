import React, {Suspense} from 'react';
import './App.css';
import News from './components/news/news';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
// import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from './components/users/UsersContainer';
// import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from "./components/header/headerContainer";
import {Navbar} from "./components/nav/Navbar";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import store, {AppRootState} from "./redux/redux-store";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./assets/preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));

type PropsType = MapDispatchToProps & MapStatePropsType;

class App extends React.Component<PropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: any) => {
        // alert(promiseRejectionEvent.reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path={'/'}><Redirect to={'/profile'}/></Route>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/music'} render={() => <Music/>}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/settings'} component={Settings}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'*'} render={() => <div>404 - NOT FOUND </div>}/>
                        </Switch>
                    </Suspense>
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

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {
            initializeApp
        }
    ))(App);

const SamuraiApp = () => {
    return <Provider store={store}>
        <BrowserRouter
            // basename={process.env.PUBLIC_URL}
        >
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default SamuraiApp;





