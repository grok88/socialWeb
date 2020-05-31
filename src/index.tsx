
import state, { subscribe } from './redux/state';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addFriends, addMessage, addPost, StateType, addNameToNewFriends, addUrlToNewFriends, changeNewPostText, changeNewMessageText} from "./redux/state";

export function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 changeNewPostText={changeNewPostText}
                 addPost={addPost}
                 addMessage={addMessage}
                 addFriends={addFriends}
                 addNameToNewFriends={addNameToNewFriends}
                 addUrlToNewFriends={addUrlToNewFriends}
                 changeNewMessageText={changeNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);