import React from "react";
import style from './Friends.module.css';
import Friend from "./friend/Friend";

export type friendsType = {
    url: string,
    name: string,
    id: string
}

type PropsType = {
    state: Array<friendsType>
}

const Friends = (props: PropsType) => {
    const {state} = props;

    let friendsElement = state.map(({url, name, id}) => <Friend url={url} name={name} id={id} key={id}/>);

    return (
        <div className={style.friendsBlock}>
            <h2>Friends</h2>
            <div className={style.friends}>
                {friendsElement}
            </div>
            <div>Add friends</div>
        </div>
    );
}

export default Friends;