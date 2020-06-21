import React from 'react';
import {Navbar} from "./Navbar";
import {FriendsType} from "./friends/Friends";

type PropsType = {
    sidebar: {
        friends: Array<FriendsType>
        addFriends: FriendsType
    },
    addFriends: () => void,
    addNameToNewFriends: (value: string) => void,
    addUrlToNewFriends: (value: string) => void
}

const Sidebar = (props: PropsType) => {
    const {sidebar, addFriends, addNameToNewFriends, addUrlToNewFriends} = props;
    return (
        <div className={'sidebar'}>
            <Navbar sidebar={sidebar} addFriends={addFriends} addNameToNewFriends={addNameToNewFriends}
                    addUrlToNewFriends={addUrlToNewFriends}/>
        </div>
    )
}
export default Sidebar;

