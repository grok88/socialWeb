import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileReducerInitialStateType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";

export type ProfileContainerState = {
    profile:ProfileReducerInitialStateType
}

export type ProfileContainerProps = {
    setUserProfile: (profile: any) => void,
    profile:any
}

class ProfileContainer extends React.Component<ProfileContainerProps, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    }

    render() {
        return (
            <Profile  {...this.props} profile={this.props.profile} />
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    profile:state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);