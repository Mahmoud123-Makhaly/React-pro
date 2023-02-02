import React from 'react'
import CardItem from './CardItem'

const MovieList = ({data}) => {
  return (
  
<>
<div className='movielist pt-5'>
<div className='row'>
{
    data.length?(
        data.map((item)=>{
return(<CardItem key={item.id} item={item}/>)
        })
    ):(null)
}
     
      </div>
</div>

</>
  )
}

export default MovieList
