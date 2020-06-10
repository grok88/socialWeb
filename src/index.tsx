
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import { StateType } from "./redux/state";

export function rerenderEntireTree(state:StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});