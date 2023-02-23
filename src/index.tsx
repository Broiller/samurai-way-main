import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";


let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
});