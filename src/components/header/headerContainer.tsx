import React from 'react';
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {AuthUserType, setAuthUser, setAuthUserData} from "../../redux/auth-reducer";

type mapStateToProps = {
    isAuth: boolean,
    login: string | null
    authUser: AuthUserType | null
}
type MapDispatchToProps = {
    setAuthUserData: (id: number, email: string, login: string) => void
    setAuthUser: (authUser: AuthUserType) => void
}
type PropsType = mapStateToProps & MapDispatchToProps;

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(res => {
                                this.props.setAuthUser(res.data);
                            }
                        )
                }
            });
    }

    render() {
        return (
            <Header {...this.props} authUser={this.props.authUser}/>
        );
    }
}

const mapStateToProps = (state: StateType): mapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authUser: state.auth.authUser
});

export default connect(mapStateToProps, {setAuthUserData, setAuthUser})(HeaderContainer);
