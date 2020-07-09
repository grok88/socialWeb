import React from 'react';
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type mapStateToProps = {
    isAuth: boolean,
    login:string | null
}
type MapDispatchToProps = {
    setAuthUserData: (id: number, email: string, login: string) => void
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
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: StateType): mapStateToProps => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
