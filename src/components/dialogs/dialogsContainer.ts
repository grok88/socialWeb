import {addMessAC, changeNewMessageTextAC, DialogsReducerInitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsReducerInitialStateType
}
type MapDispatchToPropsType = {
    addMess: () => void;
    changeNewMessage: (text: string) => void;
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMess: () => {
            dispatch(addMessAC());
        },
        changeNewMessage: (text: string) => {
            dispatch(changeNewMessageTextAC(text));
        }
    }
}

const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;