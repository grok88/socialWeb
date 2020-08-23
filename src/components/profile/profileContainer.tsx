import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileInfoType} from "./profileInfo/profileInfo";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
}
type MapDispatchToProps = {
    getUserProfile: (userId: string) => void;
}
type OwnPropsType = MapStatePropsType & MapDispatchToProps;
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType;


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile  {...this.props} profile={this.props.profile}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);