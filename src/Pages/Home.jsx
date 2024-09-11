import React,{useState} from 'react'
import './Home.css'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';

export default function Home() {

  const [category, setCategory] = useState("All");

  return (
    <>
  <section className='header'>
        <div className="header-content">
          <h2>Order your favorite food here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magni enim voluptatem esse sun4
            t molestias? Accusamus quam cupiditate sunt, placeat error nulla unde, fuga voluptas asperiores ex sed explicabo? Facere rem iste fugiat numquam, inventore tempora repellat nisi sapiente soluta voluptatem officia, qua
            s enim possimus corporis blanditiis veniam quis mollitia.</p>
          <button>View Menu</button>
        </div>
    </section>
    <ExploreMenu category={category} setCategory={setCategory} /> 
    <FoodDisplay category={category} />
    </>
  
  )
}
