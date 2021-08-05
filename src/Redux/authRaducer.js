import { stopSubmit } from "redux-form";
import { getApi } from "../API/api";

const SET_AUTH_DATA = "SET_AUTH_DATA"

const initialStateNav ={
  userId:null,
  email: null,
  login:null,
  isAuth:false,

   isFetching:false
}
 const authReducer = (state = initialStateNav, action) => {
   switch(action.type){
       case SET_AUTH_DATA:
         return  {
               ...state,
              ...action.data
               
           } 
     
           
    default: return state;

}

}


export const setAuthData = (userId, email, login, isAuth) => ({ type: SET_AUTH_DATA, data: { userId, email, login, isAuth }})

export const getAuthMeThunk = () => {
   return async (dispatch) => {
      let data = await getApi.authMe()
         if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthData(id, email, login, true))
         }
    return data

   }
}
export const onLoginThunk = (email, password, rememberMe) => {

  
   return async (dispatch) => {
    
     let response = await getApi.onLogin(email, password, rememberMe)
         if (response.data.resultCode === 0) {
            dispatch(getAuthMeThunk())
         }else{
            
            dispatch(stopSubmit("login", { _error: ` ${response.data.messages.length > 0 ? response.data.messages[0] : undefined}` }))
         }
  
   }
}
export const logoutThunk = () => {
   return async (dispatch) => {
     let response = await getApi.desLogin()
         if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
         }
      

   }
}



export default authReducer;