import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Cart  from './Cart'
import Home from './Home'
import "./App.css"

import User from './User'


const App = () => {
  return (
    <div>
{/* <Home/>
    <Routes>
    <Route path="/" element={<Home />}/>
     
      <Route path="/Cart" element={<Cart />}/>
     
  </Routes>*/}
  <User/>
         </div> 
  )
}

export default App