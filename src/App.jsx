import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './Pages/Home'
import Food from './Pages/Food'
import Contact from './Pages/contact'

function App() {


  return (
    <>
      <BrowserRouter>
      
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/food' element={<Food />}></Route>
              <Route path='/contact' element={<Contact />}></Route>


          </Routes>
      
      
      
      </BrowserRouter>

    </>
  );
}

export default App
