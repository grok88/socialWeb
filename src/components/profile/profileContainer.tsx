import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { ProfileType} from "./profileInfo/profileInfo";
import {compose} from "redux";
import {ProfileDataFormType} from "./profileInfo/ProfileDataForm/ProfileDataForm";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string;
}
type MapStatePropsType = {
    profile: ProfileType | null;
    status: string;
    logginedUserId: number | null;
}
type MapDispatchToProps = {
    getUserProfile: (userId: string) => void;
    getUserStatus: (userId: string) => void;
    updateUserStatus: (status: string) => void;
    savePhoto: (file: any) => void;
    saveProfile: (profile: ProfileDataFormType) => void;
}
type OwnPropsType = MapStatePropsType & MapDispatchToProps;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.logginedUserId) {
                userId = String(this.props.logginedUserId);
            }
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile  {...this.props} profile={this.props.profile} status={this.props.status}
                      isOwner={!this.props.match.params.userId}
                      updateUserStatus={this.props.updateUserStatus}
                      onUploadImg={this.props.savePhoto}
                      saveProfile={this.props.saveProfile}
            />
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
        updateUserStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
//
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
