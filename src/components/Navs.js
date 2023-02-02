import React from 'react'
import logo from "../images/logo.png"
const Navs = ({searchData}) => {
  const onSearch = (word)=>{
    searchData(word)
  }
  return (
   <>

<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="/">
        <img className='navLogo' src={logo}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <form className="d-flex navForm mx-lg-5 mt-2" role="search">
        <input className="form-control me-2" type="search"
         placeholder="ابحث" onChange={(e)=>{onSearch(e.target.value)}}
          aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navs
