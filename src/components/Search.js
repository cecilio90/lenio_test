import React from 'react'

const Search = ({ searchMember }) => {
    return (
        <div className="search">
            <input onChange={ (e) => searchMember(e.target.value) } className="search__filter" type="text" placeholder="Search.." name="search" />
        </div>
    )
}

export default Search;