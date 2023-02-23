import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";


let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
});