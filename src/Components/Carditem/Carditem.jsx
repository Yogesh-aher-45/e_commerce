import React, { useContext } from 'react';
import './Carditem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const Carditem = () => {
  const { all_product, cartItems, removefromcart } = useContext(ShopContext); // ✅ Fixed cartItems typo

  return (
    <div className="carditems">
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) { 
          return (
            <div key={product.id}> 
              <div className="cartitem-format cartitem-format-main">
                <img src={product.image} className="carticon-producticon" alt={product.name} />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitem-quantity">{cartItems[product.id]}</button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img 
                  
                  src={remove_icon} 
                  onClick={() => removefromcart(product.id)} 
                  className="cart-remove-icon"
                  alt="Remove item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      .
    </div>
  );
};

export default Carditem;
