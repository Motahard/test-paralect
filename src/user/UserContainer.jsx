import React from 'react'
import { UserInfo } from './info/UserInfo'
import { UserRepos } from './repos/UserRepos'
import './user-container.css'

export const UserContainer = ({ currentUser, currentUserRepos }) => {
  return (
    <div className='userContainer'>
        <UserInfo className='userInfo' currentUser={currentUser}/>
        <UserRepos currentUserRepos={currentUserRepos}/>
    </div>
  )
}
