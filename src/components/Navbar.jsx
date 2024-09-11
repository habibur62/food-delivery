import React,{useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import { assets } from '../assets/assets';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { StoreContext } from '../context/StoreContext';

export default function Navbar({setShowLogin}) {
  
  const {itemCount} = useContext(StoreContext);

  return (
    <header>
        <div className='logo'><img src={assets.logo} alt="" /></div>
    <nav>
        <NavLink className='nav-link'  to="/">Home</NavLink>
        <NavLink className='nav-link'   to="/food">Food</NavLink>
        <NavLink className='nav-link'  to="/contact">Contact</NavLink>
    </nav>
    <NavLink to="/cart"> 
    <div className="nav-card-icon">
       <FontAwesomeIcon className='Basket-count' icon={faBasketShopping} />
       <p className='card-item-count'>{itemCount}</p>
  	</div>
    </NavLink>
    
    <button onClick={()=>{ setShowLogin(true) }}>Sign In</button>

    </header>

  )
}
