import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, StateType} from "./redux/state";

 export function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}