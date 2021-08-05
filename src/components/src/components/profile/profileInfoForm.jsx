import { Field, reduxForm } from "redux-form"
import React from 'react';
import './../login/login.css'


const ProfileForm = (props) => {
    return (
        
        <form onSubmit={props.handleSubmit}>
          <div> Обо мнe<Field component="input" type="text" name='aboutMe' placeholder="Напишите о себе"  />
          </div>
           <div> lookingForAJob:<Field component="input"  type="checkbox" name='lookingForAJob' />
            </div>
           <div> lookingForAJobDescription: <Field component="textarea" type="text" name='lookingForAJobDescription' placeholder="lookingForAJobDescription" />
            </div>
           <div> fullName: <Field type="text" component="input" name='fullName' placeholder="fullName" />
            </div>
            {Object.keys(props.profile.contacts).map((key) => {
                return <div key = {key}><span>{key}</span><Field type = {"text"} component={"input"} placeholder={key} name={"contacts." + key} /></div>
            })}
            {props.error && <div className="summeryError">{props.error}</div>}
        
            <button >Отрправить</button>
        </form>
  
    )
}


const ProfileReduxForm = reduxForm({ form: 'profile' })(ProfileForm)
export default ProfileReduxForm;