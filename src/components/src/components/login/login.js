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
                <Field  className = "input_log_in"type={"text"} name = {'email'}placeholder="login" component={Input}
                    validate={[validateText, maxValue10]}  />
                <Field className="input_log_in" type={"text"} name={'password'} placeholder="password" component={Input}
                    validate={[validateText, maxValue10]} />
                <label><Field className="input_login_in_checkbox" type={"checkbox"} name={'rememberMe'} component={Input} />remember me</label>
                {props.error && <div className="summeryError">{props.error}</div>}
                
                {props.captcha && <img alt ="captcha" src={props.captcha} />}
                {props.captcha && <Field className="input_log_in" type={"text"} name = {'captcha'}placeholder="write text with photo" component={Input}
                    />}

                <input className="input_log_in" type={"submit"} value="log in" validate={[validateText, maxValue10]} />

             </form>   
   </div >
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {
    let func = (formData) =>{
     props.onLoginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
 }
 if(props.isAuth) {
     return <Redirect to  ={"/profile"} />
 }
    return (
        <div className = "form_login_in">
            <h1>Login</h1>

            <LoginReduxForm onSubmit={func} captcha={props.captcha}/>
        </div >
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha:state.auth.captcha
     }
}
export default connect(mapStateToProps, { onLoginThunk})(Login);