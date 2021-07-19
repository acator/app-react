import { connect } from "react-redux";
import Dialogs from "./dialogs";
import { addMessageCreateAction} from '../../Redux/messageReduce';
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";



let dialogsMap = (state) =>{
    return {
        
        dialogsIcon: state.messagePage.dialogsIcon,
        newMessagePeople: state.messagePage.newMessagePeople,
        messageIcon: state.messagePage.messageIcon,
        isAuth: state.auth.isAuth
    }
}
let collBackToProps = (dispatch) => {
    return {
       
        submit_text: (message) => {
            dispatch(addMessageCreateAction(message));
        }
    }
}
let ComposeDialogs = compose(connect(dialogsMap, collBackToProps), withAuthRedirect)(Dialogs)


export default ComposeDialogs;