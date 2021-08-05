import userPhoto from '../../../components/friends/photoFriends/userPhoto.png'
import ProfileStatusWithHook from '../profileStatus/profileStatusWithHoock';
import icon from "./../iconeClose/close_icon-icons.com_48658.png"
import { useState } from 'react';
import ReactDOM from 'react-dom';

import Modal from '../../Modal/modal' 
const ProfileFace = (props) =>{
    let [edit, showEdit] = useState(false)
    let [ourPhoto, setOurPhoto] = useState(false)
    let savePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return(
        <div className="person">
            <div id="userPhoto" className="person_photo" >
                <img alt="profile" src={props.profile.photos.large || userPhoto} />
            </div>
            <div className="person_info">
                <div className="size_font"></div> <div className="Name padding "><span className="info-person">{props.profile.fullName}</span></div><br />
            </div>
            <div className="status">
                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
            </div>
            <button className="button_edit" onClick={() => showEdit(true)}>Eddit Photo</button>
            {edit &&

                <div className='editPhotoContainer' >
                    <div className="editPhoto">
                        <div className="choosePhoto">{props.isOur &&
                            <input id="file-upload-button" type="file" onChange={savePhoto}></input>
                        }</div><button className="closeEdit" onClick={() => showEdit(false)}><img alt="close" src={icon} height="15px" /></button>
                        <div className="showPhoto"><button onClick={() => setOurPhoto(true)} >Показать фото</button></div>
                    </div>
                </div>
            }
            {ourPhoto  && ReactDOM.createPortal(
                <Modal>
                    <div className="modalForPhoto">
                    <img alt="large" src={props.profile.photos.large || userPhoto} />
                    <button onClick={() => setOurPhoto(false)} ><img alt="close" src={icon} /></button>
                </div>
                </Modal>,  document.getElementById("portal"))
            }
            
        </div>
    )
}
export default ProfileFace;