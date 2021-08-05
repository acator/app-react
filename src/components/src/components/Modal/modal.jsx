import './modal.css'

const Modal = (props) => {
    
    return(<>
        <div className ="modalWindow"></div>
        <div className="icon_modal">{props.children}</div>
        </>
    )
    
}

export default Modal