import './App.css';
import {  BrowserRouter, Route, withRouter } from 'react-router-dom';
import News from './components/News/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';

import FriendsContainer from './components/friends/friendsConteiner';
import NavContainer from './components/navigation/navContainer';
import Login from './components/login/login';
import React from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initialApp } from './Redux/appReducer';
import Loading from './components/comman/loading/loading'
import { store } from './Redux/storeRedux';
import { withSuspense } from './components/HOC/withSuspens';
let ComposeProfile = React.lazy(() => import('./components/profile/profileConteiner'))
let ComposeDialogs = React.lazy(() => import('./components/dialogs/dialogsConteiner'))
class  App extends React.Component {
  componentDidMount(){
    this.props.initialApp()

  }
  render(){
    if(!this.props.initialized){
      return <Loading />
    }
  return (
    
    <>
<div className = "app-wrapper">
        <NavContainer />
      <div className="content_main">
          <Route path="/dialogs" render={ withSuspense(ComposeDialogs) } />
          <Route path="/profile/:userId?" render={ withSuspense(ComposeProfile)}/>
          <Route path = "/news" component = {News} />
          <Route path = "/music" component = {Music} />
          <Route path = "/settings" component = {Settings} />
          <Route path="/friends" render={() => <FriendsContainer   />} />
          <Route path="/login" render={() => <Login /> } />
      </div> 
    </div>
    </>
  )
  }
}
let mapStateToProps = (state) =>{
  return {
    initialized: state.app.initialized
  }
}


let AppWithPouter =  compose(withRouter, connect(mapStateToProps, { initialApp }), withRouter)(App);
const MainApp = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <AppWithPouter />
      </BrowserRouter>
    </Provider>
  )
}
export default MainApp;