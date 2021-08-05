import IconFriend from './icon_friend_dialog/icon_friend_dialog';
import Message from './messages/messages';
import './dialogs.css';
import React from 'react';
import { useState } from 'react';

export const CreateMessage = (props) => {
    let onChange = (e) => {
        props.setMessageText(e.target.value)
    }
    let submitMessage = () => {
        props.addMessageCreateAction(props.newMessageText)
    }
    return (
        <form className="submit_text"  >
           
            <textarea onChange ={onChange} name="textMessage" value ={props.newMessageText}/>
            <input type="button" value=" > " onClick={submitMessage} />
        </form>
    )
}

const Dialogs = (props) => {
    let [hidePeople, setHidePeople] = useState(true)
    let dialogsIconElement = props.dialogsIcon.map(people => <IconFriend setHidePeople = {() =>setHidePeople(true)} key ={people.id} id={people.id} name={people.names} />)
    let messageElement = props.messageIcon.map(message => <Message key = {message.id} message={message.message} id={message.id} name={message.names} />)
  
  
   
    return (
       <div className = "all_dialogs">
           <div className = "header_dialogs">
                <h1>Dialogs</h1>{hidePeople &&
                <button onClick ={()=> setHidePeople(false)}>Списки диалогов</button>
              }
            </div> 
           

            <div className="content_dialogs">
                <div className = "list_dialogs_friends">
                           { dialogsIconElement}
                </div>
                
                {!hidePeople &&
                    <div className="list_dialogs_friends_clone">

                        {dialogsIconElement}

                    </div>
                }
                {hidePeople &&
                <div className = "dialogsWithFriends"> 
                <div className ="dialogs_withSomebody" >
                    
                           {messageElement }
                   
                   
                  
                </div>

                    < CreateMessage newMessageText={props.newMessageText} addMessageCreateAction={props.addMessageCreateAction}
                        setMessageText={props.setMessageText} />
               </div>
              }
           </div>
           

       </div>
    );
}

export default Dialogs;

