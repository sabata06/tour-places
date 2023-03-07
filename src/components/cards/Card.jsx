import React from 'react'

const Card = (props) => {
  return (

    <div className='cards'>
        <div className='title'>
        <h2>{props.data.title} </h2>
        </div>
        <img src={props.data.image} alt="name" />
        <div className='card-over'>
        <p>
            {props.data.desc}
        </p>
        </div>
        
    </div>
  )
}

export default Card