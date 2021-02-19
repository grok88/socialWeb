import React, {Suspense} from 'react';
import './App.css';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';

import {HashRouter, NavLink, Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import {UsersPage} from './components/users/UsersContainer';
import Login from './components/login/Login';
import {connect, Provider} from 'react-redux';
import store, {AppRootState} from './redux/redux-store';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './assets/preloader/Preloader';
//And Design
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import Header from './components/header/header';

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import('./components/dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));


type OwnPropsType = MapDispatchToProps & MapStatePropsType;
type PropsType = RouteComponentProps & OwnPropsType;

class App extends React.Component<PropsType> {

    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert(e.reason);
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
        const {match, location, history} = this.props


        return (
            <Layout>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            {/*<FriendsContainer />*/}
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                                // theme="dark"
                                selectedKeys={[location.pathname]}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="/profile"> <NavLink to='/profile'>Profile</NavLink></Menu.Item>
                                    <Menu.Item key="/dialogs"> <NavLink to='/dialogs'>Messages</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="News">
                                    <Menu.Item key="/news"> <NavLink to='/news'>News</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Music">
                                    <Menu.Item key="/music"> <NavLink to='/music'>Music</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<NotificationOutlined/>} title="Users">
                                    <Menu.Item key="/users"> <NavLink to='/users'>Users</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
                            {/*<FriendsContainer />*/}
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Suspense fallback={<Preloader/>}>
                                <Switch>
                                    <Route exact path={'/'}><Redirect to={'/profile'}/></Route>
                                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                                    <Route path={'/music'} render={() => <Music/>}/>
                                    <Route path={'/news'} component={News}/>
                                    <Route path={'/settings'} component={Settings}/>
                                    <Route path={'/users'} render={() => <UsersPage/>}/>
                                    <Route path={'/login'} render={() => <Login/>}/>
                                    <Route path={'*'} render={() => <div>404 - NOT FOUND </div>}/>
                                </Switch>
                            </Suspense>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}> Social network ©2020</Footer>
            </Layout>
            //old
            // <div className='app-wrapper'>
            //     <HeaderContainer/>
            //     <Navbar/>
            //     <div className='app-wrapper-content'>
            //         <Suspense fallback={<Preloader/>}>
            //             <Switch>
            //                 <Route exact path={'/'}><Redirect to={'/profile'}/></Route>
            //                 <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            //                 <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            //                 <Route path={'/music'} render={() => <Music/>}/>
            //                 <Route path={'/news'} component={News}/>
            //                 <Route path={'/settings'} component={Settings}/>
            //                 <Route path={'/users'} render={() => <UsersContainer/>}/>
            //                 <Route path={'/login'} render={() => <Login/>}/>
            //                 <Route path={'*'} render={() => <div>404 - NOT FOUND </div>}/>
            //             </Switch>
            //         </Suspense>
            //     </div>
            // </div>
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
        <HashRouter
            // basename={process.env.PUBLIC_URL}
        >
            <AppContainer/>
        </HashRouter>
    </Provider>
}

export default SamuraiApp;





