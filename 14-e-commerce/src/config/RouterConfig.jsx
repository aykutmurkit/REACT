import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
import Auth from '../pages/Auth'
 
function RouterConfig() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
        <Route path='login' element={<Auth/>}/>
    </Routes>
  )
}

export default RouterConfig