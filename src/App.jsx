import axios from 'axios';
import { useEffect, useState } from 'react';
import { getReposURL } from './config';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { UserContainer } from './user/UserContainer';
import { NotUser } from './user/pages/NotUser';
import { Search } from './user/pages/Search';
import { Loader } from './user/loader/Loader';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserRepos, setCurrentUserRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if(currentUser) {
      setLoading(true);

      const fetchData = async () => {
        const pages = Math.ceil(currentUser.public_repos/30);
        let i = 1;
        const repos = [];
        while (i <= pages) {
            const result = await axios.get(getReposURL(currentUser.login, i))
            const data = await result.data;
            repos.push(...data)
            i++;
        }
        return repos;
      }
      const repos = fetchData();
      repos.then(data => {
        if(data && Object.keys(data).length) {
          setCurrentUserRepos(data)
        } else {
          setCurrentUserRepos(null)
        }
        setLoading(false);
      })
    }
  }, [currentUser])
    
    return (
    <div className="App">
    <Navbar setCurrentUser={setCurrentUser} setSearched={setSearched}/>
      <div className="container">
        { loading === true ? (<Loader />): currentUser !== null ? <UserContainer currentUser={currentUser} currentUserRepos={currentUserRepos}/> : searched ? <NotUser /> : <Search />}
      </div>
    </div>
  );
}

export default App;
