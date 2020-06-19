import {addMessAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMess: () => {
            dispatch(addMessAC());
        },
        changeNewMessage: (text: string) => {
            dispatch(changeNewMessageTextAC(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;