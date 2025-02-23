import React from 'react'
import './Heros.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img  from '../Assets/hero_image.png'
const Heros = () => {
  return (
    <div className='heros'>
         <div className="heros_left">
          <h2>NEW ARRIVAL ONLY </h2>
          <div>
            <div className="heros-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone </p>
          </div>
          <div className="heros-letest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
         </div>
         <div className="heros_right">
             <img src={hero_img} alt="" />
         </div>
    </div>
  )
}

export default Heros