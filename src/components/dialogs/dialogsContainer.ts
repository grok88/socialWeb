import {addMessAC, changeNewMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";

let mapStateToProps = (state: AppRootState) => {
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