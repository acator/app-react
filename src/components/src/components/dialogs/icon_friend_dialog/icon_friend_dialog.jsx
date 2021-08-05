import { NavLink } from "react-router-dom"
/*import React, { Component } from 'react';*/

const IconFriend = (props) => {
    return(
        <div className="friend" onClick={props.setHidePeople}>
        <div className ="friend_photo"><img alt = "alt"src = "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-24.jpg"/></div>
        <div className = "friend_name"><NavLink  to = {"/dialogs/" + props.id}>{props.name}</NavLink></div>
    </div>
    )
}

export default IconFriend;