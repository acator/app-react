

const CreatePost = (props) => {
    let onChange = (e) => {
        props.setPostText(e.target.value)
    }
    let submitPost = () => {
        props.addPost(props.newPost)
    }
    return (

        <form className="form_post_send" ><h2>Написать пост</h2>
            <input value={props.newPost} onChange={onChange} name="postText" type="text" />
            <input type="button" value="Отправить" onClick={submitPost} />
        </form>
    )
}
export default CreatePost