import React, {ChangeEvent, RefObject} from "react";
import style from './Friends.module.css';
import Friend from "./friend/Friend";

export type FriendsType = {
    url: string,
    name: string,
    id: string
}

type PropsType = {
    // sidebar: Array<FriendsType>,
    sidebar: {
        friends: Array<FriendsType>
        addFriends: FriendsType
    }
    addFriends: () => void,
    addNameToNewFriends: (name: string) => void,
    addUrlToNewFriends: (url: string) => void,
}

const Friends = (props: PropsType) => {
    const {sidebar, addFriends, addNameToNewFriends, addUrlToNewFriends} = props;

    let inputNameElem = React.createRef<HTMLInputElement>();
    let inputUrlElem: RefObject<HTMLInputElement> = React.createRef();

    const onAddNameToNewFriends = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim()) {
            let value = e.currentTarget.value;
            addNameToNewFriends(value);
        }
    }
    const onAddUrlToNewFriends = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        addUrlToNewFriends(value);
    }

    let friendsElement = sidebar.friends.map(({url, name, id}) => <Friend url={url} name={name} id={id} key={id}/>);

    return (
        <div className={style.friendsBlock}>
            <h2>Friends</h2>
            <div className={style.friends}>
                {friendsElement}
            </div>
            <div>Add friends</div>
            <div>
                <label> Name:<input type="text" onChange={onAddNameToNewFriends} ref={inputNameElem}/></label>
            </div>
            <div>
                <label> Url:<input type="text" onChange={onAddUrlToNewFriends} ref={inputUrlElem}/></label>
            </div>
            <button onClick={() => {
                if (inputNameElem.current && inputNameElem.current.value.trim()) {
                    addFriends();
                    if (inputNameElem.current && inputUrlElem.current) {
                        inputNameElem.current.value = '';
                        inputUrlElem.current.value = '';
                    }
                }
            }}>Add friend
            </button>
        </div>
    );
}

export default Friends;