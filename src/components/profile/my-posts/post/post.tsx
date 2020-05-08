import React from 'react';
import style from './post.module.css';

type propsType = {
    message : string,
    likeCount : string
}

const Post = (props : propsType) => {
    const {message, likeCount} = props;

    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU"
                alt="user"/>
            {message}
            <span>{likeCount} - like</span>
        </div>
    );
}

export default Post;