import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
import {v1} from "uuid";
import {FriendsType} from "../components/nav/friends/Friends";


//--------------ТИПИЗАЦИЯ----------------------
// Для message
export type MessagesType = {
    id: string,
    message: string
}

// Для постов
export type ObjPostType = {
    id: string,
    message: string,
    likeCount: string
}

export type StateType = {
    profilePage: {
        posts: Array<ObjPostType>,
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>,
        newMessageText: string
    },
    sidebar: {
        friends: Array<FriendsType>
        addFriends: FriendsType
    }
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,

    _callSubscriber: (_state: StateType) => void,
    subscribe: (observer: any) => void,

    dispatch: (action: any) => void

    // addPost: () => void,
    // changeNewPostText: (text: string) => void,

    // addMessage: () => void,
    // changeNewMessageText: (text: string) => void,
    // addNameToNewFriends: (name: string) => void,
    // addUrlToNewFriends: (url: string) => void,
    // addFriends: () => void,

}

//--------------Константы----------------------
const ACTION_CREATOR = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    ADD_MESSAGE: 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
};

//--------------STORE----------------------
let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
                {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: v1(),
                    name: "Alex",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
                },
                {
                    id: v1(),
                    name: "Gor",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"
                },
                {
                    id: v1(),
                    name: "Jora",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"
                },
                {
                    id: v1(),
                    name: "Anyfriy",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"
                },
                {
                    id: v1(),
                    name: "Sveta",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"
                },
                {
                    id: v1(),
                    name: "ergey",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"
                }
            ],
            messages: [
                {id: v1(), message: 'E-ho-ho'},
                {id: v1(), message: 'And the bottle of rum'},
                {id: v1(), message: 'Yes!'}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
                    name: 'Jora',
                    id: v1()
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9uTTJjpx3SiyINwLxuAGskswRNgZXcu8q0PmAHsodRgEtPja3&usqp=CAU',
                    name: 'Edyardo',
                    id: v1()
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr&usqp=CAU',
                    name: 'Valentinka',
                    id: v1()
                }
            ],
            addFriends: {
                id: '',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
                name: 'Grok'
            }
        }
    },
    // Заглушка для subscribe
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },

    // подписка на обсервер
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // type: ADD-POST

        //Добавление поста
        if (action.type === ACTION_CREATOR.ADD_POST) {
            const newPost: ObjPostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likeCount: "0"
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        // контролируемое добавление поста
        else if (action.type === ACTION_CREATOR.UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }

        // Добавление сообщения в стате
        else if (action.type === ACTION_CREATOR.ADD_MESSAGE) {
            let newMess = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMess);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        // Контролтруемое добавление сообщения
        else if (action.type === ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text;
            this._callSubscriber(this._state);
        }

        // Контролтруемое добавление имени друга
        else if (action.type === "ADD-NEW-FRIENDS-NAME") {
            this._state.sidebar.addFriends.name = action.name;
        }
        // Контролтруемое добавление URL друга
        else if (action.type === "ADD-NEW-FRIENDS-URL") {
            if (action.url.trim().length !== 0) {
                this._state.sidebar.addFriends.url = action.url;
            }
        }
        // Добавление друзей блок
        else if (action.type === "ADD-FRIENDS") {
            this._state.sidebar.addFriends.id = v1();
            this._state.sidebar.friends.push({...this._state.sidebar.addFriends});
            this._callSubscriber(this._state);
        }
    }
}

//--------------ACTION CREATOR----------------------
export const addPostActionCreator = () => {

    return {
        type: ACTION_CREATOR.ADD_POST
    }
}
export const updateNewPostTextActionCreator = (value: HTMLTextAreaElement) => {

    return {
        type: ACTION_CREATOR.UPDATE_NEW_POST_TEXT,
        text: value.value
    }
}

export const addMessActionCreator = () => {
    return {
        type: ACTION_CREATOR.ADD_MESSAGE
    }
}

export const changeNewMessageTextActionCreator = (value: string) => {
    return {
        type: ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT,
        text: value
    }
}


/*
// Для message
export type MessagesType = {
    id: string,
    message: string
}

// Для постов
export type ObjPostType = {
    id: string,
    message: string,
    likeCount: string
}

export type StateType = {
    profilePage: {
        posts: Array<ObjPostType>,
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessagesType>,
        newMessageText: string
    },
    sidebar: {
        friends: Array<FriendsType>
        addFriends: FriendsType
    }
}

// Заглушка для subscribe
let rerenderEntireTree = (state: StateType) => {
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
            {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {
                id: v1(),
                name: "Alex",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
            },
            {
                id: v1(),
                name: "Gor",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"
            },
            {
                id: v1(),
                name: "Jora",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"
            },
            {
                id: v1(),
                name: "Anyfriy",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"
            },
            {
                id: v1(),
                name: "Sveta",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"
            },
            {
                id: v1(),
                name: "ergey",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"
            }
        ],
        messages: [
            {id: v1(), message: 'E-ho-ho'},
            {id: v1(), message: 'And the bottle of rum'},
            {id: v1(), message: 'Yes!'}
        ],
        newMessageText: ''
    },
    sidebar: {
        friends: [
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
                name: 'Jora',
                id: v1()
            },
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9uTTJjpx3SiyINwLxuAGskswRNgZXcu8q0PmAHsodRgEtPja3&usqp=CAU',
                name: 'Edyardo',
                id: v1()
            },
            {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr&usqp=CAU',
                name: 'Valentinka',
                id: v1()
            }
        ],
        addFriends: {
            id: '',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
            name: 'Grok'
        }
    },
}

// Чтоб видеть state в консоле
// window.state = state;

// Добавление друзей блок
export const addNameToNewFriends = (name: string) => {
    state.sidebar.addFriends.name = name;
}
export const addUrlToNewFriends = (url: string) => {
    if (url.trim().length !== 0) {
        state.sidebar.addFriends.url = url;
    }
}
export const addFriends = () => {
    state.sidebar.addFriends.id = v1();
    state.sidebar.friends.push({...state.sidebar.addFriends});
    rerenderEntireTree(state);
}

//Добавление поста
export const addPost = () => {
    const newPost: ObjPostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likeCount: "0"
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
// контролируемое добавление поста
export const changeNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}


// Добавление сообщения в стате
export const addMessage = () => {
    let newMess = {
        id: v1(),
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMess);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
// Контролтруемое добавление сообщения
export const changeNewMessageText = (text: string) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state);
}

// подписка на обсервер
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}*/


export default store;