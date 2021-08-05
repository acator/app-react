import { connect } from "react-redux";
import Dialogs from "./dialogs";
import { addMessageCreateAction, setMessageText} from '../../Redux/messageReduce';
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";
import React from "react";


let dialogsMap = (state) =>{
    return {
        
        dialogsIcon: state.messagePage.dialogsIcon,
        newMessagePeople: state.messagePage.newMessagePeople,
        messageIcon: state.messagePage.messageIcon,
        isAuth: state.auth.isAuth,
        newMessageText: state.messagePage.newMessageText
    }
}
class DialogsContainer extends React.Component{
    render(){

        return(
            <Dialogs {...this.props}  dialogsIcon={this.props.dialogsIcon}
                messageIcon={this.props.messageIcon} addMessageCreateAction={this.props.addMessageCreateAction}
                setMessageText={this.props.setMessageText}/>
        )
    }
}

let ComposeDialogs = compose(connect(dialogsMap,{ addMessageCreateAction, setMessageText}), withAuthRedirect)(DialogsContainer)


export default ComposeDialogs;