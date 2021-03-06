import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
let dialogsMapForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
 export const withAuthRedirect  = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if (this.props.isAuth === false) return <Redirect to={"/login"} />

            return <Component {...this.props} />
        }
    }
     let HeightOrderComponent = connect(dialogsMapForRedirect)(RedirectComponent)

     return HeightOrderComponent
}
