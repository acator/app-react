import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../Modal/modal';
import ProfileReduxForm from './../profileInfoForm';
import Contacts from './contacts/contacts';
import ProfileInformation from './contacts/profileInformation/profileInformation';


const NavigationPerson = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [close, setClose] = useState(false)
    let [close1, setClose1] = useState(false)

    let submitProfile2 = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)

        })

    }
    return (
        <div className="mini_nav">
            <div className="link_info" onClick={() => { setClose(true) }} id="link_info">Обо мне </div>
            {close &&

                <div id="overlay">
                {editMode ? ReactDOM.createPortal(<Modal><ProfileReduxForm initialValues={props.profile} onSubmit={submitProfile2} profile={props.profile} isOur={props.isOur} goEditMode={() => { setEditMode(false) }} /></Modal>, document.getElementById("portal"))  :
                    ReactDOM.createPortal(<Modal><ProfileInformation profile={props.profile} isOur={props.isOur} goEditMode={() => { setEditMode(true) }} goSetClose={() => { setClose(false) }} /></Modal>, document.getElementById("portal"))
                    }
                </div>
            }

            <div className="link_info" onClick={() => { setClose1(true) }}>Контакты</div>
            {close1 && ReactDOM.createPortal(<Modal>
                <div id="contact">
                    <div className="contactContainer">
                        <button className="close" onClick={() => { setClose1(false) }} >Закрыть</button>
                        {Object.keys(props.profile.contacts).map((key) => {
                            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })}
                    </div>
                </div></Modal>, document.getElementById("portal"))
                }
            <div className="link_info">Друзья</div>
        </div>

    )
}

export default NavigationPerson 