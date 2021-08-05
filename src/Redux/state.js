
import './../index'
import messageReduce from './messageReduce';
import navigationReduce from './navigationRaduce';
import postReduce from './postReducer';


let store = {
   renderCreateTRee () {
      console.log('state Change')
   },
    _state: {
   postPage:{
 postDate: [
    { id: "1", message: "Привет чувачок", like: "20", dislike: "15" },
    { id: "2", message: "Другие слова", like: "100", dislike: "4" },
    { id: "3", message: "Совсем другие слова", like: "10", dislike: "5" },
    
],
  
      newPostText: 'it-kamasutra'
   },

 messagePage: {
 messageIcon: [
    { id: "1", names: "Andery", message: "Привет" },
    { id: "2", names: "Roma", message: "Привет" }

],
 newMessagePeople: 'Привет it-kamasutra',

 dialogsIcon: [
    { id: "1", names: "Andery" },
    { id: "2", names: "Roma" },
    { id: "3", names: "Maksim" },
    { id: "4", names: "Anton" },
    { id: "5", names: "Валера" }
]
 },
 navigation: {
 friend: [
    {id: "1", names: "Andrey"},
    { id: "2", names: "Maksim" },
    { id: "3", names: "Anton" },
    { id: "4", names: "Balera" }
 ]
}
},
getState() {
   return this._state ;
},
  
   subscribe(observer) {
      this.renderCreateTRee = observer;
   },
   dispatch(action){
      this.getState().postPage = postReduce(this.getState().postPage, action)
      this.getState().messagePage = messageReduce(this.getState().messagePage, action)
      this.getState().navigation = navigationReduce(this.getState().navigation,action)
     this.renderCreateTRee(this.state)
   }
   

   
}


  




export default store;