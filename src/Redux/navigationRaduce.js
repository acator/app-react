import { getApi } from "../API/api"
import { usersHalper } from "./halper/usersHalper"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_FRIENDS = "SET_FRIENDS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING"
const initialStateNav ={
   friend:[
   ],
   totalUsersCount: 0,
   pageSize:20,
   currentPage:1,
   isFetching:false,
   toggleFollowing:[]
}
const navigationReduce = (state = initialStateNav, action) => {
   switch(action.type){
       case FOLLOW:

         return  {
               ...state,
             friend: usersHalper(state.friend, "id", action.userId, { followed: true}  )
               
           } 
       case UNFOLLOW:

           return {
               ...state,
               friend: usersHalper(state.friend, "id", action.userId, { followed:false })
                  
           }
           
      case SET_FRIENDS:{
           return {
               ...state, friend:[...action.friends]

          }
      }
       case SET_CURRENT_PAGE : {
           return {...state, currentPage:action.currentPage}
       }
       case SET_TOTAL_USERS_COUNT:{
           return { ...state, totalUsersCount:action.totalCount }
       }
       case TOGGLE_IS_FETCHING: {
           return { ...state, isFetching: action.toggleFetching }
       }
       case TOGGLE_IS_FOLLOWING: {
           return { ...state, toggleFollowing: action.toggleFetching? [...state.toggleFollowing, action.userId] : state.toggleFollowing.filter(id => id !== action.userId) }
       }
           
    default: return state;

}

}


export const follow = (userId) =>({type:FOLLOW, userId})
export const unfollow = (userId) => ({ type: UNFOLLOW, userId})
export const setFriend = (friends) => ({ type: SET_FRIENDS, friends  })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage  })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (toggleFetching) => ({ type: TOGGLE_IS_FETCHING, toggleFetching})
export const toggleIsFollowing = (toggleFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, toggleFetching, userId })
export const creatorThunkOfGetUsers = (currentPage, pageSize ) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

   let data = await getApi.getUsers(currentPage,pageSize)
        dispatch(toggleIsFetching(false));

        dispatch(setFriend(data.items));

       dispatch(setTotalUsersCount(data.totalCount));


    
}
}
 const followUnFollow  = async (dispatch, id, apiMethod, actionCreator ) => {
    dispatch(toggleIsFollowing(true, id))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {

        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowing(false, id))

}
export const followthunk  = (id) => {
    return async (dispatch) => {
        followUnFollow(dispatch, id, getApi.unfollow.bind(getApi), unfollow)
    }
}
export const unfollowThunk = (id) => {
    return async (dispatch) => {
        followUnFollow(dispatch, id, getApi.follow.bind(getApi), follow)
      
    }
}

export default navigationReduce;