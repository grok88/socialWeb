import React from 'react';
import classes from './post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU"
                alt="user"/>
            Post1
            <span>like</span>
        </div>
    );
}

export default Post;