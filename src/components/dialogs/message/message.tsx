import React, {createElement, useState} from 'react';
import {Avatar, Comment, Tooltip} from 'antd';
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined} from '@ant-design/icons';
import userPhotos from '../../../assets/images/green.png';
import {useSelector} from 'react-redux';
import {AppRootState} from '../../../redux/redux-store';

type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    const userPhoto = useSelector<AppRootState, any>(state => state.profilePage.profile?.photos.small);

    const [likes, setLikes] = useState<number>(0);
    const [dislikes, setDislikes] = useState<number>(0);
    const [action, setAction] = useState<null | string>(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];


    return (
        //old
        // <div className={style.message}>{props.message}</div>
        <Comment
            actions={actions}
            author={<a>Alex Gor</a>}
            avatar={
                userPhoto ? <Avatar src={userPhoto}/> : <Avatar src={userPhotos}/>
            }
            content={
                <p>
                    {props.message}
                </p>
            }
        />
    );
}