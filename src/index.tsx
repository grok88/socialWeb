import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from 'react-redux'

// export function rerenderEntireTree(state: StateType) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });