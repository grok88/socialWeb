
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store, {StateType} from "./redux/state";

export function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 changeNewPostText={store.changeNewPostText.bind(store)}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 addFriends={store.addFriends.bind(store)}
                 addNameToNewFriends={store.addNameToNewFriends.bind(store)}
                 addUrlToNewFriends={store.addUrlToNewFriends.bind(store)}
                 changeNewMessageText={store.changeNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);