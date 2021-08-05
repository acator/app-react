
import './formControl.css'
 export const TextArea = ({meta, input, ...props}) => {
    return (
        <div className={meta.touched && meta.error ?  "form_control" :null}>
            <textarea {...input} {...props}/ >
            {meta.touched && meta.error && <span>{meta.error }</span>}
        </div>
    )
}

export const Input = ({ meta, input, ...props }) => {
    return (
        <div className={meta.touched && meta.error ? "form_control" : null}>
            <input {...input} {...props} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}