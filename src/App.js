import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'
import Navs from './components/Navs'
import Paginate from './components/Paginate'

const App = () => {
  const [data , setData] = useState([])
  const [pageCount , setPageCount] = useState(0)
  const getData =async ()=>{
const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
setData(res.data.results)  
console.log(res.data.results)
setPageCount(res.data.total_pages)
}
useEffect(()=>{getData()} , [])
//pagination
const getPage =async (page)=>{
const res=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
setData(res.data.results)
setPageCount(res.data.total_pages)
}
//search
const searchData = async(word)=>{
if(word===""){
  getData()
}
else{
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&query=${word}`)
  setData(res.data.results)
  setPageCount(res.data.total_pages)
}
}
  return (
    <div>
<Navs searchData={searchData}/>
<div className='container'>
<Routes>
<Route path='/' element={<><MovieList data={data} /><Paginate getPage={getPage} pageCount ={pageCount}/></>}/>
<Route path='/movie/:id' element={<MovieDetails/>}/>
</Routes>
</div>


    </div>
  )
}

export default App
