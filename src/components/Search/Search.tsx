import React from 'react'
import "./Search.scss"
import { SearchIcon } from 'components/Icons/Icons';

const Search: React.FC<{placeHolder?: string}> = ({placeHolder = "Search"}) => {
  return (
    <div className='app__search' >
        <input className="app__search__input" type="text" placeholder={placeHolder}></input>
        <SearchIcon className='app__search__icon'/>
    </div>
  )
}

export default Search