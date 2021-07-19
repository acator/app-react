import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { onLoginThunk } from '../../Redux/authRaducer'
import { Input } from '../comman/loading/Control/formsControl'
import { maxLength,  validateText } from '../utilits/validator/validator'
import './login.css'
let maxValue10 = maxLength(50)
let LoginForm = (props) =>{
    return (
    <div>
            <form className="log_in" onSubmit={props.handleSubmit}>
                <Field type={"text"} name = {'email'}placeholder="login" component={Input}
                    validate={[validateText, maxValue10]}  />
                <Field type={"text"} name={'password'} placeholder="password" component={Input}
                    validate={[validateText, maxValue10]} />
                <Field type={"checkbox"} name={'rememberMe'} component={Input} />remember me
                {props.error && <div className="summeryError">{props.error}</div>}
                <input type={"submit"} value="log in" validate={[validateText, maxValue10]} />

             </form>   
   </div >
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {
    let func = (formData) =>{
     props.onLoginThunk(formData.email, formData.password, formData.rememberMe)
 }
 if(props.isAuth) {
     return <Redirect to  ={"/profile"} />
 }
    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={func}/>
        </div >
    )
}
let mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth }
}
export default connect(mapStateToProps, { onLoginThunk})(Login);