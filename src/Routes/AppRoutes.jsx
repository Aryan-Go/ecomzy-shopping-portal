import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home.jsx"
import Cart from "../Pages/Cart.jsx"

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
  )
}

export default AppRoutes