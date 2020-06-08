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

    dispatch: (action: actionUpdateTypes) => void

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
            this._state.profilePage.newPostText = action.text as string;
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
            this._state.dialogsPage.newMessageText = action.text as string;
            this._callSubscriber(this._state);
        }

        /* // Контролтруемое добавление имени друга
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
         }*/
    }
}

//--------------ACTION CREATOR----------------------

export type actionUpdateTypes = {
    type: typeof ACTION_CREATOR.UPDATE_NEW_POST_TEXT | typeof ACTION_CREATOR.ADD_MESSAGE | typeof ACTION_CREATOR.ADD_POST | typeof ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT
    text?: string
}

// export type addPostActionCreatorType = { type: typeof ACTION_CREATOR.ADD_POST}
// export type updateNewPostTextActionCreatorType = {
//     type: typeof ACTION_CREATOR.UPDATE_NEW_POST_TEXT
//     text: string
// }
// export type addMessActionCreatorType = { type: typeof ACTION_CREATOR.ADD_MESSAGE}
//
//  type actionTypes = updateNewPostTextActionCreatorType

export const addPostActionCreator = () => {
    return {
        type: ACTION_CREATOR.ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: ACTION_CREATOR.UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export const addMessActionCreator = () => {
    return {
        type: ACTION_CREATOR.ADD_MESSAGE
    }
}

export const changeNewMessageTextActionCreator = (text: string) => {
    return {
        type: ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
}

export default store;