import React from 'react'
import './user-repos-item.css'

export const UserReposItem = ({ name, description, html_url }) => {
  return (
    <div className='reposItem'>
        <a className='reposLink' href={html_url} target="_blank">{name}</a>
        <p>{description}</p>
    </div>
  )
}
