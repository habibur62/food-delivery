import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './Pages/Home'
import Food from './Pages/Food'
import Contact from './Pages/contact'
import Error from './Pages/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './Pages/Cart'
import LoginPopup from './components/LogInPopup/LoginPopup'
import PlaceOrder from './Pages/PlaceOrder'
function App() {

  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin} />: <></>}
      <BrowserRouter>
        <Navbar setShowLogin={setShowLogin}/>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/food' element={<Food />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/cart' element={<Cart />} ></Route>
              <Route path='/order' element={<PlaceOrder />} ></Route>


          </Routes>
          <Footer />

      </BrowserRouter>
    </>
  );
}

export default App
