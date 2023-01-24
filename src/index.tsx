import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 3, message: "!!!EEE", likesCount: 15},
]

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrew"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"}
]

let messages = [
    {id: 1, message: "lol"},
    {id: 2, message: "kek"},
    {id: 3, message: "yo"},
    {id: 4, message: "hi"},
    {id: 5, message: "how"},
    {id: 6, message: "psss"}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')
);