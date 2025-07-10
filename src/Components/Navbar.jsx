import React from 'react'
import { NavLink } from "react-router-dom"
import {useSelector} from "react-redux"

const Navbar = () => {
  const count = useSelector((state) => state.count.value)
  return (
      <div className="flex flex-row justify-around items-center bg-gray-900 p-[0.5rem]">
          <NavLink to="/"><img className="w-[10rem]" src="/public/ecomzy_logo.png" /></NavLink>
          <div className="flex flex-row w-[10rem] justify-around items-center">
              <NavLink to="/" className="text-white">Home</NavLink>
              <NavLink to="/cart">
                <div>
                  <p className="text-white bg-green-500 rounded-4xl relative text-center text-[0.5rem] top-1 left-5 text-bold">{count }</p>
                  <img className="w-[1.5rem]" src="/public/cart2.png" />
                </div>
              </NavLink>
          </div>
    </div>
  )
}

export default Navbar