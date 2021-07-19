
/*import React, { Component } from 'react';*/
const Message = (props) => {
   
    return (
        <div className = "our_message">
                            <div className ="message_icon"><img alt = "person" src ="http://chundra.ru/uploads/posts/2009-07/sean-crane-46.jpg"/></div>
                            <div className = "pronoun">{props.name}</div>
                            <div className = "answer">{props.message}</div>
            </div>
    )
}
export default Message;