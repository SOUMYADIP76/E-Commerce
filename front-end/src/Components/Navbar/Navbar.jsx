import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/shopping-cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  //  const [menu,setMenu]= useState("shop")
   const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
     
      <div className="nav-logo">
        <img src={logo} alt="" />
               <p>GarmentGlory</p>
      </div>
      <ul className="nav-menu">
        <li ><Link style={{textDecoration:'none'}} to='/'>Shop</Link></li>
        <li><Link  style={{textDecoration:'none'}} to='./Mens'>Mens</Link></li>
        <li><Link  style={{textDecoration:'none'}} to='./Womens'>Womens</Link></li>
        <li> <Link  style={{textDecoration:'none'}} to='./Kids'>Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to='./login'><button>Login</button></Link>
        <Link to='./cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
