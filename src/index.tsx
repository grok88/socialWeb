import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import {StateType} from "./redux/state";
import StoreContext from "./StoreContext";

export function rerenderEntireTree(state: StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App
                    // state={state}
                    // store={store}
                    //  dispatch={store.dispatch.bind(store)}
                />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});