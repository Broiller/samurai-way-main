import {observe} from "web-vitals/dist/modules/lib/observe";

let rerenderEntireThree = () => {
    console.log("hello")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "!!!EEE", likesCount: 15},
        ],
        newPostText: "it-kamasutra.com"

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "lol"},
            {id: 2, message: "kek"},
            {id: 3, message: "yo"},
            {id: 4, message: "hi"},
            {id: 5, message: "how"},
            {id: 6, message: "psss"}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Andrew"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Sveta"},

        ]

    },
}

window.state = state

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export const subscribe = (observer) => {
    rerenderEntireThree = observer;
}

export default state