import React, {Suspense} from 'react';
import './App.css';
import News from './components/news/news';
import Music from "./components/music/music";
import Settings from "./components/settings/settings";

import {HashRouter, NavLink, Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import store, {AppRootState} from "./redux/redux-store";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./assets/preloader/Preloader";
//And Design
import 'antd/dist/antd.css';
import {Avatar, Breadcrumb, Col, Layout, Menu, Row} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import Header from "./components/header/header";

const {SubMenu} = Menu;
const { Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import('./components/dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));


type OwnPropsType = MapDispatchToProps & MapStatePropsType;
type PropsType = RouteComponentProps & OwnPropsType;

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
        // const location = useLocation();
        // const {pathname} = location;

        return (
            <Layout>
                {/*<Header className="header">*/}
                {/*    <div className="logo"/>*/}
                {/*    <Row>*/}
                {/*        <Col span={20}>*/}
                {/*            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                {/*                <Menu.Item key="1"><NavLink to='/users'>Users</NavLink></Menu.Item>*/}
                {/*            </Menu>*/}
                {/*        </Col>*/}
                {/*        <Col span={4}>*/}
                {/*            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Header>*/}
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                                // theme="dark"
                                // selectedKeys={[pathname]}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1"> <NavLink to='/profile'>Profile</NavLink></Menu.Item>
                                    <Menu.Item key="2"> <NavLink to='/dialogs'>Messages</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="News">
                                    <Menu.Item key="3"> <NavLink to='/news'>News</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Music">
                                    <Menu.Item key="4"> <NavLink to='/music'>Music</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<NotificationOutlined/>} title="Users">
                                    <Menu.Item key="5"> <NavLink to='/users'>Users</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
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
                                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                                    <Route path={'/login'} render={() => <Login/>}/>
                                    <Route path={'*'} render={() => <div>404 - NOT FOUND </div>}/>
                                </Switch>
                            </Suspense>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
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





