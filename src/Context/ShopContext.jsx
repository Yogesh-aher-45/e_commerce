import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product'
import Carditem from '../Components/Carditem/Carditem';

export const ShopContext = createContext(null)
const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
}
const ShopContextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(getDefaultCart())




  const addtocart = (itemId) => {
    SetCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, 
    }));
  };

  
  const removefromcart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]:prev[itemId] - 1 }))

  }
  const gettotalcartitems =()=>{
    let totalitem = 0;
    for(const item in cartItems){
       if(cartItems[item]>0){
        totalitem+=cartItems[item]
       }

    }
    return totalitem
  }

  const contextValue = {gettotalcartitems, all_product, cartItems, addtocart, removefromcart }
  return (
    <>
      <ShopContext.Provider value={contextValue} >
        {props.children}
      </ShopContext.Provider>
    </>
  )
}
export default ShopContextProvider