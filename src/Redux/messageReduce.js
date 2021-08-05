const ADD_MESSAGE = "ADD-MESSAGE";


let initialStateMessage = {
    messageIcon: [
        { id: "1", names: "Andery", message: "Привет" },
        { id: "2", names: "Roma", message: "Привет" }

    ],
   

    dialogsIcon: [
        { id: "1", names: "Andery" },
        { id: "2", names: "Roma" },
        { id: "3", names: "Maksim" },
        { id: "4", names: "Anton" },
        { id: "5", names: "Валера" }
    ]
}
export const messageReduce = (state = initialStateMessage, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            return { ...state,
                
                messageIcon: [...state.messageIcon, {
                    id: 5,
                    message: action.message,
                    names: "я"}],
               
            }
          
            
     
            
          
        default:
            return state;

    }
   
}

export default messageReduce;
export const addMessageCreateAction = (message) => {

    return {
        type: ADD_MESSAGE,
        message: message
    }
}


