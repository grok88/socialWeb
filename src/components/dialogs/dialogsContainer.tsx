import {addMessActionCreator, changeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

export type DialogsContainerPropsType = {
    //store: any
}

// const DialogsContainer = (props: DialogsContainerPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let data = store.getState().dialogsPage;
//                     // Добавление сообщения в state
//                     const addMess = () => {
//                         store.dispatch(addMessActionCreator());
//                     }
//                     // Контролируемй текстареа
//                     const onChangeNewMessageText = (text: string) => {
//                         store.dispatch(changeNewMessageTextActionCreator(text));
//                     }
//
//                     return <Dialogs data={data} addMess={addMess} changeNewMessage={onChangeNewMessageText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMess: () => {
            dispatch(addMessActionCreator());
            console.log(1)
        },
        changeNewMessage: (text: string) => {
            dispatch(changeNewMessageTextActionCreator(text));
            console.log(2)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;