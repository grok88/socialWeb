import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import {addFriends, addMessage, addPost, StateType, addNameToNewFriends, addUrlToNewFriends} from "./state";

 export function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 addFriends={addFriends}
                 addNameToNewFriends={addNameToNewFriends}
                 addUrlToNewFriends={addUrlToNewFriends}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}