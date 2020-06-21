
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";

type ObjType = {
    id: string,
    message: string,
    likeCount: string
}
type PropsType = {
    // posts: {
    //     posts: Array<ObjType>,
    //     newPostText: string,
    // },
    // dispatch: (action: any) => void,
    // addPost: () => void,
    // changeNewPostText: (text: string) => void
    // store: any
}


// const MyPostsContainer = (props: PropsType) => {
//     // const {store} = props;
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     const addPostHandler = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     const newPostChange = (value: string) => {
//                         store.dispatch(updateNewPostTextActionCreator(value));
//                     }
//                     return <MyPosts posts={state.profilePage} changeNewPostText={newPostChange}
//                                     addPost={addPostHandler}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state:StateType) => {
    return {
        profilePage : state.profilePage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost:() => {
            dispatch(addPostAC());
        },
        changeNewPostText:(value:string) => {
            dispatch(updateNewPostTextAC(value));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;