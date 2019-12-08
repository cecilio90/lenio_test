import React from 'react'

const Pagination = ({ membersPerPage, totalMembers, paginate }) => 
{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map(page => (
                <a key={page} className="pagination__item" onClick={(e) => {e.preventDefault(); paginate(page)}} href="!#">
                    {page}
                </a>
            ))}
        </div>
    )
};

export default Pagination;