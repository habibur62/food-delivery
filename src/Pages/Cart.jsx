import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router';
export default function Cart() {
    
  const {food_list,cardItems, removeFromCart} = useContext(StoreContext);
  let totalAmount = 0;
  const navigate = useNavigate();

  return (
       <div className='cart'>
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            { 
            
                  food_list.map((item, index)=>{
                    if(cardItems[item._id]){
                      { totalAmount += item.price * cardItems[item._id]}

                      return(
                        <>
                        <div key={index} className="cart-items-title">
                        <img src={item.image} className='itemImage'/>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{cardItems[item._id]}</p>
                        <p>{item.price * cardItems[item._id]}</p>
                        <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                        </div>
                        <hr />
                        </>
                      )
                    }

                  })
            }
              <p className='total-amount'>Total Amout = {totalAmount}</p>
      
        <button onClick={()=>navigate('/order')}  className='checkoutBtn'>PROCEED TO CHECKOUT</button>
    </div>
  )
}
