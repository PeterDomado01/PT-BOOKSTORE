import React, { useState } from 'react'
import './Navbar.css'
 import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none', color:'#fff'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("customers")}}><Link style={{textDecoration:'none', color:'#fff'}} to='/customers'>Books</Link>{menu==='customers'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("staff")}}><Link style={{textDecoration:'none', color:'#fff'}} to='/staff_login'>Administrator</Link>{menu==='staff'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-logo'>
            <p>PT BookStore</p>
        </div>
        <div className="nav-login-cart">
            <Link to='/login'><button onClick={()=>{setMenu("staff")}}>Login</button></Link>
            <Link to='/signup'><button onClick={()=>{setMenu("staff")}}>Sign Up</button></Link>
            <Link to='cart'><BsCart4  onClick={()=>{setMenu("customers")}} className='ico'/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
