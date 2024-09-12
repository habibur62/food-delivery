import React from 'react'
import './PlaceOrder.css'

export default function PlaceOrder() {
  return (
    <form className='place-order'>
        <div className="place-order-left">
            <h2>Delivery Information</h2>
            <div className="multi-fields">
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
            </div>
            <input type="email" placeholder='Email address'  />
            <input type="text" placeholder='Street'  />
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
            <input type="number" placeholder='Phone' />


        </div>
        <div className="place-order-right">
            <h3>Cart Totals</h3>
        </div>
    </form>
  )
}
