import React, { useState } from 'react'
import { menu_list } from '../assets/assets'
import './ExploreMenu.css'

export default function ExploreMenu({category, setCategory}) {


  return (
    <div className='explore-menu'>
        <h2>Explore Our Menu</h2>
        <p className="explore-menu-text">illo sequi. Odio odit perspiciatis enim maxime, architecto delectus! Iusto quas praesentium rerum saepe quia vitae, neque tenetur reiciendis, 
            </p>
        <div className="explore-menu-list">
            {
                menu_list.map((item, index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=> prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}
