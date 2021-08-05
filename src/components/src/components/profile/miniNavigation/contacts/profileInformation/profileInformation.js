const ProfileInformation = (props) => {
    return (

        <div className="popup">
            {props.isOur && <button onClick={props.goEditMode}>Отредактировать</button>}
            <button className="close" onClick={props.goSetClose} ></button>

            <div><span>Обо мнe: </span><span>{props.profile.aboutMe}</span></div>

            <div><span>lookingForAJob: </span><span>{props.profile.lookingForAJob ? "yes" : "no"}</span></div>
            <div><span>lookingForAJobDescription: </span>{props.profile.lookingForAJobDescription || "Не указано"}<span></span></div>
            <div><span>fullName: </span><span>{props.profile.fullName}</span></div>


        </div>

    )
}
export default ProfileInformation