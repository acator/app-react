
import Friend from './friend/friend';
import Pagination from './pagination';

let Friends = (props) =>{
    
      
    
    return (
        <div>
          <Pagination {...props}/>
            <div className='friends_global'>

                {props.friend.map(friend => (
                    <Friend key={friend.id} friends={friend.name}
                     photoUrl={friend.photos} follow={props.follow} 
                     unfollow={props.unfollow} status={friend.status} id={friend.id} 
                        followed={friend.followed} toggleIsFollowing={props.toggleIsFollowing}
                        toggleFollowing={props.toggleFollowing} followthunk={props.followthunk} unfollowThunk={props.unfollowThunk}  />))}

            </div>
        </div>
    )
}
export default Friends;