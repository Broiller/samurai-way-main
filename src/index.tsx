import React from 'react';
import ReactDOM from "react-dom";
import state from './redux/state'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";



let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(store);
store.subscribe(rerenderEntireThree);