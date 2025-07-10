import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
      <div className="flex flex-row justify-around items-center bg-gray-900 p-[0.5rem]">
          <NavLink to="/"><img className="w-[10rem]" src="/public/ecomzy_logo.png" /></NavLink>
          <div className="flex flex-row w-[10rem] justify-around items-center">
              <NavLink to="/" className="text-white">Home</NavLink>
              <NavLink to="/cart"><img className="w-[1.5rem]" src="/public/cart2.png" /></NavLink>
          </div>
    </div>
  )
}

export default Navbar