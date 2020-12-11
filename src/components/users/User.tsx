import React from "react";
import userPhoto from '../../assets/images/green.png';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {Avatar} from "antd";
import {UserOutlined} from '@ant-design/icons';


export type UsersPropsType = {
    user: any;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;

}
const User = (props: UsersPropsType) => {

    // const userPhoto = useSelector<AppRootState,any>(state => state.profilePage.profile?.photos.small);

    const {user, unfollow, follow} = props;
    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             alt="user-avatar" width={100} height={100}/>
                        {/*userPhoto ?  <Avatar src={userPhoto} /> :  <Avatar style={{backgroundColor: '#87d068'}} icon={userPhoto}/>*/}
                    </NavLink>
                </div>
                {user.followed
                    ? <button onClick={() => {
                        unfollow(user.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        follow(user.id)
                    }}>follow</button>}
            </div>
            <div>
                <div>
                    <span>{user.name}</span>
                    <span>{user.status}</span>
                </div>
                <div>
                    <span>{'user.location.country'}</span>
                    <span>{'user.location.city'}</span>
                </div>
            </div>
        </div>
    );
}

export default User;