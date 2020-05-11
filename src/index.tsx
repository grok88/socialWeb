import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogItemType} from "./components/dialogs/dialogItem/dialogItem";
import {v1} from "uuid";

// Для диалогов
const dialogs: Array<DialogItemType> = [
    {id: v1(), name: "Alex"},
    {id: v1(), name: "Gor"},
    {id: v1(), name: "Jora"},
    {id: v1(), name: "Anyfriy"},
    {id: v1(), name: "Sveta"},
    {id: v1(), name: "ergey"}
];

export type messagesType = {
    id: string,
    message: string
}
// Для сooбщений
const messages: Array<messagesType> = [
    {id: v1(), message: 'E-ho-ho'},
    {id: v1(), message: 'And the bottle of rum'},
    {id: v1(), message: 'Yes!'}
];

// Для постов
export type ObjType = {
    id: string,
    message: string,
    likeCount: string
}

const posts: Array<ObjType> = [
    {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
    {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
];

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);
