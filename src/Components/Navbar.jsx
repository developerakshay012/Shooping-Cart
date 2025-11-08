import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import ShpImg from '../assets/logo.png'
import { useSelector } from 'react-redux';



const Navbar = () => {
  const {cart} = useSelector((state) => state);


  return (
    // Changed background to a deep, professional blue (bg-blue-900)
    <div className='bg-blue-900 shadow-xl sticky top-0 z-50'> 

      {/* Main navigation container */}
      <nav className='flex flex-row justify-between items-center h-20 max-w-7xl mx-auto px-6'> 
        
        {/* Logo Link */}
        <NavLink to='/'>
          <div className='flex items-center hover:scale-105 transition duration-300' > 
            {/* Logo image size remains h-12 */}
            <img src= {ShpImg} className='h-12' alt="Shop Logo"/> 
          </div>
        </NavLink>

        {/* Navigation Links and Cart Icon */}
        <div className='flex items-center font-semibold text-white space-x-8'> 
          
          {/* Home Link */}
          <NavLink to='/'>
            {/* Accent color changed to a light, vibrant orange (text-orange-300) */}
            <p className='text-lg transition-colors duration-200 hover:text-orange-300 hover:underline underline-offset-4'>
              Home
            </p> 
          </NavLink>

          {/* Cart Link with Badge */}
          <NavLink to='/cart'>
            <div className='relative'>
              {/* Cart Icon with new hover color */}
              <IoCart className='text-2xl transition-colors duration-200 hover:text-orange-300' /> 
              {
                // FUNCTIONALITY UNCHANGED: Display cart length if > 0
                cart.length > 0 &&
                  <span 
                    // Badge color is now a contrasting bright red (bg-red-600)
                    className='absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full font-bold'
                  >
                    {cart.length}
                  </span>
              }
            </div>
          </NavLink>
            
        </div>
      </nav> 	

    </div>
  )
}

export default Navbar;