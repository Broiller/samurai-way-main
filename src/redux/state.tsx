let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log("hello")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export default store;
window.store= store;
