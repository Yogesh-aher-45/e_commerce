import React, { useContext } from 'react'
import '../Pages/Css/Shopcatagory.css'
import {ShopContext} from '../Context/ShopContext'
import drop_down from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'


const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img src={props.banner} alt=""  className='shopcategory-banner'/>
      <div className="shopcatagory-indexsort">
        <p>
          <span>Showing 1-12 </span>out of 36 Product
        </p>
        <div className="shopcatagory-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopcatagory-products">
           {all_product.map((item , i)=>{
              if(props.category===item.category){
                return <Item   key={i} id={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null
              }
           })}
      </div> 
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>

  )
}

export default Shopcategory