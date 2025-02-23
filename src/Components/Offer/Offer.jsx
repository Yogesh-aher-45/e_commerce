import React from 'react'
import './Offer.css'
import exclusive_img from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className="offer">
        <div className="offer-left">
           <h1>Exclusive</h1>
           <h1>Offer for You</h1>
           <p>ONLY ON BEST SELLERS PRODUCT</p>        
           <button>Check Now</button>
        </div>
        <div className="offer-right">
               <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offer