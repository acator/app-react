import { getApi } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"


let initialStatePost = {
  
        postDate: [
            { id: "1", message: "Привет чувачок", like: "20", dislike: "15" },
            { id: "2", message: "Другие слова", like: "100", dislike: "4" },
            { id: "3", message: "Совсем другие слова", like: "10", dislike: "5" },

        ],

        newPostText: 'it-kamasutra',
        profile:null,
        status:""
  
}
  
const postReduce = (state = initialStatePost, action) =>{
     switch (action.type){
         case ADD_POST:
             return {
                 ...state,
                 postDate:[...state.postDate, {
                     id: 5,

                     message: action.newPostText,
                     like: 0,
                     dislike: 0}],
                 newPostText : ""
             }
            
            

        
         case SET_USERS_PROFILE:
             return {...state, profile: action.profile}
         case SET_STATUS:
             return { ...state, status: action.status}
         case DELETE_POST:
             return { ...state, postDate: state.postDate.filter(post => post.id !== action.id)}
        
             
        default:
             return state;


     }

  }

  export default postReduce;
export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}
export const postDelete = (id) => ({type:DELETE_POST , id})

export const setUserProfile = (profile) =>{
    return {
    type: SET_USERS_PROFILE,
    profile:profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}


export const getProfile = (userId) => {
    return async (dispatch) => {
      let response = await  getApi.getProfile(userId)

        dispatch(setUserProfile(response))


    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
       let response = await getApi.getStatus(userId)

            dispatch(setStatus(response.data))

    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
      let response = await  getApi.putStatus(status)
           if(response.data.resultCode === 0){
           getStatus(dispatch(setStatus(status)))
               

           }

    }
}