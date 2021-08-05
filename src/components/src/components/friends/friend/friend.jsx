/*import React, { Component } from 'react';*/
import { NavLink } from 'react-router-dom';


import userPhoto from './../photoFriends/userPhoto.png'
const Friend = (props) =>{
     let name = props.friends
    return (
        
    <div className="alone_people">
        
      
        <div className="friend_name1"><div>
            <NavLink to={ '/profile/' + props.id}>
            <img alt="friend" src={props.photoUrl.small != null ? props.photoUrl : userPhoto} width="150px" />
                </NavLink>
            </div>
        {name}
                

            <div className="button_follow">{
                    props.followed ? <button disabled={props.toggleFollowing.some(id => id === props.id)} onClick={() => {
                      
                        props.followthunk(props.id)
                      
                    }} >UnFollow</button> : <button disabled={props.toggleFollowing.some(id => id === props.id)} onClick={() => {
                           
                            props.unfollowThunk(props.id)
                           }} >Follow</button> }</div>
            
            <div className="live"><div>Nizniy Novgorod</div><div>Russia</div></div>
            
        </div>
    </div>
    )

}

 export default Friend;