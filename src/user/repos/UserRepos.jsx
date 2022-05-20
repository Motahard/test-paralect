import React, { useState, useEffect } from 'react'
import { UserReposItem } from './UserReposItem'
import ReactPaginate from 'react-paginate'
import './user-repos.css'
import { NoRepositories } from '../icons/NoRepositories'

export const UserRepos = ({currentUserRepos}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [userRepos, setUserRepos] = useState(currentUserRepos);
  const [displayRepos, setDisplayRepos] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (currentUserRepos) {
      const display = userRepos.slice(pagesVisited, pagesVisited + reposPerPage).map(rep => {
        const { id, name, description, html_url } = rep;
              return (
                <UserReposItem key={id} name={name} description={description} html_url={html_url}/>
              )
      });
      setDisplayRepos(display);
      setPageCount(Math.ceil(userRepos.length / reposPerPage));
    }
  }, [currentUserRepos, pageNumber])

  const reposPerPage = 4;
  const pagesVisited = pageNumber * reposPerPage;

  

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  if (currentUserRepos) {
    return (
      <div className='userRepos'>
        <h2>Repositories ({currentUserRepos.length})</h2>
        {displayRepos}
        <div className="paginateContainer">
          <p>{pagesVisited + 1} - {pagesVisited + reposPerPage} of {currentUserRepos.length}</p>
          <ReactPaginate 
            previousLabel={'<'}
            nextLabel={'>'}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationButtons'}
            previousLinkClassName={'previousButton'}
            nextLinkClassName={'nextButton'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
            
          />
        </div>
      </div>
    )
  }
  else return <div className='emptyList'>
    <div>
      <NoRepositories />
    </div>
      <p>
        Repository list is empty
      </p>
    </div>
}
