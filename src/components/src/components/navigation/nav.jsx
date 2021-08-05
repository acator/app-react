import { NavLink } from 'react-router-dom';
import './navigation.css';
import  logo from "./logoPhoto/logo.png"
import up from "./logoPhoto/up.png"
import down from "./logoPhoto/down.png"
import React from 'react';
import { useState } from 'react';
const Nav = (props) => {
  let [hide, setHide] = useState(false)
    return(
        <nav className ="nav">
        <img alt = "logo" src = {logo} className="logo"/>
        <input type="text" className="searchPeople" placeholder="Search friends, photos, videos" />
        <div className='label hide'><NavLink to ="/profile" activeClassName = "activeLink">Profile</NavLink></div>
          
       
        <div className='label hide'> < NavLink to="/dialogs">Messages</NavLink></div>
          
          
        <div className='label hide'> <NavLink to="/music">Music</NavLink></div>

         
        <div className='label hide'><NavLink to="/news">Новости</NavLink></div>

           
        <div className='label hide'><NavLink to="/settings">Settings</NavLink></div>

          
        <div className='label hide'> <NavLink to="/friends">Friends</NavLink></div>
        <div className ="media_navigation">
        <div className='label media_five'><button onClick ={() =>setHide(hide ? false : true)}><img alt="hide_elements" height= "15px" src={hide ? up:down}/></button>
        {hide &&<div className= "hide_component">
            <div className='label component '><NavLink to="/profile" activeClassName="activeLink">Profile</NavLink></div>


            <div className='label component '> < NavLink to="/dialogs">Messages</NavLink></div>


            <div className=' label component'> <NavLink to="/music">Music</NavLink></div>


            <div className='label component '><NavLink to="/news">Новости</NavLink></div>


            <div className='label component'><NavLink to="/settings">Settings</NavLink></div>


            <div className='label component '> <NavLink to="/friends">Friends</NavLink></div>
            {props.isAuth ? <span className="component"><span>{props.login}</span><button onClick={props.logoutThunk}>Log Out</button></span> : <span className="component"><div className='label'> <NavLink to="/login">Login</NavLink></div></span>}
          </div>
}</div>
        </div>
        {props.isAuth ? <span className="hide"><span>{props.login}</span><button onClick={props.logoutThunk}>Log Out</button></span> : <span className="hide"><div className='label'> <NavLink to="/login">Login</NavLink></div></span> }
        

        
       
         

       
      </nav>
    )
}

export default Nav;