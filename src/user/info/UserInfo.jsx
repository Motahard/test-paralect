import React from 'react'
import { FollowingIcon } from '../icons/FollowingIcon';
import { FollowersIcon } from '../icons/FollowersIcon';
import './user-info.css'

export const UserInfo = ({ currentUser }) => {
  const { name, avatar_url, html_url, login, followers, following } = currentUser;
  
  return (
    <div>
        <img src={avatar_url} alt="user" />
        <h2 className='userName'>{name}</h2>
        <a className='userLink' href={html_url} target='_blank'>{login}</a>
        <div className='followsContainer'>
            <p>
               <FollowersIcon /> <span className="followers">{followers.toString().length > 3 ? (followers/1000).toFixed(1) + 'k' : followers } followers</span> 
            </p>
            <p>
                <FollowingIcon /> <span className="following">{following.toString().length > 3 ? (following/1000).toFixed(1) + 'k' : following } following</span> 
            </p>
        </div>
    </div>
  )
}
