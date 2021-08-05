import './navigation.css';
import React from 'react';
import Nav from './nav';
import { connect } from 'react-redux';
import { setAuthData, logoutThunk } from '../../Redux/authRaducer';
class NavContainer extends React.Component {
   
    render(){
      return(
      <Nav {...this.props} />
      )
    }
}
let mapStateToProps = (state)=> ({
  isAuth:state.auth.isAuth,
  login:state.auth.login
})
export default connect(mapStateToProps, { setAuthData, logoutThunk })( NavContainer);