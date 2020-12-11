import {SWActionType, ThunkType} from "./users-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootState, InferActionsType} from "./redux-store";
import {authMe} from "./auth-reducer";

export type AppReducerTypeInitialStateType = typeof initialState;

const INITIALIZED_SUCCESS = 'APP/SET_INITIALIZED';

let initialState = {
    initialized: false
}


export type AppReducerType = InferActionsType<typeof actions>;

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

//old
// export const initializedSuccess = () => {
//     return {
//         type: INITIALIZED_SUCCESS,
//     } as const;
// }

// export type AppReducerType = ReturnType<typeof initializedSuccess>;

const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS,} as const)
}


export const initializeApp = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppRootState, unknown, SWActionType>) => {
        let promise = dispatch(authMe());
        Promise.all([promise])
            .then(() => {
                dispatch(actions.initializedSuccess());
            }).catch(() => {
            dispatch(actions.initializedSuccess());
        })
    }
}
