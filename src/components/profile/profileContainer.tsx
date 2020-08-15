import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppRootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter, Redirect} from "react-router-dom";
import {ProfileInfoType} from "./profileInfo/profileInfo";
import {userApi} from "../../api/api";

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
    isAuth:boolean;
}
type MapDispatchToProps = {
    getUserProfile: (userId:string) => void;
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
        if(!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }
        return (
            <Profile  {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStatePropsType, MapDispatchToProps, {}, AppRootState>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);