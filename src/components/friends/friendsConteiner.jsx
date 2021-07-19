import { connect } from "react-redux";
import {  setCurrentPage,  creatorThunkOfGetUsers, followthunk, unfollowThunk } from "../../Redux/navigationRaduce";
import Friends from './friends';
import React from 'react'
import "./friends.css"
import Loading from "../comman/loading/loading";
import { getCurrentPage, getIsFetching, getPageSize, getToggleFollowing, getTotalCount, getUsers } from "../../Redux/selectors/usersSelectors";

let friendState = (state) =>{
    return{
        friend: getUsers(state) ,
        pageSize: getPageSize(state) ,
        totalUsersCount: getTotalCount(state),
        currentPage: getCurrentPage(state) ,
        isFetching: getIsFetching(state),
        toggleFollowing: getToggleFollowing(state)
        

    }
};

class FriendsAPIComponent extends React.Component {
  
    componentDidMount = () => {
        this.props.creatorThunkOfGetUsers(this.props.currentPage, this.props.pageSize)
   
    }

    onPageChanged = (pageNumber) => {
        this.props.creatorThunkOfGetUsers(pageNumber, this.props.pageSize)
      
    }
    render() {


        return <>
           { this.props.isFetching ?  <Loading  />: null}
        <Friends friend={this.props.friend}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            id={this.props.id}
            follow={this.props.follow}
                toggleFollowing={this.props.toggleFollowing} 
                followthunk={this.props.followthunk}
                unfollowThunk={this.props.unfollowThunk}/>
   </>
    }
}



let FriendsContainer = connect(friendState, {
   
    setCurrentPage,
    
    creatorThunkOfGetUsers, followthunk, unfollowThunk })(FriendsAPIComponent)

export default FriendsContainer;