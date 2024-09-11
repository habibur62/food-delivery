import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

export default function FoodDisplay({category}) {
    
    const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display'>
        <h2>To Dishes Near You</h2>
        <div className="food-display-list">
            {
                food_list.map((item, index)=>{
                    if(category === "All" || category === item.category){
                        return(<FoodItem key={index} id={item._id}name={item.name} category={item.category} price={item.price} image={item.image}/>)

                    }
                })
            }
        </div>
    </div>
  )
}
