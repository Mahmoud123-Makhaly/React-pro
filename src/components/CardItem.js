import React from 'react'
import { Link } from 'react-router-dom'
import man from '../images/man.jpeg'

const CardItem = ({item}) => {
  return (

 <>
    <div className='col-md-3'>
   <Link to={`movie/${item.id}`}> 
   <div className="card mb-3" >
   <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..."/>
 <div className='card-overlay'>
 <div className='card-overlay-desc'>
 <p>اسم الفيلم:{item.title}</p>  
   <p> تاريخ الاصدار:{item.release_date}</p> 
      <p> عدد المقيمين:{item.vote_count}</p>
      <p>  التقييم:{item.vote_average}</p>
 </div>
 </div>
 </div>
 </Link>

    </div>
 </>
    

  )
}

export default CardItem
