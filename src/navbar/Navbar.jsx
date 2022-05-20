import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { getUserURL } from '../config';
import { GithubIcon } from './GithubIcon'
import './navbar.css'

export const Navbar = ({ setCurrentUser, setSearched }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      axios.get(getUserURL(searchText))
        .then(data => {
          const user = data.data;
          setCurrentUser(user);
        })
        .catch(err => {
          setCurrentUser(null)
          console.log(err);
        })
    }
    else {
      setCurrentUser(null);
    }
  }, [searchText])

  const handleSearch = e => {
    if (!searchText) setSearched(false);
    if (e.key === 'Enter') {
      setSearchText(e.target.value)
      setSearched(true)
    } 
  }

  return (
    <div className='navbar'>
      <GithubIcon className='githubIcon'/>
      <div className='searchContainer'>
        <input type="text" placeholder='Enter GitHub username' className='search' onKeyDown={handleSearch}/>
      </div>
    </div>
  )
}
