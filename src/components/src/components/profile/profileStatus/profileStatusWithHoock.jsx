import React  from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const ProfileStatusWithHook  = (props) => {
    let  [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() =>{
        setStatus(props.status)
    }, [props.status])
  
    const activeEditMode = ( ) => {
        setEditMode(true)
    }
    const diActiveEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)

    }
     const changeStatus = (e) => {
     
            setStatus (e.currentTarget.value)
      

    }


      return   <>
          {!editMode &&
              <div><span onDoubleClick = {activeEditMode} >{props.status  !== ""||null ? props.status :"Введите новый статус"}</span></div>
         }
          {editMode &&
        <div>
              <input onChange={changeStatus} onBlur={diActiveEditMode} autoFocus = {true}  type="text"  value = {status}/>
        </div>
    }
        </>
}


export default ProfileStatusWithHook;