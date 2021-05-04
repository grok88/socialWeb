import React from 'react';
import {NavLink} from 'react-router-dom';
import {logout} from '../../redux/auth-reducer';
import userPhotos from '../../assets/images/green.png'

import {Avatar, Button, Col, Layout, Menu, Row} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {getIsAuth} from '../../redux/auth-selectors';
import {AppRootState} from '../../redux/redux-store';


type PropsType = {}
export const Header = (props: PropsType) => {
    const {Header} = Layout;

    const isAuth = useSelector(getIsAuth);
    // const login = useSelector(getLogin);
    // const authUser = useSelector(getAuthUser);

    const userPhoto = useSelector<AppRootState, any>(state => state.profilePage.profile?.photos.small);

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }


    return <Header className="header">
        <div className="logo"/>
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><NavLink to='/users'>Users</NavLink></Menu.Item>
                </Menu>
            </Col>
            {
                isAuth ? <>
                        <Col span={1}>
                            {
                                userPhoto ? <Avatar src={userPhoto}/> : <Avatar src={userPhotos}/>
                            }
                        </Col>
                        <Col span={5}>

                            <Button onClick={onLogout}>logOut</Button>
                        </Col>
                    </>
                    :
                    <Col span={6}>
                        <Button>
                            <NavLink to={'/login'}>login</NavLink>
                        </Button>
                    </Col>
            }
        </Row>
    </Header>


    // <header className={styles.header}>
    //     <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
    //     <div className={styles.loginBlock}>
    //         {

    //     props.isAuth ? <div className={styles.imgBlock}>
    //             <img
    //                 src={props.authUser ? 'https://i03.fotocdn.net/s121/f5452ede0f497c83/user_l/2769409821.jpg' : ""}
    //                 alt={'logo'}/>
    //             <button onClick={props.logout} className={styles.logout}>logOut</button>
    //         </div>
    //         : <NavLink to={'/login'}>
    //             login
    //         </NavLink>
    // }
    //     </div>
    // </header>

}

export default Header;