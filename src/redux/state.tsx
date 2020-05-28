import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
import {v1} from "uuid";
import {friendsType} from "../components/nav/friends/Friends";
import {rerenderEntireTree} from "./render";

// Для message
export type messagesType = {
    id: string,
    message: string
}

// Для постов
export type ObjType = {
    id: string,
    message: string,
    likeCount: string
}

 export type StateType = {
    profilePage: {
        posts: Array<ObjType>
    },
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<messagesType>,
    },
    sidebar: {
        friends: Array<friendsType>
    }
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
            {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
        ]
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
        ]
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
        ]
    }
}

export const addPost = (message: string) => {
    const newPost: ObjType = {
        id: v1(),
        message,
        likeCount: "0"
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export const addMessage = (message:string) => {
    let newMess = {
        id:v1(),
        message
    }
    state.dialogsPage.messages.push(newMess);
    rerenderEntireTree(state);
}
export default state;