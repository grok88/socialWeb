import React from 'react';
import style from './post.module.css';
import {Avatar, Card, Row} from 'antd';

const {Meta} = Card;

type propsType = {
    message: string,
    likeCount: string
}

const Post = (props: propsType) => {
    const {message, likeCount} = props;

    return (

        <Card bordered className={style.post}>
            <Row>
                <Meta avatar={<Avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU"
                    size={60}/>}/>
                <div className={style.postText}>
                    {message}
                    <span> {likeCount} - likes</span>
                </div>
            </Row>

        </Card>
    );
}

export default Post;