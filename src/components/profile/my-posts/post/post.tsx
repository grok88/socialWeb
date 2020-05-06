import React from 'react';
import style from './post.module.css';

type propsType = {
    message : string
}

const Post = (props : propsType) => {
    const {message} = props;

    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU"
                alt="user"/>
            {message}
            <span>like</span>
        </div>
    );
}

export default Post;