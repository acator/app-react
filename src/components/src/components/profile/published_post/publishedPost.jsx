
import React from 'react';
const PublishedPost = (props) => {
    return(
        <div className="publ_posts">
        <div className="user_photo"><img alt="users" src="http://chundra.ru/uploads/posts/2009-07/sean-crane-46.jpg"/></div>
        <div className="block_post">
          <div className ="user_name">Олег Олегович</div>
          <hr/>
          <div className="user_text">{props.message}</div>
          <div className = "box_like_dis">
        <div className="like">Like {props.like}</div>
        <div className = "dislike">DisLike {props.dislike}</div> 
        </div> 
        </div>
       
      </div>
    )
}
export default PublishedPost;