// import {DialogItemType} from "../components/dialogs/dialogItem/dialogItem";
// import {v1} from "uuid";
// import {FriendsType} from "../components/nav/friends/Friends";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import navbarReducer from "./navbar-reducer";
//
//
// //--------------ТИПИЗАЦИЯ----------------------
// // Для message
// export type MessagesType = {
//     id: string,
//     message: string
// }
//
// // Для постов
// export type ObjPostType = {
//     id: string,
//     message: string,
//     likeCount: string
// }
//
// export type StateType = {
//     profilePage: {
//         posts: Array<ObjPostType>,
//         newPostText: string
//     },
//     dialogsPage: {
//         dialogs: Array<DialogItemType>,
//         messages: Array<MessagesType>,
//         newMessageText: string
//     },
//     sidebar: {
//         friends: Array<FriendsType>
//         addFriends: FriendsType
//     }
// }
//
// export type StoreType = {
//     _state: StateType,
//     getState: () => StateType,
//
//     _callSubscriber: (_state: StateType) => void,
//     subscribe: (observer: any) => void,
//
//     dispatch: (action: actionUpdateTypes) => void
// }
//
// //--------------Константы----------------------
//
// export const ACTION_CREATOR = {
//     ADD_POST: 'ADD-POST',
//     UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
//     ADD_MESSAGE: 'ADD-MESSAGE',
//     UPDATE_NEW_MESSAGE_TEXT: 'UPDATE-NEW-MESSAGE-TEXT',
//     ADD_NEW_FRIENDS_NAME: 'ADD-NEW-FRIENDS-NAME',
//     ADD_NEW_FRIENDS_URL: 'ADD-NEW-FRIENDS-URL',
//     ADD_FRIENDS: 'ADD-FRIENDS',
// };
//
// //--------------STORE----------------------
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hello, What are you doing?', likeCount: '5'},
//                 {id: v1(), message: 'Hi, I am learning TypeScript now.', likeCount: '13'},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: v1(),
//                     name: "Alex",
//                     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
//                 },
//                 {
//                     id: v1(),
//                     name: "Gor",
//                     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"
//                 },
//                 {
//                     id: v1(),
//                     name: "Jora",
//                     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"
//                 },
//                 {
//                     id: v1(),
//                     name: "Anyfriy",
//                     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"
//                 },
//                 {
//                     id: v1(),
//                     name: "Sveta",
//                     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"
//                 },
//                 {
//                     id: v1(),
//                     name: "ergey",
//                     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"
//                 }
//             ],
//             messages: [
//                 {id: v1(), message: 'E-ho-ho'},
//                 {id: v1(), message: 'And the bottle of rum'},
//                 {id: v1(), message: 'Yes!'}
//             ],
//             newMessageText: ''
//         },
//         sidebar: {
//             friends: [
//                 {
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
//                     name: 'Jora',
//                     id: v1()
//                 },
//                 {
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9uTTJjpx3SiyINwLxuAGskswRNgZXcu8q0PmAHsodRgEtPja3&usqp=CAU',
//                     name: 'Edyardo',
//                     id: v1()
//                 },
//                 {
//                     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6yM6JujrHFOvFH9NvuV2lWnyXECBr1SWeF-I0tMdYmK942MXr&usqp=CAU',
//                     name: 'Valentinka',
//                     id: v1()
//                 }
//             ],
//             addFriends: {
//                 id: '',
//                 url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU8ZWLKMXxuUe7g8j7zCfYZ3BcxuXlxPwBmSV_Mv_Bf9kvMg6F&usqp=CAU',
//                 name: 'Grok'
//             }
//         }
//     },
//     // Заглушка для subscribe
//     _callSubscriber() {
//         console.log('State changed');
//     },
//     getState() {
//         return this._state;
//     },
//
//     // подписка на обсервер
//     subscribe(observer: any) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) { // type: ADD-POST
//         // this._state.profilePage = profileReducer(this._state.profilePage, action);
//         // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         // this._state.sidebar = navbarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// //--------------ACTION CREATOR----------------------
//
// export type actionUpdateTypes = {
//     type: typeof ACTION_CREATOR.UPDATE_NEW_POST_TEXT |
//         typeof ACTION_CREATOR.ADD_MESSAGE |
//         typeof ACTION_CREATOR.ADD_POST |
//         typeof ACTION_CREATOR.UPDATE_NEW_MESSAGE_TEXT |
//         typeof ACTION_CREATOR.ADD_FRIENDS |
//         typeof ACTION_CREATOR.ADD_NEW_FRIENDS_URL |
//         typeof ACTION_CREATOR.ADD_NEW_FRIENDS_NAME
//     text?: string
//     name?: string
//     url?: string
// }
//
// // export type ActionTypes<T> = T extends {[key: string]: infer U} ? U : never
// // export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<ActionTypes<T>>
//
//
// //  export type addPostActionCreatorType = { type: typeof ACTION_CREATOR.ADD_POST}
// //
// // export type updateNewPostTextActionCreatorType = {
// //     type: typeof ACTION_CREATOR.UPDATE_NEW_POST_TEXT
// //     text: string
// // }
// // export type addMessActionCreatorType = { type: typeof ACTION_CREATOR.ADD_MESSAGE}
// //
// //  // type actionTypes = updateNewPostTextActionCreatorType
// //   export type actionTypes = updateNewPostTextActionCreatorType | addPostActionCreatorType | addMessActionCreatorType
//
//
// export default store;