import React from 'react'
import ReactPaginate from 'react-paginate';
const Paginate = ({getPage , pageCount}) => {
    const handlePageClick = (dd)=>{
        getPage(dd.selected+1)
    }

  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="السابق >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        breakClassName="page-item"
        containerClassName='pagination justify-content-center'
        breakLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName='page-link'
        activeClassName="active"
        activeLinkClassName="page-link"
        previousLabel="< التالي"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    </div>
  )
}

export default Paginate
