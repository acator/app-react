import { getAuthMeThunk } from "./authRaducer";

const INITIALIZED_APP = "INITIALIZED_APP"

const initialState ={
  
initialized:false
   
}
export const appReducer = (state = initialState, action) => {
   switch(action.type){
      case INITIALIZED_APP:
         return  {
               ...state,
              initialized:true
               
           } 
     
           
    default: return state;

}

}


export const initialingApp = () => ({ type: INITIALIZED_APP})

export const initialApp = () => {
   return (dispatch) => {
      let promise  = dispatch(getAuthMeThunk())
      Promise.all([promise]).then(() =>{
         dispatch(initialingApp())

      })

   }
}



