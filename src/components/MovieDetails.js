import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import man from "../images/man.jpeg"
const MovieDetails = () => {
  const param = useParams();
  const [movie , setMovie] = useState([]);
  const getDetails = async()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
  setMovie(res.data)
  }
  useEffect(()=>{getDetails()} , [])
  return (
    <div className='card-details py-5'>
      <div className='card-details-top py-3'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        <div className='card-details-top-desc'>
        <h5 className='mb-4'>اسم الفيلم:{movie.title}</h5>
        <h5 className='mb-4'>تاريخ الفيلم:{movie.release_date}</h5>
        <h5 className='mb-4'>عدد المقيمين:{movie.vote_count}</h5>
          <h5 className='mb-4'>التقييم:{movie.vote_average}</h5>
        </div>
      </div>
      <div className='story py-4'>
        <h3>القصة:</h3>
        <h6>{movie.overview}</h6>
      </div>
      <div className='details-btn my-3s d-flex justify-content-center'>
      <Link to="/">
      <button className='btn mx-2 btn-details'>عودة للرئيسية</button>
      </Link>
 <a href={movie.homepage}  className='btn mx-2 btn-details'> مشاهدة الفيلم </a>
      
    
      </div>
    </div>
  )
}

export default MovieDetails
