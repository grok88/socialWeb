import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootState} from "./redux-store";
import {authMe} from "./auth-reducer";

export type AppReducerTypeInitialStateType = typeof initialState;

const INITIALIZED_SUCCESS = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

export type AppReducerType = ReturnType<typeof initializedSuccess>;

export const appReducer = (state: AppReducerTypeInitialStateType = initialState, action: AppReducerType): AppReducerTypeInitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const;
}

export const initializeApp = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        let promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }
}
