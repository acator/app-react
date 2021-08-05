import './profile.css';
import PublishedPost from './published_post/publishedPost';
import Loading from '../comman/loading/loading';
import React from 'react';
import ProfileFace from './profileInfo/profileface';
import CreatePost from './createPost/createPost';
import NavigationPerson from './miniNavigation/navigationPerson';



const Profile = (props) => {
  
  let array = []
  props.postDate.map(post => array.unshift(post))
  let createPostDAte = array.map(post1 => (
    <PublishedPost key = {post1.id}  message={post1.message} like={post1.like} dislike={post1.dislike} />
  ))
  
  if (!props.profile) {
    return <Loading />

  } 
    return(
        <div className ="content">
           <div className = "container_info">
      <ProfileFace {...props}/>

          <NavigationPerson {...props} />
        </div>
        <div className="my_posts" >
          < CreatePost addPost={props.addPost} setPostText={props.setPostText} newPost={props.newPost} />
        </div>
       
            {createPostDAte}
      
        </div>
    )
  
}




export default Profile;
