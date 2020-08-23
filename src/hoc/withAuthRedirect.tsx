import React from "react";
import {Redirect} from "react-router-dom";
import {AppRootState} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateForRedirectPropsType = {
    isAuth: boolean;
}
const mapStateForRedirect = (state: AppRootState): MapStateForRedirectPropsType => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    let connectedRedirectComponent = connect<MapStateForRedirectPropsType, {}, {}, AppRootState>(mapStateForRedirect)(RedirectComponent);
    return connectedRedirectComponent;
}