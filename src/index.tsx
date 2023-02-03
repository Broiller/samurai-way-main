import React from 'react';
import ReactDOM from "react-dom";

import state, {addPost, subscribe, updateNewPostText} from './redux/state'

import {BrowserRouter} from "react-router-dom";
import App from "./App";



let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireThree(state);
subscribe(rerenderEntireThree);