import style from '../dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {Avatar, Card, Row} from 'antd';

const {Meta} = Card;

export type DialogItemType = {
    name: string,
    id: string
    url: string
}

export const DialogItem = (props: DialogItemType) => {
    const {name, id, url} = props;
    return (
        <Card className={style.dialog + ' ' + style.active} bordered>
            <Row>
                <Meta avatar={<Avatar src={url} size={48}/>}/>
                <NavLink to={`/dialogs/${id}`} style={{}}>{name}</NavLink>
            </Row>
        </Card>
    );
}