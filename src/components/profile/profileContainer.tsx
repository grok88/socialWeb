import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileInfoType} from "./profileInfo/profileInfo";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// export type ProfileContainerState = {
//     profile:ProfileReducerInitialStateType
// }
//
// export type ProfileContainerProps = {
//     setUserProfile: (profile: any) => void,
//     profile:any
// }

type PathParamsType = {
    userId: string;
}
type MapStatePropsType = {
    profile: ProfileInfoType | null;
    status: string;
    logginedUserId: number | null;
}
type MapDispatchToProps = {
    getUserProfile: (userId: string) => void;
    getUserStatus: (userId: string) => void;
    updateUserStatus: (status: string) => void;
}
type OwnPropsType = MapStatePropsType & MapDispatchToProps;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.logginedUserId) {
                userId = String(this.props.logginedUserId);
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile  {...this.props} profile={this.props.profile} status={this.props.status}
                      updateUserStatus={this.props.updateUserStatus}/>
        );
    }
}

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    logginedUserId: state.auth.id
});

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
//
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);