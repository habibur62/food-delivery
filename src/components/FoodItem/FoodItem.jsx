import React, { useContext } from 'react'
import './FoodItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { StoreContext } from '../../context/StoreContext'

export default function FoodItem({id, name,price, category, image}) {

  const {cartItems, addToCard} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image'/>
        </div>
        <div className="food-item-info">
            <p className='item-name'>{name}</p>
            <p className='item-category'>{category}</p>
            <p className='price'>${price}</p>
            
            <button onClick={()=> addToCard(id)} className='add-card-btn'><FontAwesomeIcon icon={faCartShopping} /></button>

        </div>
    </div>
  )
}
