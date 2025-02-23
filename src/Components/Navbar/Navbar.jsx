import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu , setMenu] = useState("Shop")
    const {gettotalcartitems}= useContext(ShopContext)
  return (
    <div className='Navbar'>
        <div className='navbar_logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav_section'>
            <NavLink to="/" style={{ textDecoration:"none" ,color:"black"}}><li onClick={()=>{setMenu("Shop")}}>Shop {menu=="Shop"?<hr/>:<></>}</li></NavLink>
            <NavLink to="/men" style={{ textDecoration:"none",color:"black"}}><li onClick={()=>{setMenu("Mens")}}>Mens {menu=="Mens"?<hr/>:<></>}</li></NavLink>
            <NavLink to="/women" style={{ textDecoration:"none",color:"black"}}><li onClick={()=>{setMenu("Womens")}}>Womens {menu=="Womens"?<hr/>:<></>}</li></NavLink>
            <NavLink to ="/kid" style={{ textDecoration:"none",color:"black"}}><li onClick={()=>{setMenu("Kids")}}>Kids {menu=="Kids"?<hr/>:<></>}</li></NavLink>
       
        </ul>
        <div className='navbar_card'>
            <NavLink to="/login" ><button className='navbar_login_btn'>Login</button></NavLink>
            <NavLink to="/cart"><img src={card} alt="" /></NavLink>
            <div className="nav_card_count">{gettotalcartitems()}</div>
        </div>
    </div>
  )
}

export default Navbar