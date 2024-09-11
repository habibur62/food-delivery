import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { assets } from '../assets/assets';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <header>
        <div className='logo'><img src={assets.logo} alt="" /></div>
    <nav>
        <NavLink className='nav-link'  to="/">Home</NavLink>
        <NavLink className='nav-link'   to="/food">Food</NavLink>
        <NavLink className='nav-link'  to="/contact">Contact</NavLink>
    </nav>
    <div className="nav-card-icon"><FontAwesomeIcon className='Basket-count' icon={faBasketShopping} />
    <p className='card-item-count'>2</p>
  	</div>
    </header>

  )
}
