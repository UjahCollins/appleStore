import React from 'react'
import { useState } from 'react'
import img1 from "./Images/1.jpg"
import img2 from "./Images/2.jpg"
import img3 from "./Images/3.jpg"
import img4 from "./Images/4.jpg"
import img5 from "./Images/5.jpg"

const Usclass = () => {
  const [state, setState] = useState(0)
  const data= [
    "I love Code",
    "The boy is good ",
   " the girl is bad"
  ]
  const addNum =() =>{
    setState (state +1)
  }

  const minusNum =()=> {
        if(state <= 0){
          setState(0)
        }
        else{
          setState(state -1)
        }
  }
  const [image, setImage] = useState([
    img1, img2, img3, img4, img5
  ])
  return (
    <div>
      <button onClick={addNum}>+</button>
      <div>
      <img style={{width:"90%", height:"450px"}} src={image[state % data.length] }alt="theLogo" />
      <h2>{data[state % data.length]}</h2>
      </div>
      <button onClick={minusNum}>-</button>
    </div>
  )
}

export default Usclass
