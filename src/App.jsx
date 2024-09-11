import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './Pages/Home'
import Food from './Pages/Food'
import Contact from './Pages/contact'
import Error from './Pages/Error'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/food' element={<Food />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='*' element={<Error />}></Route>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
