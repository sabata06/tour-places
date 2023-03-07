import React from 'react'
import Card from './Card'
import "./Main.css"
import {data} from "../../helper/data"
const Main = () => {
  return (
    <div className='card-container'>
        {data.map((item, index) => (
            <Card data ={item} key={index} />
        )) }
        
    </div>
  )
}

export default Main