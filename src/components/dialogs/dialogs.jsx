import IconFriend from './icon_friend_dialog/icon_friend_dialog';
import Message from './messages/messages';
import './dialogs.css';
import { reduxForm , Field} from 'redux-form';
import { maxLength } from '../utilits/validator/validator';
import { TextArea } from '../comman/loading/Control/formsControl';
import React from 'react';


const Dialogs = (props) => {
    
    let dialogsIconElement = props.dialogsIcon.map(people => <IconFriend id={people.id} name={people.names} />)
    let messageElement = props.messageIcon.map(message => <Message message={message.message} id={message.id} name={message.names} />)
  
  
    let createMessage = (message) =>{
        props.submit_text(message.textMessage);
    }
    return (
       <div className = "all_dialogs">
           Dialogs
           <div className = "content_dialogs">
                <div className = "list_dialogs_friends">
                   
                           { dialogsIconElement}
                         
                </div>
                <div className ="dialogs_withSomebody" >
                   
                    {messageElement }
                      
                        
                </div>
               
           </div>
           
            < CreateFormForMessage  onSubmit = {createMessage}/>


       </div>
    );
}
let maxValue10 = maxLength(10)
let createMessage = (props) => {
    return (
        <form className="submit_text" onSubmit={props.handleSubmit} >
            <input type="submit" value=" > "  />
            <Field component={TextArea} name="textMessage" validate={[ maxValue10]} />
        </form>
    )
}
let CreateFormForMessage = reduxForm({ form: 'message' })(createMessage)

export default Dialogs;