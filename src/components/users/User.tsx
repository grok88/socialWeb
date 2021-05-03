import React from 'react';
import userPhoto from '../../assets/images/green.png';
import {NavLink} from 'react-router-dom';
import {UserType} from '../../types/types';

import {Button, Card} from 'antd';

const {Meta} = Card;

export type UsersPropsType = {
    user: UserType;
    follow: (userId: string) => void;
    unfollow: (userId: string) => void;

}
const User = (props: UsersPropsType) => {

    const {user, unfollow, follow} = props;

    return <Card
        // style={{width: 200, marginBottom:'10px'}}
        cover={<NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                 alt="user-avatar" width={'100%'}/>
        </NavLink>}
    >
        <Meta title={`Name : ${user.name}`}
            // description={`Status : ${user.status ? user.status : `User doesn't have a status`}`}
        />
        <div style={{marginTop: '10px'}}>
            {user.followed
                ? <Button onClick={() => {
                    unfollow(user.id)
                }}>unfollow</Button>
                : <Button onClick={() => {
                    follow(user.id)
                }}>follow</Button>}
        </div>
    </Card>

    // <div>
    //         <div>
    //             <div>
    //                 <NavLink to={'/profile/' + user.id}>
    //                     <img src={user.photos.small !== null ? user.photos.small : userPhoto}
    //                          alt="user-avatar" width={100} height={100}/>
    //
    //                 </NavLink>
    //             </div>
    //             {user.followed
    //                 ? <button onClick={() => {
    //                     unfollow(user.id)
    //                 }}>unfollow</button>
    //                 : <button onClick={() => {
    //                     follow(user.id)
    //                 }}>follow</button>}
    //         </div>
    //         <div>
    //             <div>
    //                 <span>{user.name}</span>
    //                 <span>{user.status}</span>
    //             </div>
    //             <div>
    //                 <span>{'user.location.country'}</span>
    //                 <span>{'user.location.city'}</span>
    //             </div>
    //         </div>
    //     </div>

}

export default User;