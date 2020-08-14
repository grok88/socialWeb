import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileInfoType} from "./profileInfo/profileInfo";

// export type ProfileContainerState = {
//     profile:ProfileReducerInitialStateType
// }
//
// export type ProfileContainerProps = {
//     setUserProfile: (profile: any) => void,
//     profile:any
// }

type PathParamsType = {
    userId: string,
}
type MapStatePropsType = {
    profile: ProfileInfoType | null
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileInfoType) => void,
}
type OwnPropsType = MapStatePropsType & MapDispatchToProps;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    }

    render() {
        return (
            <Profile  {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);