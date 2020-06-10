import React, {RefObject, ChangeEvent} from "react";
import style from './Friends.module.css';
import Friend from "./friend/Friend";
import {actionUpdateTypes} from "../../../redux/state";
import {
    addFriendsActionCreator,
    addNameToNewFriendsActionCreator,
    addUrlToNewFriendsActionCreator
} from "../../../redux/navbar-reducer";

export type FriendsType = {
    url: string,
    name: string,
    id: string
}


type PropsType = {
    state: Array<FriendsType>,
    dispatch: (action: actionUpdateTypes) => void,
    // addFriends: () => void,
    // addNameToNewFriends: (name: string) => void,
    // addUrlToNewFriends: (url: string) => void,
}

const Friends = (props: PropsType) => {
    const {state, dispatch} = props;

    let inputNameElem = React.createRef<HTMLInputElement>();
    let inputUrlElem: RefObject<HTMLInputElement> = React.createRef();

    const onAddNameToNewFriends = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim()) {

            dispatch(addNameToNewFriendsActionCreator(e.currentTarget.value));
            // addNameToNewFriends(e.currentTarget.value);
        }
    }
    const onAddUrlToNewFriends = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        dispatch(addUrlToNewFriendsActionCreator(e.currentTarget.value));
        //  addUrlToNewFriends(e.currentTarget.value);
    }

    let friendsElement = state.map(({url, name, id}) => <Friend url={url} name={name} id={id} key={id}/>);

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
                    dispatch(addFriendsActionCreator());
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