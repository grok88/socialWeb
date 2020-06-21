import React from "react";
import style from './Friend.module.css';

type PropsType = {
    url: string,
    name: string,
    id: string
}

const Friend = (props: PropsType) => {
    const {url, name} = props;
    return (
        <div className={style.friend}>
            <img
                src={url}
                alt={`friend_${name}`} width={50} height={50}/>
            <p>{name}</p>
        </div>
    );
}

export default Friend;