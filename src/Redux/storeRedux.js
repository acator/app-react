import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./authRaducer";
import messageReduce from "./messageReduce";
import navigationReduce from "./navigationRaduce";
import postReduce from "./postReducer";
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./appReducer";


let reducers = combineReducers({
    messagePage: messageReduce,
    postPage: postReduce,
    navigation: navigationReduce,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));


