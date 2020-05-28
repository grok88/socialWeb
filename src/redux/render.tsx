import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import {addMessage, addPost, StateType} from "./state";

 export function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}