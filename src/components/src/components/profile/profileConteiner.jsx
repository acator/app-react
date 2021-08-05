import { connect } from "react-redux";
import Profile from "./profile_component";
import { addPost, setUserProfile, getProfile, getStatus, updateStatus, savePhoto, saveProfile, setPostText} from '../../Redux/postReducer';
import React from 'react';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";



let newPost = (state) =>{
    return{
        newPost:state.postPage.newPostText,
        postDate: state.postPage.postDate,
        profile:state.postPage.profile,
        isAuth: state.auth.isAuth,
        status: state.postPage.status,
        userId: state.auth.userId,
    }
}
class ProfileAPIContainer extends React.Component{
    refresh(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getStatus(userId)

        this.props.getProfile(userId)
    }
    componentDidMount = () => {
           this.refresh()
    }
    componentDidUpdate = (props, state) => {
        if (this.props.match.params.userId !== props.match.params.userId ){
            this.refresh()
        }
    }
   

   render(){
    return (
        <Profile saveProfile={this.props.saveProfile} savePhoto={this.savePhoto} setPostText={this.props.setPostText} isOur={!this.props.match.params.userId} {...this.props} profile={this.props.profile} 
            newPost={this.props.newPost} updateStatus = {this.props.updateStatus}  status ={this.props.status}/>

    )
   }
}
let ComposeProfile = compose(connect(newPost, { setUserProfile, addPost, getProfile, getStatus, updateStatus, savePhoto, saveProfile, setPostText }), withRouter,
    withAuthRedirect)(ProfileAPIContainer)


export default ComposeProfile;