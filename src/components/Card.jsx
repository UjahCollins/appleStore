import React from 'react'
import card1 from "./Images/card1.jpg"
import "./Card.css"

const Card = (props) => {
  return (
    <div className='mainCard'>
        
        
        <div className='txt'>
               <h1>{props.mtxt}</h1>
              <h4>{props.ntxt}</h4>
              <h5>Learn more > <span>Buy > </span></h5>
        </div>
        <div className='Imag'>
          <img src={props.crad} alt="" />
        </div>
    </div>
  )
}

export default Card
