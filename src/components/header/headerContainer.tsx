import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {authMe, AuthUserType, logout, setAuthUser, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";

type MapStateToProps = {
    isAuth: boolean;
    login: string | null;
    authUser: AuthUserType | null;
}
type MapDispatchToProps = {
    setAuthUserData: (id: number, email: string, login: string, isAuth: boolean) => void;
    setAuthUser: (authUser: AuthUserType) => void;
    authMe: () => void;
    logout: () => void;
}
type PropsType = MapStateToProps & MapDispatchToProps;

class HeaderContainer extends React.Component<PropsType> {
    // componentDidMount() {
    //     this.props.authMe();
    // }

    render() {
        return <Header {...this.props} authUser={this.props.authUser}/>
    }
}

const mapStateToProps = (state: AppRootState): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authUser: state.auth.authUser
});

export default connect<MapStateToProps, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {
    setAuthUserData,
    setAuthUser,
    authMe,
    logout
})(HeaderContainer);
